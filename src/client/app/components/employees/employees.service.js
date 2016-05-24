angular
	.module('Scheduling')
	.service('employeesService',[ '$http', function($http){

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