let cipher = {
    a: 2,
    b: 3,
    c: 4,
    d: 5,
}
function decode(str, obj) {
    let arr = Object.keys(obj);
    let letter = arr.forEach(function (e, i) {
        if (e === str[0]) {
            return str[obj.e - 1];
        }
        else {
            return " ";
        }
    });
    return letter;
}
console.log(decode('aloha', cipher));


function createCharacter(name, nickname, race, origin, attack, defense) {
    return {
        name,
        nickname,
        race,
        origin,
        attack,
        defense,
        describe: function () {
            console.log(`${this.name} is a ${this.race} from ${this.origin}`)
        },
        evaluateFight: function (character) {
            return `Your opponent takes ${this.attack - character.defense} and you receive ${character.attack - this.defense} damage.`
        },
    }
}

let characters = [createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6),
createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1),
createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8),
createCharacter('Legolas', 'legolas', 'elf', 'Woodland Realm', 8, 5),
createCharacter('Peter son of a Griffin', 'Pete', 'god', 'Quahog', 10, 10)
];

console.log(characters);

function nicknameFinder(nick, arr) {
    let char = arr.find(function (e) {
        if (e.nickname === nick) {
            return e;
        }
    });
    return char;
}
nicknameFinder('aragorn', characters).describe();
function hobbits(arr) {
    let hobbitArr = arr.filter(function (e, i) {
        return e.race === 'Hobbit';
    });
    return hobbitArr;
}
console.log(hobbits(characters));

function highAttack(arr) {
    let attackers = arr.filter(function (e) {
        return e.attack > 5;
    });
  return attackers;
}
console.log(highAttack(characters));