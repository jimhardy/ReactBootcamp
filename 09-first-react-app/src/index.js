import {choice , remove} from './helpers';
import fruits from './food';

let fruitChoice = choice(fruits);
console.log(fruitChoice);

remove(fruits , fruitChoice);
