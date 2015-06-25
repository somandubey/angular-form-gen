/*fg.directive('templateDirective',function () {
    
    console.log("templateDirective");
    
    var getTemplateUrl = function(field) {
    console.log("Field loaded");
    var type = field.field_type;
    var templateUrl = '././field-templates/default/';  
        return templateUrl += type + '.ng.html';        
    };

    var linker = function(scope, element) {
        console.log("Field loaded");
        var templateUrl = getTemplateUrl(scope.field);
        $http.get(templateUrl).success(function(data) {
            element.html(data);
            $compile(element.contents())(scope);
          });
        };

 var compiler = function(scope, element) {
        console.log("Field loaded");
        var templateUrl = getTemplateUrl(scope.field);
         console.log("Field loaded" + templateUrl);
        };


  return {  
   template: '<div>{{field}}</div>',
        restrict: 'E',
        scope: {
            field: '='
        },
        compile : compiler,
        link: linker
    }





});*/



fg.directive('templateDirective', function () {

  // To keep the form validation working, the contents of the tabs needs to be rendered even if the tab is not active.
  console.log("templateDirective ");
  return {
  /*  template:'<div>{{field}}</div>',*/
    templateUrl: 'angular-form-gen/edit/palette/template.ng.html',
   /* restrict :"E",*/
    scope: {
      field: '='
    },
     controller: 'fgEditPaletteController',
    link: function(scope, element) {
         console.log("post templateDirective " + scope.field);
      
       
      }
    }
 
});
