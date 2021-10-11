angular.module('shoppingApp',['ngRoute']).config(Config);

function Config($routeProvider){
    $routeProvider.when('/',{
        templateUrl : 'app/views/main.html',
        controller : 'MainCtrl',
        controllerAs : 'vm'
    }).when('/item/:id',{
        templateUrl : 'app/views/singleItem.html',
        controller : 'SingleItemCtrl',
        controllerAs : 'vm'
    }).when('/addNewItem',{
        templateUrl : 'app/views/add.html',
        controller : 'AddItemCtrl',
        controllerAs : 'vm'
    }).when('/editItem/:id',{
        templateUrl : 'app/views/edit.html',
        controller : 'EditItemCtrl',
        controllerAs : 'vm'
    }).when('/about',{
        templateUrl : 'app/views/about.html',
        controller : 'AboutCtrl',
        controllerAs : 'vm'
    }).when('/register',{
        templateUrl : 'app/views/registeration.html',
        controller : 'RegCtrl',
        controllerAs : 'vm'
    })
    
    .otherwise({
        redirectTo : '/'
    });
}