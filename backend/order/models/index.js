const dbConfig = require("../config/config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.order = require("./order.js")(sequelize, Sequelize);
db.items = require("./items.js")(sequelize, Sequelize);

// add extra count column in cart_item table
const cart_item = sequelize.define("cart_item", {
  count: Sequelize.INTEGER
}); 

// Order and Items - Many-to-Many relationship
db.items.belongsToMany(db.order, {
  through: cart_item,
  as: "order",
  foreignKey: "item_id"
});
db.order.belongsToMany(db.items, {
  through: cart_item,
  as: "items",
  foreignKey: "order_id"
});

module.exports = db;
