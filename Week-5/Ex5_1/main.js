function* getRandom(){
    yield Math.floor(Math.random() * 100);

    yield Math.floor(Math.random() * 10);
}

function doTask1(){
    return new Promise((resolve, reject) => {
        let n = getRandom();
        let sum = 0;
        for(ele of n){
            sum += ele
        }
        if (sum % 2 == 0){
            resolve(`Task 1 completed : ${sum} is divisible by 2`)
        }
        else {
            reject(`Task 1 failed : ${sum} is not divisible by 2`)
        }
    });
}

function doTask2(){
    return new Promise((resolve, reject) => {
        let n = getRandom();
        let sum = 0;
        for(ele of n){
            sum += ele
        }
        if (sum % 5 == 0){
            resolve(`Task 2 completed : ${sum} is divisible by 5`)
        }
        else {
            reject(`Task 2 failed : ${sum} is not divisible by 5`)
        }
    });
}

function doTask3(){
    return new Promise((resolve, reject) => {
        let n = getRandom();
        let sum = 0;
        for(ele of n){
            sum += ele
        }
        if (sum % 7 == 0){
            resolve(`Task 3 completed : ${sum} is divisible by 7`)
        }
        else {
            reject(`Task 3 failed : ${sum} is not divisible by 7`)
        }
    });
}
