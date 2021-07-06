// theme change implementation
const themeMap = {
    dark: "light",
    light: "solar",
    solar: "dark"
};
  
const theme = localStorage.getItem('theme') || (tmp = Object.keys(themeMap)[0],localStorage.setItem('theme', tmp),tmp);
const bodyClass = document.body.classList;
bodyClass.add(theme);
  
function toggleTheme() {
    const current = localStorage.getItem('theme');
    const next = themeMap[current];
   
    bodyClass.replace(current, next);
    localStorage.setItem('theme', next);
}
  
$("#themeButton").click(function(e){
    e.preventDefault();
    toggleTheme();
});


// Cursor 
jQuery(document).ready(function() {

    let cursor=document.getElementById('cursor');
          document.addEventListener('mousemove',function(e)
          {
              let x=e.pageX;
              let y=e.pageY;
              cursor.style.left=x+"px";
              cursor.style.top=y+"px";
          });
  
  });
  
  $('.animate').mouseover(function() {
    console.log(2);
    $('#cursor').css({
      "width": "100px",
      "height": "100px",
      "border": "2px dashed rgb(255, 94, 0)",
      "animation": "animate 5s linear infinite"
    }); 
  });
  $('.nav-link').mouseover(function() {
    $('#cursor').css({
      "display":"none",
      "width": "100px",
      "height": "100px",
      "border": "2px dashed rgb(255, 94, 0)",
      "animation": "animate 5s linear infinite"
    }); 
  });
  
  $('.nav-link').mouseleave(function() {
    $('#cursor').css({
      "display":"block",
      "position": "absolute",
      "width": "30px",
      "height": "30px",
      "border": "2px solid #000",
      "animation":"none",
      "box-sizing": "border-box",
      "transition": "0.1s",
      "transform": "translate(-50%,-50%)",
      "border-radius": "50%",
      "pointer-events": "none"
    }); 
  });
  $('.animate').mouseleave(function() {
    $('#cursor').css({
      "position": "absolute",
      "width": "30px",
      "height": "30px",
      "border": "2px solid #000",
      "animation":"none",
      "box-sizing": "border-box",
      "transition": "0.1s",
      "transform": "translate(-50%,-50%)",
      "border-radius": "50%",
      "pointer-events": "none"
    }); 
  });
  
  $('.project-content').mouseover(function() {
    $('#cursor').css({
      "display":"none"
    }); 
  });
  $('.project-content').mouseleave(function() {
    $('#cursor').css({
      "display":"block",
      "position": "absolute",
      "width": "30px",
      "height": "30px",
      "border": "2px solid #000",
      "animation":"none",
      "box-sizing": "border-box",
      "transition": "0.1s",
      "transform": "translate(-50%,-50%)",
      "border-radius": "50%",
      "pointer-events": "none",
      "cursor":"pointer"
    }); 
  });
