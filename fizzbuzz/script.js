 const letters=[
     ['a',['hello','hh'],'b','c'],
     ['d','e','f'],


	 
	 
	 
     ['g','h','i']
	 
	 
 ];

  console.log(letters[0][1])

   const reverseastring=(val)=>{
       return val.split('').reverse().join('');
   }
   console.log(reverseastring('hello'))

   var arr=[1,2,3];
   var arr2=[...arr];

    console.log(arr2)

    for (let i = 0; i<=20; i++) {
        if(i%3){
        console.log(i)
        }
        
    }
     
    for (let i = 0; i<=100; i++) {
        if(i%3===0){
            console.log('only 3')
             }else if(i%5===0){
            console.log('only 5')
        }else if(i%5===0&& i%3===0){
            console.log('only 5 and only 3')
        }else{
            console.log(i);
        }
        
    }

    const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
    const sharky = ["Sharky", "shark", 20, "Left Coast"]
    const plantee = ["Plantee", "plant",  5000 , "Mordor"]
    const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
    const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]


    //wolfy.splice(3,3)
    wolfy.splice(3,3,'Gotham city');
    dart.splice(4,4,'heello');
    wolfy.splice(0,1);

console.log(dart);
console.log(wolfy)

  const turtles=[
      "donatello",'Leonardo','Raphael','Michel'];
    for (const hello of turtles) {
          console.log(hello.toUpperCase(turtles));
    }

// <<<<<<< strings
//     for (let i = 0; i <=20; i++) {
//         if(i%3===0){
//             console.log('human stop taking pics of me');
//         }else{
//             console.log('Love me,pet me !HSSSSSSS')
//         }
        
//     }

// //function returns true if and only if x is equal to 7.

// function isSeven(x) {
// 	return x=="7"?true:false;
// }

// console.log(isSeven(9)); 

// console.log(isSeven(7))


// //At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

// //You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers only, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array with [youngest age, oldest age, difference between the youngest and oldest age].



// function ss(hello){
//     const Maximumnum = Math.max(...hello);
//      const Minumumnum= Math.min(...hello);
//   return [Minumumnum, Maximumnum, (Maximumnum-Minumumnum)];

// }

// console.log(ss([82, 15, 6, 38, 35]))
// =======
//     //Factorization num

//     const Factorization=(num)=>{
//         var result=1;
//         for (let i = 1; i <=num; i++) {
//             result*=i;
            
//         }
//         return result;
//     }

//     console.log(Factorization(3));

//   //converting Minutes into Numbers

//   function convert(minutes) {
// 	 return minutes*60
// }
//   console.log(convert(10));
// >>>>>>> main

// In this series we're going to see common redundancies and superfluities that make our code unnecessarily complicated and less readable, and we're going to learn how to avoid them.

// In line with the spirit of the series, we can summarize the general rules of minimalist code in two simple principles:

// Keep your code clean and readable.
// While not violating the first principle: get rid of everything superfluous.
// In order to achieve this you should:

// Deepen your knowledge of logics.
// Deepen your understanding of the particular language you're coding with.
// I would also add: observe and learn from the pros. Make a habit of checking the Solutions tab after solving a challenge on Edabit. There is absolutely nothing wrong in assimilating features of someone else's coding style, especially if yours is not yet fully developed.

// Goal
// In the Code tab you will find a code that is missing a single character in order to pass the tests. However, YOUR GOAL is to submit a function as minimalist as possible. Use the tips in the Tips section down below.

// Write a function that returns true if the given integer is even, and false if it's odd.

// Tips
// Using an if statement in order to return boolean or to set a variable to a boolean is redundant.

// A function that returns true if a person's age is 18 or greater and false otherwise, could be written as:

// function legalAge(age) {
//   if(age >= 18) {
//     return true
//   }
//   else {
//     return false
//   }
// }
// Notice that age >= 18 will already give us a boolean (true or false). This means that the function can be written in a much simpler and cleaner way:

// function legalAge(age) {
//   return age >= 18
// }
// Notes
// This is an open series: there isn't a definite list of features for the challenges. Please, do not hesitate to leave your suggestions in the Comment tab.
// Readability is indeed a subjective concept. Let's discuss it! Feel free to leave your opinion in the Comments tab.

function isEven(n) {
	return (n%2===0)
}

// nth of even number 

function nthEven(n) {
	return n*2-2;
}

nthEven(2)
