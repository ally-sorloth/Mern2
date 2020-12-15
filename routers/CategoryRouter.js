const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/CategoryController');

router.post('/addCategory', CategoryController.addCotegory);

router.get('/getCategory/:id', CategoryController.getCategory);

router.post('/updateCategory', CategoryController.updateCategory);

router.get('/deleteCategory/:id', CategoryController.deleteCategory);

router.get('/', CategoryController.getCategories);

module.exports = router;

