class Publisher {
  constructor() {
    this.callbacks = [];
  }
  subscribe(cb) {
    this.callbacks.push(cb);
  }
  unsubscribe(cb) {
    this.callbacks = this.callbacks.filter(c => c !== cb);
  }
  broadcast(event) {
    this.callbacks.forEach(cb => cb(event));
  }
}

const news = new Publisher();

const cb1 = () => console.log('Unsubscribe me!');
const cb2 = event => {
  console.log('New news broadcast:');
  console.log(event);
};

news.subscribe(cb1);
news.unsubscribe(cb1);
news.subscribe(cb2);
news.broadcast('Breaking news!');
