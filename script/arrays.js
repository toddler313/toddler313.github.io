//Array Loops
//for (obj in Objects) => obj is an index only
let fruits = ['apple', 'orange', 'banana', 'grape', 'kiwi'];
for (let f in fruits) {
    if (fruits[f] == 'banana') {
        console.log('I luv Banana!');
    }else {
        console.log('No I do not like ' + fruits[f]);
    }
}

//for (obj of Objects) => obj is the item
for (let f of fruits) {
    if (f == 'banana') console.log('I luv ' + f);
    else console.log('I hate ' + f);
}

console.log(fruits);
console.log(fruits[3]);
fruits[3] = 'UNKNOWN';
console.log(fruits[3]);

console.log('//====================================');

let cars = new Array('ferarri', 'lamborghini', 'bmw', 'porsche');
console.log(cars[2])
cars[2] = 'UKNOWN'
console.log(cars[2])

//add to last .push()
cars.push('honda');
//add to head .unshift()
cars.unshift('mustang')
//remove the last element .pop()
cars.pop();
//remove the first element .shift()
cars.shift();
console.log(cars)

delete(cars[1])
cars[2] = '';
console.log(cars)

//.splice(i,n,'str1','str2') : remove from index i for n items and push str1, str2 as replacements to those positions
cars.splice(1,2, 'car1', 'car2')
console.log(cars)

let stuff = cars.concat(fruits)
console.log(stuff)