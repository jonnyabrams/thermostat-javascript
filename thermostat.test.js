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
    sut.up();
    expect(sut.getTemperature()).toEqual(21)
  });
  it('can increase temperature by 2', () => {
    const sut = new Thermostat();
    sut.up();
    sut.up();
    expect(sut.getTemperature()).toEqual(22)
  });
  it('can decrease temperature by', () => {
    const sut = new Thermostat();
    sut.down();
    expect(sut.getTemperature()).toEqual(19)
  });
  it('has power saving mode on by default', () => {
    const sut = new Thermostat();
    expect(sut.powerSavingMode).toBe(true)
  });
  it('can change power saving mode', () => {
    const sut = new Thermostat();
    sut.setPowerSavingMode(false)
    expect(sut.powerSavingMode).toStrictEqual(false)
  })
  it('can reset the temperature to 20', () => {
    const sut = new Thermostat();
    sut.up();
    sut.up();
    sut.reset();
    expect(sut.getTemperature()).toEqual(20)
  });
});