let units = {
    "zero":0,
    "one":1,
    "two":2,
    "three":3,
    "four":4,
    "five":5,
    "six":6,
    "seven":7,
    "eight":8,
    "nine":9,
    "ten": 10,
    "eleven":11,
    "twelve":12,
    "thirteen":13,
    "fourteen":14,
    "fifteen":15,
    "sixteen":16,
    "seventeen":17,
    "eighteen":18,
    "nineteen":19,


}

let tens = {

    "twenty":20,
    "thirty":30,
    "forty":40,
    "fifty":50,
    "sixty":60,
    "seventy":70,
    "eighty":80,
    "ninety":90,
}

let magnitude = {
    "hundred":100,
    "thousand":1000,
    "million":1000000
}

function getNumber (text) {
    let textArray = text.toLowerCase().replace(/ and /g, ' ').split(' ')
    let temp = null
    let result = 0
    for (let word of textArray) {
        if (units.hasOwnProperty(word)) {
            if (textArray.indexOf(word) === textArray.length - 1) {
                result += (temp === null) ? units[word] : temp + units[word]
            } else {
                temp = (temp === null) ? units[word] : temp + units[word]
            }
        } else if (tens.hasOwnProperty(word)) {
            if (textArray.indexOf(word) === textArray.length - 1) {
                result += units[word]
            } else {
                temp = tens[word]
            }
        } else if (magnitude.hasOwnProperty(word)) {
            result += magnitude[word] * temp
            temp = null
        } else {
            return 'wrong text'
        }
    }
    return result
}

console.log(getNumber('twenty one million twenty one thousand one hundred twenty two'))