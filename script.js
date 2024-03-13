//complete this code
class Animal {
	constructor(species){
		this.species=species;
	}
	getSpecies(){
		return this.species;
	}
	makeSound(){
		console.log(`The ${this.species} makes the sound` )
	}
}

class Dog extends Animal {
	bark(species){
		super(species);
		console.log('bark');
	}
}

class Cat extends Animal {
	purr(species){
		super(species);
		console.log('purr');
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
