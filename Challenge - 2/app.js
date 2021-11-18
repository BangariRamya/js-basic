//Problem 1
//Write a function that takes a string and a character as argument and returns the number of times the character occurs in the string


function findFreq(str, char) { 
    
    //let str = 'How many times does the character occur in this sentence?';
    //let char = 'm';
  
    let s = str.toLowerCase();

    let count=0;
    for(let i = 0; i<s.length ; i++) 
    {
        //let count = 0;
        if(s[i] == char)
        {
            count++;
        }
    }
    //return count;
    console.log(count);
} 
// console.log(count);
findFreq('How many times does the character occur in this sentence?','m') ;
findFreq('How many times does the character occur in this sentence?','h') ;  


//method-2:using arrow function
const findFreq1 = (str, char) => {

    let s = str.toLowerCase();

    let count=0;
    for(let i = 0; i<s.length ; i++) 
    {
        //let count = 0;
        if(s[i] == char)
        {
            count++;
        }
    }
    console.log(count);
}
findFreq1('How many times does the character occur in this sentence?','m') ;
findFreq1('How many times does the character occur in this sentence?','h') ; 
 



//Problem 2
//Write a function that takes an array as argument. It should return true if all elements in the array are equal and false otherwise


function areAllEqual(arr) { 
   
    let count =0;

    for(let i=1; i<arr.length; i++) 
    {
       if(arr[0] !== arr[i]) //getting the logic from the vice versa of the given question condition
       {
           count++;
           //return true;
       }
    }

    if(count == 0)
    {
        return true;
    }
    else 
    {
       return false;
    }

} 
console.log(areAllEqual(['test', 'test', 'test'])) ;
console.log( areAllEqual([1,1,1,2])) ;


//method-2:using arrow function and ternary operator
const areAllEqual1 = (arr) => { 
   
    let count =0;

    for(let i=1; i<arr.length; i++) 
    {
       if(arr[0] !== arr[i]) 
       {
           count++;
       }
    }
    
    return count == 0 ? true : false ;
    //count == 0 ? return true :  return false ;...we use return since we have multiple statements in the arrow function; but we uncaught syntax error as Unexpected token 'return' because we have write return only once in the code


} 
console.log(areAllEqual1(['test', 'test', 'test'])) ;
console.log(areAllEqual1([1,1,1,2])) ;



//Problem 3
//Write a function that takes an array and a number (n) as arguments it should return the last n array elements. If the array has less than n elements, return all


function subArray(arr, n) { 
    //return arr;
    if(n>arr.length)
    {
        return arr;
    }
    else
    {
        let j=0; 
        let arr2 = []; 
        for(let i=arr.length-n; i<arr.length; i++)
        {
        arr2[j++] = arr[i];
        /* Below two lines can be written into single line as above
        arr2[j] = arr[i];
        j++;  */
        
        }
        return arr2;
    }

} 
console.log(subArray([1, 2, 3, 4, 5], 2));
console.log(subArray([1, 2, 3], 6));


