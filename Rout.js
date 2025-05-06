const express = require('express');
const router = express.Router();

const{
    getAllData ,
    getInData,
    createauto,
    updateId,
    deleteAuto,
} = require ('../controller/control');

router.get('/', getAllData);

router.get('/:id', getInData);

router.post('/', createauto);

router.put('/:id', updateId);



router.delete('/:id', deleteAuto);

module.exports = router;