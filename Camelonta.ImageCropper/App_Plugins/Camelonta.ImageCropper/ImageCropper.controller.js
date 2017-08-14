angular.module('umbraco').controller("Camelonta.ImageCropperController", function ($rootScope, $routeParams, $scope, $timeout, dialogService) {

        if (!$scope.model.value) { $scope.model.value = {}; }
        if ($scope.model.value.src) { $scope.imageSrc = $scope.model.value.src; }


        //define crop
        if ($scope.model.config) {
            $scope.crop = $scope.model.config;
        } else {
            $scope.crop = {
                width: 600,
                height: 600
            };
        }

        if ($scope.model.value.crops === undefined) {
            $scope.model.value.crops = [];
            $scope.model.value.crops.push($scope.crop);
        }

        // select image to crop
        $scope.selectContent = function () {
            var contentSelected = function (data) {
                if (!$scope.model.value) {
                    $scope.model.value = {};
                }
                $scope.model.value.src = data.image;
                $scope.model.value.id = data.id;
                $scope.imageSrc = data.image;
            }
            var options = {
                onlyImages: true,
                callback: contentSelected
            };
            dialogService.mediaPicker(options);
        };

        //crop a specific crop
        $scope.crop = function (crop) {
            $scope.model.value.crop = crop;
            $scope.model.value.setCrop = crop;
            $scope.model.value.currentCrop = crop;
            $scope.currentPoint = undefined;
        };

        //done cropping
        $scope.done = function () {
            $scope.model.value.currentCrop = undefined;
            $scope.currentPoint = undefined;
        };

        //crop a specific crop
        $scope.clear = function (crop) {
            $scope.imageSrc = undefined;
            $scope.model.value = undefined;
        };

        $scope.imageLoaded = function () {
            $scope.imageIsLoaded = true;
        };

    });