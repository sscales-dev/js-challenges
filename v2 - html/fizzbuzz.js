function fizzBuzz(num) {
    const input = parseInt(num, 10)
    for(i = 1; i < input + 1; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            var output = "Fizz Buzz";
        } else if (i % 5 == 0) {
            var output = "Buzz";
        } else if (i % 3 == 0) {
            var output = "Fizz";
        } else {
            var output = i;
        }
        document.getElementById("display").innerHTML += "<br>" + output;
    }

}