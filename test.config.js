/**
 * Created by Corning on 2016/10/5.
 */
require('angular');
require('angular-mocks/angular-mocks');

const context = require.context('./src/app', true, /\.(spec|js)$/);

context.keys().forEach(context);