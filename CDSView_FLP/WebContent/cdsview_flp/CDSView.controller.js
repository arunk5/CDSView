sap.ui.controller("sap.ui.demo.cdsview_flp.CDSView", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf cdsview_flp.CDSView
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf cdsview_flp.CDSView
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf cdsview_flp.CDSView
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf cdsview_flp.CDSView
*/
//	onExit: function() {
//
//	}
	
	handleLineItemPress:function(oEvent){
		
    	var oSelectedItem = this.getView().byId("idProductsTable").getSelectedItem();
    	var itemSelected = oEvent.oSource.oBindingContexts.Materials.sPath;
    	var res = itemSelected.split('(');
       // console.log(oEvent.oSource.oBindingContexts.Materials.sPath);
        var matnr = res[1];
        var StringName = matnr.substring(matnr.indexOf("(")+2,matnr.lastIndexOf(")")-1);
      //  console.log(StringName);
          url = "MATS>/Zcds_Mara_Params(P_MATNR='"+StringName+"')/Set";
      //  console.log(url);
       
        
        var sServiceUrl = "proxy/http/192.168.1.166:8000/sap/opu/odata/sap/ZCDS_MARA_PARAMS_CDS/";
        var oModel = new sap.ui.model.odata.ODataModel("proxy/http/192.168.1.166:8000/sap/opu/odata/sap/ZCDS_MARA_PARAMS_CDS/");
        var table=this.getView().byId("idProductsTable1");
        var colItems=this.getView().byId("colItems");
        table.setModel(oModel);
        sap.ui.getCore().setModel(oModel,"MATS");
       // table.bindAggregation("items",url,colItems);
        //table.bindRows(url); .clone()
      //  table.bindItems(url,table.getColumns());
        //true,"abdulk", "Stravis@abap2");
        //sap.ui.getCore().setModel(oModel);
        
     //   'CHEMICALS'
      
	}

});