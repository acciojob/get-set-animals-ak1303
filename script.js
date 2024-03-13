//complete this code
class Animal {
	constructor(species){
		this.species=species;
	}
	getSpecies(){
		return this.species;
	}
	makeSound(){
		console.log(`${this.species} makes the sound` )
	}
}

class Dog extends Animal {
	bark(){
		console.log('bark');
	}
}

class Cat extends Animal {
	purr(){
		console.log('purr');
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
