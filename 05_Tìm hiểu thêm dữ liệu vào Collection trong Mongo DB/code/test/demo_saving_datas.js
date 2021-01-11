const mocha = require('mocha');
const assert = require('assert');
const PersonChar = require('../models/personchar');

describe('Mieu ta them du lieu', ()=> {
    it("Them mot ban ghi vao co so du lieu", (done)=> {
        let character = new PersonChar({
            name: 'Nhat huy 3'
        });
        character.save().then(() => {
            assert(character.isNew === false);
            done();
        })
    })
})