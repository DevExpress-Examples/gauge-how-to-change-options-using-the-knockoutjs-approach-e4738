window.PhoneJSApp = {}; //window.AppNamespace || {};

$(function () {
    var html = DevExpress.framework.html;
    html.layoutControllers.default = new html.DefaultLayoutController;
    PhoneJSApp.app = new DevExpress.framework.html.HtmlApplication({
        namespace: PhoneJSApp,
        defaultLayout: 'default'
     });

    PhoneJSApp.app.router.register(":view/:name", { view: "home", name: '' });
    PhoneJSApp.app.navigate();

    var deviceInfo = PhoneJSApp.app.device;
});