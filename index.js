const express = require('express');
const app = express();

const mysql = require('mysql2');
const { Tags } = require('./models');  //! represent an object

const db = require('./models');

app.get('/select', (req, res) => {
  Tags.findAll().then((tags) => {
    res.send(tags);
  }).catch((err) => {
    console.log(err);
  })
  // User.findAll({ where: { firstName: "Omar" } }).then((users) => {
  //   res.send(users);
  // }).catch((err) => {
  //   console.log(err);
  // })
});

app.get('/insert', (req, res) => {
  Tags.create({
    name: 'done'
  }).catch((err) => {
    console.log(err);
  })
});

app.get('/delete', (req, res) => {
  Tags.destroy({ where: { id: 5 } });
});

db.sequelize.sync().then((req) => {
  app.listen(3000, () => {
    console.log(`server is working on https://localhost:3000`);
  });
});


