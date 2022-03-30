const Thermostat = require('./thermostat.js');

describe('Thermostat', () => {
  it('initialises with a temperature of 20 degrees', () => {
    const sut = new Thermostat();
    expect(sut.temperature).toEqual(20)
  });
});