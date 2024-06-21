// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]


// 1. function digitize(n) {
//     This declares a function named digitize that takes one parameter n.
    
// 2. (n + '')
//     This converts the input n to a string. If n is already a string, it doesn't change; if it's a number, it becomes a string.
    
// 3. .split('')
//     This splits the string into an array of individual characters.
    
// 4. .map(Number)   
//     This transforms each character in the array into a number. The Number function is used as a callback for map.
    
// 5. .reverse()
//     This reverses the order of elements in the array.
    
// 6. The entire expression is returned as the result of the function.

function digitize(n){
    return (n + '').split('').map(Number).reverse();
}