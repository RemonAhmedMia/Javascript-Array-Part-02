// sort() হলো JavaScript এর একটা Array method, যেটা array এর উপাদানগুলো alphabetical বা ascending order এ সাজায়।

const team = ["Rimon" , "Al-Amin" , "Badol" , "Shakib" , "Tamanna"];
const teamMember = team.sort();
console.log(teamMember);


// Ascending (ছোট → বড়):
// const num = [8,4,7,12,90,5,9];
// const num_acd =num.sort();
// console.log(num_acd);


const num = [8, 4, 7, 12, 90, 5, 9];

const num_acs = num.sort(function (a , b) {
  return a - b;
});

console.log(num_acs);

// sort(function(a, b) { return a - b })
//  যদি a < b, তাহলে a আগে থাকবে
//  যদি a > b, তাহলে b আগে থাকবে

// এভাবে সংখ্যাগুলো ছোট থেকে বড় (ascending) ক্রমে সাজানো হবে।


// Descending (বড় → ছোট):

const num_dcs = num.sort(function(a,b){
    return b-a;
})
console.log(num_dcs);