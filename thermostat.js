class Thermostat {
  constructor(temperature = 20, powerSavingMode = true, minTemp = 10) {
    this.temperature = temperature
    this.powerSavingMode = powerSavingMode
    this.minTemp = minTemp
  }

  getTemperature() {
    return this.temperature
  }
  
  up() {
    this.temperature++
  }

  down() {
    if (this.temperature > this.minTemp) {
    this.temperature-- };
  }

  setPowerSavingMode(boolean) {
    this.powerSavingMode = boolean
  }

  reset() {
    this.temperature = 20
  }
}

module.exports = Thermostat;