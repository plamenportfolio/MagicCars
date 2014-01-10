var cars3d = (function () {

    var init = function () {
        
        return Cars3D;
    }


    var Cars3D = {

        "veyron": {

            name: "Bugatti Veyron",
            url: "ThreeDView/obj/veyron/VeyronNoUv_bin.js",
            author: '<a href="http://artist-3d.com/free_3d_models/dnm/model_disp.php?uid=1129" target="_blank">Troyano</a>',
            init_rotation: [0, 0, 0],
            scale: 5.5,
            init_material: 4,
            body_materials: [2],

            object: null,
            buttons: null,
            materials: null

        },

        "gallardo": {

            name: "Lamborghini Gallardo",
            url: "ThreeDView/obj/gallardo/GallardoNoUv_bin.js",
            author: '<a href="http://artist-3d.com/free_3d_models/dnm/model_disp.php?uid=1711" target="_blank">machman_3d</a>',
            init_rotation: [0, 0, 0],
            scale: 3.7,
            init_material: 9,
            body_materials: [3],

            object: null,
            buttons: null,
            materials: null

        },

        "f50": {

            name: "Ferrari F50",
            url: "ThreeDView/obj/f50/F50NoUv_bin.js",
            author: '<a href="http://artist-3d.com/free_3d_models/dnm/model_disp.php?uid=1687" target="_blank">daniel sathya</a>',
            init_rotation: [0, 0, 0],
            scale: 0.175,
            init_material: 2,
            body_materials: [3, 6, 7, 8, 9, 10, 23, 24],

            object: null,
            buttons: null,
            materials: null

        },

        "camaro": {

            name: "Chevrolet Camaro",
            url: "ThreeDView/obj/camaro/CamaroNoUv_bin.js",
            author: '<a href="http://www.turbosquid.com/3d-models/blender-camaro/411348" target="_blank">dskfnwn</a>',
            init_rotation: [0.0, 0.0, 0.0 /*0, 1, 0*/],
            scale: 75,
            init_material: 0,
            body_materials: [0],

            object: null,
            buttons: null,
            materials: null

        }

    };


    return {
        init: init,
    }


}());