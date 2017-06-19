//es6 classes
class Entity{
    constructor(name, height){
        this.name = name;
        this.height = height;
    }

    greet(){
        console.log(`hi im ${this.name} from earth!`)
    }
    
}

export default Entity;