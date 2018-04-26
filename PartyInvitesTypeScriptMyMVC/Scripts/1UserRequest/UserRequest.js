var UserRequest = /** @class */ (function () {
    function UserRequest() {
    }
    UserRequest.Run = function () {
        $("#Btn1").click(function () {
            var controller = new RSVPController();
            controller.Btn1Click();
        });
        $("#Btn2").click(function () {
            var controller = new RSVPController();
            controller.Btn2Click();
        });
        $("#Btn3").click(function () {
            if ($("#form1").valid()) {
                //В MVC это параметы в методах контроллера. 
                //Model Binding - берет необходимые данные из представления
                //Также эти данные можно будет обернуть в любой тип и передавать в параметре
                var name = $("input[name='Name']").val();
                var email = $("input[name='Email']").val();
                var phone = $("input[name='Phone']").val();
                var willyouattend = JSON.parse($("#WillYouAttend").val());
                //За обработку данного запроса отвечает
                var controller = new RSVPController();
                controller.Btn3Click(name, email, phone, willyouattend);
            }
        });
        $("#Btn4").click(function () {
            var controller = new RSVPController();
            controller.Btn4Click();
        });
    };
    return UserRequest;
}());
//# sourceMappingURL=UserRequest.js.map