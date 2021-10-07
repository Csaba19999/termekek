/* global max */

$(function () {

    const termekek = [];
    beolvasas("jsontermekek.json", termekek);
    function kiir() {
        console.log("kiir"+termekek);
        $("#tablazat").append("<table>");
        for (let i = 0; i < termekek.length; i++) {
            $("table").append("<tr><td>" + termekek[i].Terméknév + "</td>");
            $("table").append("<td>" + termekek[i].Leírás + "</td>");
            $("table").append("<td>" + termekek[i].Készlet + "</td>");
            $("table").append("<td>" + termekek[i].Ár + "</td>");
            $("table").append("<td><input type='button' value='módosít' id='"+i+"' </td></tr>");
        }
        $("#tablazat").append("</table>");
    }
    function formFeltolt(){ // kb ugyan az mint a tablazat csab a formokba appendelünk value értékeket 
//        for (let i = 0; i < termekek.length; i++) {
//            $("table").append("<tr><td>" + termekek[i].Terméknév + "</td>");
//            $("table").append("<td>" + termekek[i].Leírás + "</td>");
//            $("table").append("<td>" + termekek[i].Készlet + "</td>");
//            $("table").append("<td>" + termekek[i].Ár + "</td>");
//            $("table").append("<td><input type='button' value='módosít' id='"+i+"' </td></tr>");
//        }
    }
    
    
    function beolvasas(fajlNev, tomb) {
        $.ajax(
                {url: fajlNev, success: function (result) {
                        console.log("Sikeres beolvasás");
                        result.forEach((value) => {
                            tomb.push(value);
                            kiir();
                        });
                        console.log(termekek);





                    }}

        );
    }

}); 