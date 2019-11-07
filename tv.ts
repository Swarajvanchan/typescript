import { Remote } from "./remote";

class TV{
    remote:Remote
    constructor(){
        this.remote=new Remote()
    }
}
let tv=new TV()
//tv.remote.turnOn()
