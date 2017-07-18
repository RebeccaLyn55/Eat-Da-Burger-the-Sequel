//Create a "Burger" model
module.exports=function(sequelize, DataTypes){
return sequelize.define("burgers",{
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey:true
  },

  burger_name:{
    type: DataTypes.STRING,
     defaultValue: 'default'
  },

  devoured: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },

  date:{
    type:DataTypes.INTEGER
  }
},{
  timestamps:false

});

};


//Sync with DB
//Burger.sync();