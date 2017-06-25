(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope', '$filter'];
	function LunchCheckController($scope, $filter){
	$scope.list = "";
	$scope.f = ""

	$scope.Mensaje = function () {
			$scope.f = ProcesaEntrada ($scope.list);
				
		};

	};

})();


(ProcesaEntrada = function (a) {	
		var Men = ""
		var sep = ','
		if (typeof a == "undefined") { Men = "";} 	
		else{
			var dd = a.split(sep);
			if(dd == ""){ Men = "Please enter data first";}
					else{ var count = 0; var i = dd.length;
						while(i--){
							if(dd[i].trim() == 0)
								count ++
						}
						var numero = dd.length - count
						
						if (numero < 4) {Men = "Enjoy!" } 
							else {Men = "Too much!"}	
						}
			}	
				 return Men


})();


