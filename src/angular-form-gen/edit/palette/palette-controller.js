fg.controller('fgEditPaletteController', function ($scope, fgConfig, $modal) {

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
        $scope.template.$_displayProperties = true;
        //$scope.schemaCtrl.addField($scope.template);
        break;
      }
    }
  };

  $scope.changedGroupValue = function (selectedGroup) {
    if (selectedGroup == "Create New User Group") {
      var modalInstance = $modal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'angular-form-gen/edit/palette/group.ng.html',
        controller: 'addGrpCtrl',
        size: '',
        resolve: {
          selectedFieldGroup: function () {
            return $scope.selectedFieldGroup;
          }
        }
      });
    }
  };

  $scope.associateField = function (field, selectedGroup) {
    console.log("addNewField" + selectedGroup + field.name);
    for (var i = 0; i < $scope.groups.length; i++) {
      console.log("Scope group Namesss" + $scope.groups[i].name);
      if ($scope.groups[i].name == selectedGroup) {
        $scope.groups[i].existingFields.push(
          {
            "name": field.name,
            "displayName": field.displayName,
            "type": field.name
          }
          );
      }
    }
  };

  var _loadGroups = function () {
    $scope.functions.getGroups().then(function (groups) {
      $scope.groups = groups;
      _.forEach($scope.groups, function (group){
         _.forEach($scope.groups.associatedFields, function (field){
          field.type = field.type || 'text';
        });
      });
    });
  } ();

  $scope.associateField = function (field, groupId) {
    var _field = {
      "type": field.type || 'text',
      "name": field.name,
      "displayName": field.displayName,
      "placeholder": field.placeholder,
      "tooltip": field.tooltip
    };
    var fv = field.validation;
    if (fv) {
      _field["validation"] = {
        "minlength": fv.minlength,
        "maxlength": fv.maxlength,
        "pattern": fv.pattern,
        "required": fv.required
      }
      var fvm = fv.messages;
      if (fvm) {
        _field["validation"]["messages"] = {
          "minlength": fvm.minlength,
          "maxlength": fvm.maxlength,
          "pattern": fvm.pattern,
          "required": fvm.required
        }
      }
    }
    
    $scope.functions.createField(_field, groupId).then(function (createdField) {
      _.forEach($scope.groups, function (group) {
        if (group.fieldGroupId === groupId) {
          if (!group.associatedFields || group.associatedFields.length) {
            group.associatedFields = []
          }
          group.associatedFields.push(createdField);
          return false;
        }
      });
    });
  };

  
}).controller('addGrpCtrl', function ($scope, $modalInstance, selectedFieldGroup) {

  $scope.selectedFieldGroup = selectedFieldGroup;
  console.log('addGrpCtrl');
  $scope.ok = function () {
    //$modalInstance.close($scope.selected.item);
  };
  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

});
