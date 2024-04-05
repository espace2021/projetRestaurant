const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('societe', {
    code: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true
    },
    rsoc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    sel: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "0"
    },
    dat: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    e1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    e2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    e3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    e4: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    e5: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    e6: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    e7: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    e8: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRIXUNIT: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    REMGLOBAL: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRIXART: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CONTTREMISE: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    REMART: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    MONTTTC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SEUILCREDIT: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    MARGEPRIXVENTE: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    VTMAJO: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    },
    TMAJO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIMBREF: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    },
    SAISIEQTENEG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ACCTABREM: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    VALOBL: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CONFIGART: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    IMPREMART: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ACCTVABE: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PFACTT: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    PBL: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    PBE: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    SFACTT: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    SBL: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    SBE: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    AFACTT: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ABL: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ABE: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    RSOURCE: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    },
    FODEC: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    },
    BRG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    VRG: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    },
    accee: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    marge: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PV: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Clipass: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    chemin: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    adr: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    mf: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    acceedesigna: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PBS: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    SBS: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    affliste: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    retenueaut: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    gfamille: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    caisseprix: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    caisserem: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    caissepwd: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    stockalert: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TARFR: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    caissettc: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    M1: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    M2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    M3: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ttcbl: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    prixz: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    securite: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    puttc: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    dateaccee: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    DecimalQ: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    codebar: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    entticket1: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    entticket2: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    editiontc: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    decimalp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nomenclature: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    gestionbcf: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    gestiontc: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    gestionc: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    gestioneff: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    UniArt: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ValAutArt: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "0"
    },
    UnArtCaisse: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "0"
    },
    SaisVend: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "0"
    },
    PramBS: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "0"
    },
    gestionbcC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    gestionAcc: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    e9: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    RemCl: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BaseCom: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    RemFExp: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ValAutTC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DefSoc: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CHEMINCAISSE: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    parambs: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    socdefaut: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "0"
    },
    GBois: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    GREP: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    gestionretenu: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    impbarre: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    validauto: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    mvtdivers: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    numserie: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PMP: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    reglcli: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "0"
    },
    paiefrs: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "0"
    },
    transfertfond: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    encregl: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "0"
    },
    modelebois: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    saisvendeur: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "0"
    },
    marbre: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "0"
    },
    socdest: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "0"
    },
    nomsocdest: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    factcomptant: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "0"
    },
    piece: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    defalcation: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "0"
    },
    marbreglob: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    marbredet: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    auto: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "0"
    },
    equiart: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "0"
    },
    factsusp: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    nbrunite: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    demandeachat: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "0"
    },
    moisvalidation: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    anneevalidation: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    liaisonstock: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    nomsocstock: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    PFACTC: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    SFACTC: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    AFACTC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    gestionlot: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    depot: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    liaisoncom: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    VPA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    devise: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PBC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    STECOM: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    PFBE: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    SFBE: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    AFBE: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    gtaillecoul: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "0"
    },
    socimport: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    factbrbe: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "0"
    },
    pointvente: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    impchq: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    gestionmarge: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ctrcl: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    intervalprix: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ctrart: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    fidelite: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    bclient: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    bfact: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    bcaisse: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    bvalidecaisse: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    bCaisseTR: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    bsauv_envoie: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    trifam: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    tricode: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    trides: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    trisaisie: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    bSuperviseure: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    bCreditTC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    factachat: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "0"
    },
    tarifsortie: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: "PrixAchat"
    },
    FTechnique: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "1"
    },
    SuivInv: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "1"
    },
    BCFSS: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "1"
    },
    GestDep: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "1"
    },
    Transformation: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "1"
    }
  }, {
    sequelize,
    tableName: 'societe',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "code" },
        ]
      },
      {
        name: "code",
        using: "BTREE",
        fields: [
          { name: "code" },
        ]
      },
      {
        name: "codebar",
        using: "BTREE",
        fields: [
          { name: "codebar" },
        ]
      },
    ]
  });
};
