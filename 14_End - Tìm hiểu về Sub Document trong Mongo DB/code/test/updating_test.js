const mocha = require("mocha");
const assert = require("assert");
const PersonChar = require("../models/personchar");

let character;

// Mieu ta qua trinh kiem tra
describe("Cap nhat ban ghi (records)", () => {
    // Saving records 
    beforeEach((done) =>{
        character = new PersonChar({
            name: 'Nhat Huy',
            height: 168
        });

        character.save().then(() => {
            done();
        });
    });

    it("Cap nhat ban ghi tu csdl", (done) => {
        PersonChar.findOneAndUpdate({name: 'Nhat Huy'}, {name: 'Huy Nhat'}).then(() => {
            PersonChar.findOne({_id: character._id}).then((result) => {
                assert(result.name === 'Huy Nhat');
                done();
            })
        })
    })

    it("Tang chieu cao len 2", (done) => {
        PersonChar.update({}, {$inc: {height: 2}}).then(() => {
            PersonChar.findOne({name: 'Nhat Huy'}).then((record)=> {
                assert(record.height === 170);
                done();
            })
        })
    })

});
