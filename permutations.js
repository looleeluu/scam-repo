// You have to create all permutations of an input string and remove duplicates, if present. 
// This means, you have to shuffle all letters from the input in all possible orders.

const factorial = (n) => {
  if (n === 1) {
    return 1;
  }
  
  return n * factorial(n - 1);
};

const iter = (row, counter, main, result = [], index = row.length - 1) => {
  if (counter === 0) {
    return result;
  }
  
  const seqs = main + row.join('');
  const newResult = [...result, seqs];
  
  const j = index !== 0 ? index - 1 : row.length - 1;
  const newIndex = index !== 0 ? index - 1 : row.length - 1;
  
  const newRow = [...row];
  [newRow[j], newRow[index]] = [newRow[index], newRow[j]];
  
  return iter(newRow, counter - 1, main, newResult, newIndex);
};

const permutations = (string) => {
  if (string.length === 1) return [string];
  
  const symbols = string.split('');
  const length = symbols.length;
  const counter = factorial(length) / length;  
  const result = [];
  
  for (let i = 0; i < length; i += 1) {
    const row = [...symbols.slice(0, i), ...symbols.slice(i + 1)];
    const main = symbols[i];
    const mainSequence = iter(row, counter, main);
    result.push(...mainSequence);
  }
  const printResult = Array.from(new Set(result));
  return printResult.sort();
};

export default permutations;