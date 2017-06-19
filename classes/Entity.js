//es6 classes
class Entity{
    constructor(name, height){
        this.name = name;
        this.height = height;
    }

    greet(){
        console.log(`hi im ${this.name} from earth!`)
        console.log(`revision two this is a new git test`)
        console.log(`this is not staged yet`)
    }
    
}

export default Entity;