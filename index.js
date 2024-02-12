#!/usr/bin/env node

import { program } from "commander";     // commander js is the package we build cli apps with
import chalk from "chalk";              // chalk adds colors to our console logs
import inquirer from "inquirer";        // inquirer asks for user inputs
import ora from "ora";                 // add a spinner
import figlet from "figlet";           // Introduce with a big decorated title


console.log(chalk.yellow(figlet.textSync("My Node CLI", {horizontalLayout : "full"})));


program
    .version("1.0.0")
    .description("My node CLI")

// program.action(()=>{
//     inquirer
//         .prompt([
//             {
//                 type: "input",
//                 name: "name",
//                 message : "What is your name? "
//             },
//             {
//                 type: "list",
//                 name: "hunger",
//                 message: "Are you hungry? : ",
//                 choices : ["Yes", "No"]
//             },
//             {
//                 type: "list",
//                 name: "choice",
//                 message: "Okay then choose one from below : ",
//                 choices : ["Pizza", "Burger", "Pasta"]
//             }
//         ])
//             .then((result)=>{
//                 console.log(result)

//                 if(result.hunger === "Yes"){
//                     const spinner = ora(`Cooking ${result.choice}...`).start();

//                     setTimeout(()=>{
//                         spinner.color = "yellow"
//                         spinner.succeed(chalk.green("Done cooking!"));
//                     }, 3000);
//                 }

//             })
// })




program.action(()=>{
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message : "What is your name? "
            },
        ])
            .then((result)=>{
                inquirer.prompt([
                    {
                        type: "list",
                        name: "hunger",
                        message: `Are you hungry ${result.name}? : `,
                        choices : ["Yes", "No"]
                    },
                ]).then((result)=>{
                    if(result.hunger == "Yes"){
                        inquirer.prompt([
                            {
                                type: "list",
                                name: "choice",
                                message: "Okay then choose one from below : ",
                                choices : ["Pizza", "Burger", "Pasta"]
                            }
                        ]).then((result)=>{
                            const spinner = ora(`Cooking ${result.choice}...`).start();

                            setTimeout(()=>{
                                spinner.color = "yellow"
                                spinner.succeed(chalk.green("Done cooking!"));
                                console.log(chalk.yellow("Bon appetit !"));
                            }, 3000);
                        })
                    } else {
                        console.log(chalk.yellow("Okay then, come back when you are!"))
                    }
                })

            })
})






program.parse(process.argv);