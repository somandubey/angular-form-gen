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
      if (selected == tmpls[i].name) {
        $scope.template = tmpls[i];
        $scope.template.$_displayProperties = true;
        break;
      }
    }
  };

  $scope.openCreateGroupModal = function () {
    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'angular-form-gen/edit/palette/group.ng.html',
      controller: 'addGrpCtrl',
      size: ''
    });
    modalInstance.result.then(function (groupName) {
      var _group = { "fieldGroupName": groupName };
      $scope.functions.createGroup(_group).then(function (response) {
        if (!($scope.groups && $scope.groups.length)) {
          $scope.groups = [];
        }
        $scope.groups.push(response);
      });
    }, function () { });
  };

  var _loadGroups = function () {
    if ($scope.functions.getGroups) {
      $scope.functions.getGroups().then(function (groups) {
        $scope.groups = groups;
      });
    }
  }();

  $scope.associateField = function (field, groupId) {
    var _field = {
      "type": field.type,
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
      console.log(response);
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

}).controller('addGrpCtrl', function ($scope, $modalInstance) {

  $scope.model = {};

  $scope.ok = function () {
    $modalInstance.close($scope.model.groupName);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

});
