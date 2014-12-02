var myApp=angular.module("myApp",[]);
J = $;

myApp.controller("MyCtrl",['$scope','$http','$window',function($scope,$http,$window){  
  
  $http({
    url : 'http://localhost:7070/jersey/rest/imovel/quadrantes',
    method : "GET"    
  }).then(function(response){
    $scope.data=response.data;
  });
  
}]);

myApp.controller("CorretorCtrl",['$scope','$http','$window',function($scope,$http,$window){  
  
  $http({
    url : 'http://localhost:7070/jersey/rest/corretor/entidade',
    method : "GET"    
  }).then(function(response){
    $scope.data=response.data;
  });
  
}]);

myApp.controller("ImovelCarouselCtrl",['$scope','$http','$window',function($scope,$http,$window){  
  
  $http({
    url : 'http://localhost:7070/jersey/rest/imovel/carousel',
    method : "GET"    
  }).then(function(response){
    $scope.data=response.data;
    setTimeout(aplicarCarousel, 1000);
  });
  

}]);

function aplicarCarousel(){
   	$('.cycle-slideshow').cycle('destroy');
   	$('.cycle-slideshow').cycle();
}

myApp.controller("CidadesCtrl",['$scope','$http','$window',function($scope,$http,$window){  
  
  $http({
    url : 'http://localhost:7070/jersey/rest/imovel/cidades',
    method : "GET"    
  }).then(function(response){
    $scope.data=response.data;
  });
  

}]);
myApp.controller("TiposCtrl",['$scope','$http','$window',function($scope,$http,$window){  
  $http({
    url : 'http://localhost:7070/jersey/rest/imovel/tipos',
    method : "GET"    
  }).then(function(response){
    $scope.data=response.data;
  });
}]);

myApp.controller("BuscaSimplesCtrl",['$scope','$http','$window',function($scope,$http,$window){  
  var busca = getUrlParameter('busca');
  $http({
    url : 'http://localhost:7070/jersey/rest/imovel/busca/' + busca,
    method : "GET"    
  }).then(function(response){
    $scope.data=response.data;
  });
}]);

function getUrlParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}