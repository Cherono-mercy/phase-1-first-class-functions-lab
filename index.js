// Code your solution in this file!

const drivers = ["Antonia", "Nuru", "Amari", "Mo"];
//Returning first two elements of an array non-destructively
const returnFirstTwoDrivers = function () {
  return drivers.slice(0, 2);
};

//Returning last two elements of an array non-destructively
const returnLastTwoDrivers = function () {
  return drivers.slice(2);
};

//Invoking elements from an array
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//Creating multipliers
function createFareMultiplier(factor) {
  return function (number) {
    return factor * number;
  };
}
const fareMultiplier = createFareMultiplier(2);
const fareQuintupler = createFareMultiplier(5);

const fareDoubler = function createFareMultiplier(fare) {
  let result;
  result = fare * 2;
  return result;
};

const fareTripler = function createFareMultiplier(fare) {
  let tripledFare;
  tripledFare = fare * 3;
  return tripledFare;
};

//Selecting elements from an array
function selectDifferentDrivers(drivers, selectingDrivers) {
  return selectingDrivers();
}
