// const names = `["ali","hassan","yusuf"]`

// const jsonName = JSON.stringify(names)

// const person = `{
//     "name": "Ali",
//     "age": 30,
//     "isEmployee": true,
//     "hobbies": ["fishing", "karate", "cooking"]
// }`
// const jsonPerson = JSON.stringify(person)

// const people = `[
//     {
//         "name": "Ali",
//         "age": 30,
//         "isEmployee": true
//     },
//     {
//         "name": "Hassan",
//         "age": 28,
//         "isEmployee": true
//     },
//     {
//         "name": "Ali Hassan",
//         "age": 25,
//         "isEmployee": true
//     },
//     {
//         "name": "Fulan",
//         "age": 30,
//         "isEmployee": false
//     }
// ]`
// const jsonPeople = JSON.stringify(people)

// const parseData = JSON.parse(people)
// console.log(names);
// console.log(jsonName);

// console.log(person);
// console.log(jsonPerson);

// console.log(people);
// console.log(parseData);
// console.log(jsonPeople);

// fetch returns a promise
// fetch("person.json").then(response => response.json())
// .then(value => console.log(value))

fetch("people.json")
.then(response => response.json())
.then(values => values.forEach(value => console.log(value.name)))
.catch(err => {
    console.error(err)
}) 