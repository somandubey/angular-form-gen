fg.directive('fgPropertyFieldCommon', function(fgPropertyFieldCommonLinkFn) {
  return {
    restrict: 'AE',
    templateUrl: 'angular-form-gen/edit/canvas/field/properties/property-field/common.ng.html',
    link: fgPropertyFieldCommonLinkFn
  };
}).factory('fgPropertyFieldCommonLinkFn', function() {
  return function($scope, $element, $attrs, ctrls) {

    $scope.fields = {
      fieldname: false,
      displayname: false,
      placeholder: false,
      tooltip: false,
      focus: false
    };

$scope.groups = [{
    name:'Pilot',
    value:'Pilot',
    existingFields:[{ 
        name : 'Pilot_ID',
        displayName : 'Pilot_ID',
        type : 'text'
      },{ 
        name : 'Pilot Name',
        displayName : 'Pilot Name',
        type : 'text'
      },{ 
        name : 'Pilot Base',
        displayName : 'Pilot Base',
        type : 'text'
      }]
  }, {
    name:'Flight',
    value:'Flight',
    existingFields: [{
        name : 'Flight Number',
        displayName : 'Flight Number',
        type : 'text'
      },{ 
        name : 'Flight Date',
        displayName : 'Flight Date',
        type : 'text'
      },{ 
        name : 'Origin',
        displayName : 'Origin',
        type : 'DropDown'
      },{ 
        name : 'Destination',
        type : 'DropDown'
      }]
  }, {
    name:'Hotel',
    value:'Hotel',
    existingFields:[{
        name : 'Name',
        displayName : 'Name',
        type : 'text'
      }, {
        name : 'Location',
        displayName : 'Location',
        type : 'text'
      }, {
        name : 'Date',
        displayName : 'Date',
        type : 'text'
      }, {
        name : 'Room Type',
        displayName : 'Room Type',
        type : 'text'
      }, {
        name : 'Catering',
        displayName : 'Catering',
        type : 'text'
      }, {
        name : 'Name',
        displayName : 'Name',
        type : 'text'
      }]
  }, {
    name:'Aircraft',
    value:'Aircraft',
    existingFields:[{
        name : 'Reg No',
        displayName : 'Reg No',
        type : 'text'
      }, {
        name : 'Equipment Type',
        displayName : 'Equipment Type',
        type : 'text'
      }]
  }, {
    name:'Misc',
    value:'Misc',
    existingFields:[]
   }];
    $scope.$watch($attrs['fgPropertyFieldCommon'], function(value) {
      $scope.fields = angular.extend($scope.fields, value);
    });
  };
});