const readline = require("readline-sync");

//start/ the name of the player
console.log("Welcome traveler! Are you ready to start your Colossal adventure?!");
const playerName = readline.question("What is your name champion? ");

//inventory and its array
let hp = 100;
let inventory = [];
let enemiesDefeated = 0;
const enemies = ["BAD VIBE", "DRAGON", "TINY WORM"];

console.log(`\nGreetings, ${playerName}! Your journey begins now!!!`);

//generating random numbers function
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
//game plays as long as hp is above 0
  while (hp > 0) {
    let action = readline.question("\nWhat would you like to do?? \nPress [w] to walk or \nPress [i] to check inventory: ");
//i vs w for walk or inventory  
  if (action.toLowerCase() === "i") {
    console.log(`\n${playerName}'s Stats: \nHP: ${hp}, \nInventory: ${inventory.join(", ") || "Empty"}, \nEnemies Defeated: ${enemiesDefeated}`);
    continue; 
  }
  if (action.toLowerCase() === "w") {
    let encounter = getRandom(1, 3) === 1;
    if (encounter) {
        let enemy = enemies[getRandom(0, enemies.length - 1)];
        let enemyHP = getRandom(15, 40);
        console.log(`\nA killer ${enemy} appears! It has ${enemyHP} HP!\n`);

        while (enemyHP > 0 && hp > 0) {
            let choice = readline.question("\nDo you want to do?? \n(a)ATTACK or \n(r)RUN?"); 

            if (choice.toLowerCase() === "a") {
                let playerDamage = getRandom(15, 30);
                enemyHP -= playerDamage;
                console.log(`\nYou battled the ${enemy} for ${playerDamage} damage! \nIt now has ${enemyHP} HP.`);

                if (enemyHP <= 0) {
                    console.log(`\nYOU HAVE SLAIN THE ${enemy}!!!!`);
                    inventory.push("Rainbow Potion");
                    enemiesDefeated++;
                    hp += getRandom(5, 15); 
                    console.log(`\nYou found a bottle of Rainbow Potion which gave you some HP! \nCurrent HP: ${hp}`);
                    if (enemiesDefeated >= 3) {
                        console.log ("\nOUR BRAVE HERO WINS!!!");
                        process.exit();
                    }
                    break;
                }
            } else if (choice.toLowerCase() === "r") {
                if (getRandom(0, 1) === 1) {
                    console.log("\nYour cowardice is showing! You ran away");
                    break;
                } else {
                    console.log("\nNo escaping this time!!");
                }
            }
            let enemyDamage = getRandom(5, 15);
            hp -= enemyDamage;
            console.log(`\nAhhh the ${enemy} attacked you for ${enemyDamage} damage! Your HP is now ${hp}`);

            if (hp <= 0) {
                console.log("you have fallen in battle... GAME OVER");
                process.exit();
            }
        }
    } else {
        console.log("\nYou're safe... for now");
    }
  }
  }
 