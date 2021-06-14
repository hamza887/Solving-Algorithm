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
