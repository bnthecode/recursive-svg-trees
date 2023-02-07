export const getRandomPastelColor = () => {
  const values = [
    "#77dd77",
    "#99c5c4",
    "#89cff0",
    "#99c5c4",
    "#aa9499",
    "#99c5c4",
    "#77dd77",
    "#cef0cc",
    "#bdb0d0",
    "#d8a1c4",
  ];
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const randomColor = values[getRandomInt(5)];

  return randomColor;
};
