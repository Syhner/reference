// old interface

class PayPal {
  loginAndOrder(credentials, item) {
    console.log('Logging in with PayPal');
    console.log('Ordering with PayPal');
  }
}

class Stripe {
  login(credentials) {
    console.log('Logging in with Stripe');
  }
  order(item) {
    console.log('Ordering with Stripe');
  }
}

// From PayPal to Stripe
class Adapter {
  constructor() {
    this.provider = new Stripe();
  }
  // Handle each implementation from PayPal
  loginAndOrder(credentials, item) {
    this.provider.login(credentials);
    this.provider.order(item);
  }
}

const paypal = new PayPal();
const adapter = new Adapter();

paypal.loginAndOrder();
adapter.loginAndOrder();
