const readline = require('node:readline');
const { stdin: input, stdout: output} = require('node:process');

const rl = readline.createInterface({input, output});

rl.question("WHat is the input string? ", (answer) => {
    console.log(`${answer} is ${answer.length} characters`);

    rl.close();
});
