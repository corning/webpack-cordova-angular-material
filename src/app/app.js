/**
 * Created by Corning on 2016/6/23.
 */
import angular from 'angular';
import ngSanitize from 'angular-sanitize';
import ngUIRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import config from './config';

/* common less */
import './less/common.less';

/* Material Styles */
import 'angular-material/angular-material.scss';

/* App module */
var app=angular.module('myApp',[ngUIRouter,ngMaterial,ngAnimate,ngAria,ngSanitize]);

/* Directives */

/* Services */
import cacheService from './services/postMessageService';

app.service('cacheService',['$rootScope',cacheService]);

/* App run */
app.run(['$rootScope',function ($rootScope) {
    
}]);

app.config(['$stateProvider', '$urlRouterProvider',config]);