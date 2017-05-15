angular.module('umbraco').controller("Camelonta.MediaImageCropperGridController",
    function ($rootScope, $routeParams, $scope, $timeout, dialogService) {

        if (!$scope.control.MediaImageCropperGrid) {
            $scope.control.MediaImageCropperGrid = {};
        }

        if ($scope.control.MediaImageCropperGrid.src) {
            $scope.imageSrc = $scope.control.MediaImageCropperGrid.src;
        }

        // define available crops
        if ($scope.control.MediaImageCropperGrid.crops === undefined) {
            $scope.control.MediaImageCropperGrid.crops = [];
            var crop1 = {
                alias: "Landscape",
                height: 530,
                width: 940
            };
            var crop2 = {
                alias: "Portrait",
                height: 720,
                width: 530
            };
            var crop3 = {
                alias: "Staff",
                height: 400,
                width: 400
            };
            $scope.control.MediaImageCropperGrid.crops.push(crop1);
            $scope.control.MediaImageCropperGrid.crops.push(crop2);
            $scope.control.MediaImageCropperGrid.crops.push(crop3);
        }

        // select image to crop
        $scope.selectContent = function () {
            var contentSelected = function (data) {
                if (!$scope.control.MediaImageCropperGrid) {
                    $scope.control.MediaImageCropperGrid = {};
                }
                $scope.control.MediaImageCropperGrid.src = data.image;
                $scope.control.MediaImageCropperGrid.id = data.id;
                $scope.imageSrc = data.image;
            }
            var options = {
                onlyImages: true,
                callback: contentSelected
            };
            dialogService.mediaPicker(options);
        };

        // open picker on init
        $timeout(function () {
            if ($scope.control.$initializing) {
                $scope.selectContent();
            }
        }, 200);

        //crop a specific crop
        $scope.crop = function (crop) {
            $scope.control.MediaImageCropperGrid.crop = crop;
            $scope.control.MediaImageCropperGrid.setCrop = crop;
            $scope.control.MediaImageCropperGrid.currentCrop = crop;
            $scope.currentPoint = undefined;
        };

        //done cropping
        $scope.done = function () {
            $scope.control.MediaImageCropperGrid.currentCrop = undefined;
            $scope.currentPoint = undefined;
        };

        //crop a specific crop
        $scope.clear = function (crop) {
            $scope.control.MediaImageCropperGrid = undefined;
            $scope.imageSrc = undefined;
        };

        $scope.imageLoaded = function () {
            $scope.imageIsLoaded = true;
        };

    });