angular
	.module('Scheduling')
	.service('profileService',[ '$http', function($http){
		
		return {
			getCompany: function(company_id){
				return $http.get('/api/users/company/' + company_id)
										.then(function(res){
										  return res;
										})
										.catch(function(err){
										  return err;
										});
			},
			getEmployee: function(employee_id){
				return $http.get('/api/users/employee/' + employee_id)
										.then(function(res){
										  return res;
										})
										.catch(function(err){
										  return err;
										});
			},
			editEmployee: function(employee){
				return $http.put('/api/users/employees/edit', employee)
										.then(function(res){
										  return res;
										})
										.catch(function(err){
										  return err;
										});
			}
		};

}]);

