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
			getEmployeeInfo: function(employee_id){
				return $http.get('/api/users/employee/profile/' + employee_id)
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
			},
			getConflicts: function(employee_id){
				return $http.get('/api/users/conflicts/' + employee_id)
										.then(function(res){
										  return res;
										})
										.catch(function(err){
										  return err;
										});
			},
			updateConflict: function(employee_id, conflicts){
				return $http.put('/api/users/conflicts/update/' + employee_id, conflicts)
										.then(function(res){
										  return res;
										})
										.catch(function(err){
										  return err;
										});
			}
		};

}]);

