var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car() {
        this.speed = 10;
    }
    Car.prototype.speed = function () {
        this.speed++;
    };
    return Car;
}());
var Bmw = /** @class */ (function (_super) {
    __extends(Bmw, _super);
    function Bmw() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bmw;
}(Car));
var cr = new Car();
var Device = /** @class */ (function () {
    function Device() {
    }
    Device.prototype.locate = function () {
    };
    return Device;
}());
var Device = new Device();
dv.locate();
