function highlight(table) {
  for (let i=1; i<table.rows.length; i++){
    let row = table.rows[i];
    let status = table.rows[i].cells[3];
      if(status.hasAttribute('data-available')){
        let attr = status.getAttribute('data-available');
        if (attr == 'true'){
          row.classList.add('available');
        }else{
           row.classList.add('unavailable');
        }
      }else{
        row.setAttribute('hidden', 'hidden');
      }
     let gender = table.rows[i].cells[2].textContent;
      if (gender == 'f'){
        row.classList.add('female'); 
      } else{
      row.classList.add('male'); 
      }
      
      let age = table.rows[i].cells[1].textContent;
      if( age < '18'){
        row.style.textDecoration = 'line-through';
      }
  }
  
}