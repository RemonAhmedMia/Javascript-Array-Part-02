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



