function createPhoneBook(arr){
    let phoneBook = {};
    arr.forEach(line => {
        let info = line.split(' ');
        let name = info[0];
        let phoneNumber = info[1];

        phoneBook[name] = phoneNumber;
    });

    let keys = Object.keys(phoneBook);
    keys.forEach(key => {
        console.log(`${key} -> ${phoneBook[key]}`)
    });
}

createPhoneBook(['Tim 0834212554',
                'Peter 0877547887',
                'Bill 0896543112',
                'Tim 0876566344'])