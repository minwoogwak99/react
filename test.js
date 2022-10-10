let animals = [
  { name: "Fluffykins", species: "rabbit" },
  { name: "Caro", species: "dog" },
  { name: "Hamilton", species: "dog" },
  { name: "Harold", species: "fish" },
  { name: "Ursula", species: "cat" },
  { name: "Jimmy", species: "fish" },
];

let orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 },
  { amount: 120 },
];

function isDog(animals) {
  return animals.species === "dog";
}
let dogs = animals.filter(isDog);
console.log("Using a filter function to filter out for dogs: ", dogs);

/* Regular for loop for filtering some value in an array */
let arr = [];
for (let i = 0; i < animals.length; i++) {
  arr.push(animals[i].name);
}
console.log("Using a regular for loop to get a names:", arr);

/* Same function using a map function */
let arr2 = animals.map((animal) => animal.name);
console.log("Using a map function to get a names: ", arr2);

/* get totalAmount using regular for loop */
let totalAmount = 0;
for (let i = 0; i < orders.length; i++) {
  totalAmount += orders[i].amount;
}
console.log("totalAmount using a regular for loop:", totalAmount);

/* Same functionality using a reduce function */
let totalAmount2 = orders.reduce((start, lop) => {
  console.log(start, lop);
  return start + lop.amount;
}, 0);
console.log("smae functionality using a reduce: ", totalAmount2);
