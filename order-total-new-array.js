const orders = [
	{ id: 1, total: 250 },
	{ id: 2, total: 400 },
	{ id: 3, total: 150 },
];

// Solve One
const forOfTotal = [];
for (const order of orders) {
	const totalAmount = order.total;
	forOfTotal.push(totalAmount);
}

// Solve Two
const mapTotal = [];
orders.map((order) => mapTotal.push(order.total));

console.log("New array using for of ", forOfTotal);
console.log("New array using map ", mapTotal);
