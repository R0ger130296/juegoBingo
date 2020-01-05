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
const {nombre,clave,tipopersona}=req.body;
const response = await pool.query('INSERT INTO personas(nombre,clave,tipopersona) VALUES($1,$2,$3)',[nombre,clave,tipopersona]);
res.json({
    massage:'usuarios creado',
    body:{
        user:{nombre,clave,tipopersona}
    }
   })
};
//tabla Personas Delete
const deletePersonas = async (req, res) => {
    const clave = parseInt(req.params.clave);
    await pool.query('DELETE FROM personas where clave = $1', [
        clave
    ]);
    res.json(`persona ${clave} eliminada`);
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