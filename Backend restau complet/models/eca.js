const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('eca', {
    NUMBL: {
      type: DataTypes.STRING(9),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    ADRCLI: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    CODECLI: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    CODEFACTURE: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CP: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    COM1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    COM2: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    COM3: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    DATEBL: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    dateliv: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    livrer: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "0"
    },
    MODEREG: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MREMISE: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    MTTC: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    MTVA: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    BASE1: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    BASE2: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    BASE3: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    BASE4: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    BASE5: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    TVA1: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    TVA2: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    TVA3: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    TVA4: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    TVA5: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    RSCLI: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TAUXREMISE: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    MHT: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    EXON: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    MFODEC: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    BFODEC: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    RETENUE: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    CEXPORT: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CODEREP: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    RSREP: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    CODETVA: {
      type: DataTypes.STRING(17),
      allowNull: true
    },
    MAJ1: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    MAJ2: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    MAJ3: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    MAJ4: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    MAJ5: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    TIMBRE: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    MAJO: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    TREMISE: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    FACTURE: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    CODEVAL: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CODESEL: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TVADUE: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    },
    CODERAP: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BONINTER: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    CODECHA: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    DESICHA: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    AGENT: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    FODECDUE: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    NUMBC: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    impticket: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    TGARANTIE: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    TRSOURCE: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    MGARANTIE: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    DATEDMAJ: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    DECISION: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    REFCOMM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TEMPDMAJ: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    NATcolis: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    POID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NGP: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Valeur: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TypeMVT: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    BASERetenue: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    heure: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    mtespece: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    mtcheque: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    utilDMAJ: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    DateCreation: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    TempCreation: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    UtilCreation: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    nomcaisse: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    rendu: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    recu: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nbarticles: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    mtautre: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    numcheque: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    banque: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    libelle: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Accompte: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    TypTick: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    numcloture: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    DatCloture: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    margevend: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    devise: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    codecaissier: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    rsoccaissier: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    clotpoint: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    nbreptfid: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    },
    totttc: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    CodeEmp: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    Tble: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    Duree: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    statut: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NumChambre: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    REG: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    NUMBON: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    MTBON: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    codeclibon: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    rsclibon: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    transf: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "0"
    },
    type_reg: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    heure_ouver_tab: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    heure_clot_tab: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    Personnel: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Adrpersonnel: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    remcredit: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    imp_erp: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    }
  }, {
    sequelize,
    tableName: 'eca',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "NUMBL" },
        ]
      },
    ]
  });
};
