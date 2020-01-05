const { Pool } = require ('pg');

const pool= new Pool({
host:'localhost',
user:'postgres',
password:'roger130296',
database:'Bingo',
post:'5432'
});
//tabla Personas Get 
const getPersonas= async(req,res)=>{
   const response= await pool.query('SELECT * FROM persona');
   res.json(response.rows);
};
//tabla Personas Create
const createPersonas=async(req,res)=>{
const {nombre,idcartilla}=req.body;
const response = await pool.query('INSERT INTO persona(nombre,idcartilla) VALUES($1,$2)',[nombre,idcartilla]);
res.json({
    massage:'usuarios creado',
    body:{
        user:{nombre,idcartilla}
    }
   })
};
//tabla Personas Delete
const deletePersonas = async (req, res) => {
    const idpersona = parseInt(req.params.idpersona);
    await pool.query('DELETE FROM persona where idpersona = $1', [
        idpersona
    ]);
    res.json(`persona ${idpersona} eliminada`);
};



//tabla cartillas Get 
const cartilla= async(req,res)=>{
    const response= await pool.query('SELECT * FROM cartilla');
    res.json(response.rows);
 };
 //tabla cartillas Create
 const createCartilla=async(req,res)=>{
 const {numero,codigo}=req.body;
 const response = await pool.query('INSERT INTO cartilla(numero,codigo) VALUES($1,$2)',[numero,codigo]);
 res.json({
     massage:'cartilla creado',
     body:{
         user:{numero,codigo}
     }
    })
 };


 //tabla Administrador Get 
const admi= async(req,res)=>{
    const response= await pool.query('SELECT * FROM administrador');
    res.json(response.rows);
 };
 //tabla administrador Create
 const createAdmi=async(req,res)=>{
 const {idpersona,clave}=req.body;
 const response = await pool.query('INSERT INTO administrador(idpersona,clave) VALUES($1,$2)',[idpersona,clave]);
 res.json({
     massage:'administrador creado',
     body:{
         user:{idpersona,clave}
     }
    })
 };
 //tabla administrador Delete
 const deleteAdmi = async (req, res) => {
     const idadministrador= parseInt(req.params.idadministrador);
     await pool.query('DELETE FROM administrador where idadministrador = $1', [
        idadministrador
     ]);
     res.json(`persona ${idadministrador} eliminada`);
 };
 
module.exports={
    //metodos de la tabla Personas
    getPersonas,
    createPersonas,
    deletePersonas,

    //metodos de la tabla Cartillas
    cartilla,
    createCartilla,

    //metodos de la tabla administrador
    admi,
    createAdmi,
    deleteAdmi
}