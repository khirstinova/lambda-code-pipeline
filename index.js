var AWS = require('aws-sdk');
var time = require('time');

exports.handler = function (event, context, callback) {
    var iot = new AWS.Iot({'region': 'us-east-1', apiVersion: '2015-05-28'});

    iot.describeCertificate({
        certificateId: '655bb742b4ddf0188bfced154ae9cf932bd6597a31ff19cbd79e12456a6d5e21'
    }, function (err, data) {
        console.log("Data: " + data);
    });
}