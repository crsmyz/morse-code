import { morseCodeDictionary } from './constants';

export function matchRegexCharacterToMorseCodeCharacter(match) {
    return morseCodeDictionary[match] + ' ';
}