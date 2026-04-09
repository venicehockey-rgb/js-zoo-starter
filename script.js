var animalPopulation=0;

function run() {
  let tigger = new Tiger("Tigger");
  tigger.eat("meat");
  tigger.eat("kibble");
  let pooh = new Bear("Pooh");
  pooh.eat("fish");
  pooh.eat("meat");
  let rarity = new Unicorn("Rarity");
  rarity.eat("marshmallows");
  rarity.eat("meat");
  let gemma = new Giraffe("gemma");
  gemma.eat("meat");
  gemma.eat("leaves");
  let stinger = new Bee("stinger");
  stinger.eat("ice cream");
  stinger.eat("pollen");
  let Zoebot = new Zookeeper("Zoebot");
  let animals = [tigger,pooh,rarity,gemma,stinger];
  Zoebot.feedAnimals(animals, "meat");

}


class Animal {

  constructor (name, favoriteFood) {
    this.name = name;
    this.favoriteFood = favoriteFood;
    animalPopulation++;
  }
  sleep() {
    console.log(this.name + " sleeps for 8 hours. ");
  }

  eat(food) {
    console.log(this.name +" eats " +food);
    if (food == this.favoriteFood) {
      console.log("YUM!!! " + this.name + " wants more " + food+".");
    } 
    if (food !== this.favoriteFood) {
      this.sleep();
    }
  }
  static getPopulation() {
    return animalPopulation;
  }
}


class Tiger extends Animal {
  constructor(name) {
    super(name, "meat");
  }
}


class Bear extends Animal {
  constructor (name) {
   super(name, "fish");
  }

  sleep() {
    console.log(this.name + " hibernates for 4 months. ");
  }
}

class Unicorn extends Animal {
  constructor (name) {
    super(name, "marshmallows");
  }
  sleep() {
    console.log(this.name + " sleeps in a cloud.")
  }
}

class Giraffe extends Animal {
  constructor (name) {
    super(name, "leaves");
  }
  eat(food) {
    if (food==this.favoriteFood) {
      super.eat('leaves');
      this.sleep();
    }
    if (food!==this.favoriteFood) {
      console.log("YUCK!! " + this.name + " will not eat " +food);
    }
  }
}

class Bee extends Animal {
  constructor (name) {
    super(name, "pollen");
  }
  sleep() {
    console.log(this.name+ " never sleeps");
  }
  eat(food) {
    if (food==this.favoriteFood) {
      super.eat('pollen');
      this.sleep();
    }
    if (food!==this.favoriteFood) {
      console.log("YUCK!! " + this.name + " will not eat " +food);
    }
  }
}

class Zookeeper {
  constructor (name) {
    this.name=name;
  }
  feedAnimals(animals, food) {
    console.log(this.name+ " is feeding " + food + " to " + animals.length + " of " + Animal.getPopulation() + " animals");

    for(let i=0; i<animals.lenth; i++) {
      animals[i].eat(food);
    }
  }
}

