const amqp = require('amqplib/callback_api')
const MSG_QUEUE_URL = 'amqps://fucixgnr:VL6AE8tlG3440-aOJCZg_n85vAgCBNjO@puffin.rmq2.cloudamqp.com/fucixgnr'

// Message Broker
module.exports.SubscribeQueue = async () => {
  amqp.connect(MSG_QUEUE_URL, (err, connection) => {
    if (err) {
        throw err
    }
    connection.createChannel((error, channel) => {
        if (error) {
            throw error
        }
        // checks for queue and consume
        channel.assertQueue('shopping_queue', {durable: false})
        channel.consume('shopping_queue', (msg) => {
          console.log(JSON.parse(msg.content.toString()))
        })
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
  // await channel.assertQueue(queue, { durable: false });
  // await channel.consume(queue, (msg) => {
  //   console.log(msg.content.toString())
  // });
}
