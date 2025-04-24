const students = [
    { name: 'John', grade: 7.3, scholar: false },
    { name: 'Mary', grade: 9.2, scholar: true },
    { name: 'Peter', grade: 9.8, scholar: false },
    { name: 'Anna', grade: 8.7, scholar: true }
  ]
  
  console.log(students.map(s => s.grade))
  
  const total = students
    .map(s => s.grade)
    .reduce((acc, current) => {
      console.log(acc, current)
      return acc + current
    }, 0)
  
  console.log(total)

  
  Array.prototype.myReduce = function(callback, initialValue) {
    const startIndex = initialValue !== undefined ? 0 : 1
    let acc = initialValue !== undefined ? initialValue : this[0]
  
    for (let i = startIndex; i < this.length; i++) {
      acc = callback(acc, this[i], i, this)
    }
  
    return acc
  }
  
  const add = (a, b) => a + b
  const numbers = [1, 2, 3, 4, 5, 6]
  
  console.log(numbers.myReduce(add, 21))
  