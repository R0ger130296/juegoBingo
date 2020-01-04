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
   const response= await pool.query('SELECT * FROM personas');
   res.json(response.rows);
};
//tabla Personas Create
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
//tabla Personas Delete
const deletePersonas = async (req, res) => {
    const cedula = parseInt(req.params.cedula);
    await pool.query('DELETE FROM personas where cedula = $1', [
        cedula
    ]);
    res.json(`persona ${cedula} eliminada`);
};




// tabla PersonaCartilla get 
const PerCartilla= async(req,res)=>{
    const response= await pool.query('SELECT * FROM personacartilla');
    res.json(response.rows);
 };
 //tabla PersonaCartilla Create
const createPerCartilla=async(req,res)=>{
    const {fkcartilla,fkpersona}=req.body;
    const response = await pool.query('INSERT INTO personacartilla(fkcartilla,fkpersona) VALUES($1,$2)',[fkcartilla,fkpersona]);
    res.json({
        massage:'personacartilla creada',
        body:{
            user:{fkcartilla,fkpersona}
        }
       })
    };
    //tabla Personas Delete
const deletePerCartilla = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM personacartilla where id = $1', [
        id
    ]);
    res.json(`personacartilla ${id} eliminada`);
};

module.exports={
    //metodos de la tabla Personas
    getPersonas,
    createPersonas,
    deletePersonas,

    //metodos de la tablaPersonaCartilla
    PerCartilla,
    createPerCartilla,
    deletePerCartilla
}