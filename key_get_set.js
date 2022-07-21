const redis = require('ioredis'); //Found many connections issues using redis, changed to ioredis module instead
const client = redis.createClient();
var print = console.log.bind(print);

//Single value write and read
client.set('my_key', "hello World!")
client.get('my_key', (err, reply)  => print(reply));

//multiple value write & read
client.mset('header', 0,'left', 0,'article', 0,'right', 0,'footer', 0)
client.mget(['header', 'left', 'article', 'right', 'footer'], (err, value) => print(value));



client.quit()