var employees = []
function Employee(name, job_title, salary, status = "Full Time"){
    this.name = name;
    this.job_title = job_title;
    this.salary = salary;
    this.status = status;
    this.printEmployeeForm = function (){
        console.log(this.name + this.job_title + this.salary + this.status)
    }
}



var thor = new Employee("Thor", "God", "Beer!")
var hulk = new Employee("Bruce", "smash", "$6/hour")
var ironMan = new Employee("Tony Stark", "Rich Guy", "all of it", "24/7")
hulk.printEmployeeForm();
ironMan.printEmployeeForm();
thor.printEmployeeForm();
employees.push(thor, hulk, ironMan);
console.log(thor);
// console.log(employees);

// function fish(){
//     for(i = 0; i < employees.length; i++){
//         console.log(i);
// }
// }