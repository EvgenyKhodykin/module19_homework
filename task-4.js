function ChargingDevice(options) {
  this.name = options.name
  this.brand = options.brand
  this.color = options.color
}
ChargingDevice.prototype.needCharging = function(charge) {
  return console.log((charge <=50)? 
  `${this.name}'s battery low! Keep charging!`:
  `${this.name}'s battery is OK! You can disconnect the charging cable!`)
}
// const mobilePhone = new ChargingDevice({
//   name: 'iPhone',
//   brand: 'Apple',
//   color: 'black'
// })
// console.log(mobilePhone)
// mobilePhone.needCharging(51)

ScrewDriver.prototype = Object.create(ChargingDevice.prototype)
function ScrewDriver(options) {
  ChargingDevice.apply(this, arguments)
  this.price = options.price + '$'
}
ScrewDriver.prototype.toolWeight = function(weight) {
  return console.log(`${this.name}'s weight is ${weight} kg.`)
}
// const screwDriver = new ScrewDriver({
//     name: 'MHV-1050w',
//     brand: 'Makita',
//     color: 'green',
//     price: 150
//   })
// console.log(screwDriver)
// screwDriver.needCharging(23)
// screwDriver.toolWeight(2.7)

Notebook.prototype = Object.create(ChargingDevice.prototype)
function Notebook(options) {
  ChargingDevice.apply(this, arguments)
  this.cpuType = options.cpuType
}
Notebook.prototype.batteryCapacity = function(capacity) {
  return console.log(`${this.name}'s battery capacity is ${capacity} mAH`)
}
// const macbook = new Notebook({
//     name: 'MacBook Air',
//     brand: 'Apple',
//     color: 'Space Grey',
//     cpuType: 'M1'  
//   })
//   console.log(macbook)
//   macbook.needCharging(77)
//   macbook.batteryCapacity(5000)