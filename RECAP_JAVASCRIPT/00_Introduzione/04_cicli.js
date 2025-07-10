let numeri = [2,3,"Giovanni",5,6];

// for(let n of numeri){
//     console.log(n);
// }

for(let [index, item] of numeri.entries()){
    console.log(index, item)
}

