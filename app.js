// Deposit calculator
let userName = prompt("Введіть ваше ім'я", "Петруха"); 
let userSum = prompt("Введіть суму вашего депозиту в грн", "10");
let userTerm = prompt("Введіть термін дії депозиту у місяцях", "6");
let userSumProfit= userSum * 0.2 * userTerm / 12;
alert("Шановний " + userName + ". Ви внесли " + userSum + " грн під 20% річних, на термін " + userTerm + " місяців. За цей період часу Ви заробите " + userSumProfit+ " грн.");
