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

router.put('/api/burgers/:id', (req, res) => {
    const condition = `id = ${req.params.id}`;

    console.log(condition, 'burgers_controller.js:23');
    console.log(req.body.devoured, 'burgers_controller.js:24');

    burger.updateOne(
        {
            devoured: req.body.devoured,
        },
        condition,
        (result) => {
            if (result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

module.exports = router;