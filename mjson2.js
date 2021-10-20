const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj.count);
// expected output: 42

console.log(obj.result);
// expected output: true

JSON.parse('{}');              // {}
JSON.parse('true');            // true
JSON.parse('"foo"');           // "foo"
JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
JSON.parse('null');            // null


JSON.parse('{"p": 5}', (key, value) =>
  typeof value === 'number'
    ? value * 2 // return value * 2 for numbers
    : value     // return everything else unchanged
);

// { p: 10 }

JSON.parse('{"1": 1, "2": 2, "3": {"4": 4, "5": {"6": 6}}}', (key, value) => {
  console.log(key); // log the current property name, the last is "".
  return value;     // return the unchanged property value.
});

// 1
// 2
// 4
// 6
// 5
// 3
// ""

// Use the JavaScript object in your page:
const obj1 = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
document.getElementById("demo").innerHTML = obj1.name;


const text1 = '["Ford", "BMW", "Audi", "Fiat"]';
const myArr = JSON.parse(text1);
console.log(myArr); // log the current property name, the last is

//convertir un string a fecha
const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const obj2 = JSON.parse(text);
obj2.birth = new Date(obj2.birth);

document.getElementById("demo").innerHTML = obj1.name + ", " + obj2.birth;