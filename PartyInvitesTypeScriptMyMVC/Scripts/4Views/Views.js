var Views = /** @class */ (function () {
    function Views() {
    }
    Views.prototype.Update = function () {
        Views.GetSuccess(RSVPRequestController.Data);
        //Views.Text3(RSVPRequestController.MessageAboutRequest);
    };
    Views.HideAll = function () {
        this.Window1Hide();
        this.Window2Hide();
        this.Window3Hide();
    };
    Views.Window1Show = function () {
        if ($("#Window1").is(":hidden")) {
            $("#Window1").show();
        }
    };
    Views.Window1Hide = function () {
        if ($("#Window1").is(":visible")) {
            $("#Window1").hide();
        }
    };
    Views.Window2Show = function () {
        if ($("#Window2").is(":hidden")) {
            $("#Window2").show();
        }
    };
    Views.Window2Hide = function () {
        if ($("#Window2").is(":visible")) {
            $("#Window2").hide();
        }
    };
    Views.Window3Show = function () {
        if ($("#Window3").is(":hidden")) {
            $("#Window3").show();
        }
    };
    Views.Window3Hide = function () {
        if ($("#Window3").is(":visible")) {
            $("#Window3").hide();
        }
    };
    Views.GetSuccess = function (data) {
        $("#text2").text("");
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var item = data_1[_i];
            var str = item + " ";
            $("#text2").append(str);
        }
    };
    Views.WillYouAttendCheck = function (willYouAttend) {
        if (Boolean(willYouAttend)) {
            $("#text1").append("Great! List who is comming: ");
        }
        else {
            $("#text1").append("Sorry for that!");
        }
    };
    Views.HeaderThanks = function (name) {
        $("#text1").text("Thanks for answer " + name + "!");
    };
    Views.Text3 = function (message) {
        $("#text3").text(message);
    };
    return Views;
}());
//# sourceMappingURL=Views.js.map