//Javascript function to find and return the largest number in an array

//Test 1
numArray = [1,5,7,9];
//let a = numArray;
let largest = numArray[0];
function largestNumber (numArray) 
{
      for(let i=0; i<numArray.length; i++)
      {
          if(numArray[i]>largest)
          {
              largest = numArray[i];
            //   return largest;
          }
      }
      return largest;
      //console.log(largest);
}
 //console.log(largestNumber(numArray[0], numArray[1], numArray[2], numArray[3]));...not getting in this way
//console.log(largestNumber([1,5,7,9]));...gets same output
console.log(largestNumber(numArray));
//console.log(largestNumber(a));...gets same output

//Test 2
const numArray2 = [-1, -5, 0, -100];
//let b = numArray2;
// let largest2 = numArray2[0];
function largestNumber2 (numArray2) 
{
    let largest2 = numArray2[0];
    for(let i=0; i<numArray2.length; i++)
    {
        if(numArray2[i]>largest2)
        {
            largest2 = numArray2[i];
        }
    }
    return largest2;
}
//console.log(largestNumber(numArray2[0], numArray2[1], numArray2[2], numArray2[3]));
//console.log(largestNumber2([-1, -5, 0, -100]));
console.log(largestNumber2(numArray2));
//console.log(largestNumber(b));
