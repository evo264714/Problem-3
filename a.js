//Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
console.log("...........................")
function sumTriple (x, y) {
    if (x == y) {
      return 3 * (x + y);
      } 
     else
     {
      return (x + y);
     }
   }
  console.log(sumTriple(10, 20));
  console.log(sumTriple(10, 10));
  console.log("...........................")  
//Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.
  
  function difference(n)
 {
    if (n <= 13)
        return 13 - n;
    else
        return (n - 13) * 2;
 }
console.log(difference(32))
console.log(difference(11))
console.log("...........................")
//Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.

function test(x, y) 
{
  return ((x == 50 || y == 50) || (x + y == 50));
}
console.log(test(50, 50))
console.log(test(20, 50))
console.log(test(20, 20))
console.log(test(20, 30))
console.log("...........................")
//Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.

function test1(x) {
    return ((Math.abs(100 - x) <= 20) ||
       (Math.abs(400 - x) <= 20));
  }
  
  console.log(test1(10));
  console.log(test1(90));
  console.log(test1(99));
  console.log(test1(199));
  console.log(test1(200));
  console.log("...........................")
//Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.

function positive_negative(x, y)
{
  if ((x < 0 && y > 0) || x > 0 && y < 0) 
  {
    return true;
  }
  else 
  {
    return false;
  }
}
console.log(positive_negative(2, 2));
console.log(positive_negative(-2, 2));
console.log(positive_negative(2, -2));
console.log(positive_negative(-2, -2));
console.log("...........................")

//Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more.

function front_back3(str)
 {
  if (str.length >= 3)
   {
   str_len = 3;
 
  back = str.substring(str.length - 3);
   return back + str + back;
 }
   else
     return false;
 }
console.log(front_back3("abc"));
console.log(front_back3("ab"));
console.log(front_back3("abcd"));

//Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7.
console.log("...........................")
function test37(x) 
{
  if (x % 3 == 0 || x % 7 == 0) 
  {
    return true;
  } 
  else {
    return false;
  }
}

console.log(test37(12));
console.log(test37(14));
console.log(test37(10));
console.log(test37(11));
console.log("...........................")

//Write a JavaScript program to find the largest of three given integers.

function max(x, y, z) 
 {
  max_val = 0;
  if (x > y)
  {
    max_val = x;
  } else
  {
    max_val = y;
  }
  if (z > max_val) 
  {
    max_val = z;
  }
  return max_val;
}

console.log(max(1,0,1));
console.log(max(0,-10,-20));
console.log(max(1000,510,440));

//Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.
console.log("...........................")
function near_100(x, y) {
    if (x != y)
    {
    x1 = Math.abs(x - 100);
    y1 = Math.abs(y - 100);
  
    if (x1 < y1)
    {
      return x;
    }
    if (y1 < x1)
    {
      return y;
    }
    return 0;
    }
    else
      return false;
  }
  
  console.log(near_100(90, 89));
  console.log(near_100(-90, -89));
  console.log(near_100(90, 90));

//Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
console.log("...........................")
function leapyear(year)
{
return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leapyear(2016));
console.log(leapyear(2000));
console.log(leapyear(1700));
console.log(leapyear(1800));
console.log(leapyear(100));
