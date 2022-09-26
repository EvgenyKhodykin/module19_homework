function myFunc (str,obj){
  return console.log(obj[str] !== undefined)
}

const str = 'abc'
const myObj = {
  'abc': 1,
  isTrue: true,
  567: null
}
myFunc('abc',myObj)