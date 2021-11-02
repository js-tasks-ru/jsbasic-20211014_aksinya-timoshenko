function camelize(str) {
  let mass = str.split("-");
  for ( let i = 1; i < mass.length; i++)
  {
    mass[i] = mass[i][0].toUpperCase() + mass[i].substring(1);
  }
  return mass.join("");
}
