// ==UserScript==
// @name       MetroConnect ServiceNow Autocomplete (Beta Branch)
// @namespace  https://github.com/metroconnect/mc_service_now
// @version    2.0.4
// @require    https://raw.github.com/metroconnect/mc_service_now/Beta/jquery.min.js
// @require    https://raw.github.com/metroconnect/mc_service_now/Beta/jquery.simulate.js
// @require    https://raw.github.com/metroconnect/mc_service_now/Beta/jquery-ui.js
// @require    https://raw.github.com/metroconnect/mc_service_now/Beta/dropdown.js
// @require    https://raw.github.com/metroconnect/mc_service_now/Beta/actions.js?
// @require    https://raw.github.com/metroconnect/mc_service_now/Beta/functions.js
// @resource   customCSS https://raw.github.com/metroconnect/mc_service_now/Beta/jquery-ui-1.10.3.custom.css
// @description MetroConnect ServiceNow Actions
// @include    https://dimensiondataservices.service-now.com/incident.do*
// @include    https://dimensiondataservices.service-now.com/u_request.do*
// @include    https://dimensiondataservices.service-now.com/change_request.do*
// @include    https://dimensiondataservices.service-now.com/task_time_worked.do*
// @include    https://dimensiondataservices.service-now.com/u_reminder.do*
// @updateURL  https://raw.github.com/metroconnect/mc_service_now/Beta/metadata.js
// @downloadURL https://raw.github.com/metroconnect/mc_service_now/Beta/servicenow.js
// @copyright  2013, Allan Houston
// ==/UserScript==



	//  --------------------------------------------
	// | Don't collide with other scripts, check here
	//  --------------------------------------------

	var thisURL  = document.location.href;
	var notMe;

	if (thisURL.match(/mc_time_sheets/)) { 
		notMe=1;
	}

	//  --------------------------------------------
	// | Get the stored information for the script
	//  --------------------------------------------

	var userName = GM_getValue ("userName", "");
   	userName = fetchOrPrompt (userName,   "Your Name in ServiceNow", "userName");

	var jsLogging = GM_getValue("jsLogging",true);

	//  -------------------------------------
	// | Register GreaseMonkey Commands here
	//  -------------------------------------

	GM_registerMenuCommand ("Change ServiceNow Username", changeUsername);
	GM_registerMenuCommand ("Toggle ServiceNow Javascript Logging", toggleLogging);

	if (jsLogging == true) {
    
    		console.warn("Hijacking jslog()...");
        	var oldJsLog = unsafeWindow.jslog;
        	unsafeWindow.jslog = function() { }; // Do nothing
	}


	//  ------------------------------------------
	// | Try to detect frame-in-frame issues here
	//  ------------------------------------------

	var iframeHref = '';
	try 		{ iframeHref = parent.frames['gsft_main'].location.href; } 
	catch(err) 	{ console.warn('Error getting iframe href: ' + err.message);}


	var thisUserVar = userName.replace(" ","_");
	var doDebug = 0;

	if (notMe) {

		console.log("mc_service_now is bailing out...");

	}
	else if (iframeHref.match(/^https?:\/\/dimensiondataservices.service-now.com\/nav.do/)) { 

	// We have a home.do in the gsft_main frame - reload the outer frame;
	
		alert("Detected frame-in-frame, going back!");
		iframeHref = parent.frames['gsft_main'].history.back(-1);

	}

	else if (thisURL.match(/^https?:\/\/dimensiondataservices.service-now.com\/(incident|u_request|change_request).do/)){ 

    	//Only run on the location.do or urequest_do iFrame

	//  -----------------------------------------------------
	// | Work out if we're an Incident (ICM) or Request (SVR)
	//  -----------------------------------------------------
    
   		var incidentRequest = "";
    
    		if (thisURL.match(/^https?:\/\/dimensiondataservices.service-now.com\/incident.do/)) { 
        		incidentRequest = "incident";
    		}
    		else if (thisURL.match(/^https?:\/\/dimensiondataservices.service-now.com\/u_request.do/)) {
     			incidentRequest = "request";
    		}
    		else if (thisURL.match(/^https?:\/\/dimensiondataservices.service-now.com\/change_request.do/)) {
        		incidentRequest = "change";
    		}
    
    		console.log("Starting GM Script for "+incidentRequest);

	//  -----------------------------------
	// | Load the jquery-ui css resource in
	//  -----------------------------------

		var newCSS = GM_getResourceText ("customCSS");
		GM_addStyle (newCSS);

		var target=$("td.column_head:eq(2)");
		var existingInner = target.html();

	//  ---------------------------------------------
	// | getDropDown is defined in dropdown.js so that 
	// | we can fork for each department
	//  ---------------------------------------------
    
		var newButton = getDropDown(incidentRequest);
    
    		target.html(newButton + existingInner);

    		setTimeout(function() { 
            		$("#ui-id-1").css('position','absolute');
        		$("#ui-id-1").css('text-align','left');
			$("#split_button_div").css('display', 'inline-block');
    		}, 500);
    		
    		// Call the doClosures() jQuery handlers
    		
    		doClosures();
	}   
	else if (thisURL.match(/^https?:\/\/dimensiondataservices.service-now.com\/task_time_worked.do/)){ 
	
		//  --------------------------
		// |      Do Workloads
		//  --------------------------
		
		doWorkloads();
	
	}
	
	else if (thisURL.match(/^https?:\/\/dimensiondataservices.service-now.com\/u_reminder.do/)){
		
		//  --------------------------
		// |      Do Reminders
		//  --------------------------

		doReminders();

	}
