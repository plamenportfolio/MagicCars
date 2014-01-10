﻿var storage = (function () {
    var appName = 'Magic|Cars';
    var storageObject;

    storageObject = localStorage.getObject(appName);

    if (storageObject == null) {
        storageObject = {};
    }

    var save = function(key,value) {
        storageObject[key] = JSON.stringify(value);
        return localStorage.setObject(appName, storageObject);
    }

    var load = function(key) {
        if (storageObject[key] === undefined) {
            return undefined;
        } else {
            return JSON.parse(storageObject[key]);
        }
    }

    var clear = function () {
        storageObject = {};
        localStorage.setObject(appName, storageObject);
    }

    var remove = function (key) {
        storageObject[key] = null;
        localStorage.setObject(appName, storageObject);
    }

    return {
        save: save,
        load: load,
        clear: clear,
        remove: remove
    }
}())