class IOSButton {}
class AndroidButton {}

// Centralized creation of new buttons
class ButtonFactory {
  createButton() {
    if (os === 'ios') {
      return new IOSButton();
    } else if (os === 'android') {
      return new AndroidButton();
    }
  }
}

const factory = new ButtonFactory();
const iosButton = factory.createButton('ios');
const androidButton = factory.createButton('android');
