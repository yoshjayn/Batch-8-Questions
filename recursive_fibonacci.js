

//    const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
  
  function Fib_Recursive(n) {
    // write code here
    if(n==1){
        return 0
        }
        if(n==2){
          return 1
        }
       return Fib_Recursive(n-1)+Fib_Recursive(n-2)
  }
  
//   readline.question('', n => {
    console.log(Fib_Recursive(Number(5)));
//     readline.close();
//   });