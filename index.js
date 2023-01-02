// code your solution here
const superbowlWin = array => {
    let result = undefined;
    result = array.find(element => element.result === "W");
    return result !== undefined ? result.year :undefined;
}