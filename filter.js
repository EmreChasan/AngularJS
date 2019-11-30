var app=angular.module("app", []);
app.controller("control", function($scope){
	
	$scope.isimler=[
	{"ad":"emre", "soyisim":"chasan", "yas":22, "sehir":"komotini", "cins":"erkek"},
	{"ad":"john", "soyisim":"stok", "yas":20, "sehir":"komotini", "cins":"erkek"},
	{"ad":"Bob", "soyisim":"brus", "yas":21, "sehir":"komotini", "cins":"bayan"},
	{"ad":"mary", "soyisim":"obama", "yas":25, "sehir":"komotini", "cins":"bayan"},
	{"ad":"barney", "soyisim":"luis", "yas":23, "sehir":"komotini", "cins":"erkek"},
	{"ad":"lily", "soyisim":"fernandes", "yas":29, "sehir":"komotini", "cins":"bayan"}
];


	$scope.filtrele=function(nurtopu){

		if($scope.secenek1=="undefined" && $scope.secenek2=="undefined"){
			return true
		}
		else  {
			return $scope.secenek1==nurtopu.cins || $scope.secenek2==nurtopu.cins;
		}
	}	


})