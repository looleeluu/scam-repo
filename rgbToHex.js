// Функция rgb не завершена. Завершите его так, чтобы передача десятичных значений RGB приводила к возврату 
// шестнадцатеричного представления. Допустимые десятичные значения для RGB: 0 - 255. 
// Любые значения, выходящие за пределы этого диапазона, должны быть округлены до ближайшего допустимого значения.

// Примечание. Ваш ответ всегда должен состоять из 6 символов, сокращение с 3 здесь не работает.
// Ниже приведены примеры ожидаемых выходных значений:

const rgbToHex = (r, g, b) => {
  const decimal = [r, g, b];
  const validDecimals = decimal.map((num) => {
    if (num > 255) {
      return 255;
    }
    if (num < 0) {
      return 0;
    }
    return num;
  });
  
  const hex = validDecimals.map((item) => {
    const newItem = (item.toString(16)).toUpperCase();
    return (newItem.length === 1) ? '0'.concat(newItem) : newItem;
  });
  return hex.join('');
};

export default rgbToHex;
