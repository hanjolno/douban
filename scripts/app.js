var app=angular.module("app",["controllers","ngRoute"]);
app.run(["$rootScope",function($rootScope){
	$rootScope.collapsed=false;
	$rootScope.toggle=function(){
		var dds = document.querySelectorAll(".navs dd");
		// console.log(dds);
		$rootScope.collapsed=!$rootScope.collapsed;
		if($rootScope.collapsed){
			for(var i=0;i<dds.length;i++){
				dds[i].style.transform="translate(0)";
				dds[i].style.transitionDuration=(i+1)*0.15+"s";
			}
		}else{
			for(var i=0;i<dds.length;i++){
				dds[i].style.transform="translate(-100%)";
				dds[i].style.transitionDuration=(dds.length-i)*0.15+"s";
			}
		}
	}
}])
app.config(function($locationProvider){
	$locationProvider.hashPrefix("");
})
app.config(["$routeProvider",function($routeProvider){
	$routeProvider.when("/day",{
		templateUrl:"./views/today.html",
		controller:"todayCon"
	})
	.when("/older",{
		templateUrl:"./views/older.html",
		controller:"olderCon"
	}).when("/author",{
		templateUrl:"./views/author.html",
		controller:"authorCon"
	}).otherwise({redirectTo:"/day"})
}])