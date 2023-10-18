function moviesParser(input){

    let movies=[];

    for (const line of input) {
        let commandTokens= line.split(' ');
        if(commandTokens.includes('addMovie')){
            let movieName= commandTokens.splice(1).join(' ');
            addMovie(movieName);
        }
        else if(commandTokens.includes('directedBy')){
            let indexOfDirected= commandTokens.indexOf('directedBy');
            let movieName= commandTokens.slice(0,indexOfDirected).join(' ');
            let movieDirector= commandTokens.slice(indexOfDirected+1).join(' ');
            addDirector(movieName,movieDirector);
        }
        else{
            let indexOfDate= commandTokens.indexOf('onDate');
            let movieName= commandTokens.slice(0,indexOfDate).join(' ');
            let movieDate= commandTokens.slice(indexOfDate+1).join(' ');

            addDate(movieName,movieDate);
        }
    }

    for (const movie of movies) {
        if(movie.hasOwnProperty('name') && movie.hasOwnProperty('date') && movie.hasOwnProperty('director')){
          let output= JSON.stringify(movie);
            console.log(output);
        }

        
    }

    function addMovie(name){
        movies.push({name: name});
    }
    
    function addDirector(movieName, director){
       let movie= movies.find((m)=> m.name===movieName);

       if(movie){
            movie.director=director;
       }      
    }
    
    function addDate(movieName, date){
        let movie = movies.find((m)=> m.name===movieName);
        if(movie){
            movie.date=date;
        }
        
    }
}


moviesParser(
    [
        'addMovie Fast and Furious',
        'addMovie Godfather',
        'Inception directedBy Christopher Nolan',
        'Godfather directedBy Francis Ford Coppola',
        'Godfather onDate 29.07.2018',
        'Fast and Furious onDate 30.07.2018',
        'Batman onDate 01.08.2018',
        'Fast and Furious directedBy Rob Cohen'
        ]        
)



moviesParser(
    [
        'addMovie The Avengers',
        'addMovie Superman',
        'The Avengers directedBy Anthony Russo',
        'The Avengers onDate 30.07.2010',
        'Captain America onDate 30.07.2010',
        'Captain America directedBy Joe Russo'
        ]
        
)