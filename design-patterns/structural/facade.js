class PlumbingSystem {
  // Low level methods
  setPressure() {}
  turnOn() {}
  turnOff() {}
}

class ElectricalSystem {
  // Low level methods
  setVoltage() {}
  turnOn() {}
  turnOff() {}
}

class House {
  constructor() {
    this.plumbing = new PlumbingSystem();
    this.electrical = new ElectricalSystem();
  }
  // High level method
  turnOnSystems() {
    this.electrical.setVoltage(120);
    this.electrical.turnOn();
    this.plumbing.setPressure(500);
    this.plumbing.turnOn();
  }
}
