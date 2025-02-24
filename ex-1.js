let isOver18;
let hasCriminalBlacklist;

let isAllow;

// Start coding here
let jamesAge = 18; 
let hasCriminalRecord = false; 

isOver18 = jamesAge > 18; 
hasCriminalBlacklist = hasCriminalRecord; 

isAllow = isOver18 && !hasCriminalBlacklist;

console.log(isAllow);
