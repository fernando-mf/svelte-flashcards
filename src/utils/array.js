export const rand = (min, max) => Math.floor(Math.random() * (max - min)) + min;

// Shuffles the given array using the Fisher-Yates algorithm
export const shuffle = (arr = []) => {
  const shuffled = [...arr];
  const total = shuffled.length;

  for (let i = total - 1; i >= 0; i--) {
    const randIdx = rand(0, i + 1);
    const temp = shuffled[randIdx];
    shuffled[randIdx] = shuffled[i];
    shuffled[i] = temp;
  }

  return shuffled;
};
