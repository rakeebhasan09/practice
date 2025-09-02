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
