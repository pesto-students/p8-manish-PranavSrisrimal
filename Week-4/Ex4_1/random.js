function getRandom(){
    setTimeout( function(){
        let x = Math.floor(Math.random() * 100);
        if (x % 5 == 0){
        return console.log(x);
        }
        else return console.log(x + " Not divisible by 5");
    }, 0)
}

getRandom();

//make a class 
class customPromise(){
    
}