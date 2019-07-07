function trueFalse(chance) {
    let randomNum = Math.floor(Math.random() * 100);
    return randomNum > chance ? false : true;
}

export {trueFalse};