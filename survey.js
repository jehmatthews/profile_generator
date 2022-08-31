const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer1) => {
  console.log(`Thank you for your valuable feedback: ${answer1}`);
  rl.question(`What's your name? Nicknames are also acceptable :`, (answer2) => {
    console.log(`Thank you for inputing your name: ${answer2}`);
    rl.question('What do you listen to while studying?: ', (answer3) => {
      console.log(`Thank you for answering what you listen to: ${answer3}`);
      rl.question('Which meal is your favourite?: ', (answer4) => {
        console.log(`Thank you for answering which meal is your favourite: ${answer4}`);
        rl.question('Which sport is your absolute favourite?: ', (answer5) => {
          console.log(`Thanks for answering what your favourite sport is: ${answer5}`);
          rl.question('What is your superpower?: ', (answer6) => {
            console.log(`Thanks for answeing what your superpower is: ${answer6}`);
      
            
            console.log(`Hi my name is ${answer2}, this is what I think of node.js: ${answer1}.\n While I'm studying I like to listen to ${answer3}. \n For my favorite meal I really like to eat ${answer4}, especially when I'm my favourite sport: ${answer5}\n If I got to pick one superpower I would pick ${answer6}`);

            rl.close();
          });
        });
      });
    });
  });
});
