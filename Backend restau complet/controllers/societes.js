const db = require("../models");
const Societe = db.societe;


const getSocietes = async (req, res) => { 
    try {
        const art = await Societe.findAll()
         
        res.status(200).json(art);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const getSocietesByCode = async (req, res) => { 
    try {
        const soc = await Societe.findAll(
            {
                where: {
                    code: req.params.CodeSoc
                }
              });
              res.status(200).json(soc);
         } catch (error) {
             res.status(404).json({ message: error.message });
         }
}


module.exports = {
    getSocietes,
    getSocietesByCode
}