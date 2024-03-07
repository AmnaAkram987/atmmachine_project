
import inquirer from "inquirer"
import chalk from "chalk"
//import chalkAnimation from "chalk-animation"
//import gradientString from "gradient-string"
//import list from "inquirer/lib/prompts/list.js"


interface datatype{
Userpin:number,
UserId:string|number,
Transactiontype:string,
AccountType:string,
Amount:number,
AddAmount:number

}

const  answers: datatype =await inquirer.prompt([
    {
        type:"number",
        name:"Userpin",
        message:chalk.yellow("Enter your pincode:")
    },
    {
        type:"input",
        name:"UserId",
        message:chalk.yellow("Enter your userId:")
    },
    {
        type:"list",
        name:"AccountType",
        choices:[ "Current account","Saving Accunt"],
        message:chalk.magenta("What is your account type?"),
        
        
    },
    {
        type:"list",
        name:"Transactiontype",
        message:chalk.green("Do you want to withdraw money or fastcash "),
        choices:["Withdraw","FastCash"],
        when(answers) {
            return answers.AccountType
        },
    },
    {
        type:"list",
        name:"Amount",
        message:chalk.blue("Select your amount:"),
        choices:[1000,2000,5000,10000,20000 ],
        when(answers){
             return answers.Transactiontype == "FastCash"
        },
},
    {
        type: "number",
        name: "Amount",
        message:chalk.red ("Kindly enter your amount"),
        when(answers) {
                   return answers.Transactiontype == "Withdraw"
        },
    },
    
    
   ])

//console.log(answers.Amount)
//console.log(answers.Transactiontype)

const Balance:number=Math.floor(Math.random() *1000000)

if(answers.Userpin && answers.UserId){
    console.log(chalk.yellow("Available Balance:",Balance))
    const Addedamount = answers.Amount
   const remaining = Balance - Addedamount
    if(Addedamount <= Balance)
    {
console.log(chalk.red("Remaining Balance:", remaining))
    }
    else if(Addedamount >= Balance)
    {
        console.log(chalk.gray("Insufficient Balance."))
    }
   
}
else{
    console.log(chalk.red("Kindly enter valid UserId and Userpin."))
}
