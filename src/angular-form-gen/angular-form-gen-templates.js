// ATTENTION!
// DO NOT MODIFY THIS FILE BECAUSE IT WAS GENERATED AUTOMATICALLY
// SO ALL YOUR CHANGES WILL BE LOST THE NEXT TIME THE FILE IS GENERATED
angular.module('fg').run(['$templateCache', function($templateCache){
  $templateCache.put('angular-form-gen/edit/edit.ng.html', '<div class=\"fg-edit row form-group\" ng-form=\"$fg\"><div class=\"col-sm-8\"><div fg-form=\"\" fg-edit-canvas=\"\" fg-no-render=\"true\"></div></div><div class=\"col-sm-4\" ng-form=\"$palette\" fg-null-form=\"\"><div fg-form=\"\" fg-edit-palette=\"\" fg-no-render=\"true\"></div></div></div>');
  $templateCache.put('angular-form-gen/validation/summary.ng.html', '<ul class=\"fg-validation-summary help-block unstyled\" ng-if=\"field.state.$invalid && field.state.$dirty\"><li ng-repeat=\"(key, error) in field.state.$error\" ng-if=\"error\" fg-bind-expression=\"messages[key]\"></li></ul>');
  $templateCache.put('angular-form-gen/common/jsonify/jsonify.ng.html', '<div class=\"jsonify\"><div class=\"btn-toolbar btn-toolbar-right\"><button class=\"btn btn-default btn-xs\" type=\"button\" title=\"Copy the json data.\" ng-click=\"copy()\"><span class=\"glyphicon glyphicon-transfer\"></span></button> <button class=\"btn btn-default btn-xs\" type=\"button\" title=\"Display hidden properties.\" ng-click=\"displayHidden = !displayHidden\" ng-class=\"{ \'active\': displayHidden }\"><span class=\"glyphicon glyphicon-eye-open\"></span></button></div><pre><code>{{ jsonify | j$on:displayHidden }}</code></pre></div>');
  $templateCache.put('angular-form-gen/common/tabs/tabs-pane.ng.html', '<div class=\"fg-tabs-pane\" ng-show=\"tabs.active === pane\"><div ng-if=\"tabs.active === pane || pane.renderAlways\" ng-transclude=\"\"></div></div>');
  $templateCache.put('angular-form-gen/common/tabs/tabs.ng.html', '<div class=\"fg-tabs tabbable\" style=\"margin-bottom: 0px;\"><ul class=\"nav nav-tabs\"><li ng-repeat=\"tab in tabs.items\" ng-class=\"{ active: tab === tabs.active, disabled: tab.disabled }\"><a href=\"\" ng-click=\"tabs.activate(tab)\">{{ tab.title }}</a></li></ul><div class=\"tab-content\" ng-transclude=\"\"></div></div>');
  $templateCache.put('angular-form-gen/edit/palette/group.ng.html', '<div class=\"modal-header\"><h3 class=\"modal-title\">Add Field group name</h3></div><div class=\"modal-body\"><div class=\"form-group\"><input type=\"text\" class=\"form-control\" name=\"group-name\" ,=\"\" ng-model=\"model.groupName\" placeholder=\"Enter field group name\"></div></div><div class=\"modal-footer\"><button class=\"btn btn-primary\" ng-click=\"ok()\">OK</button> <button class=\"btn btn-warning\" ng-click=\"cancel()\">Cancel</button></div>');
  $templateCache.put('angular-form-gen/edit/palette/palette.ng.html', '<div class=\"fg-edit-palette\"><fieldset><div fg-edit-palette-categories=\"\" data-category=\"selectedCategory\"></div><accordion close-others=\"accordion.oneAtATime\"><accordion-group is-open=\"model.ifNewFieldOpen\"><accordion-heading>{{editFieldFlag ? \"Edit Field\": \"Add New Field\"}} <i class=\"pull-right glyphicon\" ng-class=\"{\'glyphicon-chevron-down\': status.open, \'glyphicon-chevron-right\': !status.open}\"></i></accordion-heading><div id=\"fieldType\" class=\"row\"><div class=\"col-sm-12 margin-top-5\"><div class=\"col-sm-5\"><h5>Field Type</h5></div><div class=\"col-sm-7\"><select class=\"form-control\" ng-model=\"selected\" ng-change=\"changedFieldValue(selected)\"><option ng-repeat=\"template in allTemplates | filter:allTemplateFilter\" class=\"fg-field\"><span>{{template.displayName}}</span><div fg-field=\"template\" fg-tab-index=\"3\" fg-no-validation-summary=\"true\" fg-edit-mode=\"true\"></div></option></select></div></div><div class=\"row\"><hr class=\"m5 col-xs-12\"></div><div class=\"col-sm-12\" ng-show=\"populate_template\"><div fg-edit-canvas-field-properties=\"template\"></div><div class=\"row\"><div fg-property-field=\"fieldGroup\" fg-property-field-label=\"Field group\" style=\"padding: 0px 20px;\"><div class=\"row\"><div class=\"col-md-9\" style=\"padding-right: 0px;\"><select class=\"form-control\" ng-model=\"selectedGroup\" ng-options=\"group.fieldGroupId as group.fieldGroupName for group in groups\"></select></div><div class=\"col-md-3\" style=\"padding-left: 15px;\"><button class=\"btn btn-primary btn-sm\" ng-click=\"openCreateGroupModal()\" style=\"height: 33px;\"><i class=\"fa fa-plus\"></i></button></div></div><div class=\"col-sm-12\" style=\"padding: 8px 10px 8px 0px;\"><div class=\"col-sm-3\" style=\"margin-right: 10px; padding: 0px 0px;\"><a ng-click=\"associateField(template, selectedGroup)\" class=\"btn btn-primary btn-sm margin-top-2\"><i class=\"fa fa-plus normal\"></i> OK</a></div><div class=\"col-sm-8\" style=\"padding: 0px 0px;\"><a ng-click=\"resetField()\" class=\"btn btn-danger btn-sm margin-top-2\"><i class=\"fa fa-times normal\"></i> Cancel</a></div></div><br></div></div></div><div ng-class=\"{ \'fg-drag-placeholder-visible\' : dragPlaceholder.visible && dragPlaceholder.index === $index }\" class=\"fg-drag-placeholder\"></div></div></accordion-group></accordion><accordion close-others=\"accordion.oneAtATime\"><accordion-group class=\"field-pallette-accordian\" data-toggle=\"collapse\" data-target=\"#collapse{{group.fieldGroupName}}\" ng-repeat=\"group in groups\"><accordion-heading>{{group.fieldGroupName}} <i class=\"pull-right glyphicon\" ng-class=\"{\'glyphicon-chevron-down\': status.open, \'glyphicon-chevron-right\': !status.open}\"></i></accordion-heading><div id=\"collapse{{group.name}}\"><div ng-repeat=\"template in group.associatedFields\" class=\"fg-field\" dq-draggable=\"fg-edit-canvas\" dq-drag-begin=\"{ source: \'palette\', field: template }\" style=\"width:100%;background-color: #FD9753;border-color: #FB6705;text-align: left;font-weight: bold;font-size: 12px;border-radius: 0px; margin-bottom: 0px;\"><div class=\"fg-field-overlay\"><div class=\"btn-toolbar btn-toolbar-right\"><button class=\"btn btn-default btn-xs btn-primary\" type=\"button\" ng-click=\"schemaCtrl.addField(template)\" title=\"Add this field to Form.\"><span class=\"glyphicon glyphicon-plus\"></span></button> <button class=\"btn btn-default btn-xs btn-primary\" type=\"button\" ng-click=\"editField(group.fieldGroupId, template)\" title=\"Edit this field.\"><span class=\"glyphicon glyphicon-pencil\"></span></button></div></div><div fg-field=\"template\" fg-tab-index=\"-1\" fg-no-validation-summary=\"true\" fg-edit-mode=\"true\"></div></div></div></accordion-group></accordion></fieldset></div>');
  $templateCache.put('angular-form-gen/edit/palette/template.ng.html', '<div><div><div fg-property-field=\"fieldName\" fg-property-field-label=\"Name\" class=\"ng-hide\"><input type=\"text\" class=\"form-control\" name=\"fieldName\" ng-model=\"field.type\" ng-required=\"false\" ng-pattern=\"/^[a-zA-Z]([\\w]+)?$/\" fg-unique-field-name=\"\"></div></div><div><div fg-property-field=\"displayName\" fg-property-field-label=\"Label\"><input type=\"text\" class=\"form-control\" name=\"displayName\" ng-model=\"field.displayName\"></div></div><div><div fg-property-field=\"fieldPlaceholder\" fg-property-field-label=\"Placeholder text\"><input type=\"text\" class=\"form-control\" name=\"fieldPlaceholder\" ng-model=\"field.placeholder\"></div></div><div><div fg-property-field=\"fieldTooltip\" fg-property-field-label=\"Tooltip\"><input type=\"text\" class=\"form-control\" name=\"fieldTooltip\" ng-model=\"field.tooltip\"></div></div><! -- field group --><div><div fg-property-field=\"fieldGroup\" fg-property-field-label=\"Field group\"><select class=\"form-control\" ng-model=\"selected\" ng-change=\"changedGroupValue(selected)\"><option ng-repeat=\"group in groups\"><span>{{group.name}}</span></option></select></div></div></div>');
  $templateCache.put('angular-form-gen/field-templates/default/checkbox.ng.html', '<div class=\"checkbox\"><label title=\"{{ field.schema.tooltip }}\"><input fg-field-input=\"\" id=\"{{ field.$_id }}\" type=\"checkbox\" tabindex=\"{{ tabIndex }}\" ng-model=\"form.data[field.schema.name]\"> <span ng-if=\"field.schema.nolabel\">{{ field.schema.name }}</span></label></div>');
  $templateCache.put('angular-form-gen/field-templates/default/checkboxlist.ng.html', '<div fg-checkboxlist=\"\" fg-field-input=\"\" ng-model=\"form.data[field.schema.name]\" name=\"{{ field.schema.name }}\"><div class=\"checkbox\" ng-repeat=\"option in field.schema.options\"><label title=\"{{ field.schema.tooltip }}\"><input type=\"checkbox\" tabindex=\"{{ tabIndex }}\" value=\"{{ option.value }}\" ng-model=\"form.data[field.schema.name][option.value]\"> <span>{{option.text || option.value}}</span></label></div></div>');
  $templateCache.put('angular-form-gen/field-templates/default/dropdownlist.ng.html', '<div fg-field-input=\"\" fg-dropdown-input=\"field.schema.options\" title=\"{{ field.schema.tooltip }}\" id=\"{{ field.$_id }}\" ng-model=\"form.data[field.schema.name]\" ng-required=\"field.schema.validation.required\" tabindex=\"{{ tabIndex }}\" placeholder=\"{{ field.schema.placeholder }}\" ng-minlength=\"{{ field.schema.validation.minlength }}\" ng-maxlength=\"{{ field.schema.validation.maxlength }}\" ng-pattern=\"/{{ field.schema.validation.pattern }}/\"></div>');
  $templateCache.put('angular-form-gen/field-templates/default/email.ng.html', '<input class=\"form-control\" fg-field-input=\"\" type=\"email\" id=\"{{ field.$_id }}\" title=\"{{ field.schema.tooltip }}\" tabindex=\"{{ tabIndex }}\" placeholder=\"{{ field.schema.placeholder }}\" ng-model=\"form.data[field.schema.name]\" ng-required=\"field.schema.validation.required\" ng-minlength=\"{{ field.schema.validation.minlength }}\" ng-maxlength=\"{{ field.schema.validation.maxlength }}\" ng-pattern=\"/{{ field.schema.validation.pattern }}/\">');
  $templateCache.put('angular-form-gen/field-templates/default/not-in-cache.ng.html', '<div class=\"fg-field-not-in-cache alert alert-error\"><p>No template registered in cache for field type \"{{ field.type }}\".</p></div>');
  $templateCache.put('angular-form-gen/field-templates/default/number.ng.html', '<input class=\"form-control\" fg-field-input=\"\" fg-input-number=\"\" type=\"text\" id=\"{{ field.$_id }}\" title=\"{{ field.schema.tooltip }}\" tabindex=\"{{ tabIndex }}\" placeholder=\"{{ field.schema.placeholder }}\" min=\"{{ field.schema.validation.min }}\" max=\"{{ field.schema.validation.max }}\" ng-model=\"form.data[field.schema.name]\" ng-required=\"field.schema.validation.required\" ng-minlength=\"{{ field.schema.validation.minlength }}\" ng-maxlength=\"{{ field.schema.validation.maxlength }}\" ng-pattern=\"/{{ field.schema.validation.pattern }}/\">');
  $templateCache.put('angular-form-gen/field-templates/default/password.ng.html', '<input class=\"form-control\" fg-field-input=\"\" type=\"password\" id=\"{{ field.$_id }}\" title=\"{{ field.schema.tooltip }}\" tabindex=\"{{ tabIndex }}\" placeholder=\"{{ field.schema.placeholder }}\" ng-model=\"form.data[field.schema.name]\" ng-required=\"field.schema.validation.required\" ng-minlength=\"{{ field.schema.validation.minlength }}\" ng-maxlength=\"{{ field.schema.validation.maxlength }}\" ng-pattern=\"/{{ field.schema.validation.pattern }}/\">');
  $templateCache.put('angular-form-gen/field-templates/default/radiobuttonlist.ng.html', '<div class=\"radio\" ng-repeat=\"option in field.schema.options\"><label title=\"{{ field.schema.tooltip }}\"><input fg-field-input=\"\" type=\"radio\" name=\"{{ field.schema.name }}[]\" tabindex=\"{{ tabIndex }}\" value=\"{{ option.value }}\" ng-model=\"form.data[field.schema.name]\" ng-required=\"field.schema.validation.required\"> <span>{{option.text || option.value}}</span></label></div>');
  $templateCache.put('angular-form-gen/field-templates/default/selectlist.ng.html', '<select class=\"form-control\" fg-selectlist=\"\" fg-field-input=\"\" id=\"{{ field.$_id }}\" title=\"{{ field.schema.tooltip }}\" ng-model=\"form.data[field.schema.name]\" ng-required=\"field.schema.validation.required\" tabindex=\"{{ tabIndex }}\"><option ng-repeat=\"option in field.schema.options\" value=\"{{ option.value }}\" ng-selected=\"form.data[field.schema.name] === option.value\">{{ option.text || option.value }}</option></select>');
  $templateCache.put('angular-form-gen/field-templates/default/text.ng.html', '<input class=\"form-control\" fg-field-input=\"\" type=\"text\" id=\"{{ field.$_id }}\" title=\"{{ field.schema.tooltip }}\" tabindex=\"{{ tabIndex }}\" placeholder=\"{{ field.schema.placeholder }}\" ng-model=\"form.data[field.schema.name]\" ng-required=\"field.schema.validation.required\" ng-minlength=\"{{ field.schema.validation.minlength }}\" ng-maxlength=\"{{ field.schema.validation.maxlength }}\" ng-pattern=\"/{{ field.schema.validation.pattern }}/\">');
  $templateCache.put('angular-form-gen/field-templates/default/textarea.ng.html', '<textarea class=\"form-control\" fg-field-input=\"\" fg-placeholder=\"field.schema.placeholder\" ng-model=\"form.data[field.schema.name]\" id=\"{{ field.$_id }}\" title=\"{{ field.schema.tooltip }}\" tabindex=\"{{ tabIndex }}\" ng-required=\"field.schema.validation.required\" ng-minlength=\"{{ field.schema.validation.minlength }}\" ng-maxlength=\"{{ field.schema.validation.maxlength }}\" ng-pattern=\"/{{ field.schema.validation.pattern }}/\">\n' +
    '</textarea>');
  $templateCache.put('angular-form-gen/field-templates/properties/checkbox.ng.html', '<div fg-tabs-pane=\"Properties\"><div fg-property-field-common=\"{ fieldname: true, displayname: true, tooltip: true }\"></div><div fg-property-field=\"fieldValue\"><div class=\"checkbox\"><label title=\"Set the initial value of this field.\"><input type=\"checkbox\" name=\"fieldValue\" ng-model=\"field.value\"> Initial value</label></div></div></div>');
  $templateCache.put('angular-form-gen/field-templates/properties/checkboxlist.ng.html', '<div fg-tabs-pane=\"Properties\"><div fg-property-field-common=\"{ fieldname: true, displayname: true, tooltip: true }\"></div></div><div fg-tabs-pane=\"Options\"><div fg-property-field-options=\"multiple\"></div></div><div fg-tabs-pane=\"Validation\"><div fg-property-field-validation=\"{ required: true }\"></div><div class=\"fg-property-field-validation\"><div fg-property-field=\"minoptions\" fg-property-field-label=\"Minimum options\"><input type=\"text\" fg-field-redraw=\"\" fg-input-number=\"\" title=\"The minimum number of options that should be selected.\" name=\"minoptions\" ng-model=\"field.validation.minoptions\" class=\"form-control\"></div><div ng-if=\"field.validation.minoptions >= 1\"><div fg-edit-validation-message=\"minoptions\"></div></div></div><div class=\"fg-property-field-validation\"><div fg-property-field=\"maxoptions\" fg-property-field-label=\"Maximum options\"><input type=\"text\" fg-field-redraw=\"\" fg-input-number=\"\" title=\"The maximum number of options that can be selected.\" name=\"maxoptions\" ng-model=\"field.validation.maxoptions\" class=\"form-control\"></div><div ng-if=\"field.validation.maxoptions >= 1\"><div fg-edit-validation-message=\"maxoptions\"></div></div></div></div>');
  $templateCache.put('angular-form-gen/field-templates/properties/dropdownlist.ng.html', '<div fg-tabs-pane=\"Properties\"><div fg-property-field-common=\"{ fieldname: true, displayname: true, placeholder: true, tooltip: true }\"></div><div fg-property-field-value=\"\"><div fg-field-input=\"\" fg-dropdown-input=\"field.options\" ng-model=\"field.value\" ng-minlength=\"{{ field.schema.validation.minlength }}\" ng-maxlength=\"{{ field.schema.validation.maxlength }}\" ng-pattern=\"/{{ field.schema.validation.pattern }}/\"></div></div></div><div fg-tabs-pane=\"Validation\"><div fg-property-field-validation=\"{ required: true, minlength: true, maxlength: true, pattern: true }\"></div></div>');
  $templateCache.put('angular-form-gen/field-templates/properties/email.ng.html', '<div fg-tabs-pane=\"Properties\"><div fg-property-field-common=\"{ fieldname: true, displayname: true, placeholder: true, tooltip: true }\"></div><div fg-property-field-value=\"\"><input type=\"email\" class=\"form-control\" name=\"fieldValue\" ng-model=\"field.value\" ng-minlength=\"{{ field.validation.minlength }}\" ng-maxlength=\"{{ field.validation.maxlength }}\" ng-pattern=\"/{{ field.validation.pattern }}/\"></div></div><div fg-tabs-pane=\"Validation\"><div fg-property-field-validation=\"{ required: true, minlength: true, maxlength: true, pattern: true }\"></div></div>');
  $templateCache.put('angular-form-gen/field-templates/properties/number.ng.html', '<div fg-tabs-pane=\"Properties\"><div fg-property-field-common=\"{ fieldname: true, displayname: true, placeholder: true, tooltip: true }\"></div><div fg-property-field-value=\"\"><input fg-input-number=\"\" class=\"form-control\" type=\"text\" name=\"fieldValue\" ng-model=\"field.value\" min=\"{{ field.validation.min }}\" max=\"{{ field.validation.max }}\" ng-minlength=\"{{ field.validation.minlength }}\" ng-maxlength=\"{{ field.validation.maxlength }}\" ng-pattern=\"/{{ field.validation.pattern }}/\"></div></div><div fg-tabs-pane=\"Validation\"><div class=\"fg-property-field-validation\"><div fg-property-field=\"min\" fg-property-field-label=\"Minimum value\"><input fg-input-number=\"\" fg-field-redraw=\"\" class=\"form-control\" type=\"text\" name=\"min\" title=\"The minimum value that should be entered\" ng-model=\"field.validation.min\"></div><div ng-if=\"field.validation.min >= 0\"><div fg-edit-validation-message=\"min\"></div></div></div><div class=\"fg-property-field-validation\"><div fg-property-field=\"max\" fg-property-field-label=\"Maximum value\"><input fg-input-number=\"\" fg-field-redraw=\"\" class=\"form-control\" type=\"text\" name=\"max\" title=\"The maximum value that should be entered\" ng-model=\"field.validation.max\"></div><div ng-if=\"field.validation.max >= 0\"><div fg-edit-validation-message=\"max\"></div></div></div><div fg-property-field-validation=\"{ required: true, minlength: true, maxlength: true, pattern: true }\"></div></div>');
  $templateCache.put('angular-form-gen/field-templates/properties/password.ng.html', '<div fg-tabs-pane=\"Properties\"><div fg-property-field-common=\"{ fieldname: true, displayname: true, placeholder: true, tooltip: true }\"></div><div fg-property-field-value=\"\"><input fg-input-number=\"\" class=\"form-control\" type=\"password\" name=\"fieldValue\" ng-model=\"field.value\" ng-minlength=\"{{ field.validation.minlength }}\" ng-maxlength=\"{{ field.validation.maxlength }}\" ng-pattern=\"/{{ field.validation.pattern }}/\"></div></div><div fg-tabs-pane=\"Validation\"><div fg-property-field-validation=\"{ required: true, minlength: true, maxlength: true, pattern: true }\"></div></div>');
  $templateCache.put('angular-form-gen/field-templates/properties/radiobuttonlist.ng.html', '<div fg-tabs-pane=\"Properties\"><div fg-property-field-common=\"{ fieldname: true, displayname: true, tooltip: true }\"></div></div><div fg-tabs-pane=\"Options\"><div fg-property-field-options=\"\"></div></div><div fg-tabs-pane=\"Validation\"><div fg-property-field-validation=\"{ required: true }\"></div></div>');
  $templateCache.put('angular-form-gen/field-templates/properties/selectlist.ng.html', '<div fg-tabs-pane=\"Properties\"><div fg-property-field-common=\"{ fieldname: true, displayname: true, tooltip: true }\"></div></div><div fg-tabs-pane=\"Options\"><div fg-property-field-options=\"\"></div></div><div fg-tabs-pane=\"Validation\"><div fg-property-field-validation=\"{ required: true }\"></div></div>');
  $templateCache.put('angular-form-gen/field-templates/properties/text.ng.html', '<div fg-tabs-pane=\"Properties\"><div fg-property-field-common=\"{ fieldname: true, displayname: true, placeholder: true, tooltip: true }\"></div><div fg-property-field-value=\"\"><input type=\"text\" class=\"form-control\" name=\"fieldValue\" ng-model=\"field.value\" ng-minlength=\"{{ field.validation.minlength }}\" ng-maxlength=\"{{ field.validation.maxlength }}\" ng-pattern=\"/{{ field.validation.pattern }}/\"></div></div><div fg-tabs-pane=\"Validation\"><div fg-property-field-validation=\"{ required: true, minlength: true, maxlength: true, pattern: true }\"></div></div>');
  $templateCache.put('angular-form-gen/field-templates/properties/textarea.ng.html', '<div fg-tabs-pane=\"Properties\"><div fg-property-field-common=\"{ fieldname: true, displayname: true, placeholder: true, tooltip: true }\"></div><div fg-property-field-value=\"\"><textarea name=\"fieldValue\" class=\"form-control\" ng-model=\"field.value\" ng-minlength=\"{{ field.validation.minlength }}\" ng-maxlength=\"{{ field.validation.maxlength }}\" ng-pattern=\"/{{ field.validation.pattern }}/\">\n' +
    '    </textarea></div></div><div fg-tabs-pane=\"Validation\"><div fg-property-field-validation=\"{ required: true, minlength: true, maxlength: true, pattern: true }\"></div></div>');
  $templateCache.put('angular-form-gen/form/field/field.ng.html', '<div class=\"fg-field-inner form-group\" ng-class=\"{ \'fg-field-required\': fieldSchema.validation.required, \'has-error\': form.state[field.type].$invalid }\"><label ng-if=\"!field.schema.nolabel\" class=\"col-sm-3 control-label\" for=\"{{ field.$_id }}\">{{ fieldSchema.displayName }}</label><div class=\"col-sm-9\" ng-class=\"{ \'col-sm-offset-3\': field.schema.nolabel }\"><div ng-include=\"renderInfo.templateUrl\"></div><div fg-validation-summary=\"\" fg-validation-messages=\"fieldSchema.validation.messages\" ng-if=\"!noValidationSummary\"></div></div></div>');
  $templateCache.put('angular-form-gen/form/form-fields/form-fields.ng.html', '<div class=\"fg-form-fields\"><fieldset><div ng-repeat=\"field in form.schema.fields\"><div fg-field=\"field\"></div></div></fieldset></div>');
  $templateCache.put('angular-form-gen/edit/canvas/canvas.ng.html', '<div class=\"fg-edit-canvas\" ng-class=\"{ \'fg-edit-canvas-dragging\': dragging }\"><fieldset><div class=\"fg-edit-canvas-area\" dq-drag-area=\"fg-edit-canvas\" dq-drag-enter=\"canvasCtrl.dragEnter()\" dq-drag-leave=\"canvasCtrl.dragLeave()\" dq-drop=\"canvasCtrl.drop()\"><div ng-if=\"!(schema.fields.length)\"><div ng-if=\"!dragPlaceholder.visible\" class=\"fg-edit-canvas-area-empty alert alert-info text-center\"><p class=\"lead hidden-phone\"><strong>Drag</strong> one of the <strong>Fields</strong> from <strong>Field Palette</strong> onto <strong>Form Designer</strong> to create a new form.</p></div></div><div ng-repeat=\"field in schema.fields\"><div ng-class=\"{ \'fg-drag-placeholder-visible\' : dragPlaceholder.visible && dragPlaceholder.index === $index }\" class=\"fg-drag-placeholder\"></div><div fg-edit-canvas-field=\"\"></div></div><div ng-class=\"{ \'fg-drag-placeholder-visible\': dragPlaceholder.visible && dragPlaceholder.index == schema.fields.length }\" class=\"fg-drag-placeholder\"></div></div></fieldset></div>');
  $templateCache.put('angular-form-gen/edit/palette/categories/categories.ng.html', '<legend ng-click=\"paletteCategoriesMenuOpen = !paletteCategoriesMenuOpen\" ng-class=\"{ \'open\': paletteCategoriesMenuOpen }\">Field Palette</legend>');
  $templateCache.put('angular-form-gen/edit/canvas/field/field.ng.html', '<div class=\"fg-field fg-field-{{ field.type }} fg-edit-canvas-field\" ng-class=\"{ \'error\': field.$_invalid, \'dragging\': field.$_isDragging }\" dq-draggable=\"fg-edit-canvas\" dq-drag-disabled=\"dragEnabled === false\" dq-drag-begin=\"canvasCtrl.dragBeginCanvasField($index, field)\" dq-drag-end=\"canvasCtrl.dragEndCanvasField(field)\"><div class=\"fg-field-overlay\" ng-mouseenter=\"dragEnabled = true\" ng-mouseleave=\"dragEnabled = false\"><div class=\"fg-field-overlay-drag-top\" dq-drag-enter=\"dragPlaceholder.index = $index\"></div><div class=\"fg-field-overlay-drag-bottom\" dq-drag-enter=\"dragPlaceholder.index = ($index + 1)\"></div><div class=\"btn-toolbar btn-toolbar-right\"><button class=\"btn btn-default btn-xs\" type=\"button\" ng-click=\"schemaCtrl.swapFields($index - 1, $index)\" ng-disabled=\"$index === 0\" title=\"Move up\"><span class=\"glyphicon glyphicon-arrow-up\"></span></button> <button class=\"btn btn-default btn-xs\" type=\"button\" ng-click=\"schemaCtrl.swapFields($index, $index + 1)\" ng-disabled=\"$index === schema.fields.length - 1\" title=\"Move down\"><span class=\"glyphicon glyphicon-arrow-down\"></span></button> <button class=\"btn btn-default btn-xs btn-danger\" type=\"button\" ng-click=\"schemaCtrl.removeField($index)\" title=\"Remove\"><span class=\"glyphicon glyphicon-trash\"></span></button></div></div><div ng-form=\"\" fg-null-form=\"\"><div fg-field=\"field\" fg-tab-index=\"-1\" fg-edit-mode=\"true\" fg-no-validation-summary=\"true\"></div></div><div class=\"fg-field-properties-container\" ng-class=\"{ visible: field.$_displayProperties }\"><div fg-edit-canvas-field-properties=\"field\" ng-if=\"expanded\"></div></div></div>');
  $templateCache.put('angular-form-gen/edit/canvas/field/properties/properties.ng.html', '<div class=\"fg-field-properties\" style=\"margin-bottom: 0px; border: none;\"><div novalidate=\"\" ng-form=\"fieldPropertiesForm\"><div fg-tabs=\"property.tabs\"><div ng-include=\"renderInfo.propertiesTemplateUrl\"></div><div fg-tabs-pane=\"Properties\"><div fg-property-field-common=\"{ fieldname: true, displayname: true, placeholder: true, tooltip: true }\"></div><div fg-property-field-value=\"\"><input type=\"text\" name=\"fieldValue\" class=\"form-control\" ng-model=\"field.value\" ng-minlength=\"{{ field.validation.minlength }}\" ng-maxlength=\"{{ field.validation.maxlength }}\" ng-pattern=\"/{{ field.validation.pattern }}/\"></div></div><div fg-tabs-pane=\"Validation\"><div fg-property-field-validation=\"{ required: true, minlength: true, maxlength: true, pattern: true }\"></div></div></div></div></div>');
  $templateCache.put('angular-form-gen/edit/canvas/field/properties/options/options.ng.html', '<div ng-if=\"!field.options || field.options.length === 0\" ng-click=\"optionsCtrl.addOption()\" class=\"alert alert-info\"><h2>No options defined</h2><p class=\"lead\">Click here to add a new option definition to this field.</p></div><table ng-if=\"field.options.length > 0\" class=\"table-field-options\"><thead><tr><th></th><th>Value</th><th>Text</th><th><a href=\"\" class=\"btn btn-default btn-xs\" ng-click=\"optionsCtrl.addOption()\" title=\"Add a new option to the list\"><i class=\"glyphicon glyphicon-plus\"></i></a></th><th class=\"table-field-options-padding\"></th></tr></thead><tbody><tr ng-form=\"fieldOptionForm\" ng-repeat=\"option in field.options\" ng-class=\"{ \'error\': fieldOptionForm.$invalid }\"><td ng-if=\"multiple === false\"><input type=\"radio\" name=\"{{ field.name }}selection[]\" value=\"{{ option.value }}\" ng-model=\"field.value\" ng-click=\"optionsCtrl.toggleOption(option.value)\"></td><td ng-if=\"multiple === true\"><input type=\"checkbox\" name=\"{{ field.name }}selection[]\" value=\"{{ option.value }}\" ng-model=\"field.value[option.value]\"></td><td><input type=\"text\" name=\"optionValue\" ng-model=\"option.value\" class=\"form-control\" ng-required=\"field.type != \'selectlist\'\"></td><td><input type=\"text\" ng-model=\"option.text\" class=\"form-control\"></td><td><a href=\"\" class=\"btn btn-default btn-xs\" ng-click=\"optionsCtrl.removeOption($index)\" title=\"Remove this option from the list\"><i class=\"glyphicon glyphicon-trash\"></i></a></td><td></td></tr></tbody></table>');
  $templateCache.put('angular-form-gen/edit/canvas/field/properties/property-field/common.ng.html', '<div ng-if=\"fields.fieldname\"><div fg-property-field=\"fieldName\" fg-property-field-label=\"Name\" class=\"ng-hide\"><input type=\"text\" class=\"form-control\" name=\"fieldName\" ng-model=\"field.name\" ng-required=\"false\" ng-pattern=\"/^[a-zA-Z]([\\w]+)?$/\" fg-unique-field-name=\"\"></div></div><div><div fg-property-field=\"displayName\" fg-property-field-label=\"Label\"><input type=\"text\" class=\"form-control\" name=\"displayName\" ng-model=\"field.displayName\"></div></div><div ng-if=\"fields.placeholder\"><div fg-property-field=\"fieldPlaceholder\" fg-property-field-label=\"Placeholder\"><input type=\"text\" class=\"form-control\" name=\"fieldPlaceholder\" ng-model=\"field.placeholder\"></div></div><div ng-if=\"fields.tooltip\"><div fg-property-field=\"fieldTooltip\" fg-property-field-label=\"Tooltip\"><input type=\"text\" class=\"form-control\" name=\"fieldTooltip\" ng-model=\"field.tooltip\"></div></div><div ng-if=\"fields.group\"><div fg-property-field=\"fieldGroup\" fg-property-field-label=\"Group\"><input type=\"text\" class=\"form-control\" name=\"fieldGroup\" ng-model=\"field.group\"></div></div>');
  $templateCache.put('angular-form-gen/edit/canvas/field/properties/property-field/field-value.ng.html', '<div ng-if=\"draw\"><div fg-property-field=\"fieldValue\" fg-property-field-label=\"Initial value\"><div ng-transclude=\"\"></div></div></div>');
  $templateCache.put('angular-form-gen/edit/canvas/field/properties/property-field/property-field.ng.html', '<div class=\"form-group fg-property-field margin-top-5\" ng-class=\"{ \'has-error\': fieldPropertiesForm[fieldName].$invalid }\"><label class=\"col-sm-5 col-md-4\" style=\"padding-top: 8px;\">{{ fieldLabel }}</label><div class=\"col-sm-7 col-md-8\"><div ng-transclude=\"\"></div><div fg-validation-summary=\"{{ fieldName }}\"></div></div></div>');
  $templateCache.put('angular-form-gen/edit/canvas/field/properties/validation/validation-message.ng.html', '<div ng-form=\"valMsgForm\"><div fg-property-field=\"message\" fg-property-field-label=\"Message\"><input type=\"text\" name=\"message\" title=\"{{ tooltip }}\" placeholder=\"Optional message\" ng-model=\"field.validation.messages[validationType]\" class=\"form-control\"></div></div>');
  $templateCache.put('angular-form-gen/edit/canvas/field/properties/validation/validation.ng.html', '<div ng-if=\"field.type===\'text\' || field.type===\'textarea\' || field.type===\'email\' || field.type===\'select list\' || field.type===\'number\' || field.type===\'password\'\" class=\"fg-property-field-validation\"><div fg-property-field=\"minlength\" fg-property-field-label=\"Min. length\"><input type=\"text\" fg-field-redraw=\"\" fg-input-number=\"\" title=\"The minimum length of characters that should be entered.\" name=\"minlength\" ng-model=\"field.validation.minlength\" class=\"form-control\"></div><div ng-if=\"field.validation.minlength >= 1\"><div fg-edit-validation-message=\"minlength\"></div></div></div><div ng-if=\"field.type===\'text\' || field.type===\'textarea\' || field.type===\'email\' || field.type===\'select list\' || field.type===\'number\' || field.type===\'password\'\" class=\"fg-property-field-validation\"><div fg-property-field=\"maxlength\" fg-property-field-label=\"Max. length\"><input type=\"text\" fg-field-redraw=\"\" fg-input-number=\"\" title=\"The maximum length of characters that should be entered.\" name=\"maxlength\" ng-model=\"field.validation.maxlength\" class=\"form-control\"></div><div ng-if=\"field.validation.maxlength >= 1\"><div fg-edit-validation-message=\"maxlength\"></div></div></div><div ng-if=\"field.type===\'text\' || field.type===\'textarea\' || field.type===\'email\' || field.type===\'select list\' || field.type===\'number\' || field.type===\'password\'\" class=\"fg-property-field-validation\"><div fg-property-field=\"pattern\" fg-property-field-label=\"Pattern\"><div fg-dropdown-input=\"patternOptions\" name=\"pattern\" title=\"The pattern that should match with the input value.\" fg-parse-pattern=\"\" fg-field-redraw=\"\" ng-model=\"field.validation.pattern\"></div></div><div ng-if=\"field.validation.pattern.length > 0\"><div fg-edit-validation-message=\"pattern\"></div></div></div><div ng-if=\"fields.required\" class=\"fg-property-field-validation\"><div fg-property-field=\"required\"><div class=\"checkbox\"><label title=\"Indicates if a value is required for this field.\"><input type=\"checkbox\" ng-model=\"field.validation.required\">Required</label></div></div><div ng-if=\"field.validation.required\"><div fg-edit-validation-message=\"required\"></div></div></div>');
}]);