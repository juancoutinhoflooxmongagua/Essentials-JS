const http = require('http')

const fetchClass = letter => {
  const link = `http://files.cod3r.com.br/curso-js/turmas/${letter}.json`
  return new Promise((resolve, reject) => {
    http.get(link, res => {
      let data = ''

      res.on('data', chunk => {
        data += chunk
      })

      res.on('end', () => {
        try {
          resolve(JSON.parse(data))
        } catch (err) {
          reject(err)
        }
      })
    })
  })
}

const allNames = []

fetchClass('A')
  .then(students => {
    allNames.push(...students.map(s => `A: ${s.nome}`))
    return fetchClass('B')
  })
  .then(students => {
    allNames.push(...students.map(s => `B: ${s.nome}`))
    return fetchClass('C')
  })
  .then(students => {
    allNames.push(...students.map(s => `C: ${s.nome}`))
    console.log(allNames)
  })
  .catch(err => console.error('Failed to fetch classes:', err))
