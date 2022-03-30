class Thermostat {
  constructor(temperature = 20, powerSavingMode = true) {
    this.temperature = temperature
    this.powerSavingMode = powerSavingMode
  }

  getTemperature() {
    return this.temperature
  }
  
  up() {
    this.temperature++
  }

  down() {
    this.temperature--
  }

  setPowerSavingMode(boolean) {
    this.powerSavingMode = boolean
  }

  reset() {
    this.temperature = 20
  }
}

module.exports = Thermostat;