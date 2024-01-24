let idInterval
let counter = 1

function runTimer(){
    const time = (new Date()).toLocaleTimeString();
    counter++
    console.log(time);

    if(counter > 5 ){
        clearInterval(idInterval)
    }

    
}

idInterval = setInterval(runTimer, 5000);