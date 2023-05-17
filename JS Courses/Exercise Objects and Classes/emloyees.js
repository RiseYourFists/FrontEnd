function createEmployees(input){
    let employees = {};
    input.forEach(line => {
       employees[line] = line.length;
    });

    let keys = Object.keys(employees);

    keys.forEach(key => {
        console.log(`Name: ${key} -- Personal Number: ${employees[key]}`)
    });
}

createEmployees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])