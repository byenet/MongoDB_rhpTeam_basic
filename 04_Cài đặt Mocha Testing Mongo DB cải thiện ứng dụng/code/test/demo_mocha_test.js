const mocha = require('mocha');
const assert = require('assert');

// Mieu ta lai qua trinh kiem tra
describe('Mieu ta demo nay', ()=> {
    // Tao ra mot cai test 
    it("kiem tra hai so cong lai", ()=> {
        assert(1+1 === 2);
    })
})