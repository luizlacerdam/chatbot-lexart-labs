/**
* @param {import('sequelize').DataTypes} DataTypes
* @param {import('sequelize').Sequelize } Sequelize
* @returns
*/

module.exports = (sequelize, DataTypes) => {
    const Chat = sequelize.define(
  'Product', 
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        username: { allowNull: false, type: DataTypes.STRING },
        messages: { allowNull: false, type: DataTypes.STRING },
        finished: { allowNull: false, type: DataTypes.STRING },
    },
  { timestamps: false, tableName: 'chats', underscored: true },
    );
  
    return Chat;
  };
