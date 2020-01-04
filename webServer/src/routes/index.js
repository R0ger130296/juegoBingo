const {Router} =require('express');
const router =Router();
const {getPersonas,createPersonas,deletePersonas}= require('../controllers/index.controller')



router.get('/personas',getPersonas);
router.post('/crearPersonas',createPersonas);
router.delete('/deletePersonas/:cedula',deletePersonas);
module.exports =router;