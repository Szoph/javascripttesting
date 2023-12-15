const checkPassword = require("./checker");

// 1st test

// expect is from jest (it takes the function we want to test, which in this case is checkPassword)
// toBe refers to what comes back from the function being tested
//at least 8 charecters long
//has at least one letter
//has at least one number
// has at least one UPPERCASE letter
// has at least one symbol
// is not longer than 20 chars

test("return false when given an empty string", () => {
  expect(checkPassword("")).toBe(false);
});

test("return false when the password length is not 8 chars or more", () => {
    expect(checkPassword("1234567")).toBe(false);
});

test("return false when the password doesnt contain a letter", () => {
    expect(checkPassword("123456789")).toBe(false)
})

test("return false when the password doesnt contain a number", () => {
    expect(checkPassword("aaaaaaaaaa")).toBe(false)
})

test("return false when password is more than 20 chars long", () => {
    expect(checkPassword("a1a1a1a1a1a1a1a1a1a1a1")).toBe(false)
})
test("return false when password doesnt contain uppercase", () => {
    expect(checkPassword("hello123")).toBe(false)
})
test("return false when password doesnt include special char", () => {
    expect(checkPassword("Hello123")).toBe(false)
})

test("return true when password is 8 chars or more, contains letter, number, special char and uppercase letter", () => {
    expect(checkPassword("Helloworld12!")).toBe(true)
})


// test("return true when the password is 8 chars or more, contains a letter, contains a number", () => {
//     expect(checkPassword("helloworld123")).toBe(true)
// })

// // check now to see if it fails when given a password of 8 characters but has no letters

// test("returns false when given a password of 8 characters but has no letters", () => {
//     expect(checkPassword("12345678")).toBe(false)
// })


//npx jest checker.test.js to test in terminal