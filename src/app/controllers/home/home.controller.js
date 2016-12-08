/**
 * Created by Corning on 2016/6/23.
 */
module.exports=function ($scope,$mdSidenav) {
    require('./home.less');
    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');

    function buildToggler(componentId) {
        return function() {
            $mdSidenav(componentId).toggle();
        }
    }

    $scope.itemList=[{
        
    }];
};