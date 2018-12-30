var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// https://gist.github.com/abbazabacto/0f290e1ef72e682a9a1309c0cfa81bf6
// extended upon: https://ruanbeukes.net/Angular-Typesafe-Reactive-Forms/
import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
var FormBuilderTyped = /** @class */ (function (_super) {
    __extends(FormBuilderTyped, _super);
    function FormBuilderTyped() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormBuilderTyped_1 = FormBuilderTyped;
    FormBuilderTyped.getPropertyName = function (propertyFunction) {
        var properties = propertyFunction.toString()
            .match(/(?![. ])([a-z0-9_]+)(?=[};.])/gi)
            .splice(1);
        return properties.join('.');
    };
    FormBuilderTyped.getSafe = function (group, propertyFn) {
        var getStr = FormBuilderTyped_1.getPropertyName(propertyFn);
        return this.mapControl(group.get(getStr));
    };
    FormBuilderTyped.registerControlSafe = function (group, propertyFn, control) {
        var getStr = FormBuilderTyped_1.getPropertyName(propertyFn);
        return this.mapControl(group.registerControl(getStr, control));
    };
    FormBuilderTyped.addControlSafe = function (group, propertyFn, control) {
        var getStr = FormBuilderTyped_1.getPropertyName(propertyFn);
        group.addControl(getStr, control);
    };
    FormBuilderTyped.removeControlSafe = function (group, propertyFn) {
        var getStr = FormBuilderTyped_1.getPropertyName(propertyFn);
        group.removeControl(getStr);
    };
    FormBuilderTyped.setControlSafe = function (group, propertyFn, control) {
        var getStr = FormBuilderTyped_1.getPropertyName(propertyFn);
        group.setControl(getStr, control);
    };
    FormBuilderTyped.mapFormGroup = function (group) {
        group.registerControlSafe = function (propertyFn, control) {
            return FormBuilderTyped_1.registerControlSafe(group, propertyFn, control);
        };
        group.addControlSafe = function (propertyFn, control) {
            FormBuilderTyped_1.addControlSafe(group, propertyFn, control);
        };
        group.removeControlSafe = function (propertyFn) {
            FormBuilderTyped_1.removeControlSafe(group, propertyFn);
        };
        group.setControlSafe = function (propertyFn, control) {
            return FormBuilderTyped_1.setControlSafe(group, propertyFn, control);
        };
        return group;
    };
    FormBuilderTyped.mapControl = function (control) {
        control.getSafe = function (propertyFn) {
            return FormBuilderTyped_1.getSafe(control, propertyFn);
        };
        if (control instanceof FormGroup) {
            this.mapFormGroup(control);
        }
        return control;
    };
    FormBuilderTyped.prototype.group = function (controlsConfig, extra) {
        var group = _super.prototype.group.call(this, controlsConfig, extra);
        if (group) {
            return FormBuilderTyped_1.mapControl(group);
        }
    };
    FormBuilderTyped.prototype.generate = function (source, extra) {
        var config = {};
        var fields = Object.keys(source);
        if (extra)
            fields = fields.concat(Object.keys(extra));
        fields.forEach(function (key) {
            config[key] = new FormControl('');
        });
        // console.log('source', source, config);
        config = config;
        var group = _super.prototype.group.call(this, config, extra);
        if (group) {
            var form_1 = FormBuilderTyped_1.mapControl(group);
            form_1.setValue(source);
            Object.keys(extra).forEach(function (name) {
                form_1.controls[name].setValue(source[name], { onlySelf: true });
            });
            form_1.updateValueAndValidity();
            return form_1;
        }
    };
    var FormBuilderTyped_1;
    FormBuilderTyped = FormBuilderTyped_1 = __decorate([
        Injectable()
    ], FormBuilderTyped);
    return FormBuilderTyped;
}(FormBuilder));
export { FormBuilderTyped };
//# sourceMappingURL=form.builder.typed.js.map