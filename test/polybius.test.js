// Write your tests here!
const { polybius } = require("../src/polybius");
const { expect } = require("chai");

describe("polybius() tests written by CAM", ()=>{
//When encoding, it translates the letters i and j to 42.
    it("should translate i and j to 42", ()=>{
        let input = "i j";
        let actual = polybius(input,(encode=true));
        let expected = "42 42";
        expect(actual).to.equal(expected);
    });
//When decoding, it translates 42 to (i/j).
    it("should translate 42 to (i/j)", ()=>{
        let input = "42";
        let actual = polybius(input,(encode=false));
        let expected = "(i/j)";
        expect(actual).to.equal(expected);
    });
//It ignores capital letters. (For example, the results of A Message and a message should be the same.)
    it("should ignore capital letters", ()=>{
        let input1 = "cats are cool";
        let input2 = "Cats Are Cool";
        let actual = polybius(input1,(encode=true));
        let expected = polybius(input2,(encode=true));
        expect(actual).to.equal(expected);
    });
//It maintains spaces in the message, before and after encoding or decoding.
    it("maintains spaces in the message when encoding", ()=>{
        let input = "cats are cool";
        let actual = polybius(input,(encode=true));
        let expected = "31114434 112451 31434313";
        expect(actual).to.equal(expected);
    });
    it("maintains spaces in the message when decoding", ()=>{
        let input = "31114434 112451 31434313";
        let actual = polybius(input,(encode=false));
        let expected = "cats are cool";
        expect(actual).to.equal(expected);
    });
})