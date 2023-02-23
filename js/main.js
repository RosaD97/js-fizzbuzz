'use sctrict';

// Numerazione da 1 a 100
for(let i = 1; i <= 100; i++ ){
    if ((i % 3 == 0) && (i % 5 == 0)){
        let i = ('FizzBuzz');
        console.log(i);
    }else if(i % 3 == 0){
        console.log('fizz');
    }else if(i % 5 == 0){
        console.log('Buzz');
    }else {
        console.log(i);
    }
        const main = document.querySelector(".bigContainer")
        const div = document.createElement('div');
        div.append(i);
        main.append(div);
}


