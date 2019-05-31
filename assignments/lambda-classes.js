// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
        this.name = attributes.name
        this.age =attributes.age
        this.location =attributes.location
        this.gender = attributes.gender
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}

class Instructor extends Person {
    constructor(attributes) {
        super(attributes)
        this.specialty = attributes.specialty
        this.favLanguage = attributes.favLanguage
        this.catchPhrase = attributes.catchPhrase
    }
    demo (subject) {
        console.log(`Today we are learning about ${subject}.`)
    }
    grade(student,subject) {
        console.log(`${student.name} receives a perfect score on ${subject}'`)
    }
}

class Student extends Person {
    constructor(attributes) {
    super(attributes)
    this.previousBackground = attributes.previousBackground
    this.className = attributes.className
    this.favSubjects = attributes.favSubjects
    }
    listSubjects() {
        this.favSubjects.forEach(subject => console.log(subject))
      }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`)
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}.`)
    }
}

class ProjectManager extends Person {
    constructor(attributes) {
        super(attributes)
        this.gradClassName = attributes.gradClassName
        this.favInstructor = attributes.favInstructor
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, '@channel standup time!​​​​​'`)
    }
    debugsCode(student,subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`)
    }
}


const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

const eric = new Student({
    name: 'Eric',
    location: 'Wisconsin',
    age: 41,
    favLanguage: 'JavaScript',
    specialty: 'Full-stack',
    favInstructor: 'Dan',  
    favSubjects: [
        'Math',
        'Science'        
      ],
})    

const divina = new ProjectManager({
    name: 'Divina',
    location: 'California',
    age: 20,
    gender: 'female' ,
    catchPhrase: 'How did tonight go?' 
})  

fred.demo('Banjo Playing')
divina.standUp('WebPT7')
eric.listSubjects()
eric.PRAssignment('JavaScript-IV')