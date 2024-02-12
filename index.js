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

program.action(()=>{
    inquirer
        .prompt([
            {
                type: "list",
                name: "choice",
                message: "choose a food item : ",
                choices : ["Pizza", "Burger", "Pasta"]
            }
        ])
            .then((result)=>{
                const spinner = ora(`Cooking ${result.choice}...`).start();

                setTimeout(()=>{
                    spinner.succeed(chalk.green("Done cooking!"));
                }, 3000);

            })
})

program.parse(process.argv);