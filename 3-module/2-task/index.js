function filterRange(arr, a, b) {
    let mass = [];
   for (let val of arr){
     if (val >= a && val <= b) {
       mass.push(val);
     }
   }
   return mass;
}
