angular.module('app.example', [
    'angular-meteor',
    'ui.router',
    'ionic',
    'ngCordova.plugins.datePicker'
]);

function onReady() {
    angular.bootstrap(document, ['app.example']);
}

if (Meteor.isCordova) {
    angular.element(document).on("deviceready", onReady);
} else {
    angular.element(document).ready(onReady);
}
