'use strict';

// Question 01
    let randomDates = [ // Store dates in array
        'October 7, 2009',
        'November 10, 2009',
        'January 10, 2009',
        'October 22, 2009'
    ];

    randomDates.sort(function(a, b){ // Compare two dates to one another
// Convert date a / b to miliseconds to compare the numbers + store in var
        let da = new Date(a).getTime(); 
        let db = new Date(b).getTime(); 

// Test if miliseconds is smaller or larger and sorts the array
        return da < db ? -1 : da > db ? 1 : 0
    });
        // console.table(randomDates)









