export const formatCardNum = (str) => {
  const cardNumber = str.replaceAll(" ", "").slice(0, 16);
  return cardNumber.length > 4
    ? cardNumber.slice(0, 4) + " " + formatCardNum(cardNumber.slice(4))
    : cardNumber;
};

export const formatDateNum = (value) => {
  const num = Number(value);
  if (num) {
    return num.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
  }
  return value;
};
