// javascript function to return updated salaries of employees by given percentage



employeesArray = [100, 500, 700, 400];  
array_update_new =[];
percent = 10;
function updateSalaries (employeesArray, percent)
{
    for(let i=0; i<employeesArray.length; i++)
    {
      array_update_new[i] = employeesArray[i] + ((employeesArray[i]*percent)/100);
    }
    return array_update_new;  //we should not write as return array_update_new[i] as it gives only one value ...but we want the complete array
}
 //console.log(updateSalaries([100, 500, 700, 400],10));....this will also gives same output
console.log(updateSalaries(employeesArray,10)); 


/*  Updated the old array here...but it's good to do taking new array as above
employeesArray = [100, 500, 700, 400];  //but we have to declare as const or let in react as  react has strict mode , to avoid errors
percent = 10;
function updateSalaries (employeesArray, percent)
{
    for(let i=0; i<employeesArray.length; i++)
    {
      employeesArray[i] = employeesArray[i] + ((employeesArray[i]*percent)/100);
     
      //return employeesArray; ...we get output as [110, 500, 700, 400], since the execution ends once it calls return statement
    }
    return employeesArray;
}
 //console.log(updateSalaries([100, 500, 700, 400],10));....this will also gives same output
console.log(updateSalaries(employeesArray,10));  */