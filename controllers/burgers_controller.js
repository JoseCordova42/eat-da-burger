const router = require("express").Router();
const burger = require("../models/burger.js");

router.get('/', (req, res) => {
    burger.selectAll((data) => {
        const hbsObject = {
            burgers: data,
        };
        res.render('index', hbsObject)    
    });
});

router.post('/api/burgers', (req, res) => {
    console.log(req.body.burger_name)
    burger.insertOne('burger_name', req.body.burger_name, (result) => {
        res.json({ id: result.insertId });
    });
});
// router.put();
// router.delete();

module.exports = router;