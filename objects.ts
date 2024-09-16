

// const student = {
// name: "sarwan",
// age: 22,
// grades:[10,20,30],
// subjects:["maths","english","physics"]
// };
// console.log(student.grades)
// console.log(student.subjects)

          // arrays with name updates

let names: string[] = ["Ali", "shan", "afaq"];

const Names = 3;

const newNames: string[] = ["zain", "aleem", "anees"];

for (let i = 0; i <Names; i++) {
    names.push(newNames[i]);
}

console.log(" list of updated new names");
names.forEach(name => console.log(name));


                      // mapping

                      [].map()