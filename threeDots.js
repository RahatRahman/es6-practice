const ages = [12, 15, 18, 20, 25];
const ages2 = [14, 16];
const ages3 = [24, 26, 38, 40];
const allAges = ages.concat(ages2).concat([10]).concat(ages3);
const allAges2 = [...ages, ...ages2, 5, ...ages3];

// console.log(allAges2);

const business = 650;
const minister = 450;
const shochib = 250;
const takaPoisha = [850, 250, 450, 650];
// const maximum = Math.max(business, minister, shochib);
const maximum = Math.max(...takaPoisha);
console.log(maximum);
