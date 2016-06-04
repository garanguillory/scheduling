angular
	.module('Scheduling')
	.service('employeesService',[ '$http', function($http){
		
		return {
			getEmployeeInfo: function(company_id){
				return $http.get('/api/users/employees/' + company_id)
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
