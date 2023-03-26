module.exports = (sequelize, Sequelize) => {
    const Items = sequelize.define("items", {
      item_name: {
        type: Sequelize.STRING
      },
      item_count: {
        type: Sequelize.INTEGER
      },
      item_price: {
        type: Sequelize.INTEGER
      },
    });
  
    return Items;
};