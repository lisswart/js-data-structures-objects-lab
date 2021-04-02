// Write your solution in this file!
let driver = {address: '11 11th St'};
function updateDriverWithKeyAndValue(driver, key, value) {
    const copyDriver = {...driver};
    copyDriver[key] = value;
    return copyDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey(driver, key) {
    const copyDriver = Object.assign({}, driver);
    delete copyDriver[key];
    return copyDriver;
}

console.log(deleteFromDriverByKey(driver, "address"));

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
}

