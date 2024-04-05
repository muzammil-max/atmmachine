#! /usr/bin/env node

import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";
import chalk from "chalk";

let flag = true;
let flag2 = true;
let count = 0;
const banner = "CLI ATM MACHINE";
const msg = "THANKS FOR USING OUR ATM MACHINE";
const warn = "YOUR CARD HAS BEEN BLOCKED";
chalkAnimation.rainbow(banner);
setTimeout(() => {
  console.log("Enter your username and your security PIN.");
}, 6000);

const userID = "muzammil";
const userPass = "1234";
//Balance
let myBalance: number = 50000;

//Main loop
while (flag2) {
  const userData = await inquirer.prompt([
    {
      name: "userName",
      type: "Input",
    },

    {
      name: "userPass",
      type: "number",
      message: "Enter your security pin:",
    },
  ]);

  if (userData.userName == userID && userData.userPass == userPass) {
    console.log(
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      chalk.cyan(`Welcome ${userData.userName}`)
    );
    //Seconadry loop
    while (flag == true) {
      const selectedFunction = await inquirer.prompt([
        {
          name: "myFunction",
          type: "list",
          message: "What you want to do ?",
          choices: [
            chalk.green("Deposit"),
            chalk.yellow("Withdraw"),
            chalk.blue("FastCash"),
            chalk.magentaBright("CheckBalance"),
            chalk.blueBright("Transfer"),
            chalk.cyanBright("Bill payment (coming soon)"),
            chalk.bgRed("Quit"),
          ],
        },
      ]);

      //Quit
      if (selectedFunction.myFunction === chalk.bgRed("Quit")) {
        console.log("");
        chalkAnimation.glitch(msg);
        setTimeout(() => {
          console.log("");
          console.clear();
        }, 6000);
        flag = false;
        flag2 = false;
      }

      //Deposit
      if (selectedFunction.myFunction === chalk.green("Deposit")) {
        const interface_deposit = await inquirer.prompt([
          {
            name: "myDeposit",
            type: "number",
            message: chalk.magentaBright("How much money you want to deposit"),
          },
        ]);

        if (interface_deposit.myDeposit > 0) {
          //Add money on deposit
          myBalance = myBalance + interface_deposit.myDeposit;
          console.log("");
          console.log(chalk.bgBlueBright(`Your Balance is :${myBalance}`));
        } else {
          console.log(chalk.red("Please enter a valid deposit amount."));
        }
      }

      //Withdraw
      if (selectedFunction.myFunction === chalk.yellow("Withdraw")) {
        const interface_withdraw = await inquirer.prompt([
          {
            name: "myWithdraw",
            type: "number",
            message: chalk.greenBright(
              "How much money you want to deposit ? (withdraw limit is 10,000) : "
            ),
          },
        ]);

        if (myBalance >= interface_withdraw.myWithdraw) {
          if (
            interface_withdraw.myWithdraw <= 10000 &&
            interface_withdraw.myWithdraw > 0
          ) {
            myBalance = myBalance - interface_withdraw.myWithdraw;
            console.log(
              chalk.yellowBright("---------------------------------")
            );
            console.log(
              "",
              "",
              "",
              "",
              "",
              "",
              chalk.yellow("Withdraw Successful!"),
              "",
              "",
              ""
            );
            console.log(
              chalk.yellowBright("---------------------------------")
            );
            console.log(
              chalk.green(`Ammount withdraw: ${interface_withdraw.myWithdraw}`)
            );
            console.log(
              chalk.magenta(`Your remaining balance is : ${myBalance}`)
            );
            console.log("");
          } else {
            console.log(chalk.redBright("Invalid withdraw amount"));
          }
        } else {
          console.log(
            chalk.bgRedBright("Sorry but you have insufficient balance.")
          );
        }
      }

      //Fastcash
      if (selectedFunction.myFunction == chalk.blue("FastCash")) {
        const Fastcash = await inquirer.prompt([
          {
            name: "myFast",
            type: "list",
            message: chalk.greenBright(
              "Select which of the amount you want to withdraw."
            ),
            choices: ["1000", "3000", "5000", "7000", "10000"],
          },
        ]);

        if (myBalance > 0) {
          if (Fastcash.myFast == "1000") {
            if (myBalance >= 1000) {
              myBalance = myBalance - 1000;
              console.log(chalk.yellowBright("------------------------------"));
              console.log(
                chalk.yellowBright("", "", "", "", "", "Withdraw Succesful!")
              );
              console.log(chalk.yellowBright("------------------------------"));
              console.log(
                chalk.magenta(`Your remaining balance is: ${myBalance}`)
              );
            } else {
              console.log("");
              console.log(
                chalk.redBright("Withdraw failed due to insufficient balance !")
              );
            }
          } else if (Fastcash.myFast == "3000") {
            if (myBalance >= 3000) {
              myBalance = myBalance - 3000;
              console.log(chalk.yellowBright("------------------------------"));
              console.log(
                chalk.yellowBright("", "", "", "", "", "Withdraw Succesful")
              );
              console.log(chalk.yellowBright("------------------------------"));
              console.log(
                chalk.magenta(`Your remaining balance is: ${myBalance}`)
              );
            } else {
              console.log("");
              console.log(
                chalk.redBright("Withdraw failed due to insufficient balance!")
              );
            }
          } else if (Fastcash.myFast == "5000") {
            if (myBalance >= 5000) {
              myBalance = myBalance - 5000;
              console.log(chalk.yellowBright("------------------------------"));
              console.log(
                chalk.yellowBright("", "", "", "", "", "Withdraw Succesful")
              );
              console.log(chalk.yellowBright("------------------------------"));
              console.log(
                chalk.magenta(`Your remaining balance is: ${myBalance}`)
              );
            } else {
              console.log("");
              console.log(
                chalk.redBright("Withdraw failes due to insufficient balance!")
              );
            }
          } else if (Fastcash.myFast == "7000") {
            if (myBalance >= 7000) {
              myBalance = myBalance - 7000;
              console.log(chalk.yellowBright("------------------------------"));
              console.log(
                chalk.yellowBright("", "", "", "", "", "Withdraw Succesful")
              );
              console.log(chalk.yellowBright("------------------------------"));
              console.log(
                chalk.magenta(`Your remaining balance is: ${myBalance}`)
              );
            } else {
              console.log(
                chalk.redBright("Withdraw failed due to insuffient balance!")
              );
            }
          } else if (Fastcash.myFast == "10000") {
            if (myBalance >= 10000) {
              myBalance = myBalance - 10000;
              console.log(chalk.yellowBright("------------------------------"));
              console.log(
                chalk.yellowBright("", "", "", "", "", "Withdraw Succesful")
              );
              console.log(chalk.yellowBright("------------------------------"));
              console.log(
                chalk.magenta(`Your remaining balance is: ${myBalance}`)
              );
            } else {
              console.log("");
              console.log(
                chalk.redBright("Withdraw failed due to insufficient balance!")
              );
            }
          }
        } else {
          console.log(
            chalk.redBright(
              chalk.italic("Sorry but you have inssuficient balance")
            )
          );
        }
      }

      //CheckBalance
      if (selectedFunction.myFunction == chalk.magentaBright("CheckBalance")) {
        console.log(
          chalk.yellowBright(
            "-------------------------------------------------"
          )
        );
        console.log(
          chalk.yellowBright(``, ``, ``, ``, `Account Holder: ${userID}`)
        );

        console.log(
          chalk.yellowBright(``, ``, ``, `Card number: XXXX-XXXX-XXXX-XXX`)
        );
        console.log(
          chalk.yellowBright(``, ``, ``, `Account created: 10/3/2004`)
        );
        console.log(
          chalk.yellowBright(
            "-------------------------------------------------"
          )
        );
        console.log("");
        console.log(chalk.bgBlue(`Your current balance is: ${myBalance}`));
        console.log("");
      }

      // Transfer

      if (selectedFunction.myFunction == chalk.blueBright("Transfer")) {
        const transfer = await inquirer.prompt([
          {
            name: "name",
            type: "string",
            message: chalk.whiteBright(
              "Enter the person's username whom you want to transfer money:"
            ),
          },

          {
            name: "money",
            type: "number",
            message: chalk.cyan(
              "Enter amount you want to transfer (You can only transfer money within 30000):"
            ),
          },
        ]);
        if (transfer.money > 0 && transfer.money <= 30000) {
          if (myBalance >= transfer.money) {
            myBalance = myBalance - transfer.money;
            console.log(
              chalk.greenBright("-------------------------------------")
            );
            console.log(
              chalk.greenBright("", "", "", "", "TRANSACTION SUCCESSFUL")
            );
            console.log(
              chalk.greenBright("-------------------------------------")
            );

            console.log("");
            console.log(
              "-------------------------------------------------------------"
            );
            console.log(chalk.blueBright(`Sender's name: ${userID}`));
            console.log(chalk.blueBright(`Receiver's name: ${transfer.name}`));
            console.log(
              "-------------------------------------------------------------"
            );

            console.log("");

            console.log(
              chalk.bold(chalk.green(`Amount transfered: ${transfer.money}`))
            );

            console.log(
              chalk.blueBright(`Your remaaining balance is: ${myBalance}`)
            );
            console.log("");
          } else {
            console.log(
              chalk.redBright("-------------------------------------")
            );
            console.log(
              chalk.redBright(
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "TRANSACTION FAILED!"
              )
            );
            console.log(
              chalk.redBright("-------------------------------------")
            );

            console.log(chalk.whiteBright("Reason: Insufficient Balance!"));
          }
        } else {
          console.log(chalk.redBright("Please a valid transfer amount!"));
        }
      }

      if (
        selectedFunction.myFunction ==
        chalk.cyanBright("Bill payment (coming soon)")
      ) {
        console.log(
          chalk.bold(
            chalk.yellow("Sorry this is option is not avalaible right now")
          )
        );
      }
    }
  } else {
    count = count + 1;

    console.log(
      chalk.bgRed("Invalid username or security pin. Please try again")
    );
  }

  if (count == 3) {
    console.log("");
    chalkAnimation.glitch(warn);
    setTimeout(() => {
      console.log(
        chalk.cyanBright("Please visit our branch to get your card unblocked.")
      );
      console.clear();
    }, 4000);

    flag2 = false;
  }
}

//Interface
// Fast cash
//Withdraw
// Check balance
//Deposit
// Transfer
// NEW!! Bill payment
