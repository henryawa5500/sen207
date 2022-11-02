const cars = "toyota"
console.log(cars)

let books = "Maths"
console.log(books)
var name = "Henry"
console.log(name)

let boy ="henry"
console.log("hello" + boy)

//check the value of a variable
console.log(typeof(boy))

let number = 12

const arr = ["henry", "victor", "peter"]

console.log(typeof(number))
console.log(typeof(arr))

const henry = {
    fristname : "awa",
    lastname : "peter",
    null : "henry@gmail.com"

}
console.log(henry.fristname)
const david = {
    name : "wawa",
    age : "17",
    country : "Nigeria",

}
console.log(david.name)
const car = {
    name : "toyota",
    model : "2020 model",
    weight : "500kg",
    color : "black",
    stop: function(){
        console.log("use the break button to stop the car")
    },
    break: function(){
        console.log("to use the break step on the break pad")
    },
    drive: function(){
        console.log("to drive please use the acclerator pad")
    },
    
}
console.log(car.model)
car.drive()

//define a student
const student = {
    name : "henry",
    regno: "vug/sen/21/6312",
    age: "17",
    bod: "7/08/05",
    skincolor: "brown",
    walks: function(){
        console.log("uses his leg to walk")
    },
    dances: function(){
        console.log("dances when music is played")
    },
    eats: function(){
        console.log("eats when hungry")
    },

}
console.log(student.name)
student.dances()
console.log(student)


const paul = ["orange","red"]
paul.push("babana")
console.log(paul)

const no = ["1","2","3","4","5"]
no.push("6","7","8","9","10")
console.log(no)