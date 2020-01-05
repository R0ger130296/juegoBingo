const {Router} =require('express');
const router =Router();
const {
    getPersonas,
    createPersonas,
    deletePersonas,
    cartilla,
    createCartilla,
    deleteCartilla}= require('../controllers/index.controller')

//rutas Tabla Personas
router.get('/personas',getPersonas);
router.post('/crearPersonas',createPersonas);
router.delete('/deletePersonas/:clave',deletePersonas);


//Rutasrabla Cartillas
router.get('/cartillas',cartilla);
router.post('/createCartilla',createCartilla);
router.delete('/deleteCartilla/:codigo',deleteCartilla);

module.exports =router;