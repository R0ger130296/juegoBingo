const {Router} =require('express');
const router =Router();
<<<<<<< HEAD

// METHOD GET
router.get('/get', (req, res)=>{
    res.json({
        id: '1',
        nombre: 'cartilla 1',
        codigo: 'ABC01'
    });
});
=======
const {
    getPersonas,
    createPersonas,
    deletePersonas,
    PerCartilla,
    createPerCartilla,
    deletePerCartilla}= require('../controllers/index.controller')
>>>>>>> 4ff9e16d3bb94a4f93390988c1c46158a215452e

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
=======
//rutas Tabla Personas
router.get('/personas',getPersonas);
router.post('/crearPersonas',createPersonas);
router.delete('/deletePersonas/:clave',deletePersonas);

//rutas Tabla PerCartilla
router.get('/perCartilla',PerCartilla);
router.post('/crearPerCartilla',createPerCartilla);
router.delete('/deletePerCartilla/:id',deletePerCartilla);
>>>>>>> 4ff9e16d3bb94a4f93390988c1c46158a215452e
module.exports =router;