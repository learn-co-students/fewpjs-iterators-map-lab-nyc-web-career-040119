const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(title => {
    // return titleizeStr(title)
    return title.split(' ').map(word => (
      word[0].toUpperCase() + word.substr(1)
    )).join(' ')
  })
}

// I DID TOO MUCH WORK HERE
const titleizeStr = str => {
  const exceptions = [ 'a', 'an', 'the', 'at', 'by', 'for', 'in', 'of', 'on', 'to', 'up', 'and', 'as', 'but', 'or', 'nor']
  str = str.split(' ')

  for (const i in str) {
    // console.log(i, typeof i)
    if (!exceptions.includes(str[i]) && i != "0") {
      str[i] = str[i][0].toUpperCase() + str[i].substr(1)
    }
  }

  return str.join(' ')
}
