var dropdownMenu = document.getElementById('dropdownClasses');
var dropdownClassMenuRead;
const svg_embed = "http://www.w3.org/2000/svg";

var svgSection = document.getElementById('svgsection');
var dropdownPreviousValue;

var currentInputData;
var DataName;

var selectClass;

var svgCircles =[];


checkingSelectedClassDropdownMenu();
GenerateSvgCircles(warriorData, "warrior");
GenerateSvgCircles(mageData , "mage");
HideCircles();


// executes when class drop down menu is changed
dropdownMenu.addEventListener('click', function()
    {
      dropdownPreviousValue = dropdownMenu.value;
      checkingSelectedClassDropdownMenu();
    }
);

dropdownMenu.addEventListener('change', function()
    {
      checkingSelectedClassDropdownMenu();
      ChangeBackgroundImage();
      HideCircles();
    }
);


// FUNCTIONS

function checkingSelectedClassDropdownMenu()
{
  switch (dropdownMenu.value) 
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

  dropdownClassMenuRead = dropdownMenu.value;
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
 
  var selectWarrior = document.getElementsByClassName(dropdownMenu[0].value);
  var selectMage = document.getElementsByClassName(dropdownMenu[1].value);
  var selectRogue = document.getElementsByClassName(dropdownMenu[2].value);
  var selectPhasmalist = document.getElementsByClassName(dropdownMenu[3].value);
  var selectLycanthrope = document.getElementsByClassName(dropdownMenu[4].value);

  checkingSelectedClassDropdownMenu();

  //console.log(dropdownMenu[0].value.length);


  switch(dropdownMenu.value) {  
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



function GenerateSvgCircles(classDataset, classname)
{
    
    for(var i = 0; i < classDataset.length; i++)
    {
          svgCircles[i] = document.createElementNS(svg_embed, 'circle');
          const id = classDataset[i].ID; ;
          const memoryName = classDataset[i].name;
          const memoryDescription = classDataset[i].description;
          const memoryTierOne = classDataset[i].tierone;
          const memoryTierTwo = classDataset[i].tiertwo;
          const memoryTierThree = classDataset[i].tierthree;
          const memoryUnlockLevel = classDataset[i].unlocklevel;

          
          svgCircles[i].setAttribute('id', classname + '_' + classDataset[i].ID);
          svgCircles[i].setAttribute('class', classname);          
          svgCircles[i].setAttribute('cx', classDataset[i].coordx);
          svgCircles[i].setAttribute('cy', classDataset[i].coordy);
          svgCircles[i].setAttribute('r', 9);
          svgCircles[i].setAttribute('value', 0);
          
          

          document.getElementById('svgsection').appendChild(svgCircles[i]);

              // different colors for the circles and stroke, depending if it's active or not
              const circleFillColorWhenActive = 'rgb(77, 151, 214)';
              const circleStrokeColorWhenActive = 'rgb(148, 206, 255)';
              const circleStrokeColorWhenHighlighted = 'rgb(189, 224, 253)';
              const circleFillColorWhenInactive = 'darkgray';

            
              // event listeners for circles

              svgCircles[i].addEventListener("mouseenter", function () {

                // changes circle size and color + disables the border of the tooltipbox
                this.setAttribute('r', 11);
                this.style.stroke = circleStrokeColorWhenHighlighted;
                
                // changes the background color of the text in the tooltipbox and adds the text to the html
                const toolTipText = document.getElementById('toolTipText');
                  
                toolTipText.style.backgroundColor = 'rgb(187, 187, 187)';
                toolTipText.innerHTML = memoryName;

                if(this.style.fill == circleFillColorWhenActive)
                {
                  toolTipText.style.color = 'black';
                  this.style.strokeWidth = '3px';
                  
                  toolTipBox.style.border = 'solid black';
                  
                  this.style.fillOpacity = 0.5;
                }
                else
                {
                  toolTipText.style.color = 'rgb(83, 83, 83)';
                  toolTipBox.style.border = 'none';
                }

                  
                  

                  
                  // if the different elements have text then it will be added to the textbox
                  if(memoryDescription.length > 0)
                  {
                    toolTipText.innerHTML += "<br><br>" + memoryDescription;
                  }
                  if(memoryTierOne.length > 0)
                  {
                    toolTipText.innerHTML += "<br><br>" + memoryTierOne;
                  }
                  if(memoryTierTwo.length > 0)
                  {
                    toolTipText.innerHTML += "<br>" + memoryTierTwo;
                  }
                  if(memoryTierThree.length > 0)
                  {
                    toolTipText.innerHTML += "<br>" + memoryTierThree;
                  }

              })

              
              const toolTipBox = document.getElementById('toolTipBox');

              svgCircles[i].addEventListener("mouseleave", function () {

                // resets the size of the circle and reverts back the colors or keeps the colors
                this.setAttribute('r', 9);
                
                if(this.style.fill == circleFillColorWhenActive)
                {
                  
                  this.style.strokeWidth = '3px';
                  this.style.stroke = circleStrokeColorWhenActive;

                  this.style.fill = circleFillColorWhenActive;
                  this.style.fillOpacity = 0.5;

                }
                else
                {
                  this.style.stroke = 'darkgray';  
                  
                }
               

              })


              svgCircles[i].addEventListener("mousedown", function() {
                
                console.log(this);
                const currentCircle = this;
                const currentUnlockLevel = "";

                unlockMemory(memoryUnlockLevel, currentCircle, currentUnlockLevel, id);
                
                // resets the size of the circle and reverts back the colors or keeps the colors
                /*
                if(this.value == 1)
                {
                  
                  this.style.strokeWidth = '3px';
                  this.style.stroke = circleStrokeColorWhenActive;

                  this.style.fill = circleFillColorWhenActive;
                  this.style.fillOpacity = 0.5;

                  
                  toolTipText.style.color = 'black';
                  toolTipBox.style.border = 'solid black';
                }
                else
                {
                  toolTipText.style.color = 'rgb(83, 83, 83)';
                } 
*/
                
                if(this.style.fill = circleFillColorWhenInactive)
                {
                  
                  this.style.strokeWidth = '3px';
                  this.style.stroke = circleStrokeColorWhenActive;

                  this.style.fill = circleFillColorWhenActive;
                  this.style.fillOpacity = 0.5;

                  
                  toolTipText.style.color = 'black';
                  toolTipBox.style.border = 'solid black';
                }
                else
                {
                  toolTipText.style.color = 'rgb(83, 83, 83)';
                }
                
                
                


                
               
              })




              function unlockMemory(circleUnlockLevel, circle, currentUnlocklvl, circleID)
              {
                
                //console.log(circle.id);
                console.log("circle unlock lvl: " + circleUnlockLevel);    
                console.log("current unlock lvl:" + currentUnlocklvl);
                console.log(circleID);


                const circleUnlockLevelOnlyText = circleUnlockLevel.substring(0, circleUnlockLevel.length -1);
                      const circleUnlockLevelOnlyNumber = circleUnlockLevel.substring(7, circleUnlockLevel.length);
                      const convertToNumber = Number(circleUnlockLevelOnlyNumber);

                if(circleUnlockLevel == "")
                    {
                      currentUnlocklvl  = "warrior_0";
                    }
                
                    else if(circleUnlockLevel == "warrior_0")
                    {
                      currentUnlocklvl  = "vandale_0";
                    }
                    else 
                    {
                      

                      const updateString = convertToNumber +1;
                      

                      currentUnlocklvl = circleUnlockLevelOnlyText + updateString;
                      console.log("updated unlock:" + currentUnlocklvl);
                        
                    }
                    console.log("current unlock lvl:" + currentUnlocklvl);
                // the unlock itself
                let  requiredUnlockMinusOne = convertToNumber + 1;
                let  requiredCombine = circleUnlockLevelOnlyText + requiredUnlockMinusOne;
                console.log(requiredCombine);
                
                if(currentUnlocklvl == requiredCombine)
                  {
                    circle.setAttribute('value', 1);
                  }
                  console.log("current unlock lvl:" + currentUnlocklvl);
                  
                  
                  
                }
    
     
  }
}



