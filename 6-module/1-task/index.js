/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
  this.mass = rows;
  this.rows = rows.length;
  this.columns = this.getColumns(rows[0]);
  this.table = document.createElement("table");
  this.getElem();
  }
  
  get elem(){
  return this.table;
  }
  
  getElem(){
  this.table.appendChild(this.getThead());
  this.table.appendChild(this.getTbody());
  }
  
  getTbody(){
  let body = document.createElement('tbody');
  for (let i = 0; i < this.rows; i++){
  let tr = document.createElement('tr');
  for (let key in this.mass[i]){
  tr.appendChild(this.getTd(this.mass[i][key]));
  }
  tr.appendChild(this.getButton());
  body.appendChild(tr);
  }
  return body;
  }
  
  getThead(){
  let head = document.createElement('thead');
  let tr = document.createElement('tr');
  tr.appendChild(this.getTh("Имя"));
  tr.appendChild(this.getTh("Возраст"));
  tr.appendChild(this.getTh("Зарплата"));
  tr.appendChild(this.getTh("Город"));
  tr.appendChild(this.getTh(""));
  head.appendChild(tr);
  return head;
  }
  
  getTh(text){
  let th = document.createElement('th');
  th.textContent = text;
  return th;
  }
  
  getTd(text){
  let td = document.createElement('td');
  td.textContent = text;
  return td;
  }
  
  getButton(){
  let td = document.createElement('td');
  let button = document.createElement('button');
  button.textContent = "X";
  button.addEventListener('click', function(e) {
  let tr = e.target.closest('tr');
  tr.remove();
  });
  td.appendChild(button);
  return td;
  }
  
  getColumns(table){
  let col = 0;
  for (let key in table) {
  col++;
  }
  return col;
  }
  
  }
