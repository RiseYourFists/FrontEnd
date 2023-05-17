function printTable(data){

    let towns = [];
    data.forEach(node => {
        let[name, latitude, longitude] = node.split(' | ');
        let town = {
            town: name,
            latitude: Number.parseFloat(latitude).toFixed(2),
            longitude: Number.parseFloat(longitude).toFixed(2)
        }
        towns.push(town);
    });

    towns.forEach(town => {
        console.log(town);
    });
}

printTable(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)