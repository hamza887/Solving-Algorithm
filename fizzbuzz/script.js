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