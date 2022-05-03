class HotDog {
  addKetchup() {
    this.ketchup = true;
    return this;
  }
  addMustard() {
    this.mustard = true;
    return this;
  }
}

const one = new HotDog().addKetchup();
const two = new HotDog().addMustard();
const three = new HotDog().addKetchup().addMustard();
