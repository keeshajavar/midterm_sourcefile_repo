class Student {
    constructor(name, scores) {
        this.name = name;
        this.scores = scores;
    }

    getAverage() {
        let sum = 0;

        for (let i = 0; i < this.scores.length; i++) {
            sum += this.scores[i];
        }

        return sum / this.scores.length;
    }

    getLetterGrade() {
        let average = this.getAverage();

        if (average >= 90) {
            return "A";
        } else if (average >= 80) {
            return "B";
        } else if (average >= 70) {
            return "C";
        } else if (average >= 60) {
            return "D";
        } else {
            return "F";
        }
    }
}

function analyzeClass(students) {
    let classSum = 0;
    let topStudent = students[0];
    let topAverage = students[0].getAverage();

    console.log("------- STUDENT REPORT -------");

    for (let i = 0; i < students.length; i++) {
        let student = students[i];
        let average = student.getAverage();

        console.log(
            `${student.name} - Average: ${average.toFixed(1)} | Grade: ${student.getLetterGrade()}`
        );

        classSum += average;

        if (average > topAverage) {
            topAverage = average;
            topStudent = student;
        }
    }

    let classAverage = classSum / students.length;

    console.log("-----------------------------------");
    console.log(`Class Average: ${classAverage.toFixed(1)}`);
    console.log(`Top Student: ${topStudent.name} with ${topAverage.toFixed(1)}`);
}

const studentData = [
    { name: "Lany", scores: [85, 90, 92] },
    { name: "Bongbung", scores: [70, 75, 68] },
    { name: "Dutherthe", scores: [95, 98, 92] },
    { name: "Pico", scores: [55, 60, 58] }
];

const students = [];

for (let i = 0; i < studentData.length; i++) {
    students.push(
        new Student(studentData[i].name, studentData[i].scores)
    );
}

analyzeClass(students);