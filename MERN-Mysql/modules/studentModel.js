const db=require('../config/db');

module.exports = {
    getAll: (callback) => {
        db.query("SELECT * FROM students", callback);
    },

    create: (data, callback) => {
        db.query("INSERT INTO students SET ?", data, callback);
    },

    getById: (id, callback) => {
        db.query("SELECT * FROM students WHERE id = ?", [id], callback);
    },

    update: (id, data, callback) => {
        db.query("UPDATE students SET ? WHERE id = ?", [data, id], callback);
    },

    delete: (id, callback) => {
        db.query("DELETE FROM students WHERE id = ?", [id], callback);
    }
};