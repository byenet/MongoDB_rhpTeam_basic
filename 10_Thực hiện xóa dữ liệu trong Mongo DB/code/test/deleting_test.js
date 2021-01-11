const mocha = require("mocha");
const assert = require("assert");
const PersonChar = require("../models/personchar");

let character;

// Mieu ta qua trinh kiem tra
describe("Xoa ban ghi (records)", () => {
    // Saving records 
    beforeEach((done) =>{
        character = new PersonChar({
            name: 'Nhat Huy'
        });

        character.save().then(() => {
            assert(character.isNew === false);
            done();
        });
    });

    it("Xoa mot ban ghi tu csdl", (done) => {
        PersonChar.findOneAndRemove({name: 'Nhat Huy'}).then(() => {
            PersonChar.findOne({name: 'Nhat Huy'}).then((result) => {
                assert(result === null);
                done();
            })
        })
    })

});
