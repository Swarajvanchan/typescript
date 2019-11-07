class Car{
    speed:number=10
    speed(){
        this.speed++
    }
}
class Bmw extends Car{

}
let cr:Car=new Car()
interface GpsListener{
    locate()
}
class Device implements GpsListener{
    locate(){

    }
}
let Device=new Device()
dv.locate()