const target = { name: 'jack' };

const handler = {
  // Executed when properties of target are accessed
  get(target, prop, receiver) {
    console.log(`Getting property ${prop} from target`);
    // Get the property from target
    return Reflect.get(...arguments);
  },
  // Executed when properties of target are set
  set(target, prop, value) {
    console.log(`Setting property ${prop} to ${value} from target`);
    // Set the property on target
    return Reflect.set(...arguments);
  },
};

const proxy = new Proxy(target, handler);

const { name } = proxy;
proxy.name = 'bob';
