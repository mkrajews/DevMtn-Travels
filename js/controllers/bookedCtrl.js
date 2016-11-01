angular.module('devmtnTravel').controller('bookedCtrl', function($scope, mainSrv, $stateParams){

  $scope.whatCity = function(){
    for(var i = 0; i < mainSrv.travelInfo.length; i++) {
      if($stateParams.id == mainSrv.travelInfo[i].id) {
        $scope.matchCity = mainSrv.travelInfo[i];
      }

    }
  };
  $scope.whatCity();
});
