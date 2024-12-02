//  1
//  121
//  12321
//  1234321
//  12321
//  121
//  1
let n=3
let print=""

for(let i=1; i<=n; i++){
    for(let j=1; j<=i; j++){    //increasing
        print+=j+" "
    }
        for(let j=i-1; j>=1; j--){      //decreasing
            print+=j+" "
        }
        print+="\n"             //next line
}
//lower half
for(let i=n-1; i>=1; i--){
    
    for(let j=1; j<=i; j++){    //increasing
        print+=j+" "
    }
        for(let j=i-1; j>=1; j--) {     //decreasing
            print+=j+" "
        }
        print+="\n"
}   
    console.log(print)



