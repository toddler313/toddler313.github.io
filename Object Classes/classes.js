class Employee {

    name;
    age;
    address;
    salary;

    constructor (name, age, address, salary) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.salary = salary;
    }

    getName(){ return this.name };
    getAge(){ return this.age };
    getAddress(){ return this.address };
    getSalary(){ return this.salary };

    addPrintEmployee(){
        console.log('Name: '+ this.getName() + ' Age: ' +this.getAge() + ' Address: ' + this.getAddress() + ' Salary: ' +this.getAddress());
    }
}

class Engineer extends Employee {

    position;

    constructor(name,age,address,salary,position) {
        super(name,age,address,salary);
        this.position = position;
    }

    getPosition() {
        return this.position;
    }

    reviewSalary() {
        this.addPrintEmployee();
        console.log('And Position is: ' + this.getPosition());
    }
}

let en = new Engineer('Brian', 33, '123 abc', 5000, 'Software Engineer');
en.reviewSalary();