function speakAfter(seconds, message) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(message)
      }, seconds * 1000)
    })
  }
  
  speakAfter(3, 'FOI')
    .then(msg => msg.concat('?!?!')).then(finalMsg => console.log(finalMsg)).catch(err => console.log(err))
  