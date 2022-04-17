import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App/>, document.getElementById('root'))

class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    speak(){
        console.log(`My Name is ${this.name}, and I am this age ${this.age}`);
    }
}

const animal1 = new Animal('Gabe',39);
animal1.speak();
console.log(animal1);

class Tiger extends Animal{
    constructor(name,age,tattos,anime,catMood){
        super(name,age)
        this.tattos = tattos;
        this.anime = anime;
        this.catMood = catMood;
    }

    Roar(){
        this.catMood = prompt('Whats your Mood kitty?')
        this.tattos = prompt('How many tattos do you have?')
        this.anime = prompt('What anime are you watching?')
        console.log(`I have ${this.tattos}, I am wathing this ${this.anime}, and my mood is ${this.catMood}`);
        
    }
        
}



const theOnlyTiger = new Tiger;

theOnlyTiger.Roar();

console.log(theOnlyTiger);