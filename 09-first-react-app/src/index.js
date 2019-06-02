import {choice , remove} from './helpers';
import fruits from './food';

let fruitChoice = choice(fruits);
console.log(`I would like one ${fruitChoice} please.`);
console.log(`Here you go: ${fruitChoice}`);
remove(fruits , fruitChoice);
console.log('Delicious! May I have another?');
console.log(`I'm sorry, we're all out of ${fruitChoice}. We have ${fruits.length} fruits left.`);
console.log(fruits);

