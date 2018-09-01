function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}


function nowServing(line) {
  if (line.length > 0) {
    return `Currently serving ${line.shift()}.`
  } else {
    return 'There is nobody waiting to be served!'
  }
}


function currentLine(line) {
  if (line.length > 0) {
    // const queue = []
    // for (let i = 0; i < line.length; i++) {
    //   queue.push(`${i+1}. ${}`)
    // }
    return `The line is currently: 1. ${line.toString().split().join(`, ${1++}. `)}`
  } else {
    return 'The line is currently empty.'
  }
}
