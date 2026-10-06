const fs = require("fs");
fs.readFile("student.json", "utf8", (err, data) => {
    if (err) {
        console.log("Error reading file:", err);
        return;
    }
    let student;
    try {
        student = JSON.parse(data);
    } catch (err) {
        console.log("Invalid JSON:", err);
        return;
    }
    student.marks += 5;
    const updatedData = JSON.stringify(student, null, 2);
    fs.writeFile("student.json", updatedData, (err) => {
        if (err) {
            console.log("Error writing file:", err);
            return;
        }
        console.log("Marks updated successfully!");
        fs.readFile("student.json", "utf8", (err, data) => {
            if (err) {
                console.log("Error reading file:", err);
                return;
            }
            let updatedStudent;
            try {
                updatedStudent = JSON.parse(data);
            } catch (err) {
                console.log("Invalid JSON:", err);
                return;
            }
            console.log("Updated student data:", updatedStudent);
        });
    });
});