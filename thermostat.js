class Thermostat {
  constructor(temperature = 20, powerSavingMode = true, minTemp = 10, maxTemp = 25) {
    this.temperature = temperature
    this.powerSavingMode = powerSavingMode
    this.minTemp = minTemp
    this.maxTemp = maxTemp
  }

  getTemperature() {
    return this.temperature
  }
  
  up() {
    if (this.temperature < 25 && this.powerSavingMode === true) {
    this.temperature++ } else if (this.temperature < 32 && this.powerSavingMode === false){
      this.temperature++
    }
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

  currentEnergyUsage() {
    if (this.temperature < 18) {
      return 'Low usage'
    } else if (this.temperature > 25) {
      return 'High usage'
    } else {
      return 'Medium usage'
      }
     }
}

module.exports = Thermostat;