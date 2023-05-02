const express = require('express');
//const mongoose=require('mongoose');
require('./config');
const patient = require('./Patientapi');
const hospital = require('./Hospitalapi');
const donar = require('./Donarapi');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
app.post('/SignUp1', async (req, res) => {
  let data = new patient(req.body);
  let result = await data.save();

  result = result.toObject();
  delete result.password;
  console.log(result);
  res.send(result);
});

app.post('/HospitalSignUp', async (req, res) => {
  let data = new hospital(req.body);
  let result = await data.save();

  result = result.toObject();
  delete result.password;
  console.log(result);
  res.send(result);
});

app.post('/Donar', async (req, res) => {
  let data = new donar(req.body);
  let result = await data.save();

  result = result.toObject();
  delete result.password;
  console.log(result);
  res.send(result);
});

app.post('/Signin1', async (req, res) => {
  console.log(req.body);
  if (req.body.email && req.body.password) {
    let user = await patient.findOne(req.body);
    if (user) {
      res.send(user);
    } else {
      res.send({ result: 'No record found' });
    }
  } else {
    res.send({ result: 'No user found' });
  }
});
app.get('/list', async (req, res) => {
  let data = await hospital.find();
  res.send(data);
});

app.get('/search/:key', async (req, res) => {
  console.log(req.params.key);
  let data = await hospital.find({
    $or: [
      { Name: { $regex: req.params.key } },
      { ContactNumber: { $regex: req.params.key } },
      { website: { $regex: req.params.key } },
      { city: { $regex: req.params.key } },
      { address: { $regex: req.params.key } },
    ],
  });
  res.send(data);
});

app.post('/DonarLogin', async (req, res) => {
  console.log(req.body);
  if (req.body.email && req.body.password) {
    let user = await donar.findOne(req.body);
    if (user) {
      res.send(user);
    } else {
      res.send({ result: 'No record found' });
    }
  } else {
    res.send({ result: 'No user found' });
  }
});

app.post('/HospitalLogin', async (req, res) => {
  console.log(req.body);
  if (req.body.email && req.body.password) {
    let user = await hospital.findOne(req.body);
    if (user) {
      res.send(user);
    } else {
      res.send({ result: 'No record found' });
    }
  } else {
    res.send({ result: 'No user found' });
  }
});

app.get('/list2', async (req, res) => {
  let data = await donar.find();
  res.send(data);
});

app.listen(4000);
