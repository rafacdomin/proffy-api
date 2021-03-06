<h1 align="center">
    <img alt="Proffy" src="https://github.com/rafacdomin/proffy/raw/master/.github/header.png" />
    <br>
</h1>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/rafacdomin/proffy.svg">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/rafacdomin/proffy.svg">
  
  <a href="https://github.com/rafacdomin/proffy/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/rafacdomin/proffy.svg">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/rafacdomin/proffy.svg">
</p>

<p align="center">
  <a href="#about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#license">License</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#author">Author</a>
</p>

<p align="center">
  <a href="https://insomnia.rest/run/?label=Proffy&uri=https%3A%2F%2Fgithub.com%2Frafacdomin%2Fproffy%2Fblob%2Fmaster%2Fapi%2FInsomnia_proffy.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

## About

NodeJS API REST developed on [RocketSeat NexLevelWeek](https://nextlevelweek.com/). This project is based on an application for connect students and teachers.

## Technologies

This project was developed with the following technologies:

- [NodeJS](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [ts-node-dev](https://github.com/whitecolor/ts-node-dev)
- [Express](https://expressjs.com/)
- [KnexJS](http://knexjs.org/)
- [PostgreSQL](https://www.npmjs.com/package/sqlite3)
- [Cors](https://www.npmjs.com/package/cors)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [JsonWebToken](https://www.npmjs.com/package/jsonwebtoken)

## How To Use

To clone and run this application, you'll need installed on your computer:
- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/)
- [Yarn v1](https://classic.yarnpkg.com/) 
- One instance of [PostgreSQL](https://www.postgresql.org/) to run the server

> Obs.: I recommend using `docker` to create and run the PostgreSQL instance.

To run the server:

```bash
# Clone the server repository
$ git clone https://github.com/rafacdomin/proffy-api

# Create the instance of postgreSQL using docker
$ docker run --name proffyPG -e POSTGRES_USER=docker \
              -e POSTGRES_DB=proffy -e POSTGRES_PASSWORD=docker \
              -p 5432:5432 -d postgres

# Go into the repository folder
$ cd proffy-api

```

Make a copy of .env.example to .env and set YOUR enviroment variables

```bash
# Install dependencies
$ yarn

# Run the app
$ yarn dev
```

## License

This project is under the MIT license. See the [LICENSE](https://github.com/rafacdomin/proffy/blob/master/LICENSE) for more information.

---

## Author

<img  border-radius="50px" src="https://avatars3.githubusercontent.com/u/40310160?s=460&u=d2babe9b7f1c365955699550074910a1957525c8&v=4" width="100px" alt="Author"/>

Made with :purple_heart: by Rafael Domingues :wave: [Get in touch!](https://www.linkedin.com/in/rafaelcodomingues/)

[![Linkedin Badge](https://img.shields.io/badge/-Rafael_Domingues-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/rafaelcodomingues/)](https://www.linkedin.com/in/rafaelcodomingues/)
[![Gmail Badge](https://img.shields.io/badge/-rafaelcodomingues@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:rafaelcodomingues@gmail.com)](mailto:rafaelcodomingues@gmail.com)
[![DEV.to Badge](https://img.shields.io/badge/DEV.to-rafacdomin-black)](https://dev.to/rafacdomin)
[![GitHub followers](https://img.shields.io/github/followers/rafacdomin?label=Follow&style=social)](https://github.com/rafacdomin/?tab=follow)
