// getRandomInt - generates random integers in the range [minInt, maxInt]

const getRandomInt = (min, max) => min + Math.floor(Math.random() * (max - min + 1));

export default getRandomInt;
