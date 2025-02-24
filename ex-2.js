// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000;
let isWeekday;
let hasBoughtProductFromITCategory;
let hasAttendedDiscountEvent;
let isPlatinum;

let hasPromotion;

// กำหนดคุณสมบัติของ John
let lastMonthSpending = 4001; 
let purchaseDay = "Friday"; 
let boughtITProduct = false; 
let attendedDiscountEvent = true; 
let membership = "Gold"; 

// Assign ค่าให้กับตัวแปร Boolean ตามคุณสมบัติของ John
lastMonthPaidMoreThan4000 = lastMonthSpending > 4000;
isWeekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].includes(purchaseDay);
hasBoughtProductFromITCategory = boughtITProduct;
hasAttendedDiscountEvent = attendedDiscountEvent;
isPlatinum = membership === "Platinum";

// ตรวจสอบสิทธิ์โปรโมชั่น
hasPromotion = 
  (lastMonthPaidMoreThan4000 && isWeekday && !hasBoughtProductFromITCategory && !hasAttendedDiscountEvent) || 
  isPlatinum;

console.log(hasPromotion);
