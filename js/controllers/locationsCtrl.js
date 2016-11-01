angular.module('devmtnTravel').controller('locationsCtrl', function($scope, mainSrv){

  $scope.locationList = mainSrv.travelInfo;
});
