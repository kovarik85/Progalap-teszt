const power=require('./modul').power
//1.feladat

// let a= 5 //számok
// let b = 'Kristóf' //stringek
// let c = [1, 2, 3, 4, 5] //tömbök
// let d = {
//     name: Máté,
//     age:30,         //objectek
// }
// let e = null
// let f= undefined

//----------------------------------------------------------------------------------------------------------
// 2.feladat:
//     a let változó módosítható a const viszont nem
//-------------------------------------------------------------------------------------------------------------
// 3.feladat:
// ha pl 18 és '18' - at hasonlítjuk össze akkor referencia szerinti vizsgálatnál(===) false lesz,
//     viszont érték esetében (==) true
//-----------------------------------------------------------------------------------------------------------
//4.feladat:

const containsElement = (arr,n) => {
    for (const c of arr) {
        if (c === n) {
           return true
       }
   } return false
}

//------------------------------------------------------------------------------------------------------
// 5. feladat:

// let human = {
//     name: 'Feri',
//     age:25
// }

// let human2 = {
//     name: 'Géza',
//     age:28
// }
// let human3 = {
//     name: 'Vili',
//     age:35
// }
// let array = [human, human2, human3]



const nameHim = (arr) => {
    let dst;
    for (i = 0; i < arr.length-1; i++){
        if (arr[i].age < arr[i + 1].age) {
            dst=arr[i+1].name
        }else{dst=arr[i].name}
    }
       return dst 
}
// console.log(nameHim(array))
//-----------------------------------------------------------------------------------------------------------------

//6. feladat:

const segment = (src, src2, dst) => {
    for (let i = 0; i < src.length; i++) {
        for (let j = 0; j < src2.length; j++) {
            if (src2[j] === src[i]) {
                dst.push(src[i]);
                break;
            }
        }
    }
    return dst;
};
// console.log('Segment:', segment([2, 5, 1, 6, 3, 3], [3, 11, 5, 0], []));
//----------------------------------------------------------------------------------------------------------------------
// 7. feladat

console.log(power(10, 4))

//---------------------------------------------------------------------------------------------------------------------
// 8.feladat:

const generateMap = (n, m) => {
    let arr = new Array(n);
    for (let i = 0; i < n; i++) {
        arr[i] = new Array(m);
    }
    return arr;
}
let map = generateMap(3, 3)

const fill2DMap = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = i*j
    }
  }
  return arr;
};
let filledmap = fill2DMap(map)

console.log(filledmap)