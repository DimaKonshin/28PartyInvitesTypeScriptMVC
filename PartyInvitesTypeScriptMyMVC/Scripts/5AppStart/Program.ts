class Program {
    static Main(): void {
        Views.HideAll();
        Views.Window1Show();

        UserRequest.Run();

        var views: Views = new Views();
        RSVPRequestController.AddObserver(views);
    }
}