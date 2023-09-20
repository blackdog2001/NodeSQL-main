
// const express = require('express');
// const router = express.Router();
// const { getUser,loginUser, addUser, editUser, delUser } = require('../controller/userController')

// module.exports = (db) => {
//     router.get('/users/get', (req, res) => {
//         getUser(req, res, db);
//     });
//     router.post('/users/login', (req, res) => {
//         loginUser(req, res, db);
//     });
//     router.post('/register', (req, res) => {
//         addUser(req, res, db);
//     });
//     router.put('/users/edit/:id', (req, res) => {
//         editUser(req, res, db);
//     });
//     router.delete('/users/del/:id', (req, res) => {
//         delUser(req, res, db);
//     });
//     return router;
// };

const express = require('express');
const router = express.Router();
const {
  getUser,
  loginUser,
  addUser,
  editUser,
  delUser,
} = require('../controller/userController');

module.exports = (db) => {
  router.get('/users/get', (req, res) => {
    getUser(req, res, db);
  });
  router.post('/users/login', (req, res) => {
    loginUser(req, res, db);
  });
  router.post('/register', (req, res) => {
    addUser(req, res, db);
  });
  router.put('/users/edit/:id', (req, res) => {
    editUser(req, res, db);
  });
  router.delete('/users/del/:id', (req, res) => {
    delUser(req, res, db);
  });

  const {
    getEquipment,
    addEquipment,
    editEquipment,
    deleteEquipment,
  } = require('../controller/equipmentController');

  router.get('/equipment/get', (req, res) => {
    getEquipment(req, res, db);
  });

  router.post('/equipment/add', (req, res) => {
    addEquipment(req, res, db);
  });

  router.put('/equipment/edit/:id', (req, res) => {
    editEquipment(req, res, db);
  });

  router.delete('/equipment/delete/:id', (req, res) => {
    deleteEquipment(req, res, db);
  });

  return router;
};



