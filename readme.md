### Task One Solved.

---

```javascript
const users = [
	{ id: 1, name: "Alice", age: 22 },
	{ id: 2, name: "Bob", age: 17 },
	{ id: 3, name: "Charlie", age: 25 },
];

const users = [
	{ id: 1, name: "Alice", age: 22 },
	{ id: 2, name: "Bob", age: 17 },
	{ id: 3, name: "Charlie", age: 25 },
];

for (const user of users) {
	console.log(`${user.name} inside for of loop.`);
}

users.map((user) => {
	console.log(`${user.name} inside map function.`);
});
```

-   Get only the names from the `users` array `user-name.js`.

```javascript
const orders = [
	{ id: 1, total: 250 },
	{ id: 2, total: 400 },
	{ id: 3, total: 150 },
];

const forOfTotal = [];
for (const order of orders) {
	const totalAmount = order.total;
	forOfTotal.push(totalAmount);
}

const mapTotal = [];
orders.map((order) => mapTotal.push(order.total));

console.log("New array using for of ", forOfTotal);
console.log("New array using map ", mapTotal);
```

## Create a new array containing only the total amounts from the orders `order-total-new-array.js`.

---

```javascript
const students = [
	{ id: 1, name: "David", grade: "A" },
	{ id: 2, name: "Eve", grade: "C" },
	{ id: 3, name: "Frank", grade: "B" },
	{ id: 4, name: "Abul", grade: "D" },
	{ id: 5, name: "Tabul", grade: "B" },
	{ id: 6, name: "Sabul", grade: "A" },
	{ id: 7, name: "Kabul", grade: "C" },
	{ id: 8, name: "Babul", grade: "D" },
];

// Metho One
const findedStudent = students.find((student) => student.grade === "B");
console.log(findedStudent);

// Metho Two
const finded2 = students.find((student) => {
	if (student.grade.toLocaleLowerCase() === "b") {
		return student;
	}
});
console.log(finded2);
```
