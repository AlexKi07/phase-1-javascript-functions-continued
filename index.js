// code your solution here
const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
};

mondayWork()
mondayWork("work from home.")


function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function wrapAdjective(wrapper) {
    return function(adjective) {
        return `You are ${wrapper}${adjective}${wrapper}!`;
    };
}