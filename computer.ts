import {CPU} from './com-de';
export class Computer{
    constructor(
        private cpu:CPU
    ){
  //this.cpuMy=cpu
    }
    turnOn(){
      

    }
}
let cpu=new CPU()
let pc=new Computer(cpu)

let o:CPU={GHZ:50,processing:()=>10 }
cpu.ghz=78
let ht:{}=345346
function calProcessing(cur?: number, cpu?: number) { 
    return cpu * cur
}

calProcessing(0.5, 2)
calProcessing()

function calGPU(ghz = 2) { 
    return ghz * ghz
}

calGPU()
calGPU(89)