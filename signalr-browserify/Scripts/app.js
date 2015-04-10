global.jQuery = require("jquery");
global.$ = global.jQuery;
require("signalr");


$(function () {

    // Declare a proxy to reference the hub.
    var chat = $.connection.sbHub;
        

    $.connection.hub.start().done(function () {
        chat.server.navigatingAsteroidField().done(function (response) {
            var data = JSON.parse(response),
                ui = $("#fillInTheBlank");

            ui.text(data.Key).attr("href", data.Value);
        });
    });
});