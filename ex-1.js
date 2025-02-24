let isOver18 = 18; 
let hasCriminalBlacklist = false;  
let jamesAge = 18 > isOver18; 
let jamesBlacklist = false === hasCriminalBlacklist  ;

// let isAllow = isOver18 && hasCriminalBlacklist; 
let isAllow = jamesAge && jamesBlacklist; 

console.log(isAllow); 
