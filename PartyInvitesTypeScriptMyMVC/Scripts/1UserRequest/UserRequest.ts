class UserRequest {
    static Run() {
        $("#Btn1").click(() => {
            let controller: RSVPController = new RSVPController();
            controller.Btn1Click();
        });

        $("#Btn2").click(() => {
            let controller: RSVPController = new RSVPController();
            controller.Btn2Click();
        });

        $("#Btn3").click(() => {
            if ($("#form1").valid()) {
                //В MVC это параметы в методах контроллера. 
                //Model Binding - берет необходимые данные из представления
                //Также эти данные можно будет обернуть в любой тип и передавать в параметре
                var name = $("input[name='Name']").val() as string;
                var email = $("input[name='Email']").val() as string;
                var phone = $("input[name='Phone']").val() as string;
                var willyouattend = JSON.parse($("#WillYouAttend").val() as string);

                //За обработку данного запроса отвечает
                let controller: RSVPController = new RSVPController();
                controller.Btn3Click(name, email, phone, willyouattend);
            }
        });

        $("#Btn4").click(() => {
            let controller: RSVPController = new RSVPController();
            controller.Btn4Click();
        });
    }
}