fg.controller('fgEditPaletteController', function ($scope, fgConfig) {

  $scope.templates = [];
  
  var tmpls = fgConfig.fields.templates;
  var i = tmpls.length;
  
  while(i--) {
    var tmpl = tmpls[i];
    
    if(tmpl.editor && tmpl.editor.visible == false) {
      continue;
    }
    
    $scope.templates.unshift(angular.copy(tmpl));
  }
  
  $scope.templateFilter = function (template) {
    return !$scope.selectedCategory || $scope.selectedCategory[template.type];
  };

  $scope.groups = [{
    name:'Pilot',
    value:'Pilot',
    existingFields:[{ 
        name : 'Pilot_ID',
        type : 'TextField'
      },{ 
        name : 'Pilot Name',
        type : 'TextField'
      },{ 
        name : 'Pilot Base',
        type : 'TextField'
      }]
  }, {
    name:'Flight',
    value:'Flight',
    existingFields: [{
        name : 'Flight Number',
        type : 'TextField'
      },{ 
        name : 'Flight Date',
        type : 'DatePicker'
      },{ 
        name : 'Origin',
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
        type : 'TextField'
      }, {
        name : 'Location',
        type : 'TextField'
      }, {
        name : 'Date',
        type : 'DatePicker'
      }, {
        name : 'Room Type',
        type : 'TextField'
      }, {
        name : 'Catering',
        type : 'TextField'
      }, {
        name : 'Name',
        type : 'TextField'
      }]
  }, {
    name:'Aircraft',
    value:'Aircraft',
    existingFields:[{
        name : 'Reg No',
        type : 'TextField'
      }, {
        name : 'Equipment Type',
        type : 'TextField'
      }]
  }, {
    name:'Misc',
    value:'Misc',
    existingFields:[]
  // },
  // {
  //   name:'Create New User Group',
  //   value:'Create New User Group',
  //   existingFields:[]
  }];
  
});