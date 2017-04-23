myapp.config(['$routeProvider',function($routeProvider){

	$routeProvider
	              .when('/',{
	              	templateUrl: 'views/index-view.html',
	              	controller:'matches',
	              	controllerAs:'match'
	              })
	              .when('/ongoing',{
	              	templateUrl:'views/ongoing-view.html',
	              	controller:'matches',
	              	controllerAs:'match'
	              })
	              .when('/new',{
	              	templateUrl:'views/upcoming-view.html',
	              	controller:'matches',
	              	controllerAs:'match'
	              })
	              .otherwise(
            {
                //redirectTo:'/'
               redirectTo : '/'
            }
        );

}]);
