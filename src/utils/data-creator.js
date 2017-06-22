import * as uuid from 'uuid'

const msPerCharacter = 60

export function message (message) {
  return [
    ...writing((message.length * msPerCharacter) / Math.max(1, Math.log(message.length))),
    { id: uuid.v4(), type: 'message', message }
  ]
}

export function choice ({ question, options, property = null}) {
  return [
    ...message(question),
    { id: uuid.v4(), type: 'choice', question, options }
  ]
}

export function userInput ({ type }) {
  return [
    { id: uuid.v4(), type: 'userInput', inputType: type }
  ]
}