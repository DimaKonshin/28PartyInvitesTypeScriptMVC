abstract class Controller {
    //может когда-нибудь пригодиться для объявления общих данных и методов
}

class RSVPController extends Controller {
    Btn1Click(): void {
         Views.HideAll();
         Views.Window3Show();
         RSVPRequestController.GetAjax();                
    }

    Btn2Click(): void {
        Views.HideAll();
        Views.Window2Show();
    }

    Btn3Click(name: string, email: string, phone: string, willyouattend: string): void {
        RSVPRequestController.PostAjax(name, email, phone, willyouattend);

        Views.HideAll();
        //Во вьюшку передаем модель
        Views.HeaderThanks(name);
        Views.WillYouAttendCheck(willyouattend);
        Views.Window3Show();

    }

    Btn4Click(): void {
        Views.HideAll();
        Views.Window1Show();
    }
}