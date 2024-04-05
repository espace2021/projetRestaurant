var DataTypes = require("sequelize").DataTypes;
var _article = require("./article");
var _articlestest = require("./articlestest");
var _categorie = require("./categorie");
var _cmd = require("./cmd");
var _eca = require("./eca");
var _employe = require("./employe");
var _lart = require("./lart");
var _lca = require("./lca");
var _prodcmd = require("./prodcmd");
var _societe = require("./societe");

function initModels(sequelize) {
  var article = _article(sequelize, DataTypes);
  var articlestest = _articlestest(sequelize, DataTypes);
  var categorie = _categorie(sequelize, DataTypes);
  var cmd = _cmd(sequelize, DataTypes);
  var eca = _eca(sequelize, DataTypes);
  var employe = _employe(sequelize, DataTypes);
  var lart = _lart(sequelize, DataTypes);
  var lca = _lca(sequelize, DataTypes);
  var prodcmd = _prodcmd(sequelize, DataTypes);
  var societe = _societe(sequelize, DataTypes);

  cmd.hasMany(prodcmd,{
    foreignKey: 'CodeCmd',
    
  }); 
  prodcmd.belongsTo(categorie, { foreignKey: 'CodeCmd',sourceKey: 'CodeCmd'});
  
  categorie.hasMany(article,{
    foreignKey: 'CodeCat',
    
  }); 
  article.belongsTo(cmd, { foreignKey: 'CodeCat',sourceKey: 'CodeCat'}); 

  societe.hasMany(categorie,{
    foreignKey: 'sel',
    sourceKey: 'sel',
  }); 
  categorie.belongsTo(societe, { foreignKey: 'sel',targetKey: 'sel'}); 

  return {
    article,
    articlestest,
    categorie,
    cmd,
    eca,
    employe,
    lart,
    lca,
    prodcmd,
    societe,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
