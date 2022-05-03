class Red {
  go() {
    console.log('Red --> for 30 seconds');
    return new Green();
  }
}

class Green {
  go() {
    console.log('Green --> for 1 minute');
    return new Red();
  }
}

// Handles state
class TrafficLight {
  constructor() {
    this.currentState = new Red();
  }

  go() {
    this.currentState = this.currentState.go();
    return this;
  }
}

const light = new TrafficLight();
light.go().go();
