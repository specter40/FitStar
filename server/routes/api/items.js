const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');

const Item = require('../../model/Item');

router.get('/', (req, res) => {
    Item.find()
    .then(items => res.json(items))
    .catch(err => res.status(404).json({noitemfound: 'No item found'}));
});
router.get('/:id', (req, res) => {
    Item.findById(req.params.id)
    .then(item => res.json(item))
    .catch(err => res.status(404).json({noitemfound: 'No item found'}));
});

router.put('/:id', (req, res) => {
    Item.findByIdAndUpdate(req.params.id, req.body)
    .then((item)=> res.json({msg: 'Updated successfully'}))
    .catch((err) => res.status(400).json({error: 'Unable to update'}));
});

router.delete('/:id', (req, res) => {
    Item.findByIdAndDelete(req.params.id)
    .then((item) => res.json({msg: 'Item entry deleted successfully'}))
    .catch(err => res.status(404).json({error: 'No such item'}));
});

router.post('/', bodyParser.json(), (req, res) => {
    Item.create(req.body)
    .then(item => res.json({msg: 'Item added successfully'}))
    .catch(err => res.status(400).json({error: 'Error'}));
});



module.exports = router;
