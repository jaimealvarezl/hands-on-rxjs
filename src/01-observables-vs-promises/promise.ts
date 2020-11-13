const greetingPoster = new Promise((resolve, reject) => {
    console.log('Inside Promise (proof of being eager)');
    resolve('Welcome! Nice to meet you.');
});

console.log('Before calling then on Promise');

greetingPoster.then(res => console.log(`Greeting from promise: ${res}`));
