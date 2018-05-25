var assert = require('assert');
var index = require('./index');
var AWS = require('aws-sdk-mock');
 
describe('index', function() {
  describe('#handler()', function() {
    it('should complete without error', function() {

      AWS.mock('Iot', 'describeCertificate', function (params, callback){
          callback(null, "successfully put item in database");
      });
        
      index.handler({ /* event */ }, { /* context */ }, function (err, data) {
        AWS.restore('Iot', 'describeCertificate');
        done();
      });
    });
  });
  
  describe('fail()', function() {
    it('should fail', function() {
        assert.equal(index.failFunction(), 0);
    });
  });
});



