var carsTemp = (function () {
    var carsTemp = storage.load("carsTemp");
    var carsTempStorage = "carsTemp";

    var init = function () {
        carsTemp = storage.load(carsTempStorage);

        if (carsTemp === undefined) {
            createStorage();
            carsTemp = storage.load(carsTempStorage);
        };
    }

    function createStorage() {
        var carsTemp = []

        storage.save("carsTemp", carsTemp);
    }

    var addCar = function (urlPic, urlRev1, urlRev2, company, model, year, description, price) {

        var car = {
            urlPic: urlPic, urlRev1: urlRev1, company: company, model: model, year: year, description: description, price: price
        }

        carsTemp.push(car);
        storage.save("carsTemp", carsTemp);
    }

    var deleteCar = function (company, model, year) {
        if (accounts != null && acoounts != undefined && accounts.length > 0) {
            for (var i = 0; i < accounts.length; i++) {
                if (accounts[i].company == company && accounts[i].model == model && accounts[i].year == year) {
                    accounts.splice(i, 1);
                    break;
                };
            };
            storage.save("carsTemp", carsTemp);
        };
    }

    var getAllCarsTemp = function () {
        var result = [];
        //var carsTemp = storage.load("carsTemp");
        for (var i = 0; i < carsTemp.length; i++) {
            result.push(carsTemp[i]);
        }
        return result;
    }

    var getLastCar = function () {

        return carsTemp[carsTemp.length - 1];
    }

    return {
        init: init,
        addCar: addCar,
        deleteCar: deleteCar,
        getAllCarsTemp: getAllCarsTemp,
        getLastCar: getLastCar
    }


}());