const { insertOne } = require('../config/orm.js');
const orm = require('../config/orm.js');

//code that calls the ORM functions using burger specific input for the ORM
const burger = {

    // selectAll: orm.selectAll('*', 'burgers'),
    selectAll(cb) {
        orm.selectAll('burgers', (res) => cb(res));
    },

    // insertOne: orm.insertOne(),
    insertOne(cols, vals, cb) {
        orm.insertOne('burgers', cols, vals, (res) => cb(res));
    },

    // updateOne: orm.updateOne(),
    updateOne(objColVals, condition, cb) {
        console.log(objColVals, 'burger.js:19');
        console.log(condition, 'burger.js:20');

        orm.updateOne('burgers', objColVals, condition, (res) => cb(res));
    },
};

module.exports = burger;