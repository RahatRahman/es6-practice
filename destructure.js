const person = {
  name: "Jack William",
  age: 18,
  job: "Developer",
  gfName: "Ema Watson",
  address: "Gulshan",
  phone: "01717001122",
  friends: ["Tom Hanks", "Tom Cruise", "John Cena"],
};

// const job = person.job;
// const address = person.address;

// const { job, address, age, salary } = person;
// const { address } = person;
// const { job } = person;

// console.log(job, address, age, salary);

const friends = ["Arman Khan", "Nasib Khan", "Salman Khan", "Amir Khan", "Shahrukh Khan"];
const [chotoFriend, nextFriend, ...restFriends] = friends;
console.log(chotoFriend, nextFriend);
console.log(restFriends);

const complexObject = {
  name: "abc",
  info: {
    address: "Gazipur",
    leader: "Powerful Leader",
  },
};

const { leader } = complexObject.info;
console.log(leader);
