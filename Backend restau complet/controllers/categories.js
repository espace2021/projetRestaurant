const db = require("../models");
Categorie=db.categorie
Societe=db.societe

const getCategories = async (req, res) => { 
    try {
        const cat = await Categorie.findAll()
         
        res.status(200).json(cat);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const getCatByCatSociete = async (req, res) => { 
    let codeCateg = req.params.codeCateg;
    let codeSoc = req.params.codeSoc;
    try {
     
      //  const soc = await db.sequelize.query(`select * from categorie where CodeCat=${codeCateg} and sel=(select sel from societe where code="${codeSoc}")`);
     
      const soc = await Societe.findAll({
        where: {
            code:req.params.codeSoc
          },
          include: [
            {
              model: Categorie,
              where: {
                CodeCat:codeCateg
              },
              required: false
            }]
      })

             res.status(200).json(soc[0].categories);
         } catch (error) {
             res.status(404).json({ message: error.message });
         }
}

const getCatbySoc = async (req, res) => { 
   console.log(req.params.codeSoc)
    try {
     
    //    const cat = await db.sequelize.query(`select * from categorie where sel in (select sel from societe where Code="${codeSoc}")`);
       
    const cat = await Societe.findAll({
        where: {
            code:req.params.codeSoc
          },
        include: Categorie
      })
             res.status(200).json(cat[0].categories);
         } catch (error) {
             res.status(404).json({ message: error.message });
         }
}


module.exports = {
    getCategories,
    getCatByCatSociete,
    getCatbySoc
}
