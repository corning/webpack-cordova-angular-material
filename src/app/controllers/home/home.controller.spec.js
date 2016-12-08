/**
 * Created by Corning on 2016/6/23.
 */
var HomeController = require('./home.controller');

describe('Home Controller', function () {
    var ctrl, $scope;

    beforeEach(function () {
        
        angular.mock.inject(function ($controller, $rootScope) {
            $scope = $rootScope.$new();
            
            ctrl = $controller(HomeController, {
                "$scope": $scope
            });
            
        });

    });

    it('Should myData has value', function () {
        
        expect($scope.myData.hello).toBe('Home...');
        
    });

});