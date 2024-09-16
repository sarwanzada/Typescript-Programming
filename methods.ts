  // push   method to add one or more elements to end of array 

  // let number:number[] = [1,2,3,4]
  // number.push(5)
  // console.log(`push method`)
  // console.log(number)
  const fruitspush = ['apple', 'banana'];
  const newLength = fruitspush.push('rice', 'grain');
  console.log(fruitspush); 
  console.log(newLength);

// map  it is used to transform array creates a new array by applying function to each exisiting array element

// let number1:number[] = [1,2,3,4,5,0]
// let doublenumber:number[] = number1.map(number1 =>number1*2)
// console.log(`map method`)
// console.log(number1)

const numbersmap = [1, 2, 3, 4];
const squares = numbersmap.map(num => num * num);
console.log(squares);

// pop used to remove or return last element

// let number2:number[] = [1,2,3,4]
// let lastnumber2:number | undefined = number.pop()
// console.log(`pop method`)
// console.log(number2)
// console.log(lastnumber2)
const fruitspop = ['apple', 'banana', 'cherry'];
const lastFruit = fruitspop.pop();
console.log(fruitspop); 
console.log(lastFruit); 

// filter it creates a new array bu specifying conditions and donot modifies the array
// let number3:number[] = [1,2,3,4,5,6]
// let evennumber3:number[] = number3.filter(num => num % 2 == 0)
// console.log(`filter method`)
// console.log(number3)

const numbersfilter = [1, 2, 3, 4, 5];
const evenNumbers = numbersfilter.filter(num => num % 2 === 0);
console.log(evenNumbers);
