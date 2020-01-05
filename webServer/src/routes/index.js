const {Router} =require('express');
const router =Router();
const {
    getPersonas,
    createPersonas,
    deletePersonas,
    PerCartilla,
    createPerCartilla,
    deletePerCartilla}= require('../controllers/index.controller')


//rutas Tabla Personas
router.get('/personas',getPersonas);
router.post('/crearPersonas',createPersonas);
router.delete('/deletePersonas/:cedula',deletePersonas);

//rutas Tabla PerCartilla
router.get('/perCartilla',PerCartilla);
router.post('/crearPerCartilla',createPerCartilla);
router.delete('/deletePerCartilla/:id',deletePerCartilla);

// servidor conectado@PaoNar

router.get('/',(req, res)=>{
    res.send('servidor conectado')
}) 


router.get('/api/casilla', (req, res)=>{
    res.send(200, {cantidad: []})
   
    });


router.post('/api/casilla', (req, res)=>{
    console.log(req.body)
    res.status(200).send({message:'Recibido'})

})
        

module.exports =router;