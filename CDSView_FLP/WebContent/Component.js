sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function (UIComponent, JSONModel, ResourceModel) {
	"use strict";
	return UIComponent.extend("sap.ui.demo.Component", {
		metadata: {
			//manifest: "json"
		},
		init: function () {
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);
			
		},
		
		createContent: function(){
			var oView = sap.ui.view({
			id:"app",
			viewName:"sap.ui.demo.cdsview_flp.CDSView",
			type:"XML",
			//viewData:{component:this}
			});

			var oModel = new sap.ui.model.odata.ODataModel("proxy/http/192.168.1.166:8000/sap/opu/odata/sap/ZCDS_DEMO_1_CDS/");
			//sap.ui.getCore().setModel(oModel);
			oView.setModel(oModel,"Materials");


			return oView;
			}
	});
});