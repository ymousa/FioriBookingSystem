sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("bookingsystem.controller.Home", {
            onInit: function () {

            },
            _getRouter: function(){
                return sap.ui.core.UIComponent.getRouterFor(this);

            },
            toLogin: function(){
                this._getRouter().navTo("login", {})
            }
        });
    });
