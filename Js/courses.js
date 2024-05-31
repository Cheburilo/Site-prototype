
//up char block
function upChar(symboll) {
    return symboll[0].toUpperCase() + symboll.slice(1);
}
console.log(upChar("Вася"));

//check spam block

function checkSpam(str) {
    str = str.toLowerCase();
    if (str.includes("1xbet"))
        return true;
    else if (str.includes("xxx"))
        return true;
    return false;
}

console.log(checkSpam('1XbeT now') === true);
console.log(checkSpam('free xxxxx') === true);
console.log(checkSpam('innocent rabbit') === true);

//truncate block

function truncate(str, maxlength) {
    if (str.length <= maxlength)
        return str;
    return str.slice(0, maxlength - 1) + "…";
}

console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20));
console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20) === 'Вот, что мне хотело…');
console.log(truncate('Всем привет!', 20) === 'Всем привет!');

// sum salary block

let salaries = {
    month: 'December',
    currency: 'USD',
    isPayed: false
};

function sumSalary(salaries) {
    let sum = 0;
    for (let x in salaries) {
        if ((Infinity > salaries[x]) && (salaries[x] > -Infinity) && !(isNaN(salaries[x])) && (typeof (salaries[x]) == typeof (sum)))
            sum += salaries[x];
    }
    return sum;
}
console.log(sumSalary(salaries));

//empty object block 

function isEmpty(obj) {
    let i = 0;
    for (x in obj) {
        i++;
    }
    if (i == 0)
        return true;
    return false;
}
let schedule = {};

console.log(isEmpty(schedule)); // true

schedule["8:30"] = "подъём";

console.log(isEmpty(schedule)); // false

//calculator block

let calculator = {
    read(number1, number2) {
        this.number1 = number1;
        this.number2 = number2;
    },
    sum() {
        return this.number1 + this.number2;
    },
    mul() {
        return this.number1 * this.number2;
    },
};
calculator.read(3, 5);
console.log(calculator.sum()); // 8
console.log(calculator.mul()); // 15

//namify block

let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 28 };

let user = [vasya, petya, masha];

function namify(users) {
    return users.map(user => user.name);
}
let names = namify(users);
console.log(names);

//filter block

let arr = [5, 3, 8, 1];
function filterRange(arr, a, b) {
    return arr.filter(item => item >= a && item <= b);
}

let filtred = filterRange(arr, 5, 3);

console.log(filtred);
console.log(arr);

//camelize block

function camelize(str) {
    str = str.split('-');
    for (let i = 1; i < str.length; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].slice(1);
    }
    return str.join('');
}

console.log(camelize('background-color') == 'backgroundColor');
console.log(camelize('list-style-image') == 'listStyleImage');
console.log(camelize('-webkit-transition') == 'WebkitTransition');

//show salary block

let user1 = {
    "balance": "$1,825.65",
    "picture": "https://placehold.it/32x32",
    "age": 21,
    "name": "Golden Branch",
    "gender": "male",
    "greeting": "Hello, Golden Branch! You have 7 unread messages.",
    "favouriteFruit": "banana"
};
let user2 = {
    "balance": "$1,825.65",
    "picture": "https://placehold.it/32x32",
    "age": 21,
    "name": "Golden Branch",
    "gender": "male",
    "greeting": "Hello, Golden Branch! You have 7 unread messages.",
    "favouriteFruit": "banana"
};
let user3 = {
    "balance": "$1,825.65",
    "picture": "https://placehold.it/32x32",
    "age": 45,
    "name": "Golden Branch",
    "gender": "male",
    "greeting": "Hello, Golden Branch! You have 7 unread messages.",
    "favouriteFruit": "banana"
};
let users = [user1, user2, user3];

function showSalary(users, age) {
    let filterUsers = users.filter(user => user.age <= age);
    let finalListsUsers = [];
    for (let i = 0; i <= filterUsers.length; i++) {
        finalListsUsers[i] = filterUsers[i].name + filterUsers[i].balance;
    }
    return finalListsUsers;
}
console.log(showSalary(users, 30));