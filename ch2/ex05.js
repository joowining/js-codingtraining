const readline = require('node:readline');
const {stdin: input, stdout: output} = require('node:process');

const rl = readline.createInterface({input, output});

let a = 0;
let b = 0;

rl.question("What is the first number? ", (answer)=>{
    a = Number(answer);
    rl.question("What is the second number? ", (ans)=>{
        b = Number(ans);
        
        console.log(`${a} + ${b} = ${a+b}${"\n"}${a} - ${b} = ${a-b}${"\n"}${a} * ${b} = ${a*b}${"\n"}${a} / ${b} = ${a/b}`);

        rl.close();
    })
});
