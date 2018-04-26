class RSVP {
    Name: string;
    Email: string;
    Phone: string;
    WillYouAttend: any;
}

abstract class SubjectRSVP {
    private static observers: Array<IObserverView> = new Array<IObserverView>();

    public static AddObserver(observer: IObserverView) {
        this.observers.push(observer);
    }

    public static RemoveObserver(observer: IObserverView) {
        var index: number = this.observers.indexOf(observer);

        this.observers.splice(index, 1);
    }

    public static Update(): void {
        for (var item of this.observers) {
            item.Update();
        }
    }
}

class RSVPRequestController extends SubjectRSVP {

    static Data: string[];
    static Error: boolean;
    static MessageAboutRequest: string;

    public static PostAjax(name:string, email:string, phone:string,willyouattend:string) {
        let rsvp: RSVP = new RSVP();

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
    }

    public static GetAjax() {
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
    }

    
}