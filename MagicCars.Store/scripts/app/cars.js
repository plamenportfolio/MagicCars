var cars = (function () {
    var cars = storage.load("cars");
    var carsStorage = "cars";

    var init = function () {
        cars = storage.load(carsStorage);

        if (cars === undefined) {
            createStorage();
            cars = storage.load(carsStorage);
        };
    }

    function createStorage() {
        var cars = []
        
        storage.save("cars", cars);
        addDatabase();
    }

    function addDatabase() {

        var datacar = {

            "mazda-cx5": {

                urlPi: "mazda-cx5.jpg",
                urlRev1: "no",
                company: 'Mazda',
                model: "CX-5",
                year: "2013",
                description: "SUV",
                price: "60000",
            },

            "audi-a3": {

                urlPi: "audi-a3.jpg",
                urlRev1: "no",
                company: 'Audi',
                model: "A3",
                year: "2013",
                description: "Hatchback",
                price: "50000",
            },

            "audi-q5": {

                urlPi: "audi-q5.jpg",
                urlRev1: "no",
                company: 'Audi',
                model: "Q5",
                year: "2013",
                description: "SUV",
                price: "85000",
            },

            "bmw-x3": {

                urlPi: "bmw-x3.jpg",
                urlRev1: "no",
                company: 'BMW',
                model: "X3",
                year: "2013",
                description: "SUV",
                price: "85000",
            },

            "mazda-3": {

                urlPi: "mazda-3.jpg",
                urlRev1: "no",
                company: 'Mazda',
                model: "3",
                year: "2013",
                description: "Hatchback",
                price: "35000",
            },

            "mazda-6": {

                urlPi: "mazda-6.jpg",
                urlRev1: "no",
                company: 'Mazda',
                model: "6",
                year: "2013",
                description: "Sedan",
                price: "60000",
            },

            "mercedes-glk": {

                urlPi: "mercedes-glk.jpg",
                urlRev1: "no",
                company: 'Mercedes',
                model: "GLK",
                year: "2013",
                description: "SUV",
                price: "100000",
            },

            "audi-q7": {

                urlPi: "audi-q7.jpg",
                urlRev1: "no",
                company: 'Audi',
                model: "Q7",
                year: "2013",
                description: "SUV",
                price: "150000",
            },

            "bmw-5": {

                urlPi: "bmw-5.jpg",
                urlRev1: "no",
                company: 'BMW',
                model: "5",
                year: "2013",
                description: "Sedan",
                price: "110000",
            },

            "bmw-x5": {

                urlPi: "bmw-x5.jpg",
                urlRev1: "no",
                company: 'BMW',
                model: "X5",
                year: "2013",
                description: "SUV",
                price: "170000",
            },

            "mercedes-g": {

                urlPi: "mercedes-g.jpg",
                urlRev1: "no",
                company: 'Mercedes',
                model: "G",
                year: "2013",
                description: "SUV",
                price: "300000",
            },

            "mercedes-gl": {

                urlPi: "mercedes-gl.jpg",
                urlRev1: "no",
                company: 'Mercedes',
                model: "GL",
                year: "2013",
                description: "SUV",
                price: "220000",
            },

            "vw-golf5": {

                urlPi: "vw-golf5.jpg",
                urlRev1: "no",
                company: 'VW',
                model: "Golf 5",
                year: "2013",
                description: "Hatchback",
                price: "45000",
            },

            "vw-passat": {

                urlPi: "vw-passat.jpg",
                urlRev1: "no",
                company: 'VW',
                model: "Passat",
                year: "2013",
                description: "Sedan",
                price: "70000",
            },

            "vw-tiguan": {

                urlPi: "vw-tiguan.jpg",
                urlRev1: "no",
                company: 'VW',
                model: "Tiguan",
                year: "2013",
                description: "SUV",
                price: "75000",
            },

            "vw-touareg": {

                urlPi: "vw-touareg.jpg",
                urlRev1: "no",
                company: 'VW',
                model: "Touareg",
                year: "2013",
                description: "SUV",
                price: "120000",
            },

            "vw-transporter": {

                urlPi: "vw-transporter.jpg",
                urlRev1: "no",
                company: 'VW',
                model: "Transporter",
                year: "2013",
                description: "Van",
                price: "90000",
            },

            "toyota-rav4": {

                urlPi: "toyota-rav4.jpg",
                urlRev1: "no",
                company: 'Toyota',
                model: "Rav 4",
                year: "2013",
                description: "SUV",
                price: "65000",
            },


            "rover-evoque": {

                urlPi: "rover-evoque.jpg",
                urlRev1: "no",
                company: 'Range Rover',
                model: "Evoque",
                year: "2013",
                description: "SUV",
                price: "85000",
            },

            "ferrari-f50": {

                urlPi: "ferrari-f50.jpg",
                urlRev1: "ferrari-f50.jpg",
                company: 'Ferrari',
                model: "F50",
                year: "1997",
                description: "Sport",
                price: "700000",
            },

            "lamborghini-gallardo": {

                urlPi: "lamborghini-gallardo.jpg",
                urlRev1: "lamborghini-gallardo.jpg",
                company: 'Lamborghini',
                model: "Gallardo",
                year: "2006",
                description: "Sport",
                price: "400000",
            },

            "bugatti-veyron": {

                urlPi: "bugatti-veyron.jpg",
                urlRev1: "bugatti-veyron.jpg",
                company: 'Bugatti',
                model: "Veyron",
                year: "2005",
                description: "Sport",
                price: "1700000",
            },

            "chevrolet-camaro": {

                urlPi: "chevrolet-camaro.jpg",
                urlRev1: "chevrolet-camaro.jpg",
                company: 'Chevrolet',
                model: "Camaro",
                year: "1967",
                description: "Sport retro",
                price: "70000",
            }

        };


        //for (var key in datacar) {
        //    //console.log(key);
        //    var tess = datacar[key];

        //}

        //for (var value in datacar) {
        //    console.log(value);
        //}

        //Object.keys(datacar).forEach(function (key) {
        //    var tess = datacar[key];

        //    var f = 7;
        //});

        var temp = [];

        for (var key in datacar) {

            var tess = datacar[key];

            var car = {
                urlPic: tess.urlPi, urlRev1: tess.urlRev1, company: tess.company, model: tess.model, year: tess.year, description: tess.description, price: tess.price
            }

            temp.push(car);
            //cars.push(tess.urlPi, tess.urlRev1, "no", tess.company, tess.model, tess.year, tess.description, tess.price);
        }

        storage.save("cars", temp);
       
    }

    var addCar = function (urlPic, urlRev1, urlRev2, company, model, year, description, price) {
     
        var car = {
            urlPic: urlPic, urlRev1: urlRev1, company: company, model: model, year: year, description: description, price: price
        }

        cars.push(car);
        storage.save("cars", cars);
    }

    var deleteCar= function (company, model, year) {
        if (accounts != null && acoounts != undefined && accounts.length > 0) {
            for (var i = 0; i < accounts.length; i++) {
                if (accounts[i].company == company && accounts[i].model == model && accounts[i].year == year) {
                    accounts.splice(i, 1);
                    break;
                };
            };
            storage.save("cars", cars);
        };
    }

    var getAllCars = function () {
        var result = [];
        //var cars = storage.load("cars");
        for (var i = 0; i < cars.length; i++) {
            result.push(cars[i]);
        }
        return result;
    }

    var getThreeDCars = function () {
        var result = [];
        
        for (var i = 0; i < cars.length; i++) {
            if (cars[i].urlRev1 != "no" && cars[i].urlRev1 != "" && cars[i].urlRev1 != null && cars[i].urlRev1 != undefined) {
                result.push(cars[i]);
            }          
        }
        return result;
    }

    var getSearchCars = function (text) {

        text = text.replace(/,/, " ");


        //if (Object.prototype.toString.call(temp) === '[object Array]') {
        //    text = "";
        //    for (var word in temp) {
        //        text += word + " ";
        //    }
        //}

        var fields = text.split(' ');

        var result = [];
        for (var j = 0; j < fields.length; j++) {

            if (fields[j] == "") {
                continue;
            }

            for (var i = 0; i < cars.length; i++) {

                var addArticle = substringFinder(cars[i], fields[j]);

                if (addArticle == true)
                {
                    result.push(cars[i]);
                }
            }
        }
        return result;
    }

    function substringFinder(car, word) {

        if (car.company.toLowerCase().indexOf(word) != -1 || car.model.toLowerCase().indexOf(word) != -1 || car.year.indexOf(word) != -1) {
            return true;
        }
        else {
            return false;
        }
    }


    return {
        init: init,
        addCar: addCar,
        deleteCar: deleteCar,
        getAllCars: getAllCars,
        getThreeDCars: getThreeDCars,
        getSearchCars: getSearchCars
    }


}());