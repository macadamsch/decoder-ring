// Write your tests here!
const { caesar } = require("../src/caesar");
const { expect } = require("chai");

describe("caesar() tests written by CAM", () => {

//It returns false if the shift value is equal to 0, less than -25, greater than 25, or not present.
    it("should return false if the shift value is not present", ()=>{
        let input = "cats are cool";
        let shift = undefined;
        let actual = caesar(input, shift, (encode=true));
        let expected = false;
        expect(actual).to.equal(expected);
    });
    it("should return false if the shift value is less than -25", ()=>{
        let input = "cats are cool";
        let shift = -26
        let actual = caesar(input, shift, (encode=true));
        let expected = false;
        expect(actual).to.equal(expected)
    });
    it("should return false if the shift value is greater than 25",()=>{
        let input = "cats are cool";
        let shift = 26;
        let actual = caesar(input,shift,(encode=true));
        let expected = false;
        expect(actual).to.equal(expected)
    });
    it("should return false if the shift value is 0", ()=>{
        let input = "cats are cool";
        let shift = 0;
        let actual = caesar(input,shift,(encode=true));
        let expected = false;
        expect(actual).to.equal(expected)
    });
//It ignores capital letters. (For example, the results of A Message and a message should be the same.)
    it("should ignore capital letters", ()=>{
        let input1 = "Cats Are Cool";
        let input2 = "cats are cool";
        let shift = 10;
        let actual = caesar(input1,shift,(encode=true));
        let expected = caesar(input2,shift,(encode=true));
        expect(actual).to.equal(expected);
    });
//When encoding, it handles shifts that go past the end of the alphabet. (For example, shifting z to the right by 3 should cause the z to wrap around to the front of the alphabet, so that z becomes c.)
    it("handles shifts that go past the end of the alphabet", ()=>{
        let input = "xyz";
        let shift = 3
        let actual = caesar(input,shift,(encode=true));
        let expected = "abc";
        expect(actual).to.equal(expected);
    });
//It maintains spaces and other nonalphabetic symbols in the message, before and after encoding or decoding. 
    it("maintains spaces and other nonalphabetic symbols in the message", ()=>{
        let input = "#$^ &*^! $##!";
        let shift = 3
        let actual = caesar(input,shift,(encode=true));
        let expected = "#$^ &*^! $##!";
        expect(actual).to.equal(expected);
    })
})