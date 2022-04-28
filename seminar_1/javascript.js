var variable1 = "var variable";
var variable1 = "new var variable";

console.log("var: ", variable1);

let variable2 = "let variable";

console.log("let: ", variable2);

const variable3 = "const variable";
const variable3 = "new const variable";

console.log("const: ", variable3);

var variable1 = "var variable";
variable1 = "new variable";

console.log("var: ", variable1);

let variable2 = "let variable";
variable2 = "new variable";

console.log("let: ", variable2);

const variable3 = "const variable";
// variable3 = "new variable"; //error

if (true) {
  var x = "var";
}

console.log(`var: ${x}`); // function scope

if (true) {
  let y = "let";
}

// console.log(`let: ${y}`);  // error y is block scope

function foo() {
  if (true) {
    var variable = "hello";
    console.log(`if block - `, variable);
  }
  console.log(`function block - ${variable}`);
}

// console.log(`global - ${variable}`) // error variable is no define

let numArr = [1, 2, 3];
const newArr = numArr.map((x) => x * 2);

console.log(newArr);

const sopt = {
  season: 30,
  group: ["YB", "OB"],
  part: ["server", "plan", "design", "android", "ios", "web"],
  president: "김규민",
  introduce: function () {
    this.part.map((name) => {
      console.log(`솝트 내 파트는 ${name} 파트가 있어요.`);
    });
  },
};

let arr = [1, "item", true];
let arr2 = Array(4, null, { item: "item" });

arr.map((item) => console.log(item));
arr2.map((item) => console.log(item));

function sum(a, b) {
  return a + b;
}

let sum = (a, b) => {
  return a + b;
};
