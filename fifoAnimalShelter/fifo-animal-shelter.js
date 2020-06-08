'use strict';

class AnimalShelter {
  constructor() {
    this.front = null;
    this.back=null;
  }

  enqueue(animal) {
    if (!animal) return null;
    animal = animal.toLowerCase();

    if (animal !== 'cat' && animal !== 'dog') return `Can only enqueue 'cat' or 'dog'.`;

    animal = {animal, next: null};

    if (!this.front) {
      this.front = animal; 
      this.back = animal;
      return this.front;
    }

    if (this.front) {
      this.back.next = animal;
      this.back = animal;
      return this.front;
    }
  }

  dequeue(pref) {
    if (!pref) {
      let adopted = this.front;
      this.front = this.front.next;
      return adopted.animal;
    } 

    pref = pref.toLowerCase();
    if (pref !== 'cat' && pref !== 'dog') return null;

    if (pref === this.front.animal) {
      let adopted = this.front;
      this.front = this.front.next;
      return adopted.animal;
    }

    let current = this.front;
    while (current.next && current.next.animal !== pref) {
      current.animal;
      current = current.next;
    }
    if (!current.next) return `no ${pref} inside the shelter`;
    let adopted = current.next;
    current.next = adopted.next;
    return adopted.animal;
  }
}

module.exports = AnimalShelter;
