import { Character } from "../character.js";
import { Bowerman } from "../character.js";

test ('characterlength', () => {
    expect(() => {
        const _character = new Character('charactercharacter', 'Bowerman', 100, 1, 25, 25);
    }).toThrow('Параметры героя не корректны');
})

test ('characterlength2', () => {
    expect(() => {
        const _character = new Character('c', 'Bowerman', 25, 25);
    }).toThrow('Параметры героя не корректны');
})

test ('charactertype', () => {
    expect(() => {
        const _character = new Character('character', 'Bower', 100, 1, 25, 25);
    }).toThrow('Параметры героя не корректны');
})

test ('characterBow', () => {
    expect(() => {
        const _bow = new Bowerman('B');
    }).toThrow('Параметры героя не корректны');
})