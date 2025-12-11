const express =require("express");

const router=express.Router();

const controller =require("../controlllers/studentController");

router.get("/get",controller.getAllStudents);
router.post("/add",controller.createStudent);
router.get("/:id",controller.getStudentById);
router.put("/:id",controller.updateStudent);
router.delete("/:id",controller.deleteStudent);

module.exports=router;