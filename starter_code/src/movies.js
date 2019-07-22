/* eslint no-restricted-globals: 'off' */

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// 2h 55min

function changeDuration(duration) {
  const hoursMin = parseInt((duration.split(" ")[0])) * 60;
  const min = duration.split(" ").length===2 ? parseInt((duration.split(" ")[1])) : 0;
  return hoursMin + min;
}

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

function ratesAverage(movies) {
    var sumRate = movies.reduce((accumulator, movieObj) => accumulator + parseFloat(movieObj.rate), 0)
    var averageRate = (sumRate / movies.length)
    return averageRate.toPrecision(3)
}

console.log(ratesAverage(movies))

// Iteration 2: Drama movies - Get the average of Drama Movies

function ratesDramaAverage(movies) {
    var dramaMovie = movies.filter(movies => movies.genre.includes("Drama"))
   return ratesAverage(dramaMovie)
}

console.log(ratesDramaAverage(movies))

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByDuration(movies) {
    var compareDuration = (firstMov, secondMov) => {
        const firstMovTime = changeDuration(firstMov.duration);
        const secondMovTime = changeDuration(secondMov.duration);
        if(firstMovTime > secondMovTime) {
            return 1;
        } else if(firstMovTime < secondMovTime) {
            return -1
        } else if(firstMovTime === secondMovTime){
            if(firstMov.title > secondMov.title) {
                return 1;
            } else {
                return -1;
            }
        }
        
      }
    var sortedDurationMovies = movies.sort(compareDuration);
    return sortedDurationMovies
} 

console.log([...orderByDuration(movies)]);


// // Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(movies) {
    var spielbergDrama = movies.filter(movies => movies.genre.includes("Drama") && movies.director.includes ("Steven Spielberg"))
    return spielbergDrama
} 

console.log(howManyMovies(movies))


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// function orderAlphabetically(movies)

// var compare = (title) => {
//     if(a < b) return -1
//     else if(a > b) return 1;
//     else return 0;
// }
  
// const sortedMovieTitle = movies.sort(compare)
// console.log(sortedMovieTitle)

function orderAlphabetically(movies) {
    var sortOrder = 1;
    if(movies[0] === "-") {
        sortOrder = -1;
        movies = movies.substr(1);
    } return function (a,b) {
        if(sortOrder == -1){
            return b[movies].localeCompare(a[movies]);
        }else{
            return a[movies].localeCompare(b[movies]);
        }        
    }
}

movies.sort(orderAlphabetically("title"));
console.log(movies)
  
// // BONUS Iteration: Best yearly rate average - Best yearly rate average
