menu_list_array = {"Paneer Tika", "Shahi Paneer", "Tufani Paneer", "Matar Panner", "Butter Paneer", };

function getmenu(){
    var htmldata;
    htmldata ="col class='menulist'>"
    menu_list_array.sort();
    for(var i=0; <menu_list_array.length;i++){
        htmldata=htmldata+ ' <li> ' + menu_list_array[i] + '</li>'
    }
    htmmldata=htmldata+ "</ol>"
    document.getElementById("display_menu").innerHTML = htmldata;
        }

        function add_item(){
            var htmldata
            var item-document.getElementById("add_item").nodeValue;
            menu_list_array.push(item);
            menu_list_array.sort();
            htmldata = "<section class='cards'>"
            for (var i=0i<menu_list_array.length;i++){

                htmldata=htmldata+'<div class="card">' +img src="images/pizzaImg.png/>" + menu_list_array[i] + '</div>'

             }
          htmldata=htmldata+"</section>"
          document.getElementById("display_addedmenu").innerHTML = htmldata;
        }

    }
        
    }
}