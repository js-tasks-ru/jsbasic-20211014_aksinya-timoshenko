function getMinMax(str) {
  let mas = str.split(" ").map(item => parseFloat(item)).filter(item => !isNaN(item)); 
  return {
    min: Math.min.apply( Math, mas),
    max: Math.max.apply( Math, mas)
  }  
}
