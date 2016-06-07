
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
			},

			onCallSchedule: function(company_id, payload){
				return $http.post('/api/users/on_call_schedule/'+ company_id, payload)
										.then(function(res){
										  return res;
										})
										.catch(function(err){
										  return err;
										});
			}

		};

}]);

