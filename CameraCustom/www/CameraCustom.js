var exec = require('cordova/exec');

exports.coolMethod = function(arg0, success, error) {
    exec(success, error, "CameraCustom", "coolMethod", [arg0]);
};

exports.getMsg = function(arg0,success,error){

	exec(success, error, "CameraCustom", "getMsg", [arg0]);
};

exports.showAlert = function(arg0, success, error){

	exec(success, error, "CameraCustom", "showAlert" ,[arg0]);
};