let isDone: boolean = true;
const str: string = "hello";

let num: number = 2;
// const sum:number = 'sum number' // error not assignable

let arr: number[] = [1, 2, 3];
const strArr: Array<string> = ["hello", "world"];
const objArr: Array<object> = [{ item: "val1" }, { item: "val2" }];

const foo = (obj: object): void => {
  console.log(obj);
};

const boo = (obj: Object): void => {
  console.log(obj);
};

// foo('hi'); // error not assignable
boo("hi");

function foo2(a: number, b: number): number {
  return a + b;
}

const boo2 = (a: number, b: number): number => {
  return a + b;
};

let a: null = null;
// let x: null = 2; // errror not assignable

let b: undefined = undefined;
let y: undefined = null; // not assignable

let myName: any = "gunmo";
let myNameLength: number = (<string>myName).length;

let yourName: any = "you";
let yourNameLength: number = (yourName as string).length;

const unknown: any = {
  name: "gunmo",
  age: 30,
  organization: "sopt",
  completion: [29, 30],
};

interface Sopt {
  name: string;
  age: number;
  organization: string;
  completion: number[];
}

const sopt: Sopt = {
  name: "gunmo",
  age: 30,
  organization: "sopt",
  completion: [29, 30],
};

const sopts: Sopt[] = [
  {
    name: "gunmo",
    age: 30,
    organization: "sopt",
    completion: [29, 30],
  },
  {
    name: "gunmo",
    age: 30,
    organization: "sopt",
    completion: [29, 30],
  },
  {
    name: "gunmo",
    age: 30,
    organization: "sopt",
    completion: [29, 30],
  },
];

interface Closet {
  name: string;
  shirt: number;
  pants: number;
  sunglass?: number;
  hat?: number;
}

const ohmygirl: Array<Closet> = [
  {
    name: "hyo",
    shirt: 5,
    pants: 2,
  },
  {
    name: "ye",
    shirt: 3,
    pants: 5,
    sunglass: 4,
  },
];

function greet() {
  return "hello";
}

function timer() {
  return setTimeout(() => {
    return "End";
  }, 3000);
}

greet();
timer();
