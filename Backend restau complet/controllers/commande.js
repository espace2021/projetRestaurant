const db = require("../models");
 Commande = db.cmd;
 Prodcmd=db.prodcmd;


const getCommandes = async (req, res) => { 
   
  try {
          const cm = await Commande.findAll({
            include: Prodcmd
      })
      
        res.status(200).json(cm);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const getcommandeBysoc = async (req, res) => { 
   
  try {
    
          const cm = await Commande.findAll({
            where: {
              SocieteCode:req.params.codeSoc
                      }
        

      })
      
        res.status(200).json(cm);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const delCommandes = async (req, res) => { 
   
    const { id } = req.params;

    const cd = await getCommande(id);
    await cd.destroy();
 

    res.json({ message:  `${cd.CodeCmd} est supprimé` });
  }

async function  getCommande(id){
    const commande = await Commande.findByPk(id);
    if (!commande) throw 'commande not found';
    return commande;
}

const createCommande = async (req, res) => {

    let resultjson="";

    let commande = req.body.commande;

  
    const  SocieteCode=commande.societeCode
    const  DateCmd=commande.date
    const  TableNumber=commande.tableNumber
    const   Status=commande.status
    const   NomClient=commande.NomClient
    const   Depuis=commande.Depuis
    const   CodeEmp=commande.CodeEmp
    const  VerifiedByAdmin =""

    let  PrixTotalCmd  = parseFloat(commande.products.reduce((a, cmd) => a = a + cmd.total, 0)).toFixed(3);

     console.log("Total="  +  PrixTotalCmd);
    
    const newcommande = new Commande({SocieteCode,DateCmd,PrixTotalCmd,TableNumber,Status,NomClient,Depuis,CodeEmp,VerifiedByAdmin})

    try {
        await newcommande.save();
        resultjson+=JSON.stringify(newcommande);

       const cmd = await Commande.findOne({
                            order: [ [ 'CodeCmd', 'DESC' ]],
                            });

        const CodeCmd=cmd.CodeCmd;

        commande.products.map((product, index) => { 
            
            const CodeProd=product.product.CodeArt
            const LibProd=product.product.LibArt
            const DesProd=product.product.DesignImp
            const Qte=product.quantite
            const Prix=product.product.prix1
            const TauxTVA=product.product.tauxtva
            const newcmdprod=new Prodcmd({CodeCmd,CodeProd,LibProd,DesProd,Qte,Prix,TauxTVA})
            newcmdprod.save();
            resultjson+=JSON.stringify(newcmdprod)
           
          });
       
         res.status(200).json(resultjson);
        
          } catch (error) {
        console.log(error)
       res.status(409).json({ message: error.message });
      
    }
}
/*
const getcommandeByprod= async (req, res) => { 

try {

const cm = await Commande.findAll({
  where: {
    CodeCmd:req.params.CodeCmd
  },
  include: [
  {
    model: Prodcmd,
    where: {
      CodeCmd:req.params.CodeCmd
    },
    required: false
  }]
})

res.status(200).json(cm);
} catch (error) {
res.status(404).json({ message: error.message });
}
}
*/

const getcommandeByprod= async (req, res) => { 

  try {
  
  const cm = await Prodcmd.findAll({
    where: {
      CodeCmd:req.params.CodeCmd
    }
    
  })
  
  res.status(200).json(cm);
  } catch (error) {
  res.status(404).json({ message: error.message });
  }
  }

  const MAJcommande= async (req, res) => { 
    const newCmd = req.body.newCmd;
    const CodeEmp = req.body.CodeEmp
    
      await db.sequelize.query(`update cmd set Status=${newCmd.Status},VerifiedByAdmin=${CodeEmp} where CodeCmd=${newCmd.CodeCmd}`, (error, result) => {
        if (!error) {
          res.status(200).send(result);
          return
        }
        else {
          res.status(500).json({ error: "Server could not update data" });
          return
        }
      })
 
  }

module.exports = {
    createCommande,
    getCommandes,
    delCommandes,
    getcommandeBysoc,
    getcommandeByprod,
    MAJcommande
    
}