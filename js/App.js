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
  var tipoDeBusca = getUrlParameter('tipoDeBusca');
  var busca = getUrlParameter('busca');
  var url = "";
  var tipo = getUrlParameter('tipo');
  var cidade = getUrlParameter('cidade');
  var min = getUrlParameter('min');
  var max = getUrlParameter('max');
  
  var urlSimples = 'http://localhost:7070/jersey/rest/imovel/busca/' + busca;
  var urlComplexa = 'http://localhost:7070/jersey/rest/imovel/busca/' + tipo + "/" + cidade + "/" + min + "/" + max ;
  // var urlComplexa = 'http://localhost:7070/jersey/rest/imovel/busca/apartamento/cotia/null/null';
                     //http://localhost:7070/jersey/rest/imovel/busca/apartamento/cotia/null/null

  if( tipoDeBusca == "simples"){
    $http({
      url : urlSimples,
      method : "GET"    
    }).then(function(response){
      $scope.data=response.data;
    });
  }else{
      $http({
        url : urlComplexa,
        method : "GET",   
      }).then(function(response){
        $scope.data=response.data;
      });
  }

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