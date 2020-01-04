const { Pool } = require ('pg');

const pool= new Pool({
host:'localhost',
user:'postgres',
password:'roger130296',
database:'Bingo',
post:'5432'
});
//tabla Personas
const getPersonas= async(req,res)=>{
   const response= await pool.query('SELECT * FROM personas');
   res.json(response.rows);
};




const createPersonas=async(req,res)=>{
const {nombre,cedula,clave,direccion,email,telefono,tipopersona}=req.body;

const response = await pool.query('INSERT INTO personas(nombre,cedula,clave,direccion,email,telefono,tipopersona) VALUES($1,$2,$3,$4,$5,$6,$7)',[nombre,cedula,clave,direccion,email,telefono,tipopersona]);
res.json({
    massage:'usuarios creado',
    body:{
        user:{nombre,cedula,clave,direccion,email,telefono,tipopersona}
    }
   })
};




const deletePersonas = async (req, res) => {
    const cedula = parseInt(req.params.cedula);
    await pool.query('DELETE FROM personas where cedula = $1', [
        cedula
    ]);
    res.json(`persona ${cedula} eliminada`);
};
module.exports={
    getPersonas,
    createPersonas,
    deletePersonas
}