const helloModule = angular.module('helloModule', [])

helloModule.run(function ($rootScope) {
    $rootScope.message = 'Hello from helloModule (will be update)';
});

helloModule.directive('helloDirective', function () {
    return {
        scope: {
            message: "="
        },
        template: '<div>{{message}}</div>'
    }
});
