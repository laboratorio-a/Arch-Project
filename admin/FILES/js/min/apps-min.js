jQuery(document).ready(function($){"use strict";function e(){var e=$(window).outerHeight(),t=$(".topbar").height(),a=e-t;$(".leftbar").css({height:a+"px"}),$(".rightbar").css({height:a+"px"}),$(".left-aside-container").slimscroll({height:a,width:"250px",size:"4px",color:"rgba(255,255,255,.5)",distance:"1px",railVisible:!0,railColor:"#222",railOpacity:.3,wheelStep:20,borderRadius:"0px",railBorderRadius:"0px",allowPageScroll:!1})}function t(){var e=$(".rightbar-tab").outerHeight(),t=$(".chat-user-toolbar").outerHeight(),a=e+t,i=$(".coversation-toolbar").outerHeight(),o=$(".chat-text-input").outerHeight(),l=i+o,s=$(window).outerHeight(),n=$(".topbar").height(),r=s-n,c=r-a,d=s-(n+e),h=r-l;$(".chat-user-container").css({height:c+"px"}),$(".chat-user-container").slimscroll({height:c,width:"300px",size:"4px",color:"rgba(000,000,000,.5)",distance:"1px",railVisible:!0,railColor:"#222",railOpacity:.3,wheelStep:20,borderRadius:"0px",railBorderRadius:"0px",allowPageScroll:!1}),$(".activities-timeline, .rightbar .message-list-container, .rightbar .notification-wrap").css({height:d+"px"}),$(".activities-timeline").slimscroll({height:d,width:"300px",size:"4px",color:"rgba(000,000,000,.5)",distance:"1px",railVisible:!0,railColor:"#222",railOpacity:.3,wheelStep:20,borderRadius:"0px",railBorderRadius:"0px",allowPageScroll:!1}),$(".rightbar .message-list-container, .rightbar .notification-wrap").slimscroll({height:d,width:"300px",size:"4px",color:"rgba(000,000,000,.5)",distance:"1px",railVisible:!0,railColor:"#222",railOpacity:.3,wheelStep:20,borderRadius:"0px",railBorderRadius:"0px",allowPageScroll:!1}),$(".conversation-container").slimscroll({height:h,width:"300px",size:"4px",color:"rgba(000,000,000,.5)",distance:"1px",railVisible:!0,railColor:"#222",railOpacity:.3,wheelStep:20,borderRadius:"0px",railBorderRadius:"0px",allowPageScroll:!1})}function a(){var e=$("input.task-i-check");e.each(function(){$(this).parents(".task-action").parents(".task-entry").hasClass("task-done")&&$(this).iCheck("check")}),e.on("ifChecked ifUnchecked",function(e){"ifChecked"==e.type?($(this).iCheck("check"),$(this).parents(".task-action").parents(".task-entry").addClass("task-done")):($(this).iCheck("uncheck"),$(this).parents(".task-action").parents(".task-entry").removeClass("task-done"))})}function i(){O.parentsUntil(".widget-action-bar").parentsUntil(".w-action").parents(".widget-header").parents(".widget-wrap").unmask()}var o=!0,l={google:{families:["Open+Sans:400italic,400,300,600:latin","Roboto:400,300,400italic,500:latin"]}};!function(){var e=document.createElement("script");e.src=("https:"==document.location.protocol?"https":"http")+"://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js",e.type="text/javascript",e.async="true";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}(),$('[data-toggle="tooltip"]').tooltip(),$('[data-toggle="popover"]').popover(),$(".chat-user-list > li > div").popover({html:!0,container:".rightbar",delay:{show:100,hide:100}}),$("body").on("click",function(e){$(".chat-user-list > li > a").each(function(){$(this).is(e.target)||0!==$(this).has(e.target).length||0!==$(".popover").has(e.target).length||$(this).popover("hide")})});try{$(".slidePanel").velocity({translateX:"-100%"},300,"swing")}catch(s){console.log("velocity is not found")}$(".left-toggle-switch").hammer().on("click touchstart",function(e){e.preventDefault(),$("body").hasClass("left-aside-toggle")?$("body").removeClass("left-aside-toggle"):$("body").addClass("left-aside-toggle")}),$(".right-toggle-switch").hammer().on("click touchstart",function(e){e.preventDefault(),$(".rightbar").hasClass("right-aside-toggle")?$(".rightbar").removeClass("right-aside-toggle"):$(".rightbar").addClass("right-aside-toggle"),$(window).trigger("resize")}),$(".btn-mobile-bar").hammer().on("click touchstart",function(e){e.preventDefault(),$(".topbar-right").hasClass("bar-toggle")?$(".topbar-right").removeClass("bar-toggle"):$(".topbar-right").addClass("bar-toggle")}),$(".btn-top-search").hammer().on("click touchstart",function(e){e.preventDefault(),$(".top-search-bar").hasClass("search-bar-toggle")?$(".top-search-bar").removeClass("search-bar-toggle"):$(".top-search-bar").addClass("search-bar-toggle")}),$(".chat-user-list > li > div, .chat-back").hammer().on("click touchstart",function(e){e.preventDefault(),$(".aside-chat-box").hasClass("right-chat-toggle")?$(".aside-chat-box").removeClass("right-chat-toggle"):$(".aside-chat-box").addClass("right-chat-toggle")}),$(document).on("click touchstart",function(e){0===$(e.target).closest(".right-aside-toggle").length&&0===$(e.target).closest(".right-toggle-switch").length&&$(".rightbar").removeClass("right-aside-toggle"),$("body").hasClass("overlay-leftbar")&&0===$(e.target).closest(".leftbar").length&&0===$(e.target).closest(".left-toggle-switch").length&&$("body").removeClass("left-aside-toggle"),0===$(e.target).closest(".topbar-right").length&&0===$(e.target).closest(".btn-mobile-bar").length&&$(".topbar-right").removeClass("bar-toggle"),0===$(e.target).closest(".top-search-bar").length&&0===$(e.target).closest(".btn-top-search").length&&$(".top-search-bar").removeClass("search-bar-toggle")}),$(".notifications-tabs").on("click touchstart",".nav-tabs a",function(e){e.preventDefault(),$(this).closest(".dropdown").addClass("dontClose")}),$(".notifications-dropdown").on("hide.bs.dropdown",function(e){$(this).hasClass("dontClose")&&e.preventDefault(),$(this).removeClass("dontClose")}),$.fn.navAccordion&&$(".list-accordion").each(function(){$(this).navAccordion({eventType:"click",hoverDelay:100,autoClose:!0,saveState:!1,disableLink:!0,speed:"fast",showCount:!1,autoExpand:!0,classExpand:"acc-current-parent"})}),$(document).on("mouseleave",".iconic-leftbar",function(){$(".list-accordion .dcjq-parent").removeClass("active"),$(".list-accordion .acc-parent-li .acc-parent").removeClass("active"),$(".list-accordion ul").hide()}),$.fn.scrollUp&&$.scrollUp({scrollName:"scrollTop",topDistance:"300",topSpeed:300,animation:"fade",animationInSpeed:200,animationOutSpeed:200,scrollText:'<i class="fa fa-angle-up"></i>',activeOverlay:!1});var n=$.SyntaxHighlighter;n&&n.init({theme:"balupton",themes:["balupton"]}),e(),t(),$(window).smartresize(function(){e(),t()});var r=jRespond([{label:"handheld",enter:0,exit:767},{label:"tablet",enter:768,exit:979},{label:"laptop",enter:980,exit:1199},{label:"desktop",enter:1200,exit:1e4}]);if(r.addFunc({breakpoint:"handheld",enter:function(){$(".dropdown").removeClass("open"),$(".rightbar").removeClass("right-aside-toggle"),$("body").addClass("isMobile"),$(document).on("click touchstart",function(e){($("body").hasClass("overlay-leftbar")||$("body").hasClass("isMobile"))&&0===$(e.target).closest(".leftbar").length&&0===$(e.target).closest(".left-toggle-switch").length&&$("body").removeClass("left-aside-toggle")})},exit:function(){$(".isMobile").removeClass("left-aside-toggle"),$(".rightbar").removeClass("right-aside-toggle"),$("body").removeClass("isMobile")}}),$.fn.tagsInput&&$(".tags-input").each(function(){var e=$(this).data("type"),t=$(this).data("highlight-color");"tags"===e&&$(this).tagsInput({width:"auto"}),"highlighted-tags"===e&&$(this).tagsInput({width:"auto",onChange:function(e,a){var i=["php","ruby","javascript"];$(".tag",a).each(function(){$(this).text().search(new RegExp("\\b("+i.join("|")+")\\b"))>=0&&$(this).css("background-color",t)})}})}),$.fn.mask&&($(".date-mask").mask("11/11/1111",{placeholder:"__/__/____"}),$(".time-mask").mask("00:00:00",{placeholder:"00:00:00"}),$(".date_time-mask").mask("00/00/0000 00:00:00",{placeholder:"00/00/0000 00:00:00"}),$(".cep-mask").mask("00000-000",{placeholder:"00000-000"}),$(".phone-mask").mask("0000-0000",{placeholder:"0000-0000"}),$(".phone_with_ddd-mask").mask("(00) 0000-0000",{placeholder:"(00) 0000-0000"}),$(".phone_us-mask").mask("(000) 000-0000",{placeholder:"(000) 000-0000"}),$(".mixed-mask").mask("AAA 000-S0S",{placeholder:"AAA 000-S0S"}),$(".cpf-mask").mask("000.000.000-00",{reverse:!0,placeholder:"000.000.000-00"}),$(".money-mask").mask("000.000.000.000.000,00",{reverse:!0,placeholder:"000.000.000.000.000,00"}),$(".money2-mask").mask("#.##0,00",{reverse:!0,maxlength:!1,placeholder:"#.##0,00"}),$(".ip_address-mask").mask("0ZZ.0ZZ.0ZZ.0ZZ",{placeholder:"0ZZ.0ZZ.0ZZ.0ZZ",translation:{Z:{pattern:/[0-9]/,optional:!0}}}),$(".ip_address-mask").mask("099.099.099.099",{placeholder:"099.099.099.099"}),$(".percent-mask").mask("##0,00%",{reverse:!0,placeholder:"###,##%"}),$(".clear-if-not-match-mask").mask("00/00/0000",{clearIfNotMatch:!0,placeholder:"__/__/____"}),$(".placeholder-mask").mask("00/00/0000",{placeholder:"__/__/____"})),$.fn.TouchSpin){$(".vertical-spin").TouchSpin({verticalbuttons:!0,verticalupclass:"glyphicon glyphicon-plus",verticaldownclass:"glyphicon glyphicon-minus"});var c=$(".vertical-spin").TouchSpin({verticalbuttons:!0});c&&$(".vertical-spin").prev(".bootstrap-touchspin-prefix").remove(),$("input[name='demo1']").TouchSpin({min:0,max:100,step:.1,decimals:2,boostat:5,maxboostedstep:10,postfix:"%"}),$("input[name='demo2']").TouchSpin({min:-1e9,max:1e9,stepinterval:50,maxboostedstep:1e7,prefix:"$"}),$("input[name='demo3']").TouchSpin(),$("input[name='demo3_21']").TouchSpin({initval:40}),$("input[name='demo3_22']").TouchSpin({initval:40}),$("input[name='demo5']").TouchSpin({prefix:"pre",postfix:"post"}),$("input[name='demo0']").TouchSpin({})}try{$(".i-min-check").iCheck({checkboxClass:"icheckbox_minimal-pink",radioClass:"iradio_minimal-pink",increaseArea:"30%"}),$(".task-i-check").iCheck({checkboxClass:"icheckbox_minimal",radioClass:"iradio_minimal",increaseArea:"30%"})}catch(d){o=!1}if(a(),$.fn.select2){var h="Select a State";$(".select2, .select2-multiple").select2({placeholder:h}),$(".select2-allow-clear").select2({allowClear:!0,placeholder:h}),$("button[data-select2-open]").click(function(){$("#"+$(this).data("select2-open")).select2("open")});var p="select2-open";$(":checkbox").on("click",function(){$(this).parent().nextAll("select").select2("enable",this.checked)});var m=function Q(e){if(e.loading)return e.text;var t='<div class="clearfix"><div class="col-sm-1"><img src="'+e.owner.avatar_url+'" style="max-width: 100%" /></div><div clas="col-sm-10"><div class="clearfix"><div class="col-sm-6">'+e.full_name+'</div><div class="col-sm-3"><i class="fa fa-code-fork"></i> '+e.forks_count+'</div><div class="col-sm-2"><i class="fa fa-star"></i> '+e.stargazers_count+"</div></div>";return e.description&&(t+="<div>"+e.description+"</div>"),t+="</div></div>"},u=function X(e){return e.full_name||e.text};$(".ajax-data").select2({ajax:{url:"https://api.github.com/search/repositories",dataType:"json",delay:250,data:function(e){return{q:e.term,page:e.page}},processResults:function(e,t){return{results:e.items}},cache:!0},escapeMarkup:function(e){return e},minimumInputLength:1,templateResult:m,templateSelection:u})}if($.fn.DatePicker&&($(".input-date-picker").DatePicker({orientation:"bottom",daysOfWeekDisabled:"6",calendarWeeks:!0,autoclose:!0,todayHighlight:!0}),$(".cal-date-picker").DatePicker({orientation:"bottom",daysOfWeekDisabled:"6",calendarWeeks:!0,autoclose:!0,todayHighlight:!0}),$(".addon-datepicker").DatePicker({orientation:"bottom",daysOfWeekDisabled:"1",calendarWeeks:!0,autoclose:!0,todayHighlight:!0}),$(".inline-date-picker").DatePicker({daysOfWeekDisabled:"1",calendarWeeks:!0,autoclose:!0,todayHighlight:!0}),$(".input-daterange").DatePicker({orientation:"top",daysOfWeekDisabled:"1",calendarWeeks:!0,autoclose:!0,todayHighlight:!0})),$.fn.daterangepicker&&($(".input-daterange-datepicker").daterangepicker(),$(".input-daterange-timepicker").daterangepicker({timePicker:!0,format:"MM/DD/YYYY h:mm A",timePickerIncrement:30,timePicker12Hour:!0,timePickerSeconds:!1}),$(".input-limit-datepicker").daterangepicker({format:"MM/DD/YYYY",minDate:"06/01/2015",maxDate:"06/30/2015",dateLimit:{days:6}}),$("#reportrange span").html(moment().subtract(29,"days").format("MMMM D, YYYY")+" - "+moment().format("MMMM D, YYYY")),$("#reportrange").daterangepicker({format:"MM/DD/YYYY",startDate:moment().subtract(29,"days"),endDate:moment(),minDate:"01/01/2012",maxDate:"12/31/2015",dateLimit:{days:60},showDropdowns:!0,showWeekNumbers:!0,timePicker:!1,timePickerIncrement:1,timePicker12Hour:!0,ranges:{Today:[moment(),moment()],Yesterday:[moment().subtract(1,"days"),moment().subtract(1,"days")],"Last 7 Days":[moment().subtract(6,"days"),moment()],"Last 30 Days":[moment().subtract(29,"days"),moment()],"This Month":[moment().startOf("month"),moment().endOf("month")],"Last Month":[moment().subtract(1,"month").startOf("month"),moment().subtract(1,"month").endOf("month")]},opens:"left",drops:"down",buttonClasses:["btn","btn-sm"],applyClass:"btn-primary",cancelClass:"btn-default",separator:" to ",locale:{applyLabel:"Submit",cancelLabel:"Cancel",fromLabel:"From",toLabel:"To",customRangeLabel:"Custom",daysOfWeek:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],firstDay:1}},function(e,t,a){console.log(e.toISOString(),t.toISOString(),a),$("#reportrange span").html(e.format("MMMM D, YYYY")+" - "+t.format("MMMM D, YYYY"))})),$.fn.colorpicker&&($(".demo1").colorpicker(),$(".demo2").colorpicker()),$.fn.colorPicker&&($(".color").colorPicker(),$(".elem-color").colorPicker()),$.fn.footable&&($(".foo-data-table").footable({phone:767,tablet:1024}),$(".foo-data-table-filterable").footable({phone:767,tablet:1024}).bind("footable_filtering",function(e){var t=$(".filter-status").find(":selected").text();t&&t.length>0&&(e.filter+=e.filter&&e.filter.length>0?" "+t:t,e.clear=!e.filter)}),$(".clear-filter").click(function(e){e.preventDefault(),$(".filter-status").val(""),$("table.foo-data-table-filterable").trigger("footable_clear_filter")}),$(".filter-status").change(function(e){e.preventDefault(),$("table.foo-data-table-filterable").trigger("footable_filter",{filter:$("#filter").val()})}),$(".foo-data-table-filterable").footable().on("click",".row-delete",function(e){e.preventDefault();var t=$(".foo-data-table-filterable").data("footable"),a=$(this).parents("tr:first");t.removeRow(a)}),$("#change-page-size").change(function(e){e.preventDefault();var t=$(this).val();$(".foo-data-table-filterable").data("page-size",t),$(".foo-data-table-filterable").trigger("footable_initialized")})),$.fn.sparkline){var f=function(){$(".sparkline").each(function(){var e=$(this).data();e.valueSpots={"0:":e.spotColor},$(this).sparkline(e.data,e);var t=e.compositedata;if(t){var a=$(this).attr("data-stack-line-color"),i=$(this).attr("data-stack-fill-color"),o=$(this).attr("data-stack-spot-color"),l=$(this).attr("data-stack-spot-radius");$(this).sparkline(t,{composite:!0,lineColor:a,fillColor:i,spotColor:o,highlightSpotColor:o,spotRadius:l,valueSpots:{"0:":o}})}})},g;$(window).smartresize(function(e){clearTimeout(g),g=setTimeout(function(){f(!0)},100)}),f(!1)}$(".progress-bar").each(function(){var e=$(this).data("progress");e&&($(this).css("width",e+"%"),$(this).parents(".progress").parents(".progress-wrap").children(".progress-meta").children(".progress-percent").text(e+"%"))});try{var v=[[1,440],[2,450],[3,420],[4,500],[5,650],[6,470],[7,490],[8,580],[9,600],[10,780]],b=[[1,340],[2,350],[3,420],[4,590],[5,650],[6,470],[7,390],[8,580],[9,700],[10,980]],w=[[1,740],[2,650],[3,420],[4,500],[5,650],[6,470],[7,590],[8,680],[9,700],[10,980]],k=[{data:v,label:"Earnings",lines:{show:!1,fill:0,lineWidth:2}}],y={legend:{show:!1},grid:{hoverable:!0,borderWidth:{top:0,right:0,bottom:0,left:0},clickable:!1,margin:{top:10,right:10,bottom:6,left:10},minBorderMargin:0,labelMargin:0,mouseActiveRadius:30},series:{stack:!1,shadowSize:0,splines:{show:!0,tension:.3,lineWidth:2,fill:0},points:{show:!0,lineWidth:1.5,radius:2.5,symbol:"circle",fill:!0,fillColor:"#ffffff"}},xaxis:{show:!1,color:"#eee",ticks:!1},yaxis:{show:!1,tickLength:0,ticks:!1},colors:["#fff"]},C=[{data:b,label:"Earnings",bars:{show:!0,fill:.6,lineWidth:0,barWidth:.3}}],x={legend:{show:!1},grid:{hoverable:!0,borderWidth:{top:0,right:0,bottom:0,left:0},clickable:!1,margin:{top:10,right:10,bottom:0,left:10},minBorderMargin:0,labelMargin:0,mouseActiveRadius:30},series:{stack:!0,shadowSize:0},xaxis:{show:!0,color:"#eee",ticks:!1},yaxis:{tickLength:0,ticks:!1},colors:["#fff"]},S=[{data:w,label:"Earnings",lines:{show:!1,fill:.2,lineWidth:2}}],D={legend:{show:!1},grid:{hoverable:!0,borderWidth:{top:0,right:0,bottom:0,left:0},clickable:!1,margin:{top:10,right:10,bottom:6,left:10},minBorderMargin:0,labelMargin:0,mouseActiveRadius:30},series:{stack:!0,shadowSize:0,splines:{show:!0,tension:.3,lineWidth:2,fill:0},points:{show:!0,lineWidth:1.5,radius:2.5,symbol:"circle",fill:!0,fillColor:"#ffffff"}},xaxis:{show:!0,color:"#eee",ticks:!1},yaxis:{tickLength:0,ticks:!1},colors:["#fff"]},_=$.plot($("#widget-stats-chart"),k,y),M=$.plot($("#widget-monthly-chart"),C,x),T=$.plot($("#widget-alltime-chart"),S,D),Y=[[1,400],[2,200],[3,300],[4,200],[5,400],[6,200],[7,300],[8,200],[9,300],[10,200],[11,300],[12,500]],z=[[1,300],[2,200],[3,200],[4,200],[5,500],[6,200],[7,200],[8,200],[9,200],[10,200],[11,300],[12,550]],A=[[1,200],[2,200],[3,200],[4,200],[5,500],[6,200],[7,200],[8,200],[9,200],[10,300],[11,400],[12,700]],W=[{data:Y,label:"Mobile",lines:{show:!0,fill:.4,lineWidth:1},points:{show:!1,lineWidth:1.5,radius:2,symbol:"circle",fill:!0,fillColor:"#ffffff"}},{data:z,label:"Tablet",lines:{show:!0,fill:.3,lineWidth:1},points:{show:!1,lineWidth:1.5,radius:2,symbol:"circle",fill:!0,fillColor:"#ffffff"}},{data:A,label:"Desktop",lines:{show:!0,fill:.3,lineWidth:1},points:{show:!1,lineWidth:1.5,radius:2,symbol:"circle",fill:!0,fillColor:"#ffffff"}}],B={legend:{position:"nw",noColumns:3,container:$("#main-chart-legend")},grid:{hoverable:!0,borderWidth:{top:1,right:1,bottom:1,left:1},clickable:!0,borderColor:"#f5f5f5",margin:{top:0,right:0,bottom:0,left:0},minBorderMargin:1,labelMargin:20,mouseActiveRadius:30,backgroundColor:{colors:["#fff","#fff"]}},series:{stack:!0,shadowSize:0,curvedLines:{apply:!0,active:!0,monotonicFit:!0}},xaxis:{tickSize:.5,show:!0,color:"#f5f5f5"},yaxis:{tickSize:200,show:!0,color:"#f5f5f5"},tooltip:{show:!0,cssClass:"MainFlotTip",content:"<strong>%s: </strong>%y"},colors:["#26a69a","#8c9eff","#e65100"]},R=$.plot($("#main-chart"),W,B)}catch(d){o=!1}$(".user-details-toggle").each(function(){var e=$(this).parents(".user-intro").next(".users-details"),t=$(this).children("i");e.is(":visible")?(t.removeClass("zmdi-plus"),t.addClass("zmdi-minus")):(t.removeClass("zmdi-minus"),t.addClass("zmdi-plus"))}),$(".user-details-toggle").on("click",function(){var e=$(this).parents(".user-intro").next(".users-details"),t=$(this).children("i");e.is(":visible")?(t.removeClass("zmdi-minus"),t.addClass("zmdi-plus"),e.slideUp()):(t.removeClass("zmdi-plus"),t.addClass("zmdi-minus"),e.slideDown())}),$(".task-title").on("click",function(){var e=$(this).parents(".task-intro").next(".task-details");e.is(":visible")?e.slideUp():e.slideDown()}),$(".widget-toggle").on("click",function(e){e.preventDefault();var t=$(this).parentsUntil(".widget-action-bar").parentsUntil(".w-action").parents(".widget-header").next(".widget-container");t.is(":visible")?(t.slideUp(),$(this).children("a").children("i").removeClass("zmdi-chevron-down"),$(this).children("a").children("i").addClass("zmdi-chevron-up")):(t.slideDown(),$(this).children("a").children("i").removeClass("zmdi-chevron-up"),$(this).children("a").children("i").addClass("zmdi-chevron-down"))}),$(".widget-fullscreen").on("click",function(e){e.preventDefault();var t=$(this).parentsUntil(".widget-action-bar").parentsUntil(".w-action").parents(".widget-header").parents(".widget-wrap");t.hasClass("w-fullscreen")?t.removeClass("w-fullscreen"):t.addClass("w-fullscreen")}),$(".widget-exit").on("click",function(e){e.preventDefault();var t=$(this).parentsUntil(".widget-action-bar").parentsUntil(".w-action").parents(".widget-header").parents(".widget-wrap").parent("div");t.remove()});var O;if($(".widget-reload").on("click",function(e){e.preventDefault(),O=$(this),$(this).parentsUntil(".widget-action-bar").parentsUntil(".w-action").parents(".widget-header").parents(".widget-wrap").mask("Loading"),setTimeout(i,1500)}),$.fn.dataTable&&($(".data-tbl").DataTable({responsive:!0,columnDefs:[{targets:[1,2],orderable:!1}],oLanguage:{sLengthMenu:'<select class="tbl-data-select"><option value="10">10</option><option value="20">20</option><option value="30">30</option><option value="40">40</option><option value="50">50</option><option value="-1">All</option></select><span class="r-label">Entries</span>'},dom:'<"row" <"col-md-6"l><"col-md-6"f>><"row" <"col-md-12"<"td-content"rt>>><"row" <"col-md-6"i><"col-md-6"p>>'}),$.fn.select2&&$(".tbl-data-select").select2({minimumResultsForSearch:-1})),$.fn.sparkline){var f=function(){$(".sparkline").each(function(){var e=$(this).data();e.valueSpots={"0:":e.spotColor},$(this).sparkline(e.data,e);var t=e.compositedata;if(t){var a=$(this).attr("data-stack-line-color"),i=$(this).attr("data-stack-fill-color"),o=$(this).attr("data-stack-spot-color"),l=$(this).attr("data-stack-spot-radius");$(this).sparkline(t,{composite:!0,lineColor:a,fillColor:i,spotColor:o,highlightSpotColor:o,spotRadius:l,valueSpots:{"0:":o}})}})},g;$(window).smartresize(function(e){clearTimeout(g),g=setTimeout(function(){f(!0)},100)}),f(!1)}if($(".spark-pie-chart").each(function(){var e=$(this).data("spark-type"),t=$(this).data("spark-data").split(","),a=$(this).data("spark-width"),i=$(this).data("spark-height"),o=$(this).data("spark-slicecolors").split(",");$(this).sparkline(t,{type:e,width:a,height:i,sliceColors:o})}),$.noty){var E=[];E[0]='<div class="activity-item"> <i class="zmdi zmdi-check-all"></i> <div class="activity"> There are <a href="#">6 new tasks</a> waiting for you. Don\'t forget! <span>About 3 hours ago</span> </div> </div>',E[1]='<div class="activity-item"> <i class="zmdi zmdi-alert-polygon"></i> <div class="activity"> Mail server was updated. See <a href="#">changelog</a> <span>About 2 hours ago</span> </div> </div>',E[2]='<div class="activity-item"> <i class="zmdi zmdi-email"></i> <div class="activity"> Your <a href="#">latest post</a> was liked by <a href="#">Audrey Mall</a> <span>35 minutes ago</span> </div> </div>',E[3]='<div class="activity-item"> <i class="zmdi zmdi-shopping-cart-plus"></i> <div class="activity"> <a href="#">Eugene</a> ordered 2 copies of <a href="#">OEM license</a> <span>14 minutes ago</span> </div> </div>',E[4]='<div class="activity-item"> <i class="zmdi zmdi-truck"></i> <div class="activity"> <a href="#">Amark</a> This is frienly notification example <a href="#">Here</a> <span>14 minutes ago</span> </div> </div>',E[5]='<div class="activity-item"> <i class="zmdi zmdi-favorite-outline"></i> <div class="activity"> <a href="#">Amark</a> This is frienly notification example <a href="#">Here</a> <span>14 minutes ago</span> </div> </div>',window.anim={},window.anim.open="flipInX",window.anim.close="flipOutX",$("#anim-open").on("change",function(e){window.anim.open=$(this).val()}),$("#anim-close").on("change",function(e){window.anim.close=$(this).val()});var H=function K(e,t,a){var i=noty({text:t,type:e,dismissQueue:!0,layout:a,closeWith:["click"],theme:"ThemeNoty",maxVisible:10,animation:{open:"noty_animated bounceInRight",close:"noty_animated bounceOutRight",easing:"swing",speed:500}});setTimeout(function(){i.close()},5e3)},P=function G(){H("warning",E[0],"topRight"),H("error",E[1],"topRight"),H("information",E[2],"topRight"),H("success",E[3],"topRight"),H("alert",E[4],"topRight")};setTimeout(function(){P()},3e3);var j=function ee(e,t,a){var i=noty({text:t,type:e,dismissQueue:!0,layout:a,closeWith:["click"],theme:"ThemeNoty",maxVisible:10,animation:{open:"noty_animated bounceInDown",close:"noty_animated fadeOut",easing:"swing",speed:500}});setTimeout(function(){i.close()},5e3)};$(".ex-noty").on("click",function(){var e=$(this).data("type"),t=$(this).data("layout");j(e,E[5],t)})}var U=function(){var e,t,a={};return a.init=function(t){e=$(t.selector)},a.show=function(a){clearTimeout(t),e.find("span").html(a),e.delay(200).fadeIn().delay(3e3).fadeOut()},a}();U.init({selector:".bb-alert"});var L={};if($(document).on("click","a[data-bb]",function(e){e.preventDefault();var t=$(this).data("bb");"function"==typeof L[t]&&L[t]()}),L.alert=function(){bootbox.alert("Hello world!",function(){U.show("Hello world callback")})},L.confirm=function(){bootbox.confirm("Are you sure?",function(e){U.show("Confirm result: "+e)})},L.prompt=function(){bootbox.prompt({title:"What is your real name?",value:"Kamrujaman Shohel",callback:function(e){null===e?U.show("Prompt dismissed"):U.show("Hi <b>"+e+"</b>")}})},L.dialog=function(){bootbox.dialog({message:"I am a custom dialog",title:"Custom title",buttons:{success:{label:"Success!",className:"btn-success",callback:function(){U.show("great success")}},danger:{label:"Danger!",className:"btn-danger",callback:function(){U.show("uh oh, look out!")}},main:{label:"Click ME!",className:"btn-primary",callback:function(){U.show("Primary button")}}}})},L.custom_html=function(){bootbox.dialog({title:"That html",message:'<img src="images/avatar/jaman_01.jpg" alt="image"/><br/> You can also use <b>html</b>'})},L.html_forms=function(){bootbox.dialog({title:"This is a form in a modal.",message:'<div class="row">  <div class="col-md-12"> <form class="form-horizontal"> <div class="form-group"> <label class="col-md-4 control-label" for="name">Name</label> <div class="col-md-4"> <input id="name" name="name" type="text" placeholder="Your name" class="form-control input-md"> <span class="help-block">Here goes your name</span> </div> </div> <div class="form-group"> <label class="col-md-4 control-label" for="awesomeness">How awesome is this?</label> <div class="col-md-4"> <div class="radio"> <label for="awesomeness-0"> <input type="radio" name="awesomeness" id="awesomeness-0" value="Really awesome" checked="checked"> Really awesome </label> </div><div class="radio"> <label for="awesomeness-1"> <input type="radio" name="awesomeness" id="awesomeness-1" value="Super awesome"> Super awesome </label> </div> </div> </div></form> </div>  </div>',buttons:{success:{label:"Save",className:"btn-success",callback:function(){var e=$("#name").val(),t=$("input[name='awesomeness']:checked").val();U.show("Hello "+e+". You've chosen <b>"+t+"</b>")}}}})},$(".simple-alert").on("click",function(e){e.preventDefault(),swal({title:"Are you sure?",text:"You will not be able to recover this imaginary file!",confirmButtonColor:"#DD6B55"})}),$(".success-alert").on("click",function(e){e.preventDefault(),swal({title:"Are you sure?",text:"You will not be able to recover this imaginary file!",type:"success",confirmButtonColor:"#4caf50"})}),$(".warning-btn-ok").on("click",function(e){e.preventDefault(),swal({title:"Are you sure?",text:"You will not be able to recover this imaginary file!",type:"warning",showCancelButton:!0,confirmButtonColor:"#DD6B55",confirmButtonText:"Yes, delete it!",closeOnConfirm:!1},function(){swal({title:"Your imaginary file has been deleted.",type:"success",confirmButtonColor:"#4caf50"})})}),$(".warning-btn-cancel").on("click",function(e){e.preventDefault(),swal({title:"Are you sure?",text:"You will not be able to recover this imaginary file!",type:"warning",showCancelButton:!0,confirmButtonColor:"#DD6B55",confirmButtonText:"Yes, delete it!",cancelButtonText:"No, cancel plx!",closeOnConfirm:!1,closeOnCancel:!1},function(e){e?swal("Deleted!","Your imaginary file has been deleted.","success"):swal("Cancelled","Your imaginary file is safe :)","error")})}),$(".warning-custom-icon").on("click",function(e){e.preventDefault(),swal({title:"Sweet!",text:"Here's a custom image.",imageUrl:"images/avatar/jaman-01.jpg"})}),$(".warning-custom-html").on("click",function(e){e.preventDefault(),swal({title:"HTML <small>Title</small>!",text:'A custom <span style="color:#F8BB86">html<span> message.',html:!0})}),$(".warning-auto-close").on("click",function(e){e.preventDefault(),swal({title:"Auto close alert!",text:"I will close in 3 seconds.",timer:3e3,showConfirmButton:!1})}),$(".warning-prompt").on("click",function(e){e.preventDefault(),swal({title:"An input!",text:"Write something interesting:",type:"input",showCancelButton:!0,closeOnConfirm:!1,animation:"slide-from-top",inputPlaceholder:"Write something"},function(e){return e===!1?!1:""===e?(swal.showInputError("You need to write something!"),!1):void swal("Nice!","You wrote: "+e,"success")})}),$.fn.noUiSlider){$("#slider-range").noUiSlider({start:[50,200],connect:!0,format:wNumb({mark:"",decimals:0,prefix:"$"}),range:{min:0,"20%":100,"40%":200,"60%":300,"80%":400,max:500}}),$("#slider-range").Link("lower").to($("#slider-snap-value-lower")),$("#slider-range").Link("upper").to($("#slider-snap-value-upper")),$("#slider-range").noUiSlider_pips({mode:"range",density:3,format:wNumb({decimals:0,prefix:"$"})});var N={min:[0],"10%":[500,500],"50%":[4e3,1e3],max:[1e4]};$("#pips-range").noUiSlider({start:[20,80],connect:!0,range:{min:0,max:100}}),$("#pips-range-01").noUiSlider({start:[4e3],range:{min:[2e3],max:[1e4]}}),$("#pips-range-02").noUiSlider({start:[0,500],connect:!0,range:{min:0,max:1500}}),$("#pips-range-vertical").noUiSlider({range:N,start:0,orientation:"vertical"}),$("#pips-range-vertical-01").noUiSlider({start:[300,1200],connect:!0,range:{min:0,"20%":300,"80%":1200,max:1500},orientation:"vertical"}),$("#pips-range-vertical-02").noUiSlider({start:[400,1e3],connect:!0,range:{min:0,max:1500},orientation:"vertical"});var I=function te(e,t){return e%1e3?2:1};$(".pips-range").noUiSlider_pips({mode:"range",density:3,filter:I,format:wNumb({decimals:2,prefix:"$"})})}try{$(".switch-mini").switchButton({show_labels:!1,on_label:"C",off_label:"F",width:25,height:15,button_width:15}),$(".switch-sm").switchButton({show_labels:!1,on_label:"C",off_label:"F",width:30,height:20,button_width:20}),$(".switch-large").switchButton({show_labels:!1,on_label:"C",off_label:"F",width:50,height:30,button_width:30}),$(".switch-xs").switchButton({show_labels:!1,on_label:"C",off_label:"F",width:40,height:25,button_width:25})}catch(d){}try{var Z=Array.prototype.slice.call(document.querySelectorAll(".switchery-large"));Z.forEach(function(e){var t=new Switchery(e,{size:"large",color:"#17bab8",jackColor:"#fff",secondaryColor:"#eee",jackSecondaryColor:"#fff"})});var V=Array.prototype.slice.call(document.querySelectorAll(".switchery-m"));V.forEach(function(e){var t=new Switchery(e,{color:"#17bab8",jackColor:"#fff",secondaryColor:"#eee",jackSecondaryColor:"#fff"})});var F=Array.prototype.slice.call(document.querySelectorAll(".switchery-small"));F.forEach(function(e){var t=new Switchery(e,{size:"small",color:"#17bab8",jackColor:"#fff",secondaryColor:"#eee",jackSecondaryColor:"#fff"})});var q=Array.prototype.slice.call(document.querySelectorAll(".switchery-c"));q.forEach(function(e){var t=new Switchery(e,{color:"#17bab8",jackColor:"#fff",secondaryColor:"#eee",jackSecondaryColor:"#fff"})});var q=Array.prototype.slice.call(document.querySelectorAll(".switchery-mini"));q.forEach(function(e){var t=new Switchery(e,{size:"small",color:"#17bab8",jackColor:"#fff",secondaryColor:"#eee",jackSecondaryColor:"#fff"})})}catch(d){}if($(".item-label").each(function(){var e=$(this).data("color");e&&$(this).children("a").children(".label-color").css({"background-color":e})}),$.fn.fullCalendar&&($("#event-calendar").fullCalendar({header:{left:"Next",center:"title",right:""},defaultDate:"2015-08-12",selectable:!0,selectHelper:!0,select:function(e,t){var a=bootbox.dialog({title:"Event Information",message:'<div class="row">  <div class="col-md-12"> <form class="form-horizontal"> <div class="form-group"> <label class="col-md-4 control-label" for="name">Event Title</label> <div class="col-md-6"> <input id="event_title" name="evtitle" type="text" value="Event Title" placeholder="Event Title" class="form-control input-md"> </div> </div> <div class="form-group"> <label class="col-md-4 control-label" for="name">Description</label> <div class="col-md-6"> <input id="event_description" name="evdesc" value="Event Description" type="text" placeholder="Description" class="form-control input-md"> </div> </div> <div class="form-group"> <label class="col-md-4 control-label" for="name">Select Color</label> <div class="col-md-6"> <div class="input-group event-color-picker"><input id="event_color" type="text" value="#0097a7" class="form-control"/><span class="input-group-addon"><i></i></span></div></div> </div> </form> </div>  </div>',
buttons:{update:{label:"Save",className:"btn-success",callback:function(){var a=$("#event_title").val(),i=$("#event_description").val(),o=$("#event_color").val(),l=a,s;l&&(s={title:a,start:e,end:t,description:i,color:o},$("#event-calendar").fullCalendar("renderEvent",s,!0))}},cancel:{label:"Cancel",className:"btn-danger",callback:function(){}}}});a.find(".event-color-picker").colorpicker(),$("#event-calendar").fullCalendar("unselect")},eventRender:function(e,t){t.popover({title:e.title,html:!0,placement:"top",content:"<div>"+e.description+"</div><div>Start: "+moment(e.start).format("MM/DD/YYYY hh:mm")+"</div><div>End: "+moment(e.end).format("MM/DD/YYYY hh:mm")+"</div>"}),t.find("div.fc-title").html(t.find("div.fc-title").text()),$("body").on("click",function(e){t.is(e.target)||0!==t.has(e.target).length||0!==$(".popover").has(e.target).length||t.popover("hide")})},editable:!0,eventLimit:!0,events:[{id:1,title:"Long Event",start:"2015-08-01",end:"2015-08-05",description:"Four days business conference",color:"#43a047"},{id:2,title:"Meeting",start:"2015-08-07",end:"2015-08-07",description:"Meeting with Nisha Agarwal",color:"#0097a7"},{id:3,title:"Repeating Event",start:"2015-08-09",end:"2015-08-09",description:"Meeting with Nisha Agarwal",color:"#f9a825"},{id:4,title:"Repeating Event",start:"2015-08-16",end:"2015-08-18",description:"Meeting with Nisha Agarwal",color:"#009688"},{id:5,title:"Conference",start:"2015-08-11",end:"2015-08-13",description:"Attend for a software conference",color:"#455a64"},{id:6,title:"Meeting",start:"2015-08-12T10:30:00",end:"2015-08-12T12:30:00",description:"Meeting with CEO",color:"#ab47bc"},{id:7,title:"Lunch",start:"2015-08-12",end:"2015-08-12",description:"Lunch with high official",color:"#ef6c00"},{id:8,title:"Meeting",start:"2015-08-12T14:30:00",end:"2015-08-12T12:30:00",description:"Meeting with VC",color:"#f9a825"},{id:9,title:"Happy Hour",start:"2015-08-12T17:30:00",end:"2015-08-12T12:30:00",description:"Happy hour with team members",color:"#455a64"},{id:10,title:"Dinner",start:"2015-08-12T20:00:00",end:"2015-08-12T12:30:00",description:"Dinner with VC",color:"#455a64"},{id:11,title:"Birthday Party",start:"2015-08-13T07:00:00",end:"2015-08-12T12:30:00",description:"My daughter birthday party",color:"#ef6c00"}]}),$(".CalPrev").on("click",function(){$("#event-calendar").fullCalendar("prev")}),$(".CalNext").on("click",function(){$("#event-calendar").fullCalendar("next")}),$(".CalToday").click(function(){$("#event-calendar").fullCalendar("today")}),$(".CalMonthView").on("click",function(){$("#event-calendar").fullCalendar("changeView","month")}),$(".CalAgendaWeekView").on("click",function(){$("#event-calendar").fullCalendar("changeView","agendaWeek")}),$(".CalAgendaDayView").click(function(){$("#event-calendar").fullCalendar("changeView","agendaDay")}),$(".cal-goDate").on("click",function(){var e=$(".cal-date-picker").val();""===e?swal({title:"Oops! Please select a date",text:"",type:"warning",confirmButtonColor:"#DD6B55",confirmButtonText:"ok"},function(e){e&&$(".cal-date-picker").focus()}):$("#event-calendar").fullCalendar("gotoDate",e)})),$.simpleWeather){var J=J;$.simpleWeather({woeid:"2357536",location:"",unit:"f",success:function(e){J='<div class="weather-widget-wall w_bg_cyan">',J+='<div class="weather-city">'+e.city+","+e.region+"</div>",J+='<div class="weather-status">'+e.currently+"</div>",J+='<div class="weather-temperature">',J+='<div class="weather-icon"><i class="icon-'+e.code+'"></i></div>',J+='<div class="temperature">',J+='<div class="date-time"><span class="w-date">'+e.forecast[0].date+'</span><span class="w-day">'+e.forecast[0].day+"</span></div>",J+='<div class="w-meter"><span class="temperature-f">'+e.temp+"&deg;"+e.units.temp+'</span><span class="temperature-c">'+e.alt.temp+"&deg;C</span></div>",J+="</div>",J+="</div>",J+="</div>",J+='<div class="forecast">',J+='<div class="sun-r-s"><span><label>Sunrise:</label> '+e.sunrise+" </span><span><label>Sunset:</label> "+e.sunset+" </span></div>",J+="<ul>";for(var t=0;t<e.forecast.length;t++)J+='<li><span class="w-day">'+e.forecast[t].day+'</span><span class="day-w-icon"><i class="icon-'+e.forecast[t].code+'"></i></span><span class="day-temperature">'+e.forecast[t].high+"</span></li>";J+="</ul>",J+="</div>",$("#weather").html(J)},error:function(e){$("#weather").html("<p>"+e+"</p>")}})}});