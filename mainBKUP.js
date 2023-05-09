var dropdown = document.getElementById('dropdownClasses');
var dropdownClassMenuRead;
const svg_embed = "http://www.w3.org/2000/svg";

var svgSection = document.getElementById('svgsection');
var dropdownPreviousValue;

var currentInputData;
var DataName;

var selectClass;


checkingSelectedClassDropdownMenu();
GenerateSvgCircles(warriorData, "warrior");
GenerateSvgCircles(mageData , "mage");
HideCircles();


// executes when class drop down menu is changed
dropdown.addEventListener('click', function()
    {
      dropdownPreviousValue = dropdown.value;
      checkingSelectedClassDropdownMenu();
    }
);

dropdown.addEventListener('change', function()
    {
      checkingSelectedClassDropdownMenu();
      ChangeBackgroundImage();
      HideCircles();
      //GenerateSvgCircles(currentInputData);
    }
);


// FUNCTIONS

function checkingSelectedClassDropdownMenu()
{
  switch (dropdown.value) 
  {
    case "warrior":
      currentInputData = warriorData;
      DataName = "warrior";
      break;
    case "mage":
      currentInputData = mageData;
      DataName = "mage";
      break;
    case "rogue":
      currentInputData = rogueData;
      break;
    case "phasmalist":
      currentInputData = phasmalistData;
      break;
    case "lycanthrope":
      currentInputData = lycanthropeData;
      break;
  }

  dropdownClassMenuRead = dropdown.value;
}

// changes the background according to the class dropdown menu
function ChangeBackgroundImage()
{
  checkingSelectedClassDropdownMenu();
  var doc = document.getElementById('graphicElements');
  doc.style.backgroundImage = "url('images/" + dropdownClassMenuRead + ".gif')";
  
  
}



function HideCircles()
{ 
 
  var selectWarrior = document.getElementsByClassName(dropdown[0].value);
  var selectMage = document.getElementsByClassName(dropdown[1].value);
  var selectRogue = document.getElementsByClassName(dropdown[2].value);
  var selectPhasmalist = document.getElementsByClassName(dropdown[3].value);
  var selectLycanthrope = document.getElementsByClassName(dropdown[4].value);

  checkingSelectedClassDropdownMenu();

  console.log(dropdown[0].value.length);


  switch(dropdown.value) {  
    case "warrior":
      for(let i = 0; i < selectWarrior.length; i++) {
        selectWarrior[i].style.visibility = "visible";
        
      }
      for(let i = 0; i < selectMage.length; i++) {
        selectMage[i].style.visibility = "hidden";
       
      }
      break;

    case "mage":
      for(let i = 0; i < selectWarrior.length; i++) {
        selectWarrior[i].style.visibility = "hidden";
       
      }
      for(let i = 0; i < selectMage.length; i++) {
        selectMage[i].style.visibility = "visible";
        
      }
      break;
  }
   
   
}



function GenerateSvgCircles(dataset, classname)
{
    
    let svgCircles =[];
    
    for(var i = 0; i < dataset.length; i++)
    {
          svgCircles[i] = document.createElementNS(svg_embed, 'circle');
          const id = classname + '_' + dataset[i].id;
          const memoryName = dataset[i].name;
          const memoryDescription = dataset[i].description;
          const memoryDescriptionTwo = dataset[i].description; 
          const memoryTierOne = dataset[i].tierone;
          const memoryTierTwo = dataset[i].tiertwo;
          const memoryTierThree = dataset[i].tierthree;

          const constCoordX = dataset[i].coordx;
          const constCoordY = dataset[i].coordy;

          svgCircles[i].setAttribute('id', id);
          svgCircles[i].setAttribute('class', classname);          
          svgCircles[i].setAttribute('cx', dataset[i].coordx);
          svgCircles[i].setAttribute('cy', dataset[i].coordy);
          svgCircles[i].setAttribute('r', 9);

          document.getElementById('svgsection').appendChild(svgCircles[i]);

      // only one rect and text tags are needed
      if(classname ="warrior")
      {
        // creating a rectangle for a mouse-over tooltip
        rect = document.createElementNS(svg_embed, 'rect');
        rect.setAttribute('id', "rectTooltip");

        // text for the tooltip
        textNodeTitle = document.createElementNS(svg_embed, 'text');
        textNodeTitle.setAttribute('id', 'textToolTipName');
  
        // creates text tags for the different inputs
        textNodeDescription  = document.createElementNS(svg_embed, 'text');
        textNodeDescriptionTwo  = document.createElementNS(svg_embed, 'text');
        
        textNodeTierOne  = document.createElementNS(svg_embed, 'text');
        textNodeTierOne.setAttribute('id', 'textToolTipTierOne');
        
        textNodeTierTwo  = document.createElementNS(svg_embed, 'text');
        textNodeTierTwo.setAttribute('id', 'textToolTipTierTwo');
        
        textNodeTierThree  = document.createElementNS(svg_embed, 'text');
        textNodeTierThree.setAttribute('id', 'textToolTipTierThree');
      }
      

              svgCircles[i].addEventListener("mouseenter", function () {

                const mousePosX = constCoordX + 20;
                const mousePosY = constCoordY;

                // sets the coordinates of the title in the rect and updates the text
                textNodeTitle.setAttribute('x', mousePosX + 10);
                textNodeTitle.setAttribute('y', mousePosY + 20);
                textNodeTitle.setAttribute('font-size', 16);
                textNodeTitle.setAttribute('text-decoration', 'underline');
                textNodeTitle.innerHTML = memoryName;

                // sets the coordinates of the description in the rect and updates the text
                textNodeDescription.setAttribute('x', mousePosX + 10);
                textNodeDescription.setAttribute('y', mousePosY + 45);
                textNodeDescription.innerHTML = memoryDescription;

                // sets the coordinates of the second description in the rect and updates the text, 
                // second description cause the text needs to be splitted cause of the length
                textNodeDescriptionTwo.setAttribute('x', mousePosX + 10);
                textNodeDescriptionTwo.setAttribute('y', mousePosY + 60);
                textNodeDescriptionTwo.innerHTML = memoryDescriptionTwo;
          
                
                if(textNodeDescription.innerHTML.length > 80)
                {
                  textNodeDescription.innerHTML = memoryDescription.substring(0,memoryDescription.length / 2);
                  textNodeDescriptionTwo.innerHTML = memoryDescription.substring(memoryDescription.length / 2);
                }
                else
                {
                  textNodeDescriptionTwo.innerHTML ="";
                }


                // changing the width and height of the rectangle depending on how long the text in it is
                rect.setAttribute('width', memoryDescription.length * 7 + memoryTierOne.length + memoryTierTwo.length * 6);
                rect.setAttribute('height', memoryDescription.length * 1.2 + memoryTierOne.length + memoryTierTwo.length);
                
                textNodeTierOne.setAttribute('x', mousePosX + 10);
                
                if(memoryDescription.length > 0)
                {
                  textNodeTierOne.setAttribute('y', mousePosY + 95);
                  textNodeTierTwo.setAttribute('y', mousePosY + 115);
                  textNodeTierThree.setAttribute('y', mousePosY + 135);
                }
                else
                {
                  textNodeTierOne.setAttribute('y', mousePosY + 50);
                  textNodeTierTwo.setAttribute('y', mousePosY + 70);
                  textNodeTierThree.setAttribute('y', mousePosY + 90);
                }
                
                textNodeTierOne.innerHTML = memoryTierOne;

                textNodeTierTwo.setAttribute('x', mousePosX + 10);
                textNodeTierTwo.innerHTML = memoryTierTwo;

                textNodeTierThree.setAttribute('x', mousePosX + 10);
                textNodeTierThree.innerHTML = memoryTierThree;

                rect.setAttribute('x', mousePosX);
                rect.setAttribute('y', mousePosY);
               
                rect.style.visibility = "visible";
                textNodeTitle.style.visibility = "visible";
                textNodeDescription.style.visibility = "visible";
                textNodeDescriptionTwo.style.visibility = "visible";
                textNodeTierOne.style.visibility = "visible";
                textNodeTierTwo.style.visibility = "visible";
                textNodeTierThree.style.visibility = "visible";

              });
                  
    
              svgCircles[i].addEventListener("mouseleave", function () {
    
                rect.style.visibility = "hidden";
                textNodeTitle.style.visibility = "hidden";
                textNodeDescription.style.visibility = "hidden";
                textNodeDescriptionTwo.style.visibility = "hidden";
                textNodeTierOne.style.visibility = "hidden";
                textNodeTierTwo.style.visibility = "hidden";
                textNodeTierThree.style.visibility = "hidden";
                
              });
    
              rect.style.visibility = "hidden";
              textNodeTitle.style.visibility = "hidden";
              textNodeDescription.style.visibility = "hidden";
              textNodeDescriptionTwo.style.visibility = "hidden";
              textNodeTierOne.style.visibility = "hidden";
              textNodeTierTwo.style.visibility = "hidden";
              textNodeTierThree.style.visibility = "hidden";
              
            
    }
    
    
    
    document.getElementById('svgsection').appendChild(rect);
    document.getElementById('svgsection').appendChild(textNodeTitle);
    document.getElementById('svgsection').appendChild(textNodeDescription);
    document.getElementById('svgsection').appendChild(textNodeDescriptionTwo);
    document.getElementById('svgsection').appendChild(textNodeTierOne);
    document.getElementById('svgsection').appendChild(textNodeTierTwo);
    document.getElementById('svgsection').appendChild(textNodeTierThree);

    
}