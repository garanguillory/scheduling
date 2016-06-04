
angular
	.module('Scheduling')
	.directive("calendar",['calendarService', function(calendarService){
		return {
			restrict: 'AE',
			templateUrl: "app/components/calendar/calendar.view.html",
			link: function(scope, element, attrs, controllers){
							var months = moment.months();

							angular.element('tr').on('click', 'td', function(){

								angular.element(this).toggleClass('red');
								console.log('scope.year: ', scope.year);
								
								var date = angular.element(this).data('date');

									if(angular.element(this).hasClass('red')){
										scope.employee.newConflicts.push(date);
									} else {
										scope.employee.newConflicts.splice(scope.employee.newConflicts.indexOf(date),1);
									}
								console.log('scope.employee.newConflicts: ', scope.employee.newConflicts);
								scope.$apply();
							});

						},
			controller: function($scope, $window){

				$scope.moment = moment();
				$scope.year = moment().format('YYYY');
				$scope.current = moment().format('MMMM');
				$scope.counter = 0;
				

				$scope.previousMonth = function(){
					console.log("previous month");
					--$scope.counter;
					$scope.current = moment().add($scope.counter, 'months').format('MMMM');
					$scope.year = moment().add($scope.counter, 'months').format('YYYY');
					console.log('$scope.year: ', $scope.year);
				};

				$scope.nextMonth = function(){
					++$scope.counter;
					$scope.current = moment().add($scope.counter, 'months').format('MMMM');
					$scope.year = moment().add($scope.counter, 'months').format('YYYY');
					console.log('$scope.year: ', $scope.year);
					console.log("$scope.current: ", $scope.current);
				};

			}
		};
}]);

