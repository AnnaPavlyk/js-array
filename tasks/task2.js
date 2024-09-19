function getTopScoringStudents(students) {
  let topStudents = [];

  for (let i = 0; i < students.length; i++) {
    if (students[i].score > 80) {
      topStudents.push(students[i].name);
    }
  }

  return topStudents;
}

function getAverageAge(students) {
  let totalAge = 0;

  for (let i = 0; i < students.length; i++) {
    totalAge += students[i].age;
  }

  return totalAge / students.length;
}

function addStudent(students, student) {
  students.push(student);
  return students;
}

function removeStudentByName(students, name) {
  let newStudents = [];

  for (let i = 0; i < students.length; i++) {
    if (students[i].name !== name) {
      newStudents.push(students[i]);
    }
  }

  return newStudents;
}

const students = [
  { name: "John", age: 20, score: 85 },
  { name: "Jane", age: 22, score: 92 },
  { name: "Jim", age: 19, score: 75 },
  { name: "Jill", age: 21, score: 65 },
  { name: "Jack", age: 23, score: 95 },
];

console.log(getTopScoringStudents(students)); 
console.log(getAverageAge(students));        
console.log(addStudent(students, { name: "Jenny", age: 18, score: 88 })); 
console.log(removeStudentByName(students, "Jim"));  

module.exports = { getTopScoringStudents, getAverageAge, addStudent, removeStudentByName };
