const express = require('express');
const authController = require('../controller/authController');
const auth = require('../middlewares/auth');
const blogController = require('../controller/blogController');
const router = express.Router();

// user

// register
router.post('/register', authController.register);

// login
router.post('/login', authController.login);

// logout
router.post('/logout', auth, authController.logout);

// refresh
router.get('/refresh', authController.refresh)

// blog

// CRUD
// create
router.post('/blog', auth, blogController.create);

// read all blogs
router.get('blog/all', auth, blogController.getAll);

// read blog by id
router.get('/blog/:id', auth, blogController.getById);

// update
router.put('/blog', auth, blogController.update);

// delete
router.delete('/blog/:id', auth, blogController.delete);

// comment

// create comment
// read comments by blog id


module.exports = router;