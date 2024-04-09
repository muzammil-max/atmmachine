#! /usr/bin/env node

import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";
import chalk from "chalk";
import dateTime from "date-time";

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
let isPaid1: boolean = false;
let isPaid2: boolean = false;
let isPaid3: boolean = false;
let isPaid4: boolean = false;
//creating function for a random bill
function randomnumber(max: number) {
  return Math.floor(Math.random() * max);
}

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
          message: "What do you want to do ?",
          choices: [
            chalk.green("Deposit"),
            chalk.yellow("Withdraw"),
            chalk.blue("FastCash"),
            chalk.magentaBright("CheckBalance"),
            chalk.blueBright("Transfer"),
            chalk.cyanBright("Bill payment"),
            chalk.bgRed("Quit"),
          ],
        },
      ]);

      //Quit
      if (selectedFunction.myFunction === chalk.bgRed("Quit")) {
        console.log("");
        chalkAnimation.neon(msg);
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
              console.log("");
            } else {
              console.log("");
              console.log(
                chalk.redBright("Withdraw failed due to insufficient balance !")
              );
              console.log("");
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
          chalk.bold(
            chalk.yellow(``, ``, ``, `Your curent balance is : ${myBalance}`)
          )
        );
        console.log(
          chalk.yellowBright(
            "-------------------------------------------------------"
          )
        );
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
            console.log(chalk.blueBright(`Amount Sent by : ${userID}`));
            console.log(
              chalk.blueBright(`Amount received by : ${transfer.name}`)
            );
            console.log(
              "-------------------------------------------------------------"
            );

            console.log("");

            console.log(
              chalk.bold(chalk.green(`Amount transferred: ${transfer.money}`))
            );

            console.log(
              chalk.blueBright(`Your remaining balance is: ${myBalance}`)
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
            console.log("");
          }
        } else {
          console.log(chalk.redBright("Please a valid transfer amount!"));
          console.log("");
        }
      }
      if (
        selectedFunction.myFunction ==
        chalk.cyanBright("Bill payment")
      ) {
        const options = await inquirer.prompt([
          {
            name: "myOption",
            type: "list",
            message: "Select your bank through you want to pay your bill.",
            choices: [
              chalk.blueBright("United Bank Limited"),
              chalk.green("Habib Bank Limited"),
              chalk.magentaBright("Meezan Bank"),
              chalk.red("Bank-Alfala"),
              chalk.greenBright("Bank-Al-Habib"),
              chalk.grey("Sindh Bank"),
            ],
          },
        ]);
        if (options.myOption == chalk.grey("Sindh Bank")) {
          console.log("");
          console.log(
            chalk.yellowBright(
              "Sorry but the service of this bank is not avalaible right now !"
            )
          );
          console.log("");
          console.log("");
        } else if (
          options.myOption == chalk.blueBright("United Bank Limited") ||
          chalk.green("Habib Bank Limited") ||
          chalk.magentaBright("Meezan Bank") ||
          chalk.red("Bank-Alfala") ||
          chalk.greenBright("Bank-Al-Habib")
        ) {
          const bills = await inquirer.prompt([
            {
              name: "billtype",
              message: "Select which bill you want to pay ?",
              type: "list",
              choices: [
                chalk.blueBright("Electricity Bill"),
                chalk.cyanBright("Gas Bill"),
              ],
            },
          ]);
            // Electric Bill
          if (bills.billtype == chalk.blueBright("Electricity Bill")) {
            const bill01 = await inquirer.prompt([
              {
                name: "choices",
                type: "list",
                message: "What do you want to do ?",
                choices: [
                  chalk.greenBright("View Bill"),
                  chalk.blueBright("Pay Bill"),
                ],
              },
            ]);

            const bill1 = randomnumber(10000);
            // Pay bill
            if (bill01.choices == chalk.blueBright("Pay Bill") && isPaid1 == false) {
              if (myBalance > bill1) {
                isPaid1 = true;
                myBalance = myBalance - bill1;
          
                console.log(chalk.greenBright("", "", "", "", "", "", "BILL SUCCESSFULLY PAID FOR ELECTRIC"));
                console.log(chalk.greenBright("", "", "", "", "", "", `Bill amount: ${bill1}`))
                console.log(chalk.greenBright("", "", "", "", "", "", `Your Remaining balance is ${myBalance}`));
              } else {
                console.log("");
                console.log(
                chalk.redBright(
                  "","","","","","","","Bill payment failed due to insufficient balance!"
                )
              )
                console.log("");
                console.log(`Your balance: ${myBalance}`);
              }
            }
            else if (bill01.choices == chalk.blueBright("Pay Bill") && isPaid1 == true) {
              console.log("")
              console.log(chalk.greenBright("You have already paid for this bill"))
              console.log("")
            }
            else if (bill01.choices == chalk.greenBright("View Bill")) {
              if (isPaid1 == true) {
                console.log(chalk.yellow("|-------------------------------------------------------------------------------|"));
                console.log(chalk.yellow("|                         WELCOME TO XYZ ELECTRICITY                            |"))
                console.log(chalk.yellow(`|                                                                               |`))
                console.log(chalk.yellow("| > Consumer Name: Muzammil                                                     |"))
                console.log(chalk.yellow("| > Consumer Number: 57382-42985-4395-91-4                                      |"))
                console.log(chalk.yellow(`| > Amount to be paid: ${bill1}                                                  `))
                console.log(chalk.yellow(`| > Your Bill is PAID                                                           |`))
                console.log(chalk.yellow("| > Reading Taken on: 31/12/2024                                                |"))
                console.log(chalk.yellow("|                                                                               |"))
                console.log(chalk.yellow("|                                                                               |"))
                console.log(chalk.yellow("|  DUE DATE: 11 / 1 / 2024                                                      |"))
                console.log(chalk.yellow("|                                                                               |"))
                console.log(chalk.yellow("|                                                                               |"))
                console.log(chalk.yellow("| > Please ensure that you have paid the bill before due date to avoid issues   |"))
                console.log(chalk.yellow("|                                                                               |"))
                console.log(chalk.yellow("|-------------------------------------------------------------------------------|"))
              }

              else {
                console.log(chalk.yellow("|-------------------------------------------------------------------------------|"));
                console.log(chalk.yellow("|                         WELCOME TO XYZ ELECTRICITY                            |"))
                console.log(chalk.yellow(`|                                                                               |`))
                console.log(chalk.yellow("| > Consumer Name: Muzammil                                                     |"))
                console.log(chalk.yellow("| > Consumer Number: 57382-42985-4395-91-4                                      |"))
                console.log(chalk.yellow(`| > Amount to be paid: ${bill1}                                                  `))
                console.log(chalk.yellow(`| > Your Bill is not PAID                                                       |`))
                console.log(chalk.yellow("| > Reading Taken on: 31/12/2024                                                |"))
                console.log(chalk.yellow("|                                                                               |"))
                console.log(chalk.yellow("|                                                                               |"))
                console.log(chalk.yellow("|  DUE DATE: 11 / 1 / 2024                                                      |"))
                console.log(chalk.yellow("|                                                                               |"))
                console.log(chalk.yellow("|                                                                               |"))
                console.log(chalk.yellow("| > Please ensure that you have paid the bill before due date to avoid issues   |"))
                console.log(chalk.yellow("|                                                                               |"))
                console.log(chalk.yellow("|-------------------------------------------------------------------------------|"))
              }
            
            } 
          }
          // Gas Bill
          else if (bills.billtype == chalk.cyanBright("Gas Bill")) {

            const bill2 = await inquirer.prompt([
              {
                name: "choices",
                type: "list",
                message: "What do you want to do?",
                choices: [chalk.greenBright("Pay Bill"), chalk.blueBright("View Bill")],
                
                
              }
            ]);
            
            //Pay Bill
              const billcost1:number = randomnumber(10000);
            
            if (bill2.choices == chalk.greenBright("Pay Bill") && isPaid2 == false) {
              
              if (myBalance > billcost1) {
                myBalance = myBalance - billcost1;
                console.log("");
                console.log(chalk.greenBright("", "", "", "", "", "", "BILL SUCCESSFULLY PAID FOR GAS"));
                console.log(chalk.greenBright("", "", "", "", "", "", `Bill amount: ${billcost1}`))
                console.log(chalk.greenBright("", "", "", "", "", "", `Your Remaining balance is ${myBalance}`));
                isPaid2 = true;
              }

              else {
                console.log("");
                console.log(chalk.redBright("               BILL PAYMENT FAILED DUE TO INSUFFICIENT BALANCE!"))
              }
            }

            else if (bill2.choices == chalk.greenBright("Pay Bill") && isPaid2 == true) {
              console.log("");
              console.log(chalk.greenBright("You have already paid for this bill !"))
              console.log("");
            }
              //View Bill
            else if (bill2.choices == chalk.blueBright("View Bill")) {
              if (isPaid2 == true) {
                

                console.log(chalk.yellow("|-------------------------------------------------------------------------------|"));
                console.log(chalk.yellow("|                         WELCOME TO QUALITY GAS PROVIDERS                      |"))
                console.log(chalk.yellow(`|                                                                               |`))
                console.log(chalk.yellow("| > Consumer Name: Muzammil                                                     |"))
                console.log(chalk.yellow("| > Consumer Number: 57382-42985-4395-91-4                                      |"))
                console.log(chalk.yellow(`| > Your Bill is PAID                                                           |`))
                console.log(chalk.yellow("| > Reading Taken on: 21/3/2002                                                 |"))
                console.log(chalk.yellow(`| > Amount to be paid within due date: ${billcost1}                               `))
                console.log(chalk.yellow("|                                                                               |"))
                console.log(chalk.yellow("|  DUE DATE: 4 / 4 / 2002                                                       |"))
                console.log(chalk.yellow("|                                                                               |"))
                console.log(chalk.yellow("|                                                                               |"))
                console.log(chalk.yellow("| > Please ensure that you have paid the bill before due date to avoid issues   |"))
                console.log(chalk.yellow("|                                                                               |"))
                console.log(chalk.yellow("|-------------------------------------------------------------------------------|"))
              }

              else if (isPaid2 == false) {
                console.log(chalk.yellow("|-------------------------------------------------------------------------------|"));
                console.log(chalk.yellow("|                         WELCOME TO QUALITY GAS PROVIDERS                      |"))
                console.log(chalk.yellow(`|                                                                               |`))
                console.log(chalk.yellow("| > Consumer Name: Muzammil                                                     |"))
                console.log(chalk.yellow("| > Consumer Number: 51984-75432-86187-9421-1454                                |"))
                console.log(chalk.yellow(`| > Your Bill is not PAID                                                       |`))
                console.log(chalk.yellow("| > Reading Taken on: 21/3/2002                                                 |"))
                console.log(chalk.yellow(`| > Amount to be paid within due date: ${billcost1}                              `))
                console.log(chalk.yellow("|                                                                               |"))
                console.log(chalk.yellow("|  DUE DATE: 4 / 4 / 2002                                                       |"))
                console.log(chalk.yellow("|                                                                               |"))
                console.log(chalk.yellow("|                                                                               |"))
                console.log(chalk.yellow("| > Please ensure that you have paid the bill before due date to avoid issues   |"))
                console.log(chalk.yellow("|                                                                               |"))
                console.log(chalk.yellow("|-------------------------------------------------------------------------------|"))
              }
            }

            
          
          }

          

          
        }
      }
    }
  } else {
    count = count + 1;

    console.log(
      chalk.redBright("Invalid username or security pin. Please try again")
    );

    if (count == 3) {
      console.log("");
      chalkAnimation.pulse(warn);
      setTimeout(() => {
        console.log(
          chalk.cyanBright(
            "Please visit our branch to get your card unblocked."
          )
        );
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
  //
}
