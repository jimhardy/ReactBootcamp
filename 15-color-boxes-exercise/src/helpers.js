function randomValue(e) {
    return Math.floor(Math.random() * e )
}

function randomIndex(arr) {
    const index = Math.floor(Math.random() * arr.length)
    return arr[index];
}
export {randomValue , randomIndex};