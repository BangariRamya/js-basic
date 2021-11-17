const array1 = [1,2,3];
const array2 = [4,5,6];
//TODO combine above arrays into one array3 -->array3 should be [1,2,3,4,5,6]
const array3 = [...array1,...array2];
console.log(array3);

//TODO combine below objects into one personDetails object
const basicDetails = {
    name: 'abcde',
    age: 10,
    gender: 'm'
};

const educationDetails = {
    degree: 'xyz',
    college: 'anc' 
}

const personDetails = {...basicDetails,...educationDetails};
console.log(personDetails);