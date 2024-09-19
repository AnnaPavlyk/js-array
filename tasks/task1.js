function filterAdults(people) {
  let adults = [];

  for (let i = 0; i < people.length; i++) {
    if (people[i].age >= 18) {
      adults.push(people[i]);
    }
  }
  return adults;
}

console.log(filterAdults([{ name: 'John', age: 17 }, { name: 'Jane', age: 18 }, { name: 'Bob', age: 20 }])); 

module.exports = filterAdults;
