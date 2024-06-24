var str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";


let longestSubstring = "";

var splitStr = str.trim().split(" ");

splitStr.forEach(x => {
    if (x.length > longestSubstring.length) {
        longestSubstring = x;
    }
})

console.log(`${longestSubstring} is the longest substring with length ${longestSubstring.length}`);