let input = 6
for(i = 1; i < input + 1; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz")
    } else if (i % 5 == 0) {
        console.log("Buzz")
    } else if (i % 3 == 0) {
        console.log("Fizz")
    } else console.log(i)

}