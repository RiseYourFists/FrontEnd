function createAddressBook(addressInfos){
    let addressBook ={};
    addressInfos.forEach(line => {
        let[personName, address] = line.split(':');
        addressBook[personName] = address;
    });

    let result = Object.keys(addressBook).sort();
    result.forEach(key => {
        console.log(`${key} -> ${addressBook[key]}`)
    });
}

createAddressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']);