module.exports = function(sequelize, DataTypes) {
  return sequelize.define('prodcmd', {
    CodeProd: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CodeCmd: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true     
    },
    LibProd: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    DesProd: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Qte: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Prix: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    },
    TauxTVA: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'prodcmd',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CodeCmd" },
          { name: "CodeProd" },
        ]
      },
      ]
  });

};

