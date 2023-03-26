const { connect } = require('amqplib');
const amqp = require('amqplib/callback_api')
const MSG_QUEUE_URL = 'amqps://fucixgnr:VL6AE8tlG3440-aOJCZg_n85vAgCBNjO@puffin.rmq2.cloudamqp.com/fucixgnr'

// Message Broker
module.exports.PublishToShoppingQueue = async (data) => {
    amqp.connect(MSG_QUEUE_URL, (err, connection) => {
        if (err) {
            throw err
        }
        connection.createChannel((error, channel) => {
            if (error) {
                throw error
            }
            channel.sendToQueue('shopping_queue', Buffer.from(JSON.stringify(data)));
            // close RabbitMQ when server terminated
            process.on('beforeExit', () => {
                console.log('closing')
                connection.close()
            })
        })
    })

    // const connection = await amqp.connect(MSG_QUEUE_URL);
    // const channel = await connection.createChannel();
    // const queue = 'shopping_queue';
    // const message = 'Hi, Bosa';
    // await channel.assertQueue(queue, { durable: false });
    // await channel.sendToQueue(queue, Buffer.from(message));
};
