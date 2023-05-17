function addLibrary(input) {
    const movies = [];
    
    const addPattern = /(addMovie) ([\w\d .]+)/;
    const onDatePattern = /([\w\d ]+) (onDate) ([\w\d .]+)/;
    const directedByPattern = /([\w\d ]+) (directedBy) ([\w\d .]+)/;
    
    input.forEach(line => {
        let addMatch = line.match(addPattern);
        let onDateMatch = line.match(onDatePattern);
        let directedByMatch = line.match(directedByPattern);
        
        let movieName;
        if (addMatch) {
            movieName = addMatch[2];
            let movie = {name: movieName};
            movies.push(movie);
        }
        else if(onDateMatch){
            movieName = onDateMatch[1];
            let date = onDateMatch[3];
            let movie = findMovie(movieName);
            if(!movie){
                return;
            }

            movie.date = date;
        }
        else if(directedByMatch) {
            movieName = directedByMatch[1]
            let director = directedByMatch[3];
            let movie = findMovie(movieName);
            if(!movie){
                return
            }

            movie.director = director;
        }
    });

    movies.forEach(movie => {
        if(isInvalid(movie)){
            return;
        }
        console.log(JSON.stringify(movie));
    });

    function findMovie(movieName){
        return movies.find((movie)=> movie.name == movieName);
    }
    
    function isInvalid(obj){
        let keys = Object.keys(obj);

        if(keys.length < 3){
            return true;
        }

        keys.forEach(key => {
           if(obj[key] === undefined || obj[key] === null){
            return true;
           }
        });

        return false;
    }
}

  
  

addLibrary([
'addMovie The Avengers',
'addMovie Superman',
'The Avengers directedBy Anthony Russo',
'The Avengers onDate 30.07.2010',
'Captain America onDate 30.07.2010',
'Captain America directedBy Joe Russo'
])