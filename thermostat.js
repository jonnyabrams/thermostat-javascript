class Thermostat {
  constructor(temperature = 20) {
    this.temperature = temperature
  }
  getTemperature() {
    return this.temperature
  }

}

module.exports = Thermostat;