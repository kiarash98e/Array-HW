//1
let arrRemove = (arr,value) =>{
    return arr.filter((el)=> {return el != value})
}
console.log(arrRemove([1,3,5,6],3))

const removeArray = (a,index) =>{
    let newArr = [...a]
    newArr.splice(index-1,1)
    return newArr
}
console.log(removeArray([1,3,4,6,5],3))

//2
let combine = ([...arr1],[...arr2]) =>{
    let combinedArr = []
    arr1.forEach(value => {
        if(!arr2.includes(value)) {
          combinedArr.push(value)
        }
      })
      combinedArr = combinedArr.concat(arr2)
      combinedArr.sort()
      return combinedArr
}
console.log(combine([1,3,5,5],[3,66,4,55,1]))

//3
let chars = ['A', 'B', 'A', 'C', 'B']

let uniqueChars = chars.filter((c, index) => {
    return chars.indexOf(c) === index
})

console.log(uniqueChars)

//4
const myArr = ['Prihodi 23456 danaci 34 razhodi 23455 I drugi.']
const reduced = myArr[0].split(' ').reduce((arr, item) => {
  const parsed = Number.parseInt(item)
  if(!Number.isNaN(parsed)) arr.push(parsed)
  return arr
}, [])
console.log(reduced)

//5
function flatten(arr) {
    return arr.sort().reduce( (flat, toFlatten) => {
      return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten)
    }, [])
  }
 console.log(flatten([[[1, [1.1]], 2, 3],0,[4, 5]]))