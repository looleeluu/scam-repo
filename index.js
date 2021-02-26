import sum from './sum.js';

const func = (first) => (...args) => first * sum(...args);

export default func;
