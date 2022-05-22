let Units_And_Tens = {
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
    "twenty":20,
    "thirty":30,
    "forty":40,
    "fifty":50,
    "sixty":60,
    "seventy":70,
    "eighty":80,
    "ninety":90
}

let Large_Num = {
    "hundred":100,
    "thousand":1000,
    "million":1000000
}

function getNumber(text) {
    let wordArray = text.toLowerCase().toString().split(/[\s-]+/);
    let result = 0;
    let acc = 0;
    wordArray.forEach(function(textNumber){
        let num = Units_And_Tens[textNumber];
        if (num != null) {
            acc = acc + num;
        }
        else if (textNumber === "hundred") {
            acc = acc * 100;
        }
        else {
            let large_num = Large_Num[textNumber];
            if (large_num!=null) {
                result = result + acc * large_num;
                acc = 0;
            }
        }
    });
    return acc + result;
}

console.log(getNumber('twenty one'))