(function(){
  var root=document.documentElement, btn=document.getElementById("theme"), saved=null;
  try{saved=localStorage.getItem("theme");}catch(e){}
  var dark = saved ? saved==="dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
  function apply(d){
    root.setAttribute("data-theme", d?"dark":"light");
    btn.setAttribute("aria-label", d?"Switch to light mode":"Switch to dark mode");
  }
  apply(dark);
  btn.addEventListener("click",function(){
    dark=!dark; apply(dark);
    try{localStorage.setItem("theme",dark?"dark":"light");}catch(e){}
  });
})();
