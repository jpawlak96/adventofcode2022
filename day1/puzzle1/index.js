import { readFileSync } from 'fs';

const file = readFileSync('./input.txt', 'utf-8');
const splited = file.split("\n\n");

const grouped = splited.map(data => data.split("\n"));

const counted = grouped.map(data => 
    data
    .map(data => parseInt(data))
    .filter(data => Number.isInteger(data))
    .reduce((partialSum, a) => partialSum + a, 0));

const max = counted.reduce((a, b) => a > b ? a : b);

console.log(max);