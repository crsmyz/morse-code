import { replaceInputCharactersUsingRegexAndConversionFunction } from './replaceInputCharactersUsingRegexAndConversionFunction';

test('replaceInputCharactersUsingRegexAndConversionFunction() will turn "morse code" into "-- --- .-. ... . / -.-. --- -.. ."', () => {
    const str = 'morse code';
    const expectation = '-- --- .-. ... . / -.-. --- -.. .';
    const result = replaceInputCharactersUsingRegexAndConversionFunction(str);
    expect(result).toEqual(expectation);
});

test('replaceInputCharactersUsingRegexAndConversionFunction() will turn "123" into ".---- ..--- ...--"', () => {
    const str = 'morse code';
    const expectation = '-- --- .-. ... . / -.-. --- -.. .';
    const result = replaceInputCharactersUsingRegexAndConversionFunction(str);
    expect(result).toEqual(expectation);
});

test('replaceInputCharactersUsingRegexAndConversionFunction() will turn "morse123" into "-- --- .-. ... . .---- ..--- ...--"', () => {
    const str = 'morse code';
    const expectation = '-- --- .-. ... . / -.-. --- -.. .';
    const result = replaceInputCharactersUsingRegexAndConversionFunction(str);
    expect(result).toEqual(expectation);
});

test('replaceInputCharactersUsingRegexAndConversionFunction() will turn "morse 123" into "-- --- .-. ... . / .---- ..--- ...--"', () => {
    const str = 'morse code';
    const expectation = '-- --- .-. ... . / -.-. --- -.. .';
    const result = replaceInputCharactersUsingRegexAndConversionFunction(str);
    expect(result).toEqual(expectation);
});