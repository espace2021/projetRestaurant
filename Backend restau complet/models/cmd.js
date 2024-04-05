module.exports = function(sequelize, DataTypes) {

return sequelize.define('cmd', {
     
    CodeCmd: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SocieteCode: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    CodeEmp: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    DateCmd: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PrixTotalCmd: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    TableNumber: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    NomClient: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Depuis: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    VerifiedByAdmin: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cmd',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CodeProd" },
          { name: "CodeCmd" },
           ]
      }
    ]
  });

 
};

