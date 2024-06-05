interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

const [stud, stud2] = [
  {
    firstName: 'Lara',
    lastName: 'Croft',
    age: 21,
    location: 'England'
  },
  {
    firstName: 'Jack',
    lastName: 'Krauser',
    age: 27,
    location: 'USA'
  }
]

const studentsList : Array<Student> = [stud, stud2];

const body : HTMLBodyElement = document.getElementsByTagName("body")[0];
const table : HTMLTableElement = document.createElement("table");
const thead : HTMLTableSectionElement = document.createElement("thead");
const tbody : HTMLTableSectionElement = document.createElement("tbody");
const rowHead : HTMLTableRowElement = thead.insertRow(0);
const firstCellHead : HTMLTableCellElement = rowHead.insertCell(0);
const secondCellHead : HTMLTableCellElement = rowHead.insertCell(1);

firstCellHead.innerHTML = "firstName";
secondCellHead.innerHTML = "location";
table.append(thead);

studentsList.forEach(student => {
  const row : HTMLTableRowElement = tbody.insertRow(0);
  const firstCell : HTMLTableCellElement = row.insertCell(0);
  const secondCell : HTMLTableCellElement = row.insertCell(1);

  firstCell.innerHTML = student.firstName;
  secondCell.innerHTML = student.location;
});
