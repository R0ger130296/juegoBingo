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
router.delete('/deletePersonas/:clave',deletePersonas);

//rutas Tabla PerCartilla
// router.get('/perCartilla',PerCartilla);
// router.post('/crearPerCartilla',createPerCartilla);
// router.delete('/deletePerCartilla/:id',deletePerCartilla);
module.exports =router;