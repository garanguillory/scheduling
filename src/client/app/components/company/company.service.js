angular
	.module('Scheduling')
	.service('companyService',[ '$http', function($http){

		return {
			getEmployees: function(id){
				return $http.get('/api/users/' + id +'/employees')
										.then(function(res){
										  return res;
										})
										.catch(function(err){
										  return err;
										});
			}
		};

}]);