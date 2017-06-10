angular.module("controllers",[])
.controller("navCon",["$scope",function($scope){
	$scope.navlist=[
	{"link":"#/day","class":"icon-home","span":"今日一刻"},
	{"link":"#/older","class":"icon-file-empty","span":"往期内容"},
	{"link":"#/author","class":"icon-pencil","span":"热门作者"},
	{"link":"#/category","class":"icon-menu","span":"栏目浏览"},
	{"link":"#/favourite","class":"icon-heart","span":"我的喜欢"},
	{"link":"#/settings","class":"icon-cog","span":"设置"}
	];
}])
.controller("todayCon",["$scope","$filter","$http","$rootScope",function($scope,$filter,$http,$rootScope){
	$scope.today=$filter("date")(new Date(),"yyyy-MM-dd");
	$rootScope.loaded=true;
	$http({
		url:"./api/today.php",
		params:{"today":$scope.today}
	}).then(function(data){
		$scope.datas=data.data.posts;
		// console.log($scope.datas)
		$rootScope.loaded=false;
	})
	$rootScope.title="今日一刻";
}])
.controller("olderCon",["$scope","$filter","$http","$rootScope",function($scope,$filter,$http,$rootScope){
	$scope.older=$filter("date")(new Date(new Date-24*60*60*1000),"yyyy-MM-dd");
	$rootScope.loaded=true;
	$http({
		url:"./api/older.php",
		params:{"older":$scope.older}
	}).then(function(data){
		$scope.datas=data.data.posts;
		// console.log($scope.datas)
		$rootScope.loaded=false;
	})
	$rootScope.title="往期内容";
}])
.controller("authorCon",["$scope","$http","$rootScope",function($scope,$http,$rootScope){
	$rootScope.loaded=true;
	$http({
		url:"./api/author.php"
	}).then(function(data){
		$scope.greats=data.data[0].authors;
		$scope.alls=data.data[1].authors;
		// console.log($scope.greats);
		$rootScope.loaded=false;
	})
	$rootScope.title="热门作者";
}])