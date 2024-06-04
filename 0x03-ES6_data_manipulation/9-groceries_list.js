export default function groceriesList() {
  const toBuy = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];

  const done = new Map();
  for (const elem of toBuy) {
    done.set(elem[0], elem[1]);
  }
  return done;
}
