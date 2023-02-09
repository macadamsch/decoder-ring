// Write your tests here!
const { substitution } = require("../src/substitution");
const { expect } = require("chai");

describe("substitution() tests written by CAM", ()=>{
//It returns false if the given alphabet isn't exactly 26 characters long.
    it("should return false if the given alphabet isn't exactly 26 characters long", ()=>{
        let input = "cats are cool"
        let alphabet = "abcd"
        let actual = substitution(input,alphabet,(encode=true));
        expect(actual).to.be.false;
    });
    it("should return false if the alphabet is undefined",()=>{
        let input = "cats are cool"
        let alphabet = undefined
        let actual = substitution(input,alphabet,(encode=true));
        expect(actual).to.be.false;
    });
//It correctly translates the given phrase, based on the alphabet given to the function.
    it("translates the given phrase correctly based on the alphabet given to the function", ()=>{
        let input = "thinkful";
        let alphabet = "xoyqmcgrukswaflnthdjpzibev";
        let actual = substitution(input,alphabet,(encode=true));
        let expected = "jrufscpw";
        expect(actual).to.equal(expected);
    });
//It returns false if there are any duplicate characters in the given alphabet.
    it("should return false if there are any duplicates in the given alphabet", ()=>{
        let input = "thinkful";
        let alphabet = "xoyqmcgrukswaflnthdjpzibbb";
        let actual = substitution(input,alphabet,(encode=true));
        expect(actual).to.be.false
    });
//It maintains spaces in the message, before and after encoding or decoding.
    it("should maintain spaces when encoding", ()=>{
        let input = "cats are cool"
        let alphabet = "xoyqmcgrukswaflnthdjpzibev"
        let actual = substitution(input,alphabet,(encode=true));
        let expected = "yxjd xhm yllw";
        expect(actual).to.equal(expected);
    });
    it("should maintain spaces when decoding", ()=>{
        let input = "yxjd xhm yllw"
        let alphabet = "xoyqmcgrukswaflnthdjpzibev"
        let actual = substitution(input,alphabet,(encode=false));
        let expected = "cats are cool";
        expect(actual).to.equal(expected);
    });
//It ignores capital letters. (For example, the results of A Message and a message should be the same.)
    it("should ignore capital letters", ()=>{
        let input1 = "cats are cool";
        let input2 = "Cats Are Cool";
        let alphabet = "xoyqmcgrukswaflnthdjpzibev";
        let actual = substitution(input1,alphabet,(encode=true));
        let expected = substitution(input2, alphabet, (encode=true));
        expect(actual).to.equal(expected);
    });
})