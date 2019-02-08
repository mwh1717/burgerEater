
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    createOne: function(col, val, cb) {
        orm.createOne("burgers", col, val, function(res) {
            cb(res);
        });
    },
    updateOne: function(objColVal, condition, cb) {
        orm.updateOne("burgers", objColVal, condition, function(res) {
            cb(res);
        });
    },
    deleteOne: function(id, cb) {
        orm.deleteOne("burgers", "id", id, cb);
    }
};

module.exports = burger;