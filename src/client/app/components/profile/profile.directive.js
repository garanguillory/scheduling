
angular
	.module('Scheduling')
	.directive("profile",['profileService', 'authService', function(profileService, authService){
		return {
			restrict: 'AE',
			templateUrl: "app/components/profile/profile.view.html",
			link: function(scope, element, attr, controller){
				angular.element('tr').on('click', 'td', function(){
					scope.selected = this;
					console.log('scope.selected: ', scope.selected);
				});

				angular.element('td.previous').find().css("background; red");
			},
			controller: function($scope, $rootScope, $location, $window){

				var company_id = $window.localStorage.company_id;
				var employee_id = $window.localStorage.id;

				// $scope.eventSources = [];

				// $scope.uiConfig = {
				//      calendar:{
				//        height: 450,
				//        editable: true,
				//        header:{
				//          left: 'month basicWeek basicDay agendaWeek agendaDay',
				//          center: 'title',
				//          right: 'today prev,next'
				//        },
				//        dayClick: $scope.alertEventOnClick,
				//        eventDrop: $scope.alertOnDrop,
				//        eventResize: $scope.alertOnResize
				//      }
				//    };

				$scope.moment = moment();

				// var month = moment().format('MMMM');

				$scope.current = moment().format('MMMM');
				$scope.counter = 0;
				

				$scope.previousMonth = function(){
					console.log("previous month");
					--$scope.counter;
					$scope.current = moment().add($scope.counter, 'months').format('MMMM');
					// console.log($scope.current +": ",calendar_2016.get($scope.current));
				};

				$scope.nextMonth = function(){
					++$scope.counter;
					$scope.current = moment().add($scope.counter, 'months').format('MMMM');
					// console.log($scope.current +": ",calendar_2016.get($scope.current));
					console.log("$scope.current: ", $scope.current);
				};



				profileService.getEmployeeInfo(employee_id)
					.then(function(data){
						$scope.employee = data.data.data;
					})
					.catch(function(error){
						console.log("error: ", error);
					});

				$scope.edit_employee = false;

				// add functionality for edit, delete, and update employee + conflicts
					$scope.edit = function(){
						profileService.editEmployee($scope.employee)
							.then(function(data) {
							console.log('employee edited: ', data);
						});
						profileService.updateConflict(employee_id, $scope.conflicts)
							.then(function(data){
								console.log('conflicts updated: ', data);
							});
						$window.location.reload();
					};

				$scope.remove = function(){
					this.conflict.remove = true;
					console.log(this.conflict);
				};

				$scope.keep = function(){
					this.conflict.remove = false;
					console.log(this.conflict);
				};


				// need to add functionality for adding conflicts

				// addConflicts function
					// $scope.add = function(){
					// 	console.log("add function");
					// 	$scope.new_employee.company_id = company_id;
					// 	employeesService.addEmployee($scope.new_employee)
					// 		.then(function(data) {
					// 		console.log('new_employee', data);
					// 	});
					// 	$scope.new_employee = {};
					// 	$scope.new_employee.company_id = company_id;
					// 	$window.location.reload();
					// };

				
			}
		};
}]);

