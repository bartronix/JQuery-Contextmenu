/* contextmenu.js - v0.1 - 2013-12-04
*  http://bartleemans.be/
*  Copyright (c) 2014 Bart Leemans 
*  Dual licensed under the MIT and GPL licenses:
*  http://malsup.github.com/mit-license.txt
*  http://malsup.github.com/gpl-license-v2.txt
*/

jQuery.fn.contextmenu = function (menuParams,options) {
	opts = jQuery.extend ({
	title: "Menu options:"
	}, options);				
	var container = $(this);
	container.css("position","relative");
	$(this).mousedown( function(e) {
		if (e.button == 2) {
			var menu = $('<ul id="ctx-menu"></ul>');						
			var x = e.pageX - $(this).offset().left;
			var y = e.pageY - $(this).offset().top;			
			menu.css({
			   'position' : 'absolute',
			   'left' : x,
			   'top' : y
			});						
			if($("#ctx-menu")){
				$("#ctx-menu").remove();
			}	
			//title
			if(opts.showTitle){
				var titleListItem = $('<li id="contextmenu-title"></li>');
				titleListItem.html(opts.title);
				titleListItem.css("list-style-type","none");
				menu.append(titleListItem);
			}								
			$.each (menuParams, function (index) {			
				var listItem = $('<li></li>');
				$('<a>',{
					text: menuParams[index].title,
					title: menuParams[index].title,
					href: menuParams[index].link,
					click: menuParams[index].action
				}).appendTo(listItem);					
				menu.append(listItem);					
			});
				
			$(container).append(menu);
				
			// disable default browser contextmenu
			$(this).add($('UL.contextMenu')).bind('contextmenu', function() { return false; });
			
			$(document.body).on('mouseleave', '#ctx-menu', function(){
				$('#ctx-menu').fadeOut('slow', function() {
					$("#ctx-menu").remove();
				})
				return false;
			});
		}
	});		
}
