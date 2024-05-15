let input = "Does this work?";

let vowels = ["a", "e", "i", "o", "u"];

let returnArr = [];

// looping through input
for (let i = 0; i < input.length; i++) {
    let inputIndex = input[i]
    // console.log(inputIndex)
    
    // looping through vowels
    for (let j = 0; j < vowels.length; j++) {
        let vowelsIndex = vowels[j]
        // console.log(vowelsIndex)

        if (inputIndex === vowelsIndex) {
            if (inputIndex === "e" || inputIndex === "u") {
                returnArr.push(inputIndex, vowelsIndex)
            } else {
                returnArr.push(inputIndex)
            }
        }
    }
}

console.log(returnArr.join("").toLowerCase());