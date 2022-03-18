import { matchRegexCharacterToMorseCodeCharacter } from './matchRegexCharacterToMorseCodeCharacter';

export function replaceInputCharactersUsingRegexAndConversionFunction(input) {
    return input.replace(/(\w)|(\s)/gi, matchRegexCharacterToMorseCodeCharacter).trim();
}