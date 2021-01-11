const mocha = require("mocha");
const assert = require("assert");
const PersonChar = require("../models/personchar");

// Mieu ta qua trinh kiem tra
describe("Tim kiem ban ghi (records)", () => {
    // Saving records 
    beforeEach((done) =>{
        let character = new PersonChar({
            name: 'Nhat Huy'
        });

        character.save().then(() => {
            assert(character.isNew === false);
            done();
        });
    })
    // Find one
    it("Tim mot ban ghi tu co so du lieu", (done) => {
        PersonChar.findOne({name: "Nhat Huy"}).then((result) => {
            assert(result.name === "Nhat Huy");
            done();
        })
    });
});
