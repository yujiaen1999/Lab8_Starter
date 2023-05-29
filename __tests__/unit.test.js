// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// function isPhoneNumber(phoneNumber)
test('Check phone number 1: valid number', () => {
    expect(functions.isPhoneNumber('858-361-7374')).toBe(true);
});

test('Check phone number 2: valid number', () => {
  expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});

test('Check phone number 3: invalid number', () => {
  expect(functions.isPhoneNumber('123-45-78')).toBe(false);
});

test('Check phone number 4: invalid number', () => {
  expect(functions.isPhoneNumber('abcdefg')).toBe(false);
});


// function isEmail(email)
test('Check Email 1: valid email', () => {
  expect(functions.isEmail('abcdefg@gamil.com')).toBe(true);
});

test('Check Email 2: valid email', () => {
  expect(functions.isEmail('jiy037@ucsd.edu')).toBe(true);
});

test('Check Email 3: invalid email', () => {
  expect(functions.isEmail('jiy037@ucsd')).toBe(false);
});

test('Check Email 3: invalid email', () => {
  expect(functions.isEmail('jiy037$ucsd.edu')).toBe(false);
});


// function isStrongPassword(password)
test('Check password 1: is strong password', () => {
  expect(functions.isStrongPassword('abcdefg00_')).toBe(true);
});

test('Check password 2: is strong password', () => {
  expect(functions.isStrongPassword('jiy037_edu')).toBe(true);
});

test('Check password 3: not a strong password', () => {
  expect(functions.isStrongPassword('123456')).toBe(false);
});

test('Check password 4: not a strong password', () => {
  expect(functions.isStrongPassword('abc')).toBe(false);
});


// function isDate(date)
test('Check Date 1: valid date', () => {
  expect(functions.isDate('05/28/2023')).toBe(true);
});

test('Check Date 2: valid date', () => {
  expect(functions.isDate('07/19/2022')).toBe(true);
});

test('Check Date 3: invalid date', () => {
  expect(functions.isDate('5/28/23')).toBe(false);
});

test('Check Date 4: invalid date', () => {
  expect(functions.isDate('5 28 2023')).toBe(false);
});


// function isHexColor(color)
test('Check HexColor 1: is HexColor', () => {
  expect(functions.isHexColor('FFFFFF')).toBe(true);
});

test('Check HexColor 2: is HexColor', () => {
  expect(functions.isHexColor('000000')).toBe(true);
});

test('Check HexColor 3: not HexColor', () => {
  expect(functions.isHexColor('FFFFFG')).toBe(false);
});

test('Check HexColor 4: not HexColor', () => {
  expect(functions.isHexColor('abcdefg')).toBe(false);
});

