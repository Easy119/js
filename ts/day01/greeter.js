// function greeter(person: String) {
//     return "Hello, " + person;
// }
function greeter1(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Jane", lastName: "User" };
greeter1(user);
