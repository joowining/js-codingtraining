const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({input, output});

const words = [];
const questionWord = ["noun","verb","adjective","adverb"];

let count = 0;
function askQuestion(word){
    if(count < 4){
        rl.question(`Enter a/an ${word}: `,(answer)=>{
            words.push(answer);
            count++;
            askQuestion(questionWord[count]);
        });
    } else {
        console.log(`Do you ${words[1]} your ${words[2]} ${ words[0]} ${words[3]}? That's hilarious!`);

        rl.close();
    }
}

askQuestion(questionWord[count]);
