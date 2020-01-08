window.onload = function() {
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if(ajax.readyState == 4 && ajax.status == 200) {
            var veliki = JSON.parse(ajax.responseText);
            var godine = JSON.parse(veliki.godine);
            var vjezbe = JSON.parse(veliki.vjezbe);

            var selectGodPrvi = document.getElementsByName("sGodine")[0];
            var selectGodDrugi = document.getElementsByName("sGodine")[1];
            var selectVjezbaPrvi = document.getElementsByName("sVjezbe")[0];
            var selectVjezbaDrugi = document.getElementsByName("sVjezbe")[1];
            

            for(var i=0; i<godine.length; i++) {
              
                selectGodPrvi.innerHTML += "<option value="+godine[i].id + ">" + godine[i].nazivGod + "</option>"
                selectGodDrugi.innerHTML += "<option value=" + godine[i].id+ ">"+ godine[i].nazivGod +"</option>"

            }
            for(var j=0; j<vjezbe.length; j++) {
                selectVjezbaPrvi.innerHTML += "<option value ="+vjezbe[j].id +">" + vjezbe[j].naziv+ "</option>"
                selectVjezbaDrugi.innerHTML += "<option value ="+vjezbe[j].id +">" + vjezbe[j].naziv+ "</option>"
                    
            }
            selectVjezbaDrugi.addEventListener("click", function()
            {
                var demo = document.getElementById("demo");
                var ajax2 = new XMLHttpRequest();
                ajax2.onreadystatechange = function()
                {
                    if(ajax2.readyState == 4 && ajax2.status == 200)
                    {
                        var selectZadatak = document.getElementsByName("sZadatak")[0];
                        var nizZadataka = JSON.parse(ajax2.responseText);
                        for(var i=0; i<nizZadataka.length; i++) 
                        {
                            selectZadatak.innerHTML += "<option value="+nizZadataka[i].id + ">" + nizZadataka[i].naziv + "</option>"
                        }
                    }

                }
                ajax2.open("GET", "http://localhost:8080/dajSve2", true);
                ajax2.send();
            });
            
           

        }
    }

    ajax.open("GET", "http://localhost:8080/dajSve", true);
    ajax.send();
}

function vedo() {
    
}