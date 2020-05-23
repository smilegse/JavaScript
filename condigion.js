
function greeting(){
    var greetings;
    var time = new Date().getHours();
    if(time < 10){
        greetings = "Good Moorning...";
    }else if (time < 20) {
        greetings = "Good Day...";
    }else{
        greetings = "Good Evening...";
    }
    return greetings;
}

console.log(greeting());
