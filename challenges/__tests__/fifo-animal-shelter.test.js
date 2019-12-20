const { AnimalShelter, Animal } = require('../fifoAnimalShelter/fifo-animal-shelter');

describe('Animal Shelter', () => {
  const animalShelter = new AnimalShelter;
  it ('adds a few dogs', () => {
    const dog1 = new Animal('dog', 'winston');
    const dog2 = new Animal('dog', 'jamie');
    animalShelter.enqueue(dog1);
    animalShelter.enqueue(dog2);
    expect(animalShelter.pets).toEqual([{ 'name': 'winston', 'type': 'dog' }, { 'name': 'jamie', 'type': 'dog' }]);
  });
  it ('adds a cat', () => {
    const cat1 = new Animal('cat', 'gravy');
    animalShelter.enqueue(cat1);
    expect(animalShelter.pets).toEqual([{ 'name': 'winston', 'type': 'dog' }, { 'name': 'jamie', 'type': 'dog' }, { 'name': 'gravy', 'type': 'cat' }]);
  });
  it ('removes a pet that is not in front', () => {
    expect(animalShelter.dequeue('cat')).toEqual({ 'name': 'gravy', 'type': 'cat' });
    expect(animalShelter.pets).toEqual([{ 'name': 'winston', 'type': 'dog' }, { 'name': 'jamie', 'type': 'dog' }]);
  });
  it ('if no preference, returns next in line', () => {
    expect(animalShelter.dequeue()).toEqual({ 'name': 'winston', 'type': 'dog' });
  });
});
