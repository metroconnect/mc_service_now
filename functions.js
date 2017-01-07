/*  --------- 
 *  Functions 
 *  --------- 
 */
 

function autoClose(incidentRequest,tech_code,tech_regex,resolution_code,resolution_regex,rootcause_code,rootcause_regex,rootcause_notes,close_notes,nameRegex,change_outcome,change_regex) {

        // Autocomplete an incident, request or change
    
        var type = incidentRequest;
        var change_outcome  = typeof change_outcome !== 'undefined' ? change_outcome        : 'Change was completed successfully';
        var change_regex    = typeof change_regex   !== 'undefined' ? change_regex          : /MEA change outcomes \> Change was completed successfully/;
        
        // Fix up some of the things that MSEN usually leave out...
        
        var currentCaller = $("input#sys_display\\.incident\\.u_caller").val();
        var currentCI = $("#incident\\.u_contract_ci").val();
        var currentContract =$("#incident\\.u_contract_ci").val();
        
        var setCI = "VIRTUAL_CI";
        var regexCI = /VIRT-40019844-10/;
        
        var setContract = "ES Service Management MetroConnect";
        var regexContract = /ES Service Management MetroConnect/;
        
        console.log("Current values:", currentCaller, currentCI, currentContract);
        
        if (type == "incident") { 
            
                triggerKeyEventsForString("#sys_display\\.incident\\.u_technology","\b\b\b\b\b\b"+tech_code,0,0,simMenu,tech_regex);
                triggerKeyEventsForString("#sys_display\\.incident\\.u_task_resolution_code","\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b"+resolution_code,0,0,simMenu,resolution_regex);
                triggerKeyEventsForString("#sys_display\\.incident\\.u_task_rootcause","\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b"+rootcause_code,0,0,simMenu,rootcause_regex);
                $("#incident\\.u_root_cause_comments").val(rootcause_notes).trigger("onchange");
                $("#incident\\.close_notes").val(close_notes).trigger("onchange");
            
                triggerKeyEventsForString("#sys_display\\.incident\\.u_resolved_by","\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b"+userName,0,0,simMenu,nameRegex);
                $("#incident\\.u_next_step_displayed option:contains('Close or cancel task')").attr('selected', 'selected').trigger('onchange');
                $("#incident\\.u_next_step_displayed option:contains('Set to closed')").attr('selected', 'selected').trigger('onchange');
        }
        else if (type == "request") { 
        
                triggerKeyEventsForString("#sys_display\\.u_request\\.u_technology","\b\b\b\b\b\b"+tech_code,0,0,simMenu,tech_regex);
                triggerKeyEventsForString("#sys_display\\.u_request\\.u_task_resolution_code","\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b"+resolution_code,0,0,simMenu,resolution_regex);
                $("#u_request\\.close_notes").val(close_notes).trigger("onchange");
        
                triggerKeyEventsForString("#sys_display\\.u_request\\.u_resolved_by","\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b"+userName,0,0,simMenu,nameRegex);
                $("#u_request\\.u_next_step_displayed option:contains('Close or cancel task')").attr('selected', 'selected').trigger('onchange');
                $("#u_request\\.u_next_step_displayed option:contains('Set to closed')").attr('selected', 'selected').trigger('onchange');
          
        }
        else if (type == "change") { 
            
                        
                    triggerKeyEventsForString("#sys_display\\.change_request\\.u_technology","\b\b\b\b\b\b"+tech_code,0,0,simMenu,tech_regex);
                    triggerKeyEventsForString("#sys_display\\.change_request\\.u_change_outcome","\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b"+change_outcome,0,0,simMenu,change_regex);
                    $("#change_request\\.close_notes").val(close_notes).trigger("onchange");
                    $("#change_request\\.u_review_comments").val(rootcause_notes).trigger("onchange");
        
                    triggerKeyEventsForString("#sys_display\\.change_request\\.u_resolved_by","\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b"+userName,0,0,simMenu,nameRegex);
                    triggerKeyEventsForString("#sys_display\\.change_request\\.u_reviewed_by","\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b"+userName,0,0,simMenu,nameRegex);
                    $("#change_request\\.u_next_step_displayed option:contains('Close or cancel task')").attr('selected', 'selected').trigger('onchange');
                    $("#change_request\\.u_next_step_displayed option:contains('Set to closed')").attr('selected', 'selected').trigger('onchange');
                
        }
        
        
        
}
 
function cleanDivs() {


        // Attempt to hide all #AC. divs and iFrames
            
        $('div[id^="AC"]').each(function() { $(this).css('display','none'); });
        $('iframe[id^="AC"]').each(function() { $(this).css('display','none'); });
           
}
    
function waitForCss(selector,attribute,value,call_back,poll_time,max_time) {

    // This polls for the jQuery selector until a specific attribute is attained
    // Used to check for the green bars next to correctly AJAXed fields for example
    
    poll_time = typeof poll_time !== 'undefined' ? poll_time : 100;
    max_time = typeof max_time !== 'undefined' ? max_time : 10000
    call_back = typeof call_back !== 'function' ? function() { console.error("Error: Callback isn't a function!"); } : call_back;
    
    var start = new Date().getTime();
    var found = 0;
    var timed_out = 0;
   
    var myInterval = setInterval(function() { 
    
        if ($(''+selector).length > 0) { 
      
            var elapsed = new Date().getTime() - start;
            var currValue = $(''+selector).css(attribute);

            currValue = currValue.match(/rgb/i) ? rgbToHex(currValue,true) : currValue;
            
            if (currValue == value) { 

                console.log("waitForCSS: Found " + attribute + " = " + value + " for " + selector + " in " + elapsed + " milliseconds.");
                found = 1;            
                clearInterval(myInterval);
                call_back();                            // Call the call_back function
            }
            
            if (elapsed > max_time) { 
             
                console.log("waitForCSS: Timed out waiting for " + attribute + " = " + value + " for " + selector + " in " + elapsed + " milliseconds.");
                timed_out = 1;
                clearInterval(myInterval);
            }
            // console.log("warForCSS: Debug: " + attribute + " = " + currValue + " for " + selector + " in " + elapsed + " milliseconds.");
        }
        else { console.log("Couldn't find the jQuery element: " + selector); }
        
    },poll_time);
    
    
}

function waitForValue(selector,value,call_back,poll_time,max_time) {

    // This polls for the jQuery selector until a specific attribute is attained
    // Used to check for the green bars next to correctly AJAXed fields for example
    
    poll_time = typeof poll_time !== 'undefined' ? poll_time : 100;
    max_time = typeof max_time !== 'undefined' ? max_time : 10000;
    call_back = typeof call_back !== 'function' ? function() { console.error("Error: Callback isn't a function!"); } : call_back;
    
    var start = new Date().getTime();
    var found = 0;
    var timed_out = 0;
  
 
    var myInterval = setInterval(function() { 
    
        if ($(''+selector).length > 0) { 
      
            var elapsed = new Date().getTime() - start;
            var currValue = $(''+selector).val();

            currValue = currValue.match(/rgb/i) ? rgbToHex(currValue,true) : currValue;
            
            if (currValue == value) { 

                console.log("waitForValue: Found "  + value + " for " + selector + " in " + elapsed + " milliseconds.");
                found = 1;            
                clearInterval(myInterval);
                call_back();                            // Call the call_back function
            }
            
            if (elapsed > max_time) { 
             
                console.log("waitForValue: Timed out waiting for " + value + " for " + selector + " in " + elapsed + " milliseconds.");
                timed_out = 1;
                clearInterval(myInterval);
            }
            // console.log("warForValue: Debug: " + attribute + " = " + currValue + " for " + selector + " in " + elapsed + " milliseconds.");
        }
        else { console.log("Couldn't find the jQuery element: " + selector); }
        
    },poll_time);
    

}

function waitForElementValue(selector,regex,call_back,poll_time,max_time) {

    // This polls for the selector value regex, and differs from waitForValue which checks for form element values as opposed to DOM element values

    poll_time = typeof poll_time !== 'undefined' ? poll_time : 100;
    max_time = typeof max_time !== 'undefined' ? max_time : 10000;
    call_back = typeof call_back !== 'function' ? function() { console.error("Error: Callback isn't a function!"); } : call_back;

    var start = new Date().getTime();
    var found = 0;
    var timed_out = 0;

    //console.log("Debug:");
    //console.log($(''+selector));
    

    var myInterval = setInterval(function() {

        if ($(''+selector).length > 0) {

            var elapsed = new Date().getTime() - start;
            var currValue = $(''+selector).attr("value");

	    //console.log("currValue: " +currValue);
	    //console.log("regex: " +regex);
	    //console.log("elapsed: " +elapsed+" max_time: "+max_time);

            if (currValue.match(regex)) {

                console.log("waitForElementValue: Found "  + currValue + " for " + selector + " in " + elapsed + " milliseconds.");
                found = 1;
                clearInterval(myInterval);
                call_back();                            // Call the call_back function
            }

            if (elapsed > max_time) {

                console.log("waitForElementValue: Timed out waiting for " + currValue + " for " + selector + " in " + elapsed + " milliseconds.");
                timed_out = 1;
                clearInterval(myInterval);
            }
        }
        else { console.log("Couldn't find the jQuery element in waitForElementValue() :" + selector); }

    },poll_time);


}



function simMenu(field,regex) {

    console.warn("simMenu running for "+field.attr("id")+", with regex: "+regex);
    
    // Lets hijack the AJAXCompleter.setWidth function
  
    var mID = field.attr("id");
    var jackObject = unsafeWindow.document.getElementById(''+mID);
    console.log("This is jackObject initially");
    console.log(jackObject);
    if (jQuery.isFunction(jackObject.ac.setWidth)) { 
        // Firefox doesn't keep a [0] DOM object
    }
    else if (jQuery.isFunction(jackElement[0].ac.setWidth)) {
        // Chrome does keep a [0] DOM object
        jackObject = jackElement[0];
    }
    else {
        console.warn("Doh! Couldn't find the setWidth function!");
    }
    console.log("Enabling Debugging...");
    var doDebug = 1;
    
    if (doDebug) { console.log("This is jackObject"); }
    if (doDebug) { console.log(jackObject); }
 
    doDebug = 1;
    jackObject.ac.onFocus();
    
    if (jQuery.isFunction(jackObject.ac.setWidth)) {
       
        var oldObject = {};      jQuery.extend(oldObject,jackObject.ac);
        var numJacks = 0;
    
	doDebug = 1;
        
        jackObject.ac.setWidth  = function(w) {
            
            if (doDebug) { console.log("Inside setWidth()"); }
            
            var fieldSelector = field.selector.replace(/\\/g,'\\\\');
            var divID = fieldSelector.replace("#sys_display","#AC");
            var shimID = divID + "_shim";
            
            var numMenuItems = jackObject.ac.currentMenuCount;
            var menuItems = jackObject.ac.getMenuItems();
            
            var matchFound = 0;
            var selectOption = 0;
            
            for (var i=0; i < numMenuItems; i++) { 
                if (doDebug) {  console.log("i=" +i); }
                var line = (menuItems[i].innerText || menuItems[i].textContent);
                if (doDebug) { console.log("Line: " + line + "\nRegex: " + regex); }
                    
                    if (line.match(regex)) {
                        if (matchFound) { 
                           if (doDebug) { console.log("Error: Multiple matches for regex: " +regex); }
                           return;
                        }
                        selectOption = i+1;
                        matchFound = 1;
                    }
            }
            
            if (doDebug) { console.log("Found match at index: " + selectOption); console.log("Firing key presses..."); }
            
            
                for (var i=0;i<selectOption;i++) {
                                if (doDebug) { console.log("["+field+"] Pressing DOWN..."); }
                                triggerKeyEvents(field,keysim.keyCode.DOWN);
                        }

                        if (doDebug) { console.log("["+field+"] Pressing ENTER"); }
            triggerKeyEvents(field,keysim.keyCode.ENTER);
            if (doDebug) { console.log("Calling old setWidth("+w+")..."); }
            oldObject.setWidth(0);

            
            //console.log("Hiding " + shimID); console.log($(''+shimID)); $(''+shimID).css('display','none');
            //console.log("Hiding " + divID);  $(""+divID+"").css('display','none');
            
            if (matchFound == 0) { console.warn("Error matching regular expression in simMenu:" + regex + " for field " + field); }
            
            // Attempt to hide all #AC. divs and iFrames
            
            cleanDivs();
            
            //$('div[id^="AC"]').each(function() { $(this).css('display','none'); });
            //$('iframe[id^="AC"]').each(function() { $(this).css('display','none'); });
            
      };
    }
    else { 
     
                console.warn("Hijack unsuccessful for element '" +field+ "' : "  + jackObject.ac.setWidth); 
    }
} 



var HTML5_TEXT_INPUT_FIELD_SELECTOR = 'input:text,input:password,input[type=email],' + 'input[type=number],input[type=search],input[type=tel],' + 'input[type=time],input[type=url]'; 

/** * Utility function to trigger a key press event for each character * in a string.  Each character will be triggered 'keyTiming' * milliseconds apart.  The onComplete function will be called  * 'keyTiming' milliseconds after the last key is triggered. */

//  -------------------------------------
//   Convert RGB Colors to Hex
//   http://jsfiddle.net/Xotic750/u6LCD/
//  -------------------------------------

var rgbToHex = (function () {
    var rx = /^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i;

    function pad(num) {
        if (num.length === 1) {
            num = "0" + num;
        }
        return num;
    }

    return function (rgb, uppercase) {
        var rxArray = rgb.match(rx),
            hex;

        if (rxArray !== null) {
            hex = pad(parseInt(rxArray[1], 10).toString(16)) + pad(parseInt(rxArray[2], 10).toString(16)) + pad(parseInt(rxArray[3], 10).toString(16));

            if (uppercase === true) {
                hex = hex.toUpperCase();
            }
            return "#" + hex;
        }
        return;
    };
}());

// --------------------------------
//  Simulate Key Strokes
// --------------------------------


function triggerKeyEventsForString(field, str, keyTiming, triggerFocus, onComplete,regex) {
      
    if (field && str) {
        field = $(field);
        
        triggerFocus = Boolean(triggerFocus);
        if (triggerFocus) {
            field.trigger('focus');
        }
        var keyCode = str.charCodeAt(0);
        triggerKeyEvents(field, keyCode);
        if (str.length > 1) {
            setTimeout(function () {
                triggerKeyEventsForString(field, str.substring(1), keyTiming, false, onComplete,regex);
            }, keyTiming);
        } else {
                       
            if (jQuery.isFunction(onComplete)) {
                
                setTimeout(function () {
                    onComplete(field,regex);
                }, keyTiming);
            }
        }
    }
} /** * Utility function to trigger a key event for a given key code. */

function triggerKeyEvents(field, keyCode, shiftKey, ctrlKey) {
    field = $(field);
    shiftKey = Boolean(shiftKey);
    ctrlKey = Boolean(ctrlKey);
    field.simulate("keydown", {
        keyCode: keyCode,
        ctrlKey: ctrlKey,
        shiftKey: shiftKey
    });
    field.simulate("keypress", {
        keyCode: keyCode,
        ctrlKey: ctrlKey,
        shiftKey: shiftKey
    });
    if (field.is(HTML5_TEXT_INPUT_FIELD_SELECTOR)) {
        applyKeyCodeToValue(field, keyCode);
    }
    field.simulate("keyup", {
        keyCode: keyCode,
        ctrlKey: ctrlKey,
        shiftKey: shiftKey
    });
} /* * Internal function to simulate a key being typed into an edit  * field for testing purposes.  Tries to handle cases like  * 'backspace' or 'arrow key'.  It's assumed that the cursor is * always at the end of the field. */

function applyKeyCodeToValue(field, keyCode) {
    field = $(field);
    if ((keyCode >= 32) && (keyCode <= 126)) {
        field.val(field.val() + String.fromCharCode(keyCode));
    } else {
        switch (keyCode) {
        case 8: // Backspace                
            var val = field.val();
            if (val.length) {
                field.val(val.substring(0, val.length - 1));
            }
            break;
        default:
            break;
        }
    }
}

function fetchOrPrompt (targVar, userPrompt, setValVarName) {
    if (targVar) {
        targVar     = targVar;
    }
    else {
        targVar     = prompt (
            userPrompt + ' not set for ' + location.hostname + '. Please enter it now:',
            ''
        );
        GM_setValue (setValVarName,targVar );
    }
    return targVar;
}

function changeUsername () {
    promptAndChangeStoredValue (userName,"Your Name in ServiceNow", "userName");
}


function promptAndChangeStoredValue (targVar, userPrompt, setValVarName) {
    targVar     = prompt (
        'Change ' + userPrompt +' :',
        targVar
    );
    GM_setValue (setValVarName, targVar );
}

function toggleLogging() {
 
    if (jsLogging == true) { 
    
        alert("Setting ServiceNow logging: OFF\n\nThis will remove the hijack of jslog();");
        GM_setValue("jsLogging",false);
        
    }
    else {
        alert("Setting ServiceNow logging: ON\n\nThis hijack the function jslog() to improve speed.");
        GM_setValue("jsLogging",true);
        
    }    
}


var keysim =  {

        keyCode: {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                NUMPAD_ADD: 107,
                NUMPAD_DECIMAL: 110,
                NUMPAD_DIVIDE: 111,
                NUMPAD_ENTER: 108,
                NUMPAD_MULTIPLY: 106,
                NUMPAD_SUBTRACT: 109,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
        },

        buttonCode: {
                LEFT: 0,
                MIDDLE: 1,
                RIGHT: 2
        }
};

// Do the splitbutton

$(function() {
     

    $( "#rerun" )
      .button()
      .click(function() {
        // alert( "Running the last action" );
      })
      .next()
        .button({
          text: false,
          icons: {
            primary: "ui-icon-triangle-1-s"
          }
        })
        .click(function() {
          var menu = $( this ).parent().next().show().position({
            my: "left top",
            at: "left bottom",
            of: this
          });
          $( document ).one( "click", function() {
            menu.hide();
          });
          return false;
        })
        .parent()
          .buttonset()
          .next()
            .hide()
            .menu();

        $( "#close_call").button().click(function() {

          // Do the refresh here
          console.warn("Closing call...");

          var elemID = incidentRequest == 'incident' ? 'incident' 
                                            : incidentRequest == 'request' ? 'u_request' 
                                              : incidentRequest == 'change' ? 'change_request' : '';

          $("#"+elemID+"\\.u_next_step_displayed option:contains('Close or cancel task')")
                .attr('selected', 'selected')
                .trigger('onchange');
          
          $("#"+elemID+"\\.u_next_step_displayed option:contains('Set to closed')")
                .attr('selected', 'selected')
                .trigger('onchange');


          console.warn("Pressing save...");
          var saveObject = $("#sysverb_update_and_stay").get();
          var that = saveObject[0];
          return unsafeWindow.gsftSubmit(that);

        });

        $( "#refresh").button().click(function() { 

                // Do the refresh here
                console.warn("Refreshing frame gsft_main");
                parent.frames['gsft_main'].location.reload();

        });
});
