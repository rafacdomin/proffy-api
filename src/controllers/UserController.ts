import db from '../database/connection';
import bcrypt from 'bcrypt';
import { Request, Response } from 'express';

interface MyRequest extends Request {
  id?: number;
}

export default class UserController {
  async store(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const userExists = await db('users').where('email', email);

    if (userExists.length !== 0) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const password_hash = await bcrypt.hash(password, 8);

    const trx = await db.transaction();

    try {
      await trx('users').insert({
        name,
        email,
        password_hash,
      });

      await trx.commit();

      return res.status(201).send();
    } catch (err) {
      console.log(err);

      await trx.rollback();

      return res
        .status(400)
        .json({ error: 'Unexpected error while creating new user' });
    }
  }

  async update(req: MyRequest, res: Response) {
    const { name, email, bio, whatsapp, avatar } = req.body;
    const id = req.id;

    const userExists = await db('users').where('id', id);

    if (userExists.length === 0) {
      return res.status(400).json({ error: "User doesn't exists" });
    }

    const trx = await db.transaction();

    try {
      await trx('users').where('id', id).update({
        name,
        email,
        bio,
        whatsapp,
        avatar,
      });

      await trx.commit();

      return res.status(200).send();
    } catch (err) {
      console.log(err);

      await trx.rollback();

      return res
        .status(400)
        .json({ error: 'Unexpected error while updating user' });
    }
  }

  async show(req: MyRequest, res: Response) {
    const id = req.id;

    let userExists = await db('users')
      .where('users.id', id)
      .select(['users.*']);

    if (userExists.length === 0) {
      return res.status(400).json({ error: "User doesn't exists" });
    }

    const haveClasses = await db('classes').where('owner_id', id);

    let user = userExists[0];
    if (haveClasses.length > 0) {
      userExists = await db('users')
        .where('users.id', id)
        .join('classes', 'classes.owner_id', 'users.id');

      user = userExists[0];
      user.schedule = await db('class_schedule').where('owner_id', id);
    }

    return res.json(user);
  }
}
