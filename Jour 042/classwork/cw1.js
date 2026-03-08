// 1) შექმენით ობიექტი სახელად robot რომელშიც დაამატებთ შესაბამის კუთვნილებებს, შემდეგ შეცვალეთ, დაამატეთ და წაშალეთ რომელიმე კუთვნილება. (კომენტარებით ახსენით რა არის ობიექტი)


// აბოექტი არის მონაცემთა ისეთი სტრუქტურა რომელში key და value წყვილებით ინახება ინფორმაცია 

let robot = {
    name: 'Cereza',
    version: 2.2,
    height: '200cm'
}

robot.color = 'green';
robot['battary life'] =' 99%';
robot.version = '3.2'
delete robot.height

console.log(robot)