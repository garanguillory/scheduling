'use strict';

angular
  .module('Scheduling')

  .provider('datetimepicker', function () {
    var default_options = {};

    this.setOptions = function (options) {
      default_options = options;
    };

    this.$get = function () {
      return {
        getOptions: function () {
          return default_options;
        }
      };
    };
  })

  .directive('dpicker', [
    '$timeout',
    'datetimepicker',
    function ($timeout,
              datetimepicker) {

      var default_options = datetimepicker.getOptions();

      return {
        // require : '?ngModel',
        restrict: 'AE',
        scope   : {
          datetimepickerOptions: '@',
          day: '='
        },
        link: function (scope, element, attrs, controller) {
          var passed_in_options = scope.$eval(attrs.datetimepickerOptions);
          var options = jQuery.extend({}, default_options, passed_in_options);

          console.log('scope: ', scope);

          element
            .on('dp.change', function (e) {
              // console.log('newly selected', e.date, 'last selected', e.oldDate);
                scope.day = e.date._d;
                console.log('scope.day (e.date._d): ', scope.day);
              element.find('td.day.weekend').css('background-color', 'red');

              // if (ngModelCtrl) {
              //   $timeout(function () {
              //     ngModelCtrl.$setViewValue(e.target.value);
              //   });
              // }
            })
            .datetimepicker(options);

          // function setPickerValue() {
          //   var date = options.defaultDate || null;

          //   if (ngModelCtrl && ngModelCtrl.$viewValue) {
          //       console.log('ngModelCtrl: ', ngModelCtrl);
          //     date = ngModelCtrl.$viewValue;
          //   }

          //   element
          //     .data('DateTimePicker')
          //     .date(date);
          // }

          // if (ngModelCtrl) {
          //   console.log('ngModelCtrl: ', ngModelCtrl);
          //   ngModelCtrl.$render = function () {
          //     setPickerValue();
          //   };
          // }

          // setPickerValue();
        }
      };
    }
  ]);















