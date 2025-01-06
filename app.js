const express = require('express')
const app = express()
const port = 8080

const { Client } = require('pg');


const client = new Client({
	user: 'postgres',
	password: 'khurshid-2827',
	host: 'db',
	port: '5432',
	database: 'my_db',
});

// var conString = "postgres://postgres:khurshid-2827@db:5432/my_db";



client
	.connect()
	.then(() => {
		console.log('Connected to PostgreSQL database updated');
	})
	.catch((err) => {
		console.error('Error connecting to PostgreSQL database', err);
	});


app.get('/', (req, res) => {
  client.query("SELECT * FROM USERS").then((err,result)=>{
    if (err) {
      console.log(err);
      
    }

    console.log(result);
    
    
  })
  res.send("Ok");
 
})

app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})