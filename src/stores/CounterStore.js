import { makeAutoObservable } from "mobx";

class CounterStore {
    counter = 0;

    constructor() {
        makeAutoObservable(this);
        this.counter = localStorage.getItem('counter') || 0
    }

    getCounter() {
        return this.counter;
    }

    setCounter(count) {
        this.counter = count;
    }

    increment() {
        this.counter++;
        localStorage.setItem('counter', this.counter)
    }
}

export default CounterStore;