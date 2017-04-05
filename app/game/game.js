/*'use strict';

angular.module('myApp.updateBook', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/vache&taureau', {
    templateUrl: 'game/game.html',
    controller: 'gameCtrl'
  });
}])
.controller('gameCtrl', ['$scope','$http',function($scope,$http) {
    $scope.test=function(){
        var exemple=$scope.exemple;
        var exemple2=exemple.toString();
        if(exemple2.length!=4){
            alert("la longeur dépase 4")
        }
        /*for (var i = 0; i < exemple2.length; i++) {
           if exemple2[i]
        }
    }
}]);*/
(function () {
    'use strict';
    var table=[1234,4567,1258,7538,4568,7894,7412,1539,7589,1253,7584,7581,4587,8276,7415,9631,7894,3654,4527,1258,5284,
              1234,4567,1258,7538,4568,7894,7412,1539,7589,1253,7584,7581,4587,8276,7415,9631,7894,3654,4527,1258,5284,
              1234,4567,1258,7538,4568,7894,7412,1539,7589,1253,7584,7581,4587,8276,7415,9631,7894,3654,4527,1258,5284,
              1234,4567,1258,7538,4568,7894,7412,1539,7589,1253,7584,7581,4587,8276,7415,9631,7894,3654,4527,1258,5284,
              1234,4567,1258,7538,4568,7894,7412,1539,7589,1253,7584,7581,4587,8276,7415,9631,7894,3654,4527,1258,5284];



    angular
        .module('app')
        .controller('gameCtrl.IndexController', Controller);
        function Controller($window,$scope, UserService, FlashService) {

        var vm = this;

        vm.user = null;

        initController();

        function initController() {
            // get current user
            UserService.GetCurrent().then(function (user) {
                vm.user = user;
            });
        }
     
        $scope.comance=function(){
          var nam=[];
          $scope.bra=nam;
          document.getElementById('output').innerHTML ="";
          var k=0;
          var rand=Math.floor((Math.random() * 100) + 1);
          var res=table[rand].toString();
         $scope.test=function(){

          var b1=true;
          var b2=true;
          var b3=true;
          var T=0;
          var V=0;
        var exemple=$scope.exemple;
        var exemple2=exemple.toString();
        if(exemple2.length!=4){
          b1=false;
            alert("la longeur dépase 4");
        }
        /*for (var i = 0; i < 4; i++) {
          if(exemple2[i]!='0'||exemple2[i]!='1'||exemple2[i]!='2'||exemple2[i]!='3'||exemple2[i]!='4'||exemple2[i]!='5'||exemple2[i]!='6'||exemple2[i]!='7'||exemple2[i]!='8'||exemple2[i]!='9')
          {
            b2=false;
            alert("il faut que le test ne contient pas des lettre");
            break;
          }
        }*/
        if(exemple2[0]==exemple2[1] ||exemple2[0]==exemple2[2] ||exemple2[0]==exemple2[3] ||
          exemple2[1]==exemple2[2] ||exemple2[1]==exemple2[3] ||exemple2[2]==exemple2[3] ){
          alert("il faut que le test ne contient pas des entier double");
        b3=false
        }
        if(b3 && b1){
            for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (exemple2[i] == res[j]) {
                if (i == j) {
                    T += 1;
                }
                if (i != j) {
                    V += 1;
                }

            }

        }
    }
    if(T==4){
      var start=0;
      document.getElementById("chronotime").innerHTML = "0:00:00:000";
      
      document.getElementById('output').innerHTML = '<h1> GOOOOOOOOOOOOOOOOOOOOOOOOOD </h1> <br> ';
      

    }
    else{
      nam[k]={
        a:exemple2+"  ="+V.toString()+"    ",
      b:"         "+T.toString()+"   "
            }
    k=k+1;

      $scope.bra=nam;
    }
    
        }

      }


        
    }
  }

})();