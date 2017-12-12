function getDropDown(incidentRequest) {

        var newButton = "";

        newButton += '<style>'+
		'.ui-button-text: padding: 0px; '+
		'.ui-button-text-only: padding 0px; '+
		'.ui-button-icon-only: padding 0px; '+
		'</style>'+
		'<div id="split_button_div" style="width: 280px; display: none;"> ' +
        '<div> ' +
        '<button id="close_call" style="background-image:url(https://ahouston.net/js/css/smoothness/images/close.png?moo=1213); background-size: 18px 18px; background-repeat:no-repeat;padding:0px;"></button> ' +
        '<button id="refresh" style="background-image:url(https://ahouston.net/js/css/smoothness/images/refresh.png?moo=1213); background-size: 18px 18px; background-repeat:no-repeat;padding:0px;"></button> ' +
        '<button id="rerun" disabled style="opacity: 1;padding:0px;">Actions</button> ' +
        '<button id="select" style="https://ahouston.net/js/css/smoothness/images/down.png?moo=1213); background-size: 18px 18px; background-repeat:no-repeat;padding:0px;">Select an action</button> ' +
                '</div> ' +
                '<ul> ';

    if (incidentRequest == 'incident' || incidentRequest == 'request') {

         newButton += ' <li><a id="no_fault_found" href="#">Close: No Fault Found</a></li> ' +
                ' <li><a id="no_response" href="#">Close: No Response from Provider</a></li> ' +
                ' <li><a id="bandwidth_utilisation" href="#">Close: Bandwidth Over Utilised</a></li> ' +
                ' <li><hr style=" color:#000000; border: 1px #000000;  height:1px; width:300px;"></li> ' +
                ' <li><a id="fibre_break_generic" href="#">Close: Fibre Break - Generic</a></li> ' +
                ' <li><a id="fibre_break_stable" href="#">Close: Fibre Break - Line is stable</a></li> ' +
                ' <li><a id="fibre_break_duplicate" href="#">Close: Fibre Break - Duplicate Call</a></li> ' +
                ' <li><hr style=" color:#000000; border: 1px #000000;  height:1px; width:350px;"></li> ' +
                ' <li><a id="config_complete" href="#">Close: Requested Configuration Complete</a></li> ' +
                ' <li><a id="circuit_config_generic" href="#">Close: Circuit - Generic Configuration</a></li> ' +
                ' <li><a id="hardware_failure" href="#">Close: Network: Hardware Failure</a></li> ' +
                ' <li><a id="software_failure" href="#">Close: Network: Software Failure</a></li> ' +
                ' <li><hr style=" color:#000000; border: 1px #000000;  height:1px; width:350px;"></li> ' +
                ' <li><a id="power_failure_generic" href="#">Close: Power Failure - General </a></li> ' +
                ' <li><a id="power_failure_ups" href="#">Close: Power Failure - UPS Exhausted</a></li> ' +
                ' <li><a id="power_failure_ups" href="#">Close: Power Failure - Duplicate Call</a></li> ' +
                ' <li><hr style=" color:#000000; border: 1px #000000;  height:1px; width:350px;"></li> ';
    }
    
    if (incidentRequest == 'incident' || incidentRequest == 'request' || incidentRequest == 'change') {

    newButton +=  ' <li><a id="macd_bandwidth" href="#">Close: MACD - Bandwidth Change</a></li> ' +
                ' <li><a id="macd_newservice" href="#">Close: MACD - New Service</a></li> ' +
                ' <li><a id="macd_relocation" href="#">Close: MACD - Circuit Relocation</a></li> ' +
                ' <li><a id="macd_cancellation" href="#">Close: MACD - Circuit Cancellation</a></li> ' +
                ' <li><hr style=" color:#000000; border: 1px #000000;  height:1px; width:350px;"></li> ';
    }

    if (incidentRequest == 'incident' || incidentRequest == 'request' || incidentRequest == 'change') {

     newButton +=  ' <li><a id="new_workload1" class="workload" href="#">Workload: Add <b>1</b> hour for this ticket</a></li>'+
                ' <li><a id="new_workload2" class="workload" href="#">Workload: Add <b>2</b> hours for this ticket</a></li>'+
                ' <li><a id="new_workload3" class="workload" href="#">Workload: Add <b>3</b> hours for this ticket</a></li> ' +
         ' <li><hr style=" color:#000000; border: 1px #000000; height:1px; width:350px;"></li> ';
    }

    /* if (incidentRequest == 'incident' || incidentRequest == 'request' || incidentRequest == 'change') {

     newButton +=  ' <li><a id="reminder_allan" reminder_name="Allan Houston" class="reminder" href="#">Reminder: Add reminder - <b>Allan Houston</b> for this ticket</a></li>'+
                   ' <li><a id="reminder_bruce" reminder_name="Bruce Jelley" class="reminder" href="#">Reminder: Add reminder - <b>Bruce Jelley</b> for this ticket</a></li>'+
                   ' <li><a id="reminder_bruce" reminder_name="Kevin Naicker" class="reminder" href="#">Reminder: Add reminder - <b>Kevin Naicker</b> for this ticket</a></li>'+
                   ' <li><a id="reminder_bruce" reminder_name="Deon Naidoo" class="reminder" href="#">Reminder: Add reminder - <b>Deon Naidoo</b> for this ticket</a></li>'+
         ' <li><hr style=" color:#000000; border: 1px #000000; height:1px; width:350px;"></li> ';
    }
    */

    if (incidentRequest == 'incident' || incidentRequest == 'request') {

     newButton +=  ' <li><a id="mc_control" href="#">Create: MetroConnect Control Ticket</a></li> ' +
                ' <li><hr style=" color:#000000; border: 1px #000000;  height:1px; width:350px;"></li> ';

     newButton +=  ' <li><a id="etk_control" href="#">Create: eThekwini Request Ticket</a></li> ' +
                ' <li><hr style=" color:#000000; border: 1px #000000;  height:1px; width:350px;"></li> ';
	

    }

    if (incidentRequest == 'change' && userName == 'Danni Manilall') {                      // Only needed for Danni

     newButton +=  ' <li><a id="mc_control" href="#">Create: MetroConnect Control Ticket</a></li> ' +
                ' <li><hr style=" color:#000000; border: 1px #000000; margin: 5px 0px 0px 0px; height:1px; width:350px;"></li> ';
   }

    newButton +=   '</ul> ' + '</div>';
    return(newButton);
}


