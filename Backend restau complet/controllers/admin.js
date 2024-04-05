const db=require('../models')
Employe=db.employe
const aes256 = require("aes256");

const getAdminLogin = async (req, res) => { 
    const login = req.body.login
    const passwordCrypted = req.body.passwordCrypted
   
     await Employe.findAll(
            {
                where: {
                    Login: login 
                }
              }).then((reponse)=>{ 
                const myresult = reponse[0].dataValues
               console.log(myresult);
              const password = myresult.MotPasse;
              const passwordDecrypted = aes256.decrypt(password, passwordCrypted);
              console.log(passwordDecrypted)
                
                if (passwordDecrypted === password) {
                  const admin = myresult
                  if (admin.Fonction !== "ADMINISTRATEUR") {
                    res.status(200).json({ errorLogin: 2 });
                    return
                  } 
                  else {
                    res.status(200).send({ errorLogin: 0, admin: aes256.encrypt(password, JSON.stringify({ ...admin, MotPasse: "" })) });
                    return
                  }
                } else {
                    res.status(200).json({ errorLogin: 1 });
                  }
                } ).catch ((error)=> {
                    res.status(404).json({ message: error.message })
                    })
     

}

module.exports = {
    getAdminLogin
}