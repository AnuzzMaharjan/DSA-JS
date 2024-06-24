const map = new Map([['a', 1], ['b', 2]]); //accepts array with subarrays with length two also as key value pairs

map.set('c', 3); //add key value pair or a subarray
map.delete('c'); //deletes a subarray with the same key
console.log(map.has('a')); //returns true if the map has it
console.log(map.size); //returns length of the map
map.clear(); //clears the map

for (const [key, value] of map) {
    console.log(`${key} : ${value}`);
}