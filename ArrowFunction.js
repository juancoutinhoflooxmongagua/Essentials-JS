let dobro = function (a) {

}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a
console.log(dobro(Math.PI))

let hello = function() {
    return 'hELLO'
}

hello = () => 'Hello'
hello = _ => 'Hello'


function Person() {
    this.age = 0 

    setInterval(() => {
        this.age++

        console.log(this.age)


    }, 1000)
}
