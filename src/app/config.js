/**
 * Created by Corning on 2016/6/25.
 */

import HomeState from './controllers/home/home.state';
import AboutState from './controllers/about/about.state';

var router=function ($stateProvider,$urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.
    state(HomeState).
    state(AboutState);

};

module.exports=router;