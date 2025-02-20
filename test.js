// //console.log("Vipin")
// let array1 = [7,4,3,9,0,3,1,2,11,2,1,3,5,3,6,5,7]
// for(let i = 0; i<array1.length; i++){
//     for( let j=0; j<array1.length-1; j++){
//         if(array1[j]>array1[j+1]){
//             let max = array1[j]
//             array1[j] = array1[j+1]
//             array1[j+1] = max;
//         }
//     }
// }

// console.log(array1)
// // const newShortedArray = new Set(array1)
// // console.log(newShortedArray)
// let newShortedArray = []
// for(let k=0; k<array1.length; k++){
//     let indexNo = newShortedArray.indexOf(array1[k])
//     //console.log(indexNo)
//     if (indexNo < 0){
//         newShortedArray.push(array1[k])
//     }
// }
// console.log(newShortedArray)

const myName = "Vipin kumar Patel";
//console.log(myName[10])
let reverseName = ""
let count = myName.length-1
for (let i=0; i < myName.length; i++){
    reverseName += myName[count]
    count -= 1
}
console.log(reverseName)






