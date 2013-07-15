
function doClosures() { 
        
        //  ---------------------------------
        // | Close faults with various codes | 
        //  ---------------------------------
   
     $('#no_fault_found').click(function() {
 
        $("span:contains('Closure')").click();
        
        var tech_code = "Cisco";
        var tech_regex = /Cisco/ ;
        var resolution_code = "No Fault Found";
        var rootcause_code = "No Fault Found";
        var resolution_regex = /Remote support provided \> No fault found/;
        var rootcause_regex = /No fault foundNo fault found/;
        
        var rootcause_notes =  "No fault was found on the MetroConnect Network";
        var close_notes = "No fault was found on the MetroConnect Network";
        
        var nameRegex = new RegExp(userName,'i');
        // function autoClose(type,tech_regex,resolution_regex,rootcause_regex,rootcause_notes,close_notes) {
        
        autoClose(incidentRequest,tech_code,tech_regex,resolution_code,resolution_regex,rootcause_code,rootcause_regex,rootcause_notes,close_notes,nameRegex);
                                        
        });
    
    $('#no_response').click(function() {
 
        $("span:contains('Closure')").click();
        
        var tech_code = "Cisco";
        var tech_regex = /Cisco/ ;
        var resolution_code = "No Fault Found";
        var rootcause_code = "No Fault Found";
        var resolution_regex = /Remote support provided \> No fault found/;
        var rootcause_regex = /No fault foundNo fault found/;
        
        var rootcause_notes =  "No fault was found on the MetroConnect Network";
        var close_notes = "No response received from the ISP, closing with no fault found.";
        
        var nameRegex = new RegExp(userName,'i');
        
                autoClose(incidentRequest,tech_code,tech_regex,resolution_code,resolution_regex,rootcause_code,rootcause_regex,rootcause_notes,close_notes,nameRegex);
        
            
    });
    
    $('#bandwidth_utilisation').click(function() {
 
        $("span:contains('Closure')").click();
            
        var tech_code = "Cisco";
        var tech_regex = /Cisco/ ;
        var resolution_code = "Communications";
        var rootcause_code = "Bandwith Utilization";
        var resolution_regex = /Solution \> Communications/;
        var rootcause_regex = /Threshold \> Bandwith Utilization/;
        
        var rootcause_notes =  "High bandwidth utilisation on the EVC.";
        var close_notes = "Provided update to ISP regarding high bandwidth usage.";
        
        var nameRegex = new RegExp(userName,'i');
        
        autoClose(incidentRequest,tech_code,tech_regex,resolution_code,resolution_regex,rootcause_code,rootcause_regex,rootcause_notes,close_notes,nameRegex);
            
        });

        $('#fibre_break_generic').click(function() {
 
        $("span:contains('Closure')").click();
        
        var tech_code = "Cisco";
        var tech_regex = /Cisco/ ;
        var rootcause_code = "Fibre Optic Break";
        var resolution_code = "Damaged Fibre Cable";
        var rootcause_regex = /Carrier \> Fibre Optic Break/;
        var resolution_regex = /Cabling \> Damaged Fibre Cable/;

        var close_notes = "The fibre optic cable has been repaired, and service has been restored.";
        var rootcause_notes =  "The fibre optic cable was damaged.";
        
        
        var nameRegex = new RegExp(userName,'i');
        
        autoClose(incidentRequest,tech_code,tech_regex,resolution_code,resolution_regex,rootcause_code,rootcause_regex,rootcause_notes,close_notes,nameRegex);  
        
        
        });
    
    $('#fibre_break_stable').click(function() {
 
        $("span:contains('Closure')").click();
        
        var tech_code = "Cisco";
        var tech_regex = /Cisco/ ;
        var rootcause_code = "Fibre Optic Break";
        var resolution_code = "Damaged Fibre Cable";
        var rootcause_regex = /Carrier \> Fibre Optic Break/;
        var resolution_regex = /Cabling \> Damaged Fibre Cable/;

        var close_notes = "The fibre optic cable has been repaired, and service has been restored.\n\nThe circuit has been stable for a few days,closing call.";
        var rootcause_notes =  "The fibre optic cable was damaged.";
        
        
        var nameRegex = new RegExp(userName,'i');
        
        autoClose(incidentRequest,tech_code,tech_regex,resolution_code,resolution_regex,rootcause_code,rootcause_regex,rootcause_notes,close_notes,nameRegex);  
        
        
        });
    
    $('#circuit_config_generic').click(function() {
 
        $("span:contains('Closure')").click();
        
        var tech_code = "Cisco";
        var tech_regex = /Cisco/ ;
        var rootcause_code = "Configuration";
        var resolution_code = "Configuration change";
        var rootcause_regex = /^ConfigurationConfiguration/;
        var resolution_regex = /Dimension Data \> Remote \> Solution \> Configuration change/;

        var close_notes = "The EVC configuration has been updated.";
        var rootcause_notes =  "EVC configuration required.";
        
        
        var nameRegex = new RegExp(userName,'i');
        
        autoClose(incidentRequest,tech_code,tech_regex,resolution_code,resolution_regex,rootcause_code,rootcause_regex,rootcause_notes,close_notes,nameRegex);  
        
        
        });


    $('#hardware_failure').click(function() {

        $("span:contains('Closure')").click();

        var tech_code = "Cisco";
        var tech_regex = /Cisco/ ;
        var rootcause_code = "Hardware Failure";
        var resolution_code = "Hardware unit replaced";
        var rootcause_regex = /MEA root causes \> Hardware \> Hardware Failure/;
        var resolution_regex = /MEA resolution codes \> Onsite support provided \> Hardware unit replaced/;

        var close_notes = "The faulty hardware has been swapped out, and service has been restored.";
        var rootcause_notes =  "This was caused by a hardware fault on a MetroConnect device.";


        var nameRegex = new RegExp(userName,'i');

        autoClose(incidentRequest,tech_code,tech_regex,resolution_code,resolution_regex,rootcause_code,rootcause_regex,rootcause_notes,close_notes,nameRegex);


    });
    
    $('#power_failure_generic').click(function() {
 
        $("span:contains('Closure')").click();
        
        var tech_code = "Cisco";
        var tech_regex = /Cisco/ ;
        var rootcause_code = "Onsite power failure";
        var resolution_code = "Power Restored";
        var rootcause_regex = /MEA root causes \> Power \> Onsite power failure/;
        var resolution_regex = /Combination of remote and onsite support \> Power Restored/;

        var close_notes = "The power to site has been restored.";
        var rootcause_notes =  "The outage was caused by a general power failure in the area.";
        
        
        var nameRegex = new RegExp(userName,'i');
        
        autoClose(incidentRequest,tech_code,tech_regex,resolution_code,resolution_regex,rootcause_code,rootcause_regex,rootcause_notes,close_notes,nameRegex); 
        
        });

    $('#power_failure_ups').click(function() {
 
        $("span:contains('Closure')").click();
        
        var tech_code = "Cisco";
        var tech_regex = /Cisco/ ;
        var rootcause_code = "Onsite power failure";
        var resolution_code = "Power Restored";
        var rootcause_regex = /MEA root causes \> Power \> Onsite power failure/;
        var resolution_regex = /Combination of remote and onsite support \> Power Restored/;

        var close_notes = "The outage was caused by an extended power outage, causing the UPS batteries to deplete completely.";
        var rootcause_notes =  "The outage was caused by a general power failure in the area.";
        
        
        var nameRegex = new RegExp(userName,'i');
        
        autoClose(incidentRequest,tech_code,tech_regex,resolution_code,resolution_regex,rootcause_code,rootcause_regex,rootcause_notes,close_notes,nameRegex);       
        
        });
    
    $('#macd_bandwidth').click(function() {
 
        $("span:contains('Closure')").click();
        
        var tech_code = "Cisco";
        var tech_regex = /Cisco/ ;
        var rootcause_code = "Bandwith Utilization";
        var resolution_code = "Configuration changed/restored";
        var rootcause_regex = /Threshold \> Bandwith Utilization/;
        var resolution_regex = /Remote support provided \> Configuration changed\/restored/;

        var close_notes = "Bandwidth changed as per MACD request.";
        var rootcause_notes =  "MACD Request: Bandwidth Upgrade/Downgrade.";
        
        
        var nameRegex = new RegExp(userName,'i');
        
        autoClose(incidentRequest,tech_code,tech_regex,resolution_code,resolution_regex,rootcause_code,rootcause_regex,rootcause_notes,close_notes,nameRegex); 
            
            
        });
   
    $('#macd_newservice').click(function() {

        $("span:contains('Closure')").click();

        var tech_code = "Cisco";
        var tech_regex = /Cisco/;
        var rootcause_code = "Configuration";^
        var resolution_code = "Configuration changed/restored";
        var rootcause_regex = /^ConfigurationConfiguration/;
	var resolution_regex = /Remote support provided \> Configuration changed\/restored/;

        var close_notes = "New service configured as per MACD request.";
        var rootcause_notes =  "MACD Request: New Service configured.";

        var nameRegex = new RegExp(userName,'i');

        autoClose(incidentRequest,tech_code,tech_regex,resolution_code,resolution_regex,rootcause_code,rootcause_regex,rootcause_notes,close_notes,nameRegex);


        }); 

    $('#macd_relocation').click(function() {
 
        $("span:contains('Closure')").click();
       
        var tech_code = "Cisco";
        var tech_regex = /Cisco/ ;
        var rootcause_code = "Configuration";
        var resolution_code = "Configuration changed/restored";
        var rootcause_regex = /^ConfigurationConfiguration/;
        var resolution_regex = /Remote support provided \> Configuration changed\/restored/;

        var close_notes = "Circuits moved as per MACD request.";
        var rootcause_notes =  "MACD Request: Circuit move.";
        
        
        var nameRegex = new RegExp(userName,'i');
        
        autoClose(incidentRequest,tech_code,tech_regex,resolution_code,resolution_regex,rootcause_code,rootcause_regex,rootcause_notes,close_notes,nameRegex);                          
        });
    
    $('#macd_cancellation').click(function() {
 
        $("span:contains('Closure')").click();
        
        var tech_code = "Cisco";
        var tech_regex = /Cisco/ ;
        var rootcause_code = "Configuration";
        var resolution_code = "Configuration changed/restored";
        var rootcause_regex = /^ConfigurationConfiguration/;
        var resolution_regex = /Remote support provided \> Configuration changed\/restored/;

        var close_notes = "Circuits cancelled as per MACD request.";
        var rootcause_notes =  "MACD Request: Circuit cancellation.";
        
        
        var nameRegex = new RegExp(userName,'i');
        
        autoClose(incidentRequest,tech_code,tech_regex,resolution_code,resolution_regex,rootcause_code,rootcause_regex,rootcause_notes,close_notes,nameRegex); 
                                
        });
    
    $('#mc_control').click(function() {
 
        var company_code = "Metroconnect (Control)";
        var company_regex = /Metroconnect \(Control\)/ ;
        
        // var company_code = "Metroconnect";
        // var company_regex = /Metroconnect \(Control\)/ ;
        
        
        var caller_code = "DD Engineer Metroconnect (Control)";
        var caller_regex = /DD Engineer Metroconnect \(Control\)/;
        
        var contract_code = "MEA.AF Time and Material contract";
        var contract_regex = /MEA.AF Time and Material contract/;
        
        var group_code = "Metro Connect.KN - Support";
        var group_regex = /Metro Connect.KN - Support/;
         
          
        var nameRegex = new RegExp(userName,'i');
        
        if (incidentRequest == "incident") { 
            
            $("#sys_display\\.incident\\.company").focus();
            triggerKeyEventsForString("#sys_display\\.incident\\.company","\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b"+company_code,0,0,simMenu,company_regex);
           
            
            waitForCss("#status\\.incident\\.company","background-color","#00CC00",function() { 
            $("#status\\.incident\\.assignment_group").css('background-color','#FFFFFF');
            $("#status\\.incident\\.assignment_group").removeClass('changed');
            
                // Wait for the company field to go green
                // Send the Contract now
                
                triggerKeyEventsForString("#sys_display\\.incident\\.u_contract","\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b"+contract_code,0,0,simMenu,contract_regex);
                
                waitForCss("#status\\.incident\\.u_contract","background-color","#00CC00",function() {
                 
                    
                    // Wait for the contract field to complete
                            
                    triggerKeyEventsForString("#sys_display\\.incident\\.u_caller","\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b"+caller_code,0,0,simMenu,caller_regex);
                                        triggerKeyEventsForString("#sys_display\\.incident\\.assignment_group","\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b"+group_code,0,0,simMenu,group_regex);
                    triggerKeyEventsForString("#sys_display\\.incident\\.u_owner_group","\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b"+group_code,0,0,simMenu,group_regex);
                                        triggerKeyEventsForString("#sys_display\\.incident\\.u_responsible_owner_group","\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b"+group_code,0,0,simMenu,group_regex);

                    //triggerKeyEventsForString("#sys_display\\.incident\\.u_assignment_group","\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b"+group_code,0,0,simMenu,group_regex);         
                    waitForValue("#sys_display\\.incident\\.assignment_group","Metro Connect.KN - Support",function() {
                       
                        triggerKeyEventsForString("#sys_display\\.incident\\.assigned_to","\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b"+userName,0,0,simMenu,nameRegex);
                        $("#incident\\.u_next_step_displayed option:contains('Mark as responded')").attr('selected', 'selected').trigger('onchange');
                        $("#incident\\.u_accepted").val('1').trigger('onchange');
                        
                    });
                    
                });
            
            });
 
        }
        else if (incidentRequest == "request") { 
        
                        $("#sys_display\\.u_request\\.company").focus();
            triggerKeyEventsForString("#sys_display\\.u_request\\.company","\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b"+company_code,0,0,simMenu,company_regex);
           
            
            waitForCss("#status\\.u_request\\.company","background-color","#00CC00",function() { 
            $("#status\\.u_request\\.assignment_group").css('background-color','#FFFFFF');
            $("#status\\.u_request\\.assignment_group").removeClass('changed');
            
                // Wait for the company field to go green
                // Send the Contract now
                
                triggerKeyEventsForString("#sys_display\\.u_request\\.u_contract","\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b"+contract_code,0,0,simMenu,contract_regex);
                
                waitForCss("#status\\.u_request\\.u_contract","background-color","#00CC00",function() {
                 
                    
                    // Wait for the contract field to complete
                            
                    triggerKeyEventsForString("#sys_display\\.u_request\\.u_caller","\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b"+caller_code,0,0,simMenu,caller_regex);
                                        triggerKeyEventsForString("#sys_display\\.u_request\\.assignment_group","\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b"+group_code,0,0,simMenu,group_regex);
                    triggerKeyEventsForString("#sys_display\\.u_request\\.u_owner_group","\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b"+group_code,0,0,simMenu,group_regex);
                                        triggerKeyEventsForString("#sys_display\\.u_request\\.u_responsible_owner_group","\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b"+group_code,0,0,simMenu,group_regex);

                    //triggerKeyEventsForString("#sys_display\\.u_request\\.u_assignment_group","\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b"+group_code,0,0,simMenu,group_regex);        
                    waitForValue("#sys_display\\.u_request\\.assignment_group","Metro Connect.KN - Support",function() {
                       
                        triggerKeyEventsForString("#sys_display\\.u_request\\.assigned_to","\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b"+userName,0,0,simMenu,nameRegex);
                        $("#u_request\\.u_next_step_displayed option:contains('Mark as responded')").attr('selected', 'selected').trigger('onchange');
                        $("#u_request\\.u_accepted").val('Accepted').trigger('onchange');
                        
                    });
                    
                });
            
            });

            
        }
        else if (incidentRequest == "change") { 
        
            $("#sys_display\\.change_request\\.company").focus();
            triggerKeyEventsForString("#sys_display\\.change_request\\.company","\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b"+company_code,0,0,simMenu,company_regex);
           
            
            waitForCss("#status\\.change_request\\.company","background-color","#00CC00",function() { 
            $("#status\\.change_request\\.assignment_group").css('background-color','#FFFFFF');
            $("#status\\.change_request\\.assignment_group").removeClass('changed');
            
                // Wait for the company field to go green
                // Send the Contract now
                
                triggerKeyEventsForString("#sys_display\\.change_request\\.u_contract","\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b"+contract_code,0,0,simMenu,contract_regex);
                
                waitForCss("#status\\.change_request\\.u_contract","background-color","#00CC00",function() {
                 
                    
                    // Wait for the contract field to complete
                            
                    triggerKeyEventsForString("#sys_display\\.change_request\\.u_caller","\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b"+caller_code,0,0,simMenu,caller_regex);
                                        triggerKeyEventsForString("#sys_display\\.change_request\\.assignment_group","\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b"+group_code,0,0,simMenu,group_regex);
                    triggerKeyEventsForString("#sys_display\\.change_request\\.u_owner_group","\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b"+group_code,0,0,simMenu,group_regex);
                                        triggerKeyEventsForString("#sys_display\\.change_request\\.u_responsible_owner_group","\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b"+group_code,0,0,simMenu,group_regex);

                    waitForValue("#sys_display\\.change_request\\.assignment_group","Metro Connect.KN - Support",function() {
                       
                        triggerKeyEventsForString("#sys_display\\.change_request\\.u_responsible_owner","\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b"+userName,0,0,simMenu,nameRegex);
                        $("#change_request\\.u_next_step_displayed option:contains('Mark as responded')").attr('selected', 'selected').trigger('onchange');
                        $("#change_request\\.u_accepted").val('Accepted').trigger('onchange');
                        
                    });
                    
                });
            
            });

            
        }
                  

        });
    
    $('a.workload').click(function() {
 
        var workloadID = $(this).attr("id");
        var numHours = workloadID.charAt( workloadID.length-1 )
        
        $("span:contains('Workload')").click();
        
        
        GM_setValue(thisUserVar+"_num_hours", numHours);
        
        if (incidentRequest == "incident") {
            GM_setValue(thisUserVar+"_short_desc", $("input#incident\\.short_description").val());
                $("a[data-list_id='incident.task_time_worked.task'] + button#sysverb_new").click();
        } 
        else if (incidentRequest == "request") {
            GM_setValue(thisUserVar+"_short_desc", $("input#u_request\\.short_description").val());
                $("a[data-list_id='u_request.task_time_worked.task'] + button#sysverb_new").click();   
        }
        else if (incidentRequest == "change") {
            GM_setValue(thisUserVar+"_short_desc", $("input#change_request\\.short_description").val());
                $("a[data-list_id='change_request.task_time_worked.task'] + button#sysverb_new").click();   
        }
    });


    $('a.reminder').click(function() {

        /* Get the reminder name from the reminder_name attr */

        var reminderName = $(this).attr("reminder_name");
        
        
        $("span:contains('Reminder')").click();


        GM_setValue(thisUserVar+"_reminder_name", reminderName);

        if (incidentRequest == "incident") {
            GM_setValue(thisUserVar+"_reminder_desc", $("input#incident\\.short_description").val());
                $("a[data-list_id='incident.u_reminder.u_task'] + button#sysverb_new").click();
        }
        else if (incidentRequest == "request") {
            GM_setValue(thisUserVar+"_reminder_desc", $("input#u_request\\.short_description").val());
                $("a[data-list_id='u_request.u_reminder.u_task'] + button#sysverb_new").click();
        }
        else if (incidentRequest == "change") {
            GM_setValue(thisUserVar+"_reminder_desc", $("input#change_request\\.short_description").val());
                $("a[data-list_id='change_request.u_reminder.u_task'] + button#sysverb_new").click();
        }
    });
    

}

//  --------------------------
// |      Do Workloads
//  --------------------------


function doWorkloads() { 


    var shortDescription = GM_getValue(thisUserVar+"_short_desc");
    var numHours = GM_getValue(thisUserVar+"_num_hours",1);
    //alert("Got numHours = " + numHours);
    
    $("#task_time_worked\\.comments").val(shortDescription).trigger("onchange");
    
    setTimeout(function () {
        $("#ni\\.task_time_worked\\.time_workeddur_hour").val(numHours).trigger("onblur");
    },250);
    
    GM_deleteValue(thisUserVar+"_short_desc");
    GM_deleteValue(thisUserVar+"_num_hours");
}

//  --------------------------
// |      Do Reminders
//  --------------------------

function doReminders() {

    var reminderDesc = GM_getValue(thisUserVar+"_reminder_desc");
    var reminderName = GM_getValue(thisUserVar+"_reminder_name",1);
    var reminderRegex = new RegExp(reminderName,'i');
        if (reminderName == 1) { return; }                                      // It needs to be set to a name.
    
    var group_code = "Metro Connect.KN - Support";
    var group_regex = /Metro Connect.KN - Support/;  
 

    $("#u_reminder\\.u_description").val(reminderDesc).trigger("onchange");

    triggerKeyEventsForString("#sys_display\\.u_reminder\\.u_user",
         "\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b"+reminderName,
         0,0,simMenu,reminderRegex);

    triggerKeyEventsForString("#sys_display\\.u_reminder\\.u_group",
        "\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b"+group_code,
        0,0,simMenu,group_regex);

    setTimeout(function () { $("img[title='Choose date...']").trigger("click");   },1500);
        
    GM_deleteValue(thisUserVar+"_reminder_desc");
    GM_deleteValue(thisUserVar+"_reminder_name");
}

