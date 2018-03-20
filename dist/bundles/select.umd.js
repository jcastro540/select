(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@angular/forms'], factory) :
    (factory((global.ng = global.ng || {}, global.ng.select = {}),global.ng.core,global.common,global.forms));
}(this, (function (exports,core,common,forms) { 'use strict';

    var SelectComponent = /** @class */ (function () {
        function SelectComponent() {
            this.optionSelected = {};
            this.resultSearch = [];
            this.carga = false;
            // INPUTS
            this.configurations = {
                placeholder: "Placeholder",
                search_text: "Búsqueda"
            };
            // @Input() zoneIdSelected
            // @Input() beaconIdSelected
            // OUTPUTS
            this.selected = new core.EventEmitter();
        }
        SelectComponent.prototype.ngOnInit = function () {
            var _this = this;
            setTimeout(function () {
                _this.carga = true;
            }, 500);
        };
        SelectComponent.prototype.ngOnChanges = function () {
            var _this = this;
            setTimeout(function () {
                if (_this.elementIdSelected && _this.items) {
                    _this.optionSelected = _this.objectFindByKeyEntry(_this.items, "id", _this.elementIdSelected);
                }
                // if(this.zoneIdSelected && this.items){
                //   console.log(this.objectFindByKeyEntry(this.items, "id", this.zoneIdSelected))
                //   this.optionSelected = this.objectFindByKeyEntry(this.items, "id", this.zoneIdSelected);
                //   console.log("opt",this.optionSelected)
                //   console.log("opt",this.items)
                // }
                // if(this.beaconIdSelected && this.items){
                //   console.log(this.objectFindByKeyEntry(this.items, "id", this.beaconIdSelected))
                //   this.optionSelected = this.objectFindByKeyEntry(this.items, "id", this.beaconIdSelected);
                // }
            }, 2500);
        };
        SelectComponent.prototype.itemSelected = function (item) {
            var _this = this;
            console.log(item);
            this.optionSelected = item;
            setTimeout(function () {
                _this.selected.emit(_this.optionSelected.id);
                console.log(_this.optionSelected);
            }, 50);
        };
        SelectComponent.prototype.searchElement = function () {
            this.resultSearch = this.objectFindByKey(this.items, "name", this.search);
        };
        SelectComponent.prototype.objectFindByKey = function (array, key, value) {
            var res = [];
            for (var i = 0; i < array.length; i++) {
                if (array[i][key].includes(value)) {
                    res.push(array[i]);
                }
            }
            return res;
        };
        SelectComponent.prototype.objectFindByKeyEntry = function (array, key, value) {
            var res;
            for (var i = 0; i < array.length; i++) {
                if (array[i][key] == value) {
                    res = array[i];
                }
            }
            return res;
        };
        SelectComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-select',
                        templateUrl: './select.component.html',
                        styleUrls: ['./select.component.css']
                    },] },
        ];
        /** @nocollapse */
        SelectComponent.ctorParameters = function () { return []; };
        SelectComponent.propDecorators = {
            "configurations": [{ type: core.Input },],
            "items": [{ type: core.Input },],
            "elementIdSelected": [{ type: core.Input },],
            "selected": [{ type: core.Output },],
        };
        return SelectComponent;
    }());

    var SelectModule = /** @class */ (function () {
        function SelectModule() {
        }
        SelectModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule
                        ],
                        declarations: [
                            SelectComponent
                        ],
                        exports: [
                            SelectComponent
                        ]
                    },] },
        ];
        /** @nocollapse */
        SelectModule.ctorParameters = function () { return []; };
        return SelectModule;
    }());

    exports.SelectModule = SelectModule;
    exports.SelectComponent = SelectComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
