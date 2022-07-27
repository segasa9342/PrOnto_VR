AFRAME.registerComponent('showbutton', {
  schema: {
    'target': {type: 'selector'},
  },
  init: function () {
    console.log("registered");
    var show=false;
    var box = document.querySelector('a-box')
    this.el.addEventListener("click",()=>{
      if(show){
        var sceneEl = document.querySelector('a-scene');  // Or this.el since we're in a component.
        sceneEl.querySelector('a-box').setAttribute('visible','false');
      }else{
        var sceneEl = document.querySelector('a-scene');  // Or this.el since we're in a component.
        sceneEl.querySelector('a-box').emit("startanim")
        sceneEl.querySelector('a-box').setAttribute('visible','true');
      }
      show=!show;
    });
  }
})
AFRAME.registerComponent("plane_component", {
init: function() {
  var show=false;
  this.el.addEventListener("click", (e) => {
    let plane = document.querySelector("#infoPlane")
    if(show){
        plane.setAttribute("visible","false");
      }else{
        plane.setAttribute("visible","true");
      }
      show=!show;
  })
}
});
function boxesdisappear() {
document.querySelectorAll('a-box').forEach( x=> x.setAttribute("visible","false"));
document.querySelector('#infoPlane').setAttribute("visible","false");
};