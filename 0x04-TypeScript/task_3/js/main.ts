import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";
import { insertRow } from "./crud";

const row : RowElement = {
  firstName: 'Lara',
  lastName: 'Croft'
}

const newRawID: RowID = CRUD.insertRow(row);
const updatedRow: RowElement = {
  firstName: 'Lara',
  lastName: 'Croft',
  age: 21
};

CURD.updtedRow(newRawID, updatedRow);
CURD.deleteRow(newRawID);
