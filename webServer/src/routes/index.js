const {Router} =require('express');
const router =Router();
<<<<<<< HEAD
const {
    getPersonas,
    createPersonas,
    deletePersonas,
    PerCartilla,
    createPerCartilla,
    deletePerCartilla}= require('../controllers/index.controller')
=======

// METHOD GET
router.get('/get', (req, res)=>{
    res.json({
        id: '1',
        nombre: 'cartilla 1',
        codigo: 'ABC01'
    });
});
>>>>>>> logic

// METHOD POST

router.post('/post', (req, res) =>{
    console.log(req.body);
    res.send('METHOD POST ACTIVE');
});

// METHOD PUT

router.put('/put/:cartillaId', (req, res) =>{
    //console.log(req.body);
    res.send(`Cartilla ${req.params.cartillaId} actualizada`);
});

// METHOD DELETE
router.delete('/delete/:cartillaId', (req, res) =>{
    res.send(`Cartilla ${req.params.cartillaId} eliminada`);
});

<<<<<<< HEAD
//rutas Tabla Personas
router.get('/personas',getPersonas);
router.post('/crearPersonas',createPersonas);
router.delete('/deletePersonas/:clave',deletePersonas);

//rutas Tabla PerCartilla
router.get('/perCartilla',PerCartilla);
router.post('/crearPerCartilla',createPerCartilla);
router.delete('/deletePerCartilla/:id',deletePerCartilla);
=======
>>>>>>> logic
module.exports =router;