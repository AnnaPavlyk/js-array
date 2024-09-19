function findByName(people, name) {
  for (let i = 0; i < people.length; i++) {
    if (people[i].name === name) {
      return people[i]; 
    }
  }
  return undefined;  
}


const people = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Jim", age: 35 }
];

console.log(findByName(people, "Jane")); 
console.log(findByName(people, "Jack"));  

module.exports = findByName;
