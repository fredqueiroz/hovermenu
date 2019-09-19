var i = 1;
var text = document.querySelector('#buttons').innerHTML;
var buttons = text.split('<');
var value = '';
var value2 = document.querySelector('#menu').innerHTML;
for (i = 1; i <= buttons.length - 1; i++) {
    value2 = value2.replace('<li>', '<li class=\"spotli\"><a class=\"spota\" data-id=\"div' + i + '\" href=\"#\"><span class=\"filter-names\">');
    $("#buttons > input:nth-child(" + i + ")").wrap("<div id=\"div" + i + "\">");
}

value2 = value2.replace(/<\/li>/g, '</span></a></li>');
$('#menu').html(value2);

function triggerClick(id) {
    var children = $("#" + id).children();
    children.click();
}

$(".spota").click(function() {
    var navMenu = $(this).attr('data-id');
    triggerClick(navMenu);
});

$(".icons").click(function() {
    var navMenu = $(this).attr('data-id');
    triggerClick(navMenu);
});

document.getElementById("shadow").onclick = function() {
	document.getElementById("shadow").style.width = "0%";
	document.getElementById("menu").style.width = "70px";
	$("#myaccordion").accordion({
		collapsible: true,
		active: false,
		heightStyle: 'content',
		activate: function(event, ui) {
			if (ui.newHeader.text() != "") {
				$(".ui-accordion-header-active > .spota > .fa-angle-right").removeClass('fa-angle-right').addClass('fa-angle-down');
			}
			else {
				$(".ui-corner-all > .spota > .fa-angle-down").removeClass('fa-angle-down').addClass('fa-angle-right');
			}
		},
	});
};

document.getElementById("menu").onmouseover = function() {
	document.getElementById("shadow").style.width = "100%";
	if (document.getElementById("menu").style.width == "70px") {
		document.getElementById("menu").style.width = "400px";
		document.getElementById("shadow").style.width = "100%";
	}

};


$("#myaccordion").accordion({
    		collapsible: true,
		active: false,
		heightStyle: 'content',
		activate: function(event, ui) {
			if (ui.newHeader.text() != "") {
				$(".ui-accordion-header-active > .spota > .fa-angle-right").removeClass('fa-angle-right').addClass('fa-angle-down');
			}
			else {
				$(".ui-corner-all > .spota > .fa-angle-down").removeClass('fa-angle-down').addClass('fa-angle-right');
			}

		},
});

$('.VerticalScrollbarContainer.sf-element.sf-element-scroll-bar.sfpc-right').attr('style', 'display: none');
$('.HorizontalScrollbarContainer.sf-element.sf-element-scroll-bar.sfpc-bottom').attr('style', 'display: none');

var i = 0;
for (i = 0; i < document.getElementsByClassName("StyledScrollbar").length; i++)
{
	if (document.getElementsByClassName("StyledScrollbar")[i].innerHTML.includes("<span id=\"cssstyle\"></span>"))
	{
		document.getElementsByClassName("StyledScrollbar")[i].style.height = "36px";
	}
}

for (i = 0; i < document.getElementsByClassName("HtmlTextArea").length; i++)
{
	if (document.getElementsByClassName("HtmlTextArea")[i].innerHTML.includes("<span id=\"cssstyle\"></span>"))
	{
		document.getElementsByClassName("HtmlTextArea")[i].style.height = "36px";
	}
}

var a12b = 1;

$("#myaccordion > li > a").removeClass('ui-accordion-header'); 
$("#myaccordion > li > a").removeClass('ui-helper-reset');
$("#myaccordion > li > a").removeClass('ui-state-default');
$("#myaccordion > li > a").removeClass('ui-corner-all');
$("#myaccordion > li > a").removeClass('ui-accordion-icons');
$("#myaccordion > li > a").removeClass('ui-state-hover');
$("#myaccordion > li > a > .ui-icon").remove();
$("#myaccordion > li > a > span > span").css('left', '-25px');
$('#myaccordion > li > a > span').css('font-weight', '500');
$('#myaccordion > li > a').hover(
       function(){ $(this).removeClass('ui-state-hover') }
);
$('#myaccordion > li > a').focus(
       function(){ $(this).removeClass('ui-state-focus') }
);
$('#myaccordion > li > a').click(
       function(){ $(this).removeClass('ui-state-active') }
);
