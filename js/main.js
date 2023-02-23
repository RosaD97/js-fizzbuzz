'use sctrict';

// Numerazione da 1 a 100
for(let i = 1; i <= 100; i++ ){

    const div = document.querySelector(".bigContainer")
    const divContainer = document.createElement('div');
    divContainer.append(i);
    div.append(divContainer);

    if ((i % 3 == 0) && (i % 5 == 0)){
        let i = ('FizzBuzz');
        divContainer.innerHTML = i;
    }else if(i % 3 == 0){
        divContainer.innerHTML = 'Fizz';
    }else if(i % 5 == 0){
        divContainer.innerHTML = 'Buzz';
    }else {
        console.log(i);
    }
}




