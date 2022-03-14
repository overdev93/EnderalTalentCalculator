
var request = new XMLHttpRequest();
 request.open("GET", "warrior-vandal.json", false);
 request.send(null)
 var my_JSON_object = JSON.parse(request.responseText);
 alert (my_JSON_object.result[0]);

a = Object.keys(json).length;
for(let i = 0;  i <= a; i++)
{


    vandalObj[i] = JSON.parse(request);
    console.log(vandalObj[i].name);
}
