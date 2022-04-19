// getRandomInt - generates random integers in the range [minInt, maxInt)

const getRandomInt = (max, min) => min + Math.floor(Math.random() * (max - min));

export default getRandomInt;
