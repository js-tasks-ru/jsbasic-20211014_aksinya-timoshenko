function showSalary(users, age) {
 let rez = "";
  let mas = users.filter(item => item.age <= age);
  mas.map((item,index) => 
  index == mas.length - 1 ? rez += item.name + ", " + item.balance : rez += item.name + ", " + item.balance + "\n");
  return rez;
}
