
var connection = require("../config/connection.js");

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

function objToSql(obj) {
    var arr = [];

    for (var key in obj) {
        var value = obj[key];

        if (Object.hasOwnProperty.call(obj, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = " " + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }

    return arr.toString();
}



//orm
var orm = {
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            //because of cb fuction we can use "result"
            cb(result);
        });
    },
    createOne: function(table, col, val, cb) {
        var queryString = "INSERT INTO " + table + " (" + col.toString() + ") " + "VALUES (" + printQuestionMarks(val.length) + ") ";

        console.log(queryString);

        connection.query(queryString, val, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    updateOne: function(table, objColVal, condition, cb) {
        var queryString = "UPDATE " + table + " SET " + objToSql(objColVal) + " WHERE " + condition;

        console.log(queryString);

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },

    deleteOne: function(table, whereCol, whereVal, cb) {
        var queryString = "DELETE FROM ?? WHERE ?? = ?";
    
        connection.query(queryString, [table, whereCol, whereVal], function(err, result) {
          if (err) throw err;
          cb(result);
        });
      }
};

module.exports = orm;