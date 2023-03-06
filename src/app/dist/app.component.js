"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var core_2 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent(route) {
        this.route = route;
        this.countDown = new rxjs_1.Subscription;
        this.counter = 1800;
        this.tick = 1000;
        this.isadmin = false;
        this.isMenuVisible = false;
        var role = sessionStorage.getItem('role');
        if (role == 'admin') {
            this.isadmin = true;
        }
    }
    AppComponent.prototype.ngDoCheck = function () {
        var currentroute = this.route.url;
        var role = sessionStorage.getItem('role');
        if (currentroute == '/login' || currentroute == '/register') {
            this.isMenuVisible = false;
        }
        else {
            this.isMenuVisible = true;
        }
        if (role == 'admin') {
            this.isadmin = true;
        }
        else {
            this.isadmin = false;
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.countDown = rxjs_1.timer(0, this.tick).subscribe(function () { return --_this.counter; });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var FormatTimePipe = /** @class */ (function () {
    function FormatTimePipe() {
    }
    FormatTimePipe.prototype.transform = function (value) {
        var hours = Math.floor(value / 3600);
        var minutes = Math.floor((value % 3600) / 60);
        return (("00" + hours).slice(-2) +
            ":" +
            ("00" + minutes).slice(-2) +
            ":" +
            ("00" + Math.floor(value - minutes * 60)).slice(-2));
    };
    FormatTimePipe = __decorate([
        core_2.Pipe({
            name: "formatTime"
        })
    ], FormatTimePipe);
    return FormatTimePipe;
}());
exports.FormatTimePipe = FormatTimePipe;

//# sourceMappingURL=app.component.js.map
