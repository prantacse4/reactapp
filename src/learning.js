
 const number = [1,2,3,4];
 const newNumber = [...number, 5,6];
 console.log(newNumber);
 const learn = (...args) => {
   console.log(args);
 };
 learn(1,2,3,4);

 const course = {
   name : 'React',
   details:{
    app:'Django',
    time:'3Hour'
   }
 };
const {name} = course;
console.log(name);
const {details:{app} ={}} = course;
console.log(app);

number2 = [1,2,3,4,5,6,7,8];
console.log(number2);
const filter = number2.filter((num) => num>2 );
console.log(filter);

const find = number2.find((num) => num>2 );
console.log(find);

const findIndex = number2.findIndex((num) => num>2 );
console.log(findIndex);

const slice = number2.slice(2,4 );
console.log(slice);


const concat = number2.concat(2,4 );
console.log(concat);

console.log("Dont Change Main Array");
console.log(number2);

const splice = number2.splice(1, 4);
console.log(splice);
console.log(number2);

const splice2 = number2.splice(1, 2, 3,4);
console.log(splice2);
console.log(number2);
