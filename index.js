const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
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
  // use the .map method on the tutorials to return a new array
  return tutorials.map(tutorial => {
    const words = tutorial.split(' '); //words = ['what', 'does', 'the', 'this', 'keyword', 'mean?']
    const capitalizedWords = words.map(word => {
      const char = word.split(''); //char = ['w', 'h', 'a', 't']
      return char[0].toUpperCase() + char.slice(1).join(''); //"W" + "hat"
    });
    return capitalizedWords.join(' ');
  });
}
