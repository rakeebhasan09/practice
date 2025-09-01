const users = [
	{ id: 1, name: "Alice", age: 22 },
	{ id: 2, name: "Bob", age: 17 },
	{ id: 3, name: "Charlie", age: 25 },
];

for (const user of users) {
	console.log(`${user.name} inside for of loop.`);
}
console.log("--------------");
users.map((user) => {
	console.log(`${user.name} inside map function.`);
});

// const nameStr = "I am rakeeb hasan";
// nameStr.split(" ").map((word) => {
// 	console.log(word.charAt(0).toUpperCase() + word.slice(1));
// });
