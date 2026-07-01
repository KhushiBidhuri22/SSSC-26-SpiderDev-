let name=propmt("Enter your name: ");
let marks=[];

let total=0;

for(let i=0;i<5;i++){
    let  mark;

    while(true){
        mark=Number(prompt(`Enter marks for subject ${i+1}(0-100): `));
        if(mark >= 0 && mark <= 100){
            break;
        }
        alert("Invalid marks. Please enter marks between 0 and 100.");
    }
    marks.push(mark);
    total += mark;

    if(mark > highest){
        highest=mark;
    }

    if (mark < lowest) {
        lowest = mark;
    }
}

let average = total / 5;
let percentage = average;

let grade;

if (percentage >= 90) {
    grade = "A+";
} else if (percentage >= 80) {
    grade = "A";
} else if (percentage >= 70) {
    grade = "B";
} else if (percentage >= 50) {
    grade = "C";
} else {
    grade = "Fail";
}

