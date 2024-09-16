// let myname = "John"
// let fname="Steve"
// let fullname = myname+fname
// console.log(fullname);

// // string Initialization 

// let sentence:string = "Name"
// let sentencelength=sentence.length;
// console.log(sentencelength);

// let text:string = "Welcome to TS ."
// let uppercaseText:string=text.toUpperCase();
// let lowercaseText:string=text.toLowerCase();
// console.log(uppercaseText);
// console.log(lowercaseText);

// let longText:string="These are the basics of typescript";
// let shortText:string=longText.substring(0.10);
// console.log(shortText)

// let str1:String = "John";
// let str2:String = "Snow";
// let areEqual:Boolean = (str1 == str2)
// console.log(areEqual);

// let product:string = "GOLD";
// let price:number = 2000;
// let details:string = `${product} is priced at ${price} dollars`;
// console.log(details);

//calculateAverage that takes an array of numbers as a parameter and returns the average of those numbers. 
function calculateAverage(numbers: number[]): number {
    if (numbers.length === 0) {
        return 0; // Return 0 if the array is empty
    }
    const sum = numbers.reduce((acc, num) => acc + num, 0);

    return sum / numbers.length;
}

const nums = [10, 20, 30, 40, 50];
console.log(calculateAverage(nums));



