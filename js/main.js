'use sctrict';

// Numerazione da 1 a 100
for(let i = 1; i <= 100; i++ ){
    if ((i % 3 == 0) && (i % 5 == 0))
    console.log('FizzBuzz');
     else if(i % 3 == 0){
            console.log('fizz');
        }
    else if(i % 5 == 0){
            console.log('Buzz');
        }
        console.log(i);

}

