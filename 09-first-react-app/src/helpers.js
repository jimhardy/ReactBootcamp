import { isEmptyStatement } from '@babel/types';

// make a random selection
function choice(items) {
    return items[Math.floor(Math.random() * items.length)];
}

// remove a specific item (splice?)
function remove(items, item) {
    const index = items.indexOf(item);
    console.log(index);
    items.forEach(i => {
        let splicer = items.indexOf(i);
        if(index === splicer){
            console.log(`removing ${item}`);
            items.splice(i , 1);
        }
    });
}

export { choice, remove };
