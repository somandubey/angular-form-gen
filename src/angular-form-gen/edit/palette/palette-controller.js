fg.controller('fgEditPaletteController', function ($scope, fgConfig) {

  $scope.templates = [];
  $scope.populate_template = false;


  console.log($scope.functions);

  var tmpls = fgConfig.fields.templates;
  var i = tmpls.length;

  while (i--) {
    var tmpl = tmpls[i];
    if (tmpl.editor && tmpl.editor.visible == false) {
      continue;
    }
    $scope.templates.unshift(angular.copy(tmpl));
  }

  $scope.templateFilter = function (template) {
    return !$scope.selectedCategory || $scope.selectedCategory[template.type];
  };

  $scope.templateFromGroupFilter = function (group) {
    var t;
    angular.forEach(fgConfig.fields.templates, function (templ) {
      if (templ.type === group.type) {
        t = templ;
      }
    });
    return t;
  };

  $scope.changedFieldValue = function (selected) {
    $scope.populate_template = true;
    for (var i = 0; i <= tmpls.length; i++) {
      if (selected == tmpls[i].displayName) {
        $scope.template = tmpls[i];
        console.log("SelectedField changedFieldValue" + $scope.template.displayName);
        $scope.template.$_displayProperties = true;
        break;
      }
    }
  };

  var _loadGroups = function () {
    $scope.functions.getGroups().then(function (groups) {
      $scope.groups = groups;
    });
  } ();

  // $scope.groups = [{
  //   name: 'Pilot',
  //   value: 'Pilot',
  //   existingFields: [{
  //     name: 'Pilot_ID',
  //     displayName: 'Pilot_ID',
  //     type: 'text'
  //   }, {
  //       name: 'Pilot Name',
  //       displayName: 'Pilot Name',
  //       type: 'text'
  //     }, {
  //       name: 'Pilot Base',
  //       displayName: 'Pilot Base',
  //       type: 'text'
  //     }]
  // }, {
  //     name: 'Flight',
  //     value: 'Flight',
  //     existingFields: [{
  //       name: 'Flight Number',
  //       displayName: 'Flight Number',
  //       type: 'text'
  //     }, {
  //         name: 'Flight Date',
  //         displayName: 'Flight Date',
  //         type: 'text'
  //       }, {
  //         name: 'Origin',
  //         displayName: 'Origin',
  //         type: 'DropDown'
  //       }, {
  //         name: 'Destination',
  //         type: 'DropDown'
  //       }]
  //   }, {
  //     name: 'Hotel',
  //     value: 'Hotel',
  //     existingFields: [{
  //       name: 'Name',
  //       displayName: 'Name',
  //       type: 'text'
  //     }, {
  //         name: 'Location',
  //         displayName: 'Location',
  //         type: 'text'
  //       }, {
  //         name: 'Date',
  //         displayName: 'Date',
  //         type: 'text'
  //       }, {
  //         name: 'Room Type',
  //         displayName: 'Room Type',
  //         type: 'text'
  //       }, {
  //         name: 'Catering',
  //         displayName: 'Catering',
  //         type: 'text'
  //       }, {
  //         name: 'Name',
  //         displayName: 'Name',
  //         type: 'text'
  //       }]
  //   }, {
  //     name: 'Aircraft',
  //     value: 'Aircraft',
  //     existingFields: [{
  //       name: 'Reg No',
  //       displayName: 'Reg No',
  //       type: 'text'
  //     }, {
  //         name: 'Equipment Type',
  //         displayName: 'Equipment Type',
  //         type: 'text'
  //       }]
  //   }, {
  //     name: 'Misc',
  //     value: 'Misc',
  //     existingFields: []
  //   }];

});