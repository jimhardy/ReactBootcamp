// make a random selection
function choice(items) {
    return items[Math.floor(Math.random() * items.length)];
}

// remove a specific item (splice?)
function remove(items, item) {
    const index = items.indexOf(item);
            items.splice(index , 1);
}

export { choice, remove };
