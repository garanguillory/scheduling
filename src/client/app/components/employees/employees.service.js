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
			},
			addEmployee: function(new_employee){
				return $http.post('/api/users/employees', new_employee)
										.then(function(res){
										  return res;
										})
										.catch(function(err){
										  return err;
										});
			},
			deleteEmployee: function(employee_id){
				return $http.delete('/api/users/employees/delete/'+ employee_id)
										.then(function(res){
										  return res;
										})
										.catch(function(err){
										  return err;
										});
			}
		};

}]);