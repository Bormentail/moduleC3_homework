class Devices() {
}

Devices.prototype.onOff = function(turn) {
    this.condition = turn ? true : false
}

function Unit(name, brand, power) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.condition = false;

}

Unit.prototype = new Devices();


let allDevices = []
allDevices[0] = new Unit('Lamp', 'Philips', 100);
allDevices[0].blink = function() {
    console.log(`${allDevices[0].name} is blinking.`)
}

allDevices[1] = new Unit('Comp', 'Dell', 175);
allDevices[1].sleep = function() {
    console.log(`${allDevices[1].name} is sleeping.`)
}

allDevices[2] = new Unit('Teapot', 'Moulinex', 2000);
allDevices[2].boil = function() {
    console.log(`${allDevices[2].name} is boiling.`)
}
console.log(allDevices)

allDevices[0].blink();
allDevices[1].sleep();
allDevices[2].boil();

allDevices[0].onOff(true);
allDevices[1].onOff(false);
allDevices[2].onOff(true);

let sum_power = 0
allDevices.forEach (function results(value, index, array) {
    console.log(`${array[index].name} is ` + (array[index].condition ? 'ON' : 'OFF'))
    if (array[index].condition) sum_power += array[index].power
})

console.log(`Общая мощность ${sum_power} Wt`)
