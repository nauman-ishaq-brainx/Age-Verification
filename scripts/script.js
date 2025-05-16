import { monthDays } from './constant.js';

function myFunction(event) {
  event.preventDefault();
  let month = document.getElementById('month').value;
  let day = document.getElementById('day').value;
  let year = document.getElementById('year').value;

  let errors = '';
  if (+day < 1){
    errors += "Day can't be smaller than 1. \n";
  }
  if (+day > monthDays.get(+month)){
    errors += `This month does not have ${+day} days. \n`;
  }
  if (+month < 1 || +month > 12){
    errors += `Month must be between 1 and 12 \n`;
  }
  if (+year > 2025 || +year < 1950){
    errors += 'Year must be between 1950 and 2025';
  }
  if (errors){
    alert(errors);
    return;
  }
  let current_date = Date.now();
  let birthday = new Date(`${month}/${day}/${year}`);

  var ageDifMs = current_date - birthday;
  var ageDate = new Date(ageDifMs);
  if((Math.abs(ageDate.getUTCFullYear() - 1970)) < 15){
    alert('Your age is restricted')
  }
  else{
    location.href = "http://google.co.uk/";
  }
}

window.myFunction = myFunction; // Expose to global for inline HTML use
