const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../models/author');

describe('Tim hieu ve record sub',()=> {

    // Drop
    beforeEach((done) => {
        mongoose.connection.collections.authors.drop(()=>{
            done();
        })
    })

    //Tao qua trinh kiem tra
    it('Tao ra mot tac gia voi cac quyen sach', (done)=>{
        let tacgia = new Author({
            name: "Nhat Huy",
            books: [{title: "Xay dung ung dung bang ReactJs", numberOfPages: 20}]
        });

        tacgia.save().then(()=>{
            Author.findOne({name: "Nhat Huy"}).then((record)=>{
                assert(record.books.length === 1);
                done();
            })
        })
    })

    it('Them quyen sach', (done)=>{
        let tacgia = new Author({
            name: "Nhat Huy",
            books: [{title: "Xay dung ung dung bang ReactJs", numberOfPages: 20}]
        });

        tacgia.save().then(()=>{
            Author.findOne({name: "Nhat Huy"}).then((record)=>{
                // Them mot quyen sach vao mang 
                record.books.push({title: "Xay dung js Dom", numberOfPages: 50});
                record.save().then(()=>{
                    Author.findOne({name:"Nhat Huy"}).then((result)=>{
                        assert(result.books.length === 2);
                        done();
                    })
                })
            })
        })
    })


})