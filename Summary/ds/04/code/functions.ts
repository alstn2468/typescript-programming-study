const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

const divide = (a: number, b: number): number => {
  return a / b;
};

const multiply = function(a: number, b: number): number {
    return a * b;
}

const logger = (message: string): void => {
    console.log(message)
}

const throwError = (message: string): void => {
    if (!message) {
        throw new Error(message);
    }
}

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
}

const logWeather = (forecast: { date: Date, weather: string}) => {
  console.log(forecast.date);
  console.log(forecast.weather)
}

//ES2015
const logWeather = ({date, weather}) => {
  console.log(date)
  console.log(weather)
}


const logWeather = ({date, weather}: { date: Date, weather: string}) => {
  console.log(date);
  console.log(weather)
}


logWeather(todaysWeather)