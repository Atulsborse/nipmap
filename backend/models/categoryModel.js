const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Category = sequelize.define('Category', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
}, { timestamps: true });

// Update the Category model to include a hasMany association with the Product model
Category.hasMany(Product, {
  foreignKey: 'categoryId',
  onDelete: 'CASCADE', // Add this line
});

Product.belongsTo(Category, {
  foreignKey: 'categoryId',
});

module.exports = Category;
