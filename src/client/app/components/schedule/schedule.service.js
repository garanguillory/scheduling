
angular
	.module('Scheduling')
	.service('scheduleService',[ '$http', function($http){
		
		return {

			getEmployeeInfo: function(company_id){
				return $http.get('/api/users/employees/' + company_id)
										.then(function(res){
										  return res;
										})
										.catch(function(err){
										  return err;
										});
			}

		};

}]);

