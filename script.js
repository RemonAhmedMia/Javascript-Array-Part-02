const friends = ["Elon" , "Faruk" , "Bill" , "Mark" , "Sania" , "Anika"];
for(const friend of friends) {
    //console.log(friend); sob gula value dhekabe
}
for(let i = 0; i < 10; i++) {
    console.log(i);
    console.log(friends[i]);
}

for (let i = 0; i < friends.length; i ++) {
    console.log(i);
    console.log(friends[i]);
}


// Number diye find out

const numbers = [ 1, 2, 34, 84, 90, 36, 110];
for(let i = 0; i<numbers.length; i++) {
    console.log(numbers[i]);
}

// While Loop diye===

let i = 0;
while (i < friends.length) {
    console.log(friends[i]);
    i++
}

let n = 0;
while (i < numbers.length) {
    console.log(numbers[n]);
    
    i++
}