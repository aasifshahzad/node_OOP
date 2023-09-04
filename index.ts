import inquirer from "inquirer";

class Student{
    name:string;
    constructor(name:string){
        this.name = name
    }

}

class Person {
    students:Student[] = [];

    addStudent(obj:Student){
        this.students.push(obj)
    }
}

const person = new Person();

console.log(person)

const programStart =  async (person:Person) => {
    do {
        console.log("Welcome");
    const answer = await inquirer.prompt(
        {
            type:"list",
            message:"To whom you want to talk ",
            name:"talkChoice",
            choices:["Self","Student"]
        }
    );
    if(answer.talkChoice == "Self"){
        console.log("Hello to self Exploration")
        console.log("I am talking to myself")
    }
    if(answer.talkChoice == "Student"){
        const studentName = await inquirer.prompt(
            {
                type: "input",
                message: "Enter Student Name: ",
                name:"name"
            }
        );
        let response = studentName.name;

        const findStudent = person.students.find((value)=> value.name == studentName.name);
        if (!findStudent){
            const name = new Student(response);
            person.addStudent(name)
            console.log(`Hello ${response}, How are you?`)
            console.log(person.students)
        }
        if (findStudent){
            console.log(`Hello ${findStudent.name}, How are you.............?`)
            console.log(person.students)
        }
    }
    } while (true);

}
programStart(person)