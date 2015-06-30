fg.directive('fgEdit', function () {
  return {
    priority: 100,
    require: 'fgSchema',
    restrict: 'AE',
    scope: {
      // // The schema model to edit
      schema: '=?fgSchema',
      functions: '=?fgFunctions'
      //      // Boolean indicating wether to show the default form action buttons
      //      actionsEnabled: '=?fgActionsEnabled',
      //      // Callback function when the user presses save -- any argument named 'schema' is set to the schema model.
      //      onSave: '&fgOnSave',
      //      // Callback function when the user presses cancel -- any argument named 'schema' is set to the schema model.
      //      onCancel: '&fgOnCancel',
      //      // Boolean indicating wether the edit is in preview mode or not
      //      preview: '=?fgPreview'
    },
    replace: true,
    controller: 'fgEditController as editCtrl',
    templateUrl: 'angular-form-gen/edit/edit.ng.html',
    link: function ($scope, $element, $attrs, schemaCtrl) {
      console.log($scope.functions);
      if ($scope.schema === undefined) {
        $scope.schema = {};
      }

      $scope.$watch('functions', function (newValue, oldValue) {
        if (newValue) {
          $scope.functions = newValue;
        }
      }, true);
      
      console.log($scope.schema);
      
       $scope.$watch('schema', function (newValue, oldValue) {
        if (newValue) {
          $scope.schema = newValue;
          schemaCtrl.model($scope.schema);
          $scope.schemaCtrl = schemaCtrl;
          console.log($scope.schema);
        }
      }, true);
      

      //      if ($scope.actionsEnabled === undefined) {
      //        $scope.actionsEnabled = true;
      //      }
      //
      //      if ($scope.preview === undefined) {
      //        $scope.preview = false;
      //      }

      schemaCtrl.model($scope.schema);
      $scope.schemaCtrl = schemaCtrl;
    }
  }
});