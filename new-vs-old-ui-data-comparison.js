const expect = require('chai').expect;
util = require('util');
_ = require ('lodash');

const db = require ("../../utils/datacontext.mongodb.js");


describe("new UI vs old UI data comparison", function(){
    it("should compares two given ids", function() {
        db.find("Note", { "_id" : "4Gfna_IO1"}, (resultOldUI) => {
            db.find("Note", { "_id": "PGBRTklmM" }, (resultNewUI) => {
              let contentOldUI = resultOldUI[0];
              let contentNewUI = resultNewUI[0];       
              console.log(contentOldUI.name);
              console.log(contentNewUI.name);
              console.log(contentOldUI.id);
              console.log(contentNewUI.id);
              console.log(contentOldUI.appointment);
              console.log(contentNewUI.appointment);                
          });    
        }); 
    });    
});


