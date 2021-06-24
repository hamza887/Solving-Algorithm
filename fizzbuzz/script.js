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

  const turtles=["donatello",'Leonardo','Raphael','Michel'];
    for (const hello of turtles) {
          console.log(hello.toUpperCase(turtles));
    }

    for (let i = 0; i <=20; i++) {
        if(i%3===0){
            console.log('human stop taking pics of me');
        }else{
            console.log('Love me,pet me !HSSSSSSS')
        }
        
    }

//function returns true if and only if x is equal to 7.

function isSeven(x) {
	return x=="7"?true:false;
}

console.log(isSeven(9)); 

console.log(isSeven(7))


//At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

//You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers only, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array with [youngest age, oldest age, difference between the youngest and oldest age].



function ss(hello){
    const Maximumnum = Math.max(...hello);
     const Minumumnum= Math.min(...hello);
  return [Minumumnum, Maximumnum, (Maximumnum-Minumumnum)];

}

console.log(ss([82, 15, 6, 38, 35]))
