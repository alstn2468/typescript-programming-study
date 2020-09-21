const carMakers: string[] = ["ford", "toyota", "chevy"];

const dates = [new Date(), new Date()];

const carsByMake: string[][] = [["f150"], ["corolla"], ["camaro"]];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

//Prevent incompatible values
carMakers.push(100); //<-- Error

//Help with 'map'
carMakers.map((car: string): string => {
  return car.toLowerCase();
});

// Flexible Types
//const importantDates = [new Date(), '2030-10-10'];
const importantDates:(string|Date)[] = []
importantDates.push('2020-10-04')
importantDates.push(new Date());
