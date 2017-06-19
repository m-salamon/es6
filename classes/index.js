// let Merry = new Entity("merry", 4.6);
// Merry.greet();
import Entity from './Entity';
class Hobbit extends Entity{
    constructor(name,height){
        super(name,height);
    }
}

let x = new Hobbit('moshe', 6.0);
x.greet();  