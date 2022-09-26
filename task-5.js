class ChargingDevice {
  constructor(options){
    this.name = options.name
    this.brand = options.brand
    this.color = options.color
  }
  needCharging(charge) {
    return console.log((charge <=50)? 
    `${this.name}'s battery low! Keep charging!`:
    `${this.name}'s battery is OK! You can disconnect the charging cable!`)
  }
}
// const mobilePhone = new ChargingDevice({
//   name: 'iPhone',
//   brand: 'Apple',
//   color: 'black'
// })
// console.log(mobilePhone)
// mobilePhone.needCharging(51)

class ScrewDriver extends ChargingDevice{
  constructor(options){
    super(options)
    this.price = options.price + '$'
  }
  toolWeight(weight){
    return console.log(`${this.name}'s weight is ${weight} kg.`)
  }
}
// const screwDriver = new ScrewDriver({
//   name: 'MHV-1050w',
//   brand: 'Makita',
//   color: 'green',
//   price: 150
// })
// console.log(screwDriver)
// screwDriver.needCharging(23)
// screwDriver.toolWeight(2.7)

class Notebook extends ChargingDevice{
  constructor(options){
    super(options)
    this.cpuType = options.cpuType
  }
  static ssdSize(size){
    return console.log(`SSD memory size is ${size} Gb`)
  }
  batteryCapacity(capacity){
    return console.log(`${this.name}'s battery capacity is ${capacity} mAH`)
  }
}
// const macbook = new Notebook({
//   name: 'MacBook Air',
//   brand: 'Apple',
//   color: 'Space Grey',
//   cpuType: 'M1'  
// })
// console.log(macbook)
// Notebook.ssdSize(256)
// macbook.batteryCapacity(5000)