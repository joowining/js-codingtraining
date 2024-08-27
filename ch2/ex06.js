const readline = require('node:readline');
const {stdin: input, stdout: output} = require('node:process');

const rl = readline.createInterface({input, output});

let age = 0;
let retireAge = 0;
const currentYear = new Date().getFullYear();

rl.question("What is your current age? ", (answer) =>{
    age = Number(answer);
    rl.question("At what age would you like to retire? ",(ans)=>{
        retireAge = Number(ans);

        console.log(`You have ${retireAge - age} years left until you can retire.`);
        console.log(`It's ${currentYear}, so you can retire in ${currentYear+retireAge - age}.`);

        rl.close();
    });
});
