interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Adam",
    lastName: "Hilan",
    age: 35,
    location: "Casablanca",
};

const student2: Student = {
    firstName: "Anny",
    lastName: "Peter",
    age: 22,
    location: "LA",
};

const studentsList: Student[] = [student1, student2];

function renderStudentTable(students: Student[]) {
    const table = document.createElement('table');
    const header = table.createTHead();
    const headerRow = header.insertRow(0);
    headerRow.insertCell(0).innerText = "First Name";
    headerRow.insertCell(1).innerText = "Location";

    const tbody = table.createTBody();

    students.forEach(student => {
        const row = tbody.insertRow();
        row.insertCell(0).innerText = student.firstName;
        row.insertCell(1).innerText = student.location;
    });

    document.body.appendChild(table);
}

renderStudentTable(studentsList);
