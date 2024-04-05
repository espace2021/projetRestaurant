const express= require('express');

//import  upload from '../middleware/uploadProvider.js';
const { getArticles, getArticleByID,getartByCat, createArticle, updateArticle, deleteArticle,getArticlesByCodeSocieteAndCodeCateg } =require('../controllers/articles');


const router = express.Router();
router.get('/',getArticles);
router.get('/categorie/:codeCateg',getartByCat)
router.post('/', createArticle);
router.put('/:id', updateArticle);
router.delete('/:id', deleteArticle);
router.get('/:id', getArticleByID);
router.get('/societe/:codeSoc/categories/:codeCateg',getArticlesByCodeSocieteAndCodeCateg)

module.exports = router;
