sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("bookingsystem.controller.Register", {
            onInit: function () {

            },
            GotoLogin: function(){
                var oRouter= sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("login", {})
            }
        });
    });
