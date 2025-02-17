const express= require('express');


const { createCommande,getCommandes,delCommandes,getcommandeBysoc,getcommandeByprod,MAJcommande} =require('../controllers/commande');


const router = express.Router();

router.get('/',getCommandes);
router.get('/:codeSoc',getcommandeBysoc)

router.post('/insertCommande',createCommande);

router.delete('/:id', delCommandes);

router.get('/products/:CodeCmd', getcommandeByprod);

router.post('/',MAJcommande);

module.exports = router;



