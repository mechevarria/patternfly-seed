'use scrict';

angular.module( 'patternfly.select' ).controller( 'SelectDemoCtrl', function( $scope ) {
    $scope.drinks = ['tea', 'coffee', 'water'];
    $scope.pets = ['Dog', 'Cat', 'Chicken'];
    $scope.pet = $scope.pets[0];
    $scope.fruit = 'orange';
});