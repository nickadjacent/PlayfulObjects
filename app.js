var users = [{ name: "Michael", age: 37 }, { name: "John", age: 30 }, { name: "David", age: 27 }];

console.log(users[1].age)

console.log(users[0].name)

function namesandages(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i].name + '-' + arr[i].age)
    }
}

console.log(namesandages(users))