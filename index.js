// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
console.log(saturdayFun("bathe my dog"))
console.log(saturdayFun()); 

function mondayWork(activity='go to the office'){
    return `This Monday, I will ${activity}.`
}
function wrapAdjective(sir="*"){
    return function(wish="hard worker"){
        return`You are ${sir}${wish}${sir}!`;
    }
}