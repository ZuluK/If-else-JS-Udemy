// if/ else statements in JS//


// if ( <logic expression> ){
//   <statement>
// } else if ( <condition> ){
//   <other statements here>
// } else {
//   <yet other statement here>
// }


//find out if year is leap year or not

// function is_leap_year (year){
//   if (year % 400 === 0){
//     return true;
//   }
// } else if ((year % 4 == 0) && (year % 100 != 0)){
//   else {
//     return false;
//   }
// }


//Switch statements
//Useage should be avoided
function day_of_week(day){
  switch(day){
    case 1: return "Monday";
    break;
    case 2: return "Tuesday";
    break;
    case 3: return "Wednesday";
    break;
    case 4: return "Thursday";
    break;
    case 5: return "Friday";
    break;
    case 6: return "Saturday";
    break;
    case 7: return "Sunday";
    break;
    default: return "Invaild day of week!";
  }
}


//while loop allow you do things repeatly

var i = 1;//sets value equal to 1
while(i <= 10){//while i is less than 10 then..
  console.log(i);//log the value of i
  i++;//and increase i by 1
}

//for loop
for (var i = 1; i <= 100; i++){
  console.log(i);
}


/** Problem 1 **/
function is_integer(n) {
  return typeof(n) == "number" && Math.floor(n) == n;
}

/** Problem 2 **/
function add_all(arr) {
  var sum = 0;
  arr.forEach(function(e) {sum += e;});
  return sum;
}

/** Problem 3 **/
function temp_converter(from, reading) {
  if (from === "celsius") {
	return (reading * 9/5) + 32 + " degree F";
  } else {
	return (reading -32) * 5 / 9 + " degree celsius";
  }
}

/** Problem 4 - Using iteration **/
function factorial(n) {
  var fact = 1;
  for (var i=1; i <= n; i++) {
	fact = fact * i;
  }
  return fact;
}

/** Problem 4 - Using recursion, in case you know **/
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n-1);
}

/** Problem 5 **/
function convert_to_coins(amount) {
  var denominations = [25, 10, 5, 2, 1];
  var curr_denom_index = 0;
  while (amount > 0) {
    while (amount < denominations[curr_denom_index]) {
      curr_denom_index++;
    }
    amount = amount - denominations[curr_denom_index];
    console.log(denominations[curr_denom_index]);
  }
}
