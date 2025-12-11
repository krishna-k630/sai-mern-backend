const Student=require("../modules/studentModel");


exports.getAllStudents = (req, res) => {
    Student.getAll((err, rows) => {
        if (err) return res.status(500).send(err);
        res.json(rows);
    });
};

exports.createStudent = (req, res) => {
    Student.create(req.body, (err, result) => {
        if (err) return res.status(500).send(err);
        res.json({ message: "Student added!", id: result.insertId });
    });
};

exports.getStudentById = (req, res) => {
    Student.getById(req.params.id, (err, rows) => {
        if (err) return res.status(500).send(err);
        res.json(rows[0]);
    });
};

exports.updateStudent = (req, res) => {
    Student.update(req.params.id, req.body, (err) => {
        if (err) return res.status(500).send(err);
        res.json({ message: "Student updated!" });
    });
};

exports.deleteStudent = (req, res) => {
    Student.delete(req.params.id, (err) => {
        if (err) return res.status(500).send(err);
        res.json({ message: "Student deleted!" });
    });
};