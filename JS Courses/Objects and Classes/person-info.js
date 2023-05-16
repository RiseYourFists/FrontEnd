function createPerson(firstName, lastName, age){
    let personInfo ={
        firstName: firstName,
        lastName: lastName,
        age: age
    }

    return personInfo;
}

console.log(createPerson("Peter", "Pan","20"))