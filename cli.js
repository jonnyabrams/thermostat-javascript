const Thermostat = require('./thermostat');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const thermostat = new Thermostat();

const quezzie = () => {
  rl.question('CITIZEN PRESENT ANSWER: ', (answer) => {
  if (thermostat.powerSavingMode === true && thermostat.temperature === 25 && answer === 'up') {
    console.log('Maximum reached');
  }
  else if (thermostat.powerSavingMode === false && thermostat.temperature === 32 && answer === 'up') {
    console.log('Maximum reached');
  } else if (thermostat.temperature === 10 && answer === 'down') {
    console.log('Minimum reached');
  } else if (answer === 'up') {
    thermostat.up();
    console.log(`Temperature is ${thermostat.getTemperature()}`);
  } else if (answer === 'down') {
    thermostat.down();
    console.log(`Temperature is ${thermostat.getTemperature()}`);
  } else if (answer === 'PSM on') {
    thermostat.powerSavingMode = true;
    console.log(`Power saving mode on`);
  } else if (answer === 'PSM off') {
    thermostat.powerSavingMode = false;
    console.log(`Power saving mode off`);
  }; 
  quezzie()
 });
};

quezzie()