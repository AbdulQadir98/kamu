const db = require("../models");
const Order = db.order;
const Item = db.items;
const { SubscribeQueue } = require("../utils");

// Retrieve all Orders of user
exports.findAll = (req, res) => {
    const user_id = req.query.user_id;

    Order.findAll({ where: { user_id: user_id } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Order."
        });
      });
};

// Get order by id from req
exports.findOne = (req, res) => {

  const id = req.params.id;
  Order.findByPk(id, {
    include: [
      {
        model: Item,
        as: 'items',
        attributes: ['id', 'item_name', 'item_price'],
        through: {
          attributes: [],
        },
        // through: {
        //   attributes: ["item_id", "order_id"],
        // },
      },
    ],
  })
    .then(data => {
      // if the order user_id is the JWtoken's userId
      // if ( data.dataValues.user_id === req.userId ) {
      if ( data ) {
        // SubscribeQueue()
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Order with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Order with id=" + id
      });
    });
};

// Create new Order
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Name can not be empty!"
    });
    return;
  }

  const order = {
    user_id: req.body.user_id,
    name: req.body.name,
    count: req.body.count,
    price: req.body.price
  };

  const item = {
    item_ids: req.body.item_ids,
    item_counts: req.body.item_counts
  };

  // Create Order
  Order.create(order)
    .then(data => {
      // function to add item to order
      req.body.item_ids.forEach(item_id => {
        addOrder = (item_id, order_id) => {
          Item.findByPk(item_id)
            .then((item) => {
              Order.findByPk(order_id)
                .then((order) => {
                  item.addOrder(order);
                  // res.send(item);
                });
            })
            .catch((err) => {
              console.log(err);
            });
        }
        addOrder(item_id, data.id);
      })
      res.send({message: "Order Created Succesfully"})
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Order."
      });
    });
};

// Delete an Order
exports.delete = (req, res) => {
  const id = req.params.id;

  Order.destroy({ where: { id: id } })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Order was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Order with id=${id}. Maybe Order was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Order with id=" + id
      });
    });
};