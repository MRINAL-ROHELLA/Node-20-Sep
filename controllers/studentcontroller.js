const Student = require('../models/Student');
const student = require('../models/Student');
async function addStudent(req,res){
    try{
        console.log(req.body);
        let student = new Student(req.body);
        await student.save();
        res.render('studentinsert')
    }catch(err){
        console.log(err);
    }
}
async function getStudents(req, res) {
    try{
        let students = await Student.find({});
        res.render('studentlist',{
            students: students
        })
    }catch(err){
        console.log(err)
    }
}
async function getStudentsForEdit(req,res) {
    try{
        let id = req.params.id;
        console.log(id)
        let student = await Student.findOne({_id : id})
        console.log(student);
        res.render('studentforupdate',{
            student: student
        })
    }catch(err){
        console.log(err);
    }
}
async function updateStudent(req,res){
    try{
        let id = req.params.id
        let student = await Student.findOne({_id: id});
        console.log(student,'student')
        student.rollNo = req.body.rollNo;
        student.firstName = req.body.firstName;
        student.lastName = req.body.lastName;
        student.fatherName = req.body.fatherName;
        student.adharCardNo = req.body.adharCardNo;
        student.mobileNo = req.body.mobileNo;
        await student.save();
        let students = await Student.find({});
        res.render('studentlist',{
            students: students
        })
        res.end("<h1>Student has been updated successfully....</h1>")
    }catch(err){
        console.log(err);
    }
}
async function deleteStudent(req,res) {
    try{
        let id = req.params.id;
        await Student.deleteOne({_id: id});
        let students = await Student.find({});
        res.render('studentlist',{
            students: students
        })
    }catch(err){
        console.log(err)
    }
}
module.exports={
    addStudent,
    getStudents,
    getStudentsForEdit,
    updateStudent,
    deleteStudent
}