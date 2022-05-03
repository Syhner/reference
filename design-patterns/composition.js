// We can define behaviors that don't require 'self' here
const eat = food => console.log(`Eating ${food}...`);
const bite = () => console.log('Yum yum!');

/*
Object composition 
*/

// We have some behaviors
const canSayHi = self => ({ sayHi: () => console.log(`Hi! I'm ${self.name}`) });
const canEat = () => ({ eat });
const canBite = () => ({ bite });

// Combined behaviors
const socialBehaviors = self => Object.assign({}, canSayHi(self), canEat());
const alligatorBehaviors = () => Object.assign({}, canBite());

const alligator = name => {
  const self = { name };
  return Object.assign(self, socialBehaviors(self), alligatorBehaviors());
};

const jack = alligator('jack');
jack.sayHi(); // Hi! I'm jack
jack.eat('banana'); // Eating banana...
jack.bite(); // Yum yum!

/* 
Class composition
combine inheritance and composition
*/

class Animal {
  constructor(name) {
    this.name = name;
  }
}

// Create a mixin
const SocialMixin = superclass =>
  class extends superclass {
    sayHi() {
      console.log(`Hi! I'm ${this.name}`);
    }

    eat(food) {
      eat(food);
    }
  };

class Alligator extends SocialMixin(Animal) {
  bite() {
    bite();
  }
}

const jill = new Alligator('jill');
jill.sayHi(); // Hi! I'm jill
jill.eat('banana'); // Eating banana...
jill.bite(); // Yum yum!
