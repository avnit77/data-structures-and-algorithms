class Animal {
  constructor(type, name) {
    this.type = type,
    this.name = name;
  }
}

class AnimalShelter {
  constructor() {
    this.pets = new Array();
  }


  enqueue(animal){
    if(animal.type != 'dog' && animal.type != 'cat'){
      return 'No thank you. We like dogs and cats';
    }
    this.pets.push(animal);
  }

  dequeue(pref){
    let adopted;
    if(pref === undefined){
      return this.pets.shift();
    }
    for(let i = 0; i < this.pets.length; i++){
      if(this.pets[i].type === pref){
        adopted = this.pets[i];
        this.pets.splice(i, 1);
        return adopted;
      }
    }
    return 'Can I interest you in a cat or a dog?';
  }

}

module.exports = { AnimalShelter, Animal };

