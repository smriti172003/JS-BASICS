 //i am logging something in the console. This is my first js code
 // concern for seperation of js code : like in a home we have bedroom almirah and kithen we can store utencials 
 //of kithen in bedroom almirah but its of no use we hv to store it in a way that is made for certain things thats why
 // we are storing js file in seperate folder or documents


 let firstname='smriti';  
 console.log(firstname);
 
 // variables in js is like a box and data is store inside that varibles
 //variable cannot be a keyword like(if,else,let) and try to avoid a,i,b meaningful and they cannot contain space 
 //hyphen(-) they are case sensitive as well

 const interest_rate = 0.3;
 console.log(interest_rate);


 //primitive variables
 let name= 'smriti';  //string literals
 let age= 10 ;  //number literal;
 let isSelected= false ; //boolean variable;
 let color =null;
 let first = undefined;


 let person={
    Name: 'smriti',
    age: 10,
    class: 12,
    mobile:'samsung'
 }

 console.log(person);


 person.Name='mary';
 console.log(person.Name);

 //arrays in js

 let selectedcolor= ['red','blue','green','yellow'];
 selectedcolor[4]='green';
 console.log(selectedcolor);
 console.log(selectedcolor.length);

 //functions in js

 function WebGL2RenderingContext(){
    console.log('this is the function and below it function call is happening');
 }

 WebGL2RenderingContext();


 //functions with parameters

 function fun2(name){
    console.log('hello ' + name);
 }

 fun2('smriti');


 //function returning a value

 function square(number){
    return (number*number);
 }

 console.log (square(2));