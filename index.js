const express  = require('express');
const app      = express();
const redis = require('ioredis');
const client = redis.createClient();
const port     = process.env.PORT || 4000;
var print      = console.log.bind(print); //replaced console.log => print 




//Express Route serve APP Holy grail from express static file
app.use(express.static('public'));

// init values
client.mset('header',0,'left',0,'article',0,'right',0,'footer',0);
client.mget(['header','left','article','right','footer'], 
  (err, value) => print(value));  

  const data = () => {
    return new Promise((resolve, reject) => {
        client.mget(['header','left','article','right','footer'], 
            function(err, value) {
                const data = {
                    'header':  Number(value[0]),
                    'left':    Number(value[1]),
                    'article': Number(value[2]),
                    'right':   Number(value[3]),
                    'footer':  Number(value[4])
                };
                err ? reject(null) : resolve(data);
            }
        );
    });    
}

// get key data
app.get('/data', function (req, res) {
    data()            
        .then(data => {
            print(data);
            res.send(data);                
        });
});


// update data 
app.get('/update/:key/:value', (req, res) => {
    const key = req.params.key;
    let value = Number(req.params.value);
    client.get(key, (err, reply) =>  {

        // new value
        value = Number(reply) + value;
        client.set(key, value);

        // return data to client
        data()            
            .then(data => {
                print(data);
                res.send(data);                
            });
    });   
});


//Connection 
app.listen(port, () => print(`Server initiated on port ${port}.`));


