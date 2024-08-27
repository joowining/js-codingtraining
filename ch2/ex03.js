const readline = require('node:readline');
const { stdin : input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output});

let quote = '';
let speaker = '';

rl.question('What is the quote?', (answer)=> {
    qutoe = answer
    rl.question("Who said it?", (ans)=>{
        speaker = ans;

        console.log(speaker + " says, " + "\"" + qutoe + ".\""); 

        rl.close();
    });
});


