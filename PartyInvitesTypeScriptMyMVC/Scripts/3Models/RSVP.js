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
var RSVP = /** @class */ (function () {
    function RSVP() {
    }
    return RSVP;
}());
var SubjectRSVP = /** @class */ (function () {
    function SubjectRSVP() {
    }
    SubjectRSVP.AddObserver = function (observer) {
        this.observers.push(observer);
    };
    SubjectRSVP.RemoveObserver = function (observer) {
        var index = this.observers.indexOf(observer);
        this.observers.splice(index, 1);
    };
    SubjectRSVP.Update = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var item = _a[_i];
            item.Update();
        }
    };
    SubjectRSVP.observers = new Array();
    return SubjectRSVP;
}());
var RSVPRequestController = /** @class */ (function (_super) {
    __extends(RSVPRequestController, _super);
    function RSVPRequestController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RSVPRequestController.PostAjax = function (name, email, phone, willyouattend) {
        var rsvp = new RSVP();
        rsvp.Name = name;
        rsvp.Email = email;
        rsvp.Phone = phone;
        rsvp.WillYouAttend = willyouattend;
        $.ajax("http://zamak.somee.com//api/rsvp", {
            type: "POST",
            data: rsvp,
            success: function () {
                RSVPRequestController.MessageAboutRequest = "ok post";
                RSVPRequestController.Error = false;
                RSVPRequestController.GetAjax();
            },
            error: function () {
                RSVPRequestController.MessageAboutRequest = "error post";
                RSVPRequestController.Error = true;
            }
        });
    };
    RSVPRequestController.GetAjax = function () {
        $.ajax("http://zamak.somee.com//api/rsvp", {
            type: "GET",
            success: function (data) {
                RSVPRequestController.Data = data;
                RSVPRequestController.Error = false;
                RSVPRequestController.MessageAboutRequest = "ok get";
                RSVPRequestController.Update();
            },
            error: function () {
                RSVPRequestController.MessageAboutRequest = "error get";
                RSVPRequestController.Error = true;
            }
        });
    };
    return RSVPRequestController;
}(SubjectRSVP));
//# sourceMappingURL=RSVP.js.map