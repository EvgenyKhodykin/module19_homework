function myFunc(obj){
  for (let key in obj){
    if (obj.hasOwnProperty(key)){
      console.log(obj)
    }
  }
}
const myObj = {
  a:1,
  b:2,
  c:3
}
myFunc(myObj)