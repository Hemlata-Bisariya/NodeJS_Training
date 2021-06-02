/*
const party = {
  name: "Birthday party",
  printGuestList: () => {
    console.log("guest list for " + this.name); //guest list for undefined
  },
};
party.printGuestList();

Arrow functions don’t bind their own this value.
Instead, the this value of the scope in which it was defined is accessible.
This makes arrow functions bad candidates for methods, 
as this won’t be a reference to the object the method is defined on.

*/

const party = {
  name: "Birthday Party",
  guestList: ["Hemlata", "Sumit", "Sonu"],
  printGuestList() {
    console.log("Guest list for " + this.name);

    this.guestList.forEach((guest) => {
      console.log(guest + " is attending " + this.name);
    });
  },
};
party.printGuestList();
