class Student {
  constructor(sId, sName) {
    this.id = sId;
    this.name = sName;
    this.school = "Gazipur Cantt. School";
  }
}

const student1 = new Student(15, "Rahat");
const student2 = new Student(20, "jahan");
console.log(student1, student2);
console.log(student1.name, student2.name);
