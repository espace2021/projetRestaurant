const db = require("../models");
 const Article = db.article;
 const Categorie=db.categorie;
 const Societe=db.societe


const getArticles = async (req, res) => { 
    try {
        const art = await Article.findAll()
         
        res.status(200).json(art);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
const getartByCat = async (req, res) => { 
    try {
        
      /*  const art=await Article.findAll({
            where: {
                CodeCat:req.params.codeCateg
                        }
          });*/
   
          const art = await Categorie.findAll({
            where: {
                CodeCat:req.params.codeCateg
              },
            include: Article
          })
       
        res.status(200).json(art[0].articles);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
const getArticlesByCodeSocieteAndCodeCateg = async (req, res) => { 
    let codeSoc = req.params.codeSoc;
  let codeCateg = req.params.codeCateg

    try {
        
      //  const artcat = await db.sequelize.query(`select * from article where CodeCat in (select CodeCat from categorie where CodeCat=${codeCateg}) and sel=(select sel from societe where code="${codeSoc}")`);
       
      const artcat = await Societe.findAll({
        where: {
            code:req.params.codeSoc
          },
          include: [
            {
              model: Categorie,
              include:Article,
              where: {
                CodeCat:codeCateg
              },
              required: false
            }]
      })

        res.status(200).json(artcat[0].categories[0].articles);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}





const getArticleByID = async (req, res) => { 
    try {
     
   const art = await Article.findByPk(req.params.id);
       
        res.status(200).json(art);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

 const createArticle = async (req, res) => {
   

    const newArticle = new Article(req.body)

    try {
        await newArticle.save();
        const art = await Article.findByPk(newArticle.CodeArt);
        
        res.status(200).json(art );
    } catch (error) {
        console.log(error)
       res.status(409).json({ message: error.message });
      
    }
}

 const updateArticle= async (req, res) => {
    const { id } = req.params;
       
    try {
   const art1= await Article.update(req.body,{
    where:{CodeArt:id}
   });
   const art = await Article.findByPk(art1.CodeArt);
   
   res.status(200).json(art);
} catch (error) {
    console.log(error)
   res.status(409).json({ message: error.message });
  
}
}

 const deleteArticle = async (req, res) => {
    const { id } = req.params;

    const art = await getarticle(id);
    await art.destroy();

   

    res.json({ message:  `${art.CodeArt} est supprimé` });
}
async function  getarticle(id){
    const article = await Article.findByPk(id);
    if (!article) throw 'article not found';
    return article;
}
module.exports = {
    getArticles,
    getartByCat,
    getArticleByID,
    createArticle,
    updateArticle,
    deleteArticle,
    getArticlesByCodeSocieteAndCodeCateg
}