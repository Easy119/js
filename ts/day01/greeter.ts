// function greeter(person: String) {
//     return "Hello, " + person;
// }

// let user = "Jane User";

// document.body.innerHTML = greeter(user);

interface Person {
    firstName: string;
    lastName: string;
}
function greeter1(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
let user = { firstName: "Jane", lastName: "User" };

greeter1(user)