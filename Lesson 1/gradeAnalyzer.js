let scores = [95, 87, 78, 72, 90, 65, 84, 76];

let total = 0;
let highest = scores[0];
let lowest = scores[0];
let passed = 0;
let failed = 0;

console.log("===== STUDENT GRADE ANALYZER =====");
console.log("Student Scores:");

for (let i = 0; i < scores.length; i++) {
    let score = scores[i];
    let remark;

    if (score >= 90 && score <= 100) {
        remark = "Excellent";
    } else if (score >= 80) {
        remark = "Very Good";
    } else if (score >= 75) {
        remark = "Good";
    } else {
        remark = "Failed";
    }

    if (score >= 75) {
        passed++;
    } else {
        failed++;
    }

    total += score;

    if (score > highest) {
        highest = score;
    }

    if (score < lowest) {
        lowest = score;
    }

    console.log("Student " + (i + 1) + ": " + score + " - " + remark);
}

let average = total / scores.length;

console.log("\n===== RESULTS =====");
console.log("Total Score: " + total);
console.log("Average Score: " + average.toFixed(2));
console.log("Highest Score: " + highest);
console.log("Lowest Score: " + lowest);
console.log("Number of Students Passed: " + passed);
console.log("Number of Students Failed: " + failed);