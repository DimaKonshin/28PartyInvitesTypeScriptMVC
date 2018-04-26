var Program = /** @class */ (function () {
    function Program() {
    }
    Program.Main = function () {
        Views.HideAll();
        Views.Window1Show();
        UserRequest.Run();
        var views = new Views();
        RSVPRequestController.AddObserver(views);
    };
    return Program;
}());
//# sourceMappingURL=Program.js.map