function matrix(n){
    let matrix = []
    for (let i = 0; i < n; i++) {
        let line = [];
        for (let j = 0; j < n; j++) {
            line.push(n);       
        }   
        matrix.push(line)  
    }

    matrix.forEach(line => {
        console.log(line.join(' '))
    });
}
matrix(5);