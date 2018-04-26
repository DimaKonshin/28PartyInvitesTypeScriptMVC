interface IObserverView {
    Update(): void;
}

class Views implements IObserverView {
    Update(): void {
        Views.GetSuccess(RSVPRequestController.Data);
        //Views.Text3(RSVPRequestController.MessageAboutRequest);
    }

    static HideAll() {
        this.Window1Hide();
        this.Window2Hide();
        this.Window3Hide();
    }

    static Window1Show() {
        if ($("#Window1").is(":hidden")) {
            $("#Window1").show();
        }
    }

    static Window1Hide() {
        if ($("#Window1").is(":visible")) {
            $("#Window1").hide();
        }
    }

    static Window2Show() {
        if ($("#Window2").is(":hidden")) {
            $("#Window2").show();
        }
    }

    static Window2Hide() {
        if ($("#Window2").is(":visible")) {
            $("#Window2").hide();
        }
    }

    static Window3Show() {
        if ($("#Window3").is(":hidden")) {
            $("#Window3").show();
        }
    }

    static Window3Hide() {
        if ($("#Window3").is(":visible")) {
            $("#Window3").hide();
        }
    }

    static GetSuccess(data: string[]) {
        $("#text2").text("");
        for (var item of data) {
            var str = item + " ";
            $("#text2").append(str);
        }
    }

    static WillYouAttendCheck(willYouAttend: string) {
        if (Boolean(willYouAttend)) {
            $("#text1").append("Great! List who is comming: ");
        }
        else {
            $("#text1").append("Sorry for that!");
        }
    }

    static HeaderThanks(name:string) {
        $("#text1").text("Thanks for answer " + name + "!");
    }

    static Text3(message:string) {
        $("#text3").text(message);
    }
}