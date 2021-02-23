// for i loop

let test = [ 1, 2, 3, 4, 5 ]
let test1 = [{1:1},{2:2}]

for( let i=0; i<test.length; i++ ){
    console.log('Number:', i)
}
console.log("------------------------------------------------")
// while loop
let isTest=true;
let i = -1
while( i< test.length-1) {
    i++
    console.log('Number:', i)
}

console.log("-------------------------------------------------")

// let for in 
// for of 
for(const[key, value] of test1.entries()) {
    for(const[k, v] of Object.entries(value)) {
        console.log('k', k, 'v', v)
    }
}
console.log("---------------------------------------------------")

// filter function
/**
 * When to use filter: 1)to create a new array based on the condition you pass in.
 * @param   {Number} currentValue
 * @param   {Number} index
 * @param   {Array} array
 * @returns {Array}
 * filter does not change the original values
 */
let newArray = test.filter(function(currentValue, index, array){
    if( currentValue > 2 )
    return currentValue
})
console.log(newArray, test)
