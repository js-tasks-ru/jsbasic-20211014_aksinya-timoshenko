function sumSalary(salaries) {
  let sum = 0;
  for (let salar in salaries){
    let pars = parseInt(salaries[salar]);
    if(!isNaN(pars)){
    sum+=pars;
    }
  }
  return sum;
}
