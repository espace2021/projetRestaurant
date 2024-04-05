const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lca', {
    Num: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    NumBL: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    DateBL: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    CodeART: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    DesART: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    QteART: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    PUART: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    Remise: {
      type: DataTypes.DOUBLE(12,3),
      allowNull: true
    },
    TauxTVA: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    TauxTVAB: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    Unite: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    TypeART: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    CodeREP: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TTFodec: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    TauxMAJO: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    Conf: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dateart: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    famille: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    pttc: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    libellear: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    EQUIVALENCE: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    desequi: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    MtTotal: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    gener: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    numrp: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    numbc: {
      type: DataTypes.STRING(2),
      allowNull: true,
      defaultValue: "01"
    },
    codedest: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    deftick: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    destimp: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    destdefalc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    destimpression: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    numesd: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    TypTick: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    couleur: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    taille: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    nbun: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 1
    },
    clot: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 1
    },
    ppc_imp: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "0"
    },
    heure_debut: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    duree: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    code_preparation: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    code_suivie: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    code_cuisinier: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    lib_cuisinier: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    cempcorr: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    lempcorr: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    emporter: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'lca',
    timestamps: false
  });
};
