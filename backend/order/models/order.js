module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define("order", {
      user_id: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      count: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.INTEGER
      },
    });
  
    return Order;
};