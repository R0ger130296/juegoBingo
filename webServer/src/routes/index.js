const {Router} =require('express');
const router =Router();
const {
    getPersonas,
    createPersonas,
    deletePersonas,
    cartilla,
    createCartilla,
    admi,
    createAdmi,
    deleteAdmi
}= require('../controllers/index.controller')

//rutas Tabla Personas
router.get('/persona',getPersonas);
router.post('/createPersona',createPersonas);
router.delete('/deletePersona/:idpersona',deletePersonas);


//Rutasrabla Cartillas
router.get('/cartilla',cartilla);
router.post('/createCartilla',createCartilla);

//Rutas tabla administrador
router.get('/admi',admi);
router.post('/createAdmi',createAdmi);
router.delete('/deleteAdmi/:idadministrador',deleteAdmi);
module.exports =router;