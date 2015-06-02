Jquery Contextmenu is a plugin to create right-click contextmenu's on html containerelements.
Provide a JSON list of items you want to provide to the menu, each item can contain three parameters:
- title: the title of the menu item
- link: a link to a resource like a url, an image, ...
- action: an action which has to be performed when the item is clicked

Initiate a menu on an element by the following command:
$('.container').contextmenu(jsonItems,{ showTitle: true,title: "submenu" });

You can pass two optional parameters to the plugin:
- showTitle: shows a title on top of the menu
- title: shows the desired title of the menu, the default is "Menu options"
