const obj = { a: 1, b: 2, c: 3}
console.log(Object.values(obj))
console.log(Object.values(obj))


const name = 'carla'

const people = {
    name, 
    ola(){
        return 'Olá'
    }
}

console.log(people.name, people.ola())


class Animal {}

class Dog extends Animal {
    latir(){
        return 'AUAU'
    }
}

console.loh(new Dog().latir())

