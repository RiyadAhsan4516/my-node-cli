#!/usr/bin/env node

import { program } from "commander";     // commander js is the package we build cli apps with
import chalk from "chalk";              // chalk adds colors to our console logs
import inquirer from "inquirer";        // inquirer asks for user inputs
import ora from "ora";                 // add a spinner
import figlet from "figlet";           // Introduce with a big decorated title


console.log(chalk.cyanBright(figlet.textSync("Riyad's Restaurant", {horizontalLayout : "full"})));


program
    .version("1.0.0")
    .description("My node CLI")

program.action(()=>{
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message : chalk.yellowBright("What is your name? : ")
            },
        ])
            .then((result)=>{
                inquirer.prompt([
                    {
                        type: "list",
                        name: "hunger",
                        message: chalk.cyanBright(`Are you hungry ${result.name}? : `),
                        choices : ["Yes", "No"]
                    },
                ]).then((result)=>{
                    if(result.hunger == "Yes"){
                        inquirer.prompt([
                            {
                                type: "list",
                                name: "choice",
                                message: chalk.blueBright("Okay then choose one from below : "),
                                choices : ["Pizza", "Burger", "Pasta"]
                            }
                        ]).then((result)=>{
                            const spinner = ora(`Cooking ${result.choice}...`).start();
                            spinner.color = "red"

                            let dish = result.choice;
                            let emoji;
                            if(dish === "Pizza"){
                                emoji = '🍕'; 
                            } else if (dish === 'Burger'){
                                emoji = '🍔';
                            } else {
                                emoji = '🍝';
                            }

                            setTimeout(()=>{
                                spinner.color = "yellow"
                                spinner.succeed(chalk.green("Done cooking!"));
                                console.log(chalk.magenta(`Here's your ${dish} : ${emoji}`))
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