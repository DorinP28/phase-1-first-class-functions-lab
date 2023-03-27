const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function(first2){
    return (first2.slice(0, 2))
}

const returnLastTwoDrivers = function(last2){
    return last2.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (fareMultiplier) {
    return function(numberOfMultiplication){
        return fareMultiplier * numberOfMultiplication
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, fun) {
    return fun(drivers);
}