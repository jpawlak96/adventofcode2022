import { readFileSync } from 'fs';

const file = readFileSync('./input.txt', 'utf-8');
const splited = file.split("\n\n");

const grouped = splited.map(data => data.split("\n"));

const counted = grouped.map(data => 
    data
    .map(data => parseInt(data))
    .filter(data => Number.isInteger(data))
    .reduce((partialSum, a) => partialSum + a, 0));

const sorted = counted.sort((a, b) => b - a);

const lastThreeElves = sorted.slice(0, 3);

const sum = lastThreeElves.reduce((partialSum, a) => partialSum + a, 0);

console.log(lastThreeElves);
console.log(sum);