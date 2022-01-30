/ 1)  How to compare two JSON have the same properties without order?

var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };

//console.log(JSON.stringify(obj1) === JSON.stringify(obj2));  false

const ordered1={};
const ordered2={};

Object.keys(obj1).sort().forEach(key => {
    ordered1[key]= obj1[key];
});

Object.keys(obj2).sort().forEach(key => {
    ordered2[key]= obj2[key];
});
//console.log(ordered1);
//console.log(ordered2);

console.log(JSON.stringify(ordered1) === JSON.stringify(ordered2));
