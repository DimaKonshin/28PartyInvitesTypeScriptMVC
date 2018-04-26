var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Controller = /** @class */ (function () {
    function Controller() {
    }
    return Controller;
}());
var RSVPController = /** @class */ (function (_super) {
    __extends(RSVPController, _super);
    function RSVPController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RSVPController.prototype.Btn1Click = function () {
        Views.HideAll();
        Views.Window3Show();
        RSVPRequestController.GetAjax();
    };
    RSVPController.prototype.Btn2Click = function () {
        Views.HideAll();
        Views.Window2Show();
    };
    RSVPController.prototype.Btn3Click = function (name, email, phone, willyouattend) {
        RSVPRequestController.PostAjax(name, email, phone, willyouattend);
        Views.HideAll();
        //Во вьюшку передаем модель
        Views.HeaderThanks(name);
        Views.WillYouAttendCheck(willyouattend);
        Views.Window3Show();
    };
    RSVPController.prototype.Btn4Click = function () {
        Views.HideAll();
        Views.Window1Show();
    };
    return RSVPController;
}(Controller));
//# sourceMappingURL=Controller.js.map