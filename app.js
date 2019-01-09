const app = angular.module('app', ['helloModule'])

angular.module('helloModule')
    .run(function ($rootScope) {
        console.log('app.js -> helloModule -> config -> $rootScope', $rootScope)
        setTimeout(function () {
            $rootScope.message = 'Update $rootScope outside!!!';
            $rootScope.$apply();
        }, 1000)
    })
