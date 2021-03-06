fg.controller('fgEditPaletteController', function ($scope, fgConfig, $modal) {

  // $scope.templates = [];
  $scope.allTemplates = [];
  $scope.allTemplatesCategory = {};
  $scope.populate_template = false;
  $scope.model = {
    ifNewFieldOpen: false
  };

  console.log($scope.functions);

  var tmpls = fgConfig.fields.templates;
  var i = tmpls.length;
console.log("Controller",tmpls);
  while (i--) {
    var tmpl = tmpls[i];
    $scope.allTemplates.unshift(tmpl);
    $scope.allTemplatesCategory[tmpl.type] = tmpl;
    if (tmpl.editor && tmpl.editor.visible == false) {
      continue;
    }
    //$scope.templates.unshift(tmpl);
  }

  $scope.templateFilter = function (template) {
    return !$scope.selectedCategory || $scope.selectedCategory[template.type];
  };

  $scope.allTemplateFilter = function (template) {
    return !$scope.allTemplatesCategory || $scope.allTemplatesCategory[template.type];
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
   
      for (var i = 0; i <= tmpls.length; i++) {
        if (selected == tmpls[i].displayName) {
          $scope.populate_template = true;
          console.log("$scope.template" , $scope.template);
          $scope.template = angular.copy(tmpls[i]);
          $scope.template.$_displayProperties = true;
          break;
        }
      }
      $scope.selected=undefined;
      $scope.resetPropertiesTab();
   
  };

  $scope.openCreateGroupModal = function () {
    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'angular-form-gen/edit/palette/group.ng.html',
      controller: 'addGrpCtrl',
      size: ''
    });
    modalInstance.result.then(function (groupName) {
      var _group = { 
                      "fieldGroupName": groupName,
                      "ifNewGroupOpen": false 
                   };
      
       
      
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
        console.log("groups", groups);
        $scope.groups = groups;
      });
    }
  } ();

$scope.toggleDDL = function () {
  var elem = angular.element(document.getElementById("dropdownElement"));
  console.log("element",elem);
   var scope = elem.scope();
   console.log("Sc",scope);
   if(scope){
        scope.dropdownVisible = false; 
      }
     }  

$scope.resetPropertiesTab = function(){
      var elem = angular.element(document.getElementById("tabsElement"));
      console.log("element",elem);
      var scope = elem.scope();
      console.log('items' , scope.property.tabs);
      scope.property.tabs.resetTab();

};

  $scope.clearField = function () {
    $scope.editFieldFlag = false;
    $scope.template = {};
    $scope.populate_template = false;
    //$scope.template.$_displayProperties = false;
    //$("select").each(function() { this.selectedIndex = 0 });

  }
  $scope.resetField = function () {
    $scope.model.ifNewFieldOpen = false;
    $scope.model.selected=undefined;
    $scope.model.selectedGroup=undefined;
    $scope.clearField();
    $scope.resetPropertiesTab();
  };


  $scope.editField = function (groupId, field) {
    console.log("Edit", field);
    $scope.model.ifNewFieldOpen = true;
    $scope.editFieldFlag = true;
    $scope.populate_template = true;
    $scope.template = angular.copy(field);
    for (var i = 0; i <= tmpls.length; i++) {
      if (field.type === tmpls[i].type) {
        $scope.model.selected = tmpls[i].displayName;
        $scope.template.$_displayProperties = false;
        break;
      }
    }
    _.forEach($scope.groups, function (group) {
          if (group.fieldGroupId === groupId) {
             console.log("Editss", field);
           group.ifNewGroupOpen=false;
          }
        });
    $scope.model.selectedGroup = groupId;
    //window.location.hash = 'fieldType';
    //$scope.model.ifNewFieldOpen = false;
    


    // $scope.template.id = field
    // .type,
    //   "name": field.name,
    //   "displayName": field.displayName,
    //   "placeholder": field.placeholder,
    //   "tooltip": field.tooltip
  }

  $scope.associateField = function (field, groupId) {
    console.log("Options",field.fieldoptions);
    if(groupId === ""){

    }
    if(field.displayName === ""){
       noty({type:'error',text:'Please enter Label'});
          return;

    }  
    var breakFlag=false;
    _.forEach($scope.groups, function (group) {  
          if (group.fieldGroupId === groupId) {
            _.forEach(group.associatedFields, function(associatedField) {
              if (associatedField.displayName === field.displayName) {
                console.log('Break flag set');
            	   breakFlag=true;                
                return;
              }
        });
       
     }
    });   

    if(breakFlag && !$scope.editFieldFlag){
          console.log('Break flag returned!!');
          noty({type:'error',text:'Field with same name exits in group'});
          return;
        }    
            
    var _field = {
      "type": field.type,
      "name": field.name,
      "displayName": field.displayName,
      "placeholder": field.placeholder,
      "tooltip": field.tooltip 
    };
    if (!_field["name"]) {
      _field["name"] = _field["displayName"].replaceAll(" ", "");
    }
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
      
       
      
      //$scope.resetField();
    };
    var fo = field.fieldoptions;
      if(fo){
        _field["fieldoptions"] = field.fieldoptions;
      }

    if ($scope.editFieldFlag) {
      console.log('create vs save : saving edited field: ', field.fieldoptions);
      var savedField = field;
      $scope.functions.saveField(field.fieldId, _field, groupId).then(function () {
        // var break = false;
        _.forEach($scope.groups, function (group, idx) {
          var breakLoop = false;
          if (group.fieldGroupId === groupId) {
            _.forEach(group.associatedFields, function(associatedField, idx) {
              if (associatedField.fieldId === savedField.fieldId) {
                group.associatedFields[idx] = savedField;
                 console.log(' break loop: ', savedField.fieldoptions);
                breakLoop = true;
                return false;
              }
            });
            if (!breakLoop) {
              // remove from previous group
              _.forEach($scope.groups, function (prevgroup, pidx) {
                if (prevgroup.fieldGroupId !== groupId) {
                  prevgroup.associatedFields = _.reject(prevgroup.associatedFields, function(n) {
                    return n.fieldId === savedField.fieldId;
                  });
                }
              });
              // add in new group
              if (!group.associatedFields || !group.associatedFields.length) {
                group.associatedFields = []
              }
               console.log(' saving edited field: ', savedField.fieldoptions);
              group.associatedFields.push(savedField);
              return false;  
            }
          }
          if (breakLoop) {
            return false;
          }
        });
        field = {};
        groupId = false;
        $scope.resetField();
        
      });
    } else {
      if(groupId===undefined){
         noty({type:'error',text:'Select group'});
        return;
      }
      console.log('create vs save : creating new field.');
      var alredyCreated = _field;
      $scope.functions.createField(_field, groupId).then(function (createdField) {
         console.log("createdField" , createdField);
        _.forEach($scope.groups, function (group) {
          if (group.fieldGroupId === groupId) {
            if (!group.associatedFields || !group.associatedFields.length) {
              group.associatedFields = []
            }
            console.log("alredyCreated" , alredyCreated);
            group.associatedFields.push(createdField);
            return false;
          }
        });
        field = {};
        groupId = false;
        $scope.resetField();
      });
    }
  };

}).controller('addGrpCtrl', function ($scope, $modalInstance) {

  $scope.model = {};

  $scope.ok = function () {   
    if($scope.model.groupName===undefined){ 
       noty({type:'error',text:'Please enter Group name'});
      return;
    }
    $modalInstance.close($scope.model.groupName);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

});
