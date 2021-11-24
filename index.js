const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(2, 4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
selectingDrivers;

function createFareMultiplier(n) {
    return function(fare) {
        return fare * n;
    }
}
    
const fareDoubler = createFareMultiplier(2) 
fareDoubler;

const fareTripler = createFareMultiplier(3)
fareTripler;

function selectDifferentDrivers(drivers, selectingDrivers) {
    return selectingDrivers(drivers);
}