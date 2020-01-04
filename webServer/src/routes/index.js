const {Router} =require('express');
const router =Router();
const {getPersonas,createPersonas}= require('../controllers/index.controller')

router.get('/personas',getPersonas);
router.post('/crearPersonas',createPersonas);

// TEST SERVER @molina99
router.get('/', (req, res)=>{
    res.send('METHOD GET ACTIVE');
});

// METHOD GET
router.get('/get', (req, res)=>{
    res.json({
        id: '1',
        nombre: 'cartilla 1',
        codigo: 'ABC01'
    });
});

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

module.exports =router;