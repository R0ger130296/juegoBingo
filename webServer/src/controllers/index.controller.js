const { Pool } = require ('pg');

const pool= new Pool({
host:'localhost',
user:'postgres',
password:'roger130296',
database:'Bingo',
post:'5432'
});

const getUsers= async(req,res)=>{
   const response= await pool.query('SELECT * FROM personas');
   res.json(response.rows);
}

module.exports={
    getUsers
}