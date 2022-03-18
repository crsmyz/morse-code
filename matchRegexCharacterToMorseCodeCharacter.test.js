import { matchRegexCharacterToMorseCodeCharacter } from './matchRegexCharacterToMorseCodeCharacter';

test('matchRegexCharacterToMorseCodeCharacter() will turn "m" into "-- "', () => {
    const str = 'm';
    const expectation = '-- ';
    const result = matchRegexCharacterToMorseCodeCharacter(str);
    expect(result).toEqual(expectation);
});

test('matchRegexCharacterToMorseCodeCharacter() will turn "1" into ".---- "', () => {
    const str = '1';
    const expectation = '.---- ';
    const result = matchRegexCharacterToMorseCodeCharacter(str);
    expect(result).toEqual(expectation);
});

test('matchRegexCharacterToMorseCodeCharacter() will turn "1" into "/"', () => {
    const str = ' ';
    const expectation = '/ ';
    const result = matchRegexCharacterToMorseCodeCharacter(str);
    expect(result).toEqual(expectation);
});