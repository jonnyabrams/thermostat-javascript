const Thermostat = require('./thermostat.js');

describe('Thermostat', () => {
  it('initialises with a temperature of 20 degrees', () => {
    const sut = new Thermostat();
    expect(sut.temperature).toEqual(20)
  });
  it('can get temperature', () => {
    const sut = new Thermostat();
    expect(sut.getTemperature()).toEqual(20)
  })
  it('can increase temperature', () => {
    const sut = new Thermostat();
    sut.up()
    expect(sut.getTemperature()).toEqual(21)
  });
  it('can increase temperature by 2', () => {
    const sut = new Thermostat();
    sut.up()
    sut.up()
    expect(sut.getTemperature()).toEqual(22)
  });
});