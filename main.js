

var dropdownClassMenu = document.getElementById('dropdownClasses')
var dropdownClassMenuRead;

checkingSelectedClassDropdownMenu();
ChangeBackgroundImage();
GenerateCircles(warriorVandalData);

// executes when class drop down menu is changed
dropdownClassMenu.addEventListener('change',

function()
    {
        checkingSelectedClassDropdownMenu();
        ChangeBackgroundImage();
    }
);


function checkingSelectedClassDropdownMenu()
{
  dropdownClassMenuRead = dropdownClassMenu.options[dropdownClassMenu.selectedIndex].text;
}

// changes the background according to the class dropdown menu
function ChangeBackgroundImage()
{
  var doc = document.getElementById('graphicElements');
  doc.style.backgroundImage = 'url('+dropdownClassMenuRead+'.gif)';
}


function GenerateCircles(dataset)
{

    let svg_embed = "http://www.w3.org/2000/svg";
    let circles =[];

    rect = document.createElementNS(svg_embed, 'rect');
    rect.setAttribute('id', "rectTooltip");
    rect.setAttribute('height', 200);
    rect.setAttribute('width', 150);

    txt  = document.createElementNS(svg_embed, 'text');
    txt.setAttribute('id', 'textToolTip');
    txt.setAttribute('height', 200);
    txt.setAttribute('width', 150);

    for(var i = 0; i < dataset.length; i++)
    {
          circles[i] = document.createElementNS(svg_embed, 'circle');
          const id = warriorVandalName + '_' + dataset[i].id;
          const memoryName = warriorVandalData[i].name;
          const memoryDescription = warriorVandalData[i].description;

          const constCoordX = dataset[i].coordx;
          const constCoordY = dataset[i].coordy;

          circles[i].setAttribute('id', id);
          circles[i].setAttribute('cx', dataset[i].coordx);
          circles[i].setAttribute('cy', dataset[i].coordy);
          circles[i].setAttribute('r', 7);

          document.getElementById('svgsection').appendChild(circles[i])

          let currentCoordX = dataset[i].coordx;
          let currentCoordY = dataset[i].coordy;

          circles[i].addEventListener("mouseenter", function () {

            txt.setAttribute('x', constCoordX + 10);
            txt.setAttribute('y', constCoordY + 15);
            txt.innerHTML = memoryName + "<br />" + memoryDescription; //  LINEBREAK DOESNT WORK????

            tTip = document.getElementById('rectTooltip');
            tTip.setAttribute('x', constCoordX);
            tTip.setAttribute('y', constCoordY);

            rect.style.visibility = "visible";
            txt.style.visibility = "visible";

          });

          circles[i].addEventListener("mouseout", function () {

            rect.style.visibility = "hidden";
            txt.style.visibility = "hidden";

          });
          rect.style.visibility = "hidden";
          txt.style.visibility = "hidden";
    }

    document.getElementById('svgsection').appendChild(rect);
    document.getElementById('svgsection').appendChild(txt);



}



function circleChange(crl)
{
  crl.setAttribute( 'style', 'fill: none; stroke: blue; stroke-width: 2px;' );
}
