const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lart', {
    CODEART: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    libcaisse: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    numcaisse: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    prixv: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    disp: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "0"
    },
    tva: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    fodec: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    prixttc: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    position: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    destimp: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    deftick: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "n"
    },
    codedest: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "n",
      primaryKey: true
    },
    libdest: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    libimp: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    codedepot: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    libelledepot: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    sel: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "0"
    },
    aff_stk: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    abrevia: {
      type: DataTypes.STRING(6),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'lart',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CODEART" },
          { name: "numcaisse" },
          { name: "codedest" },
        ]
      },
    ]
  });
};
