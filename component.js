AFRAME.registerComponent('showbutton', {
  schema: {
    'target': {type: 'selector'},
  },
  init: function () {
    console.log("registered");
    var show=false;
    this.el.addEventListener("click",()=>{
    var origin=this.el.components.showbutton.attrValue.target;
    console.log(origin)
      if(show){
        var sceneEl = document.querySelector('a-scene');  // Or this.el since we're in a component.
        sceneEl.querySelector('a-box').setAttribute('visible','false');
      }else{
        var sceneEl = document.querySelector('a-scene');  // Or this.el since we're in a component.
        sceneEl.querySelector('a-box').setAttribute('visible','false');
        sceneEl.querySelector('a-box').setAttribute('src','assets/' + origin +'.png');
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
function showIcon(imageURL){
Array.from(document.getElementsByClassName('metaLinkDiv')).forEach(container => container.style.display = 'none');
document.getElementById(imageURL).style.display = "inline";
}

function multifunction(value) {
    boxesdisappear();
    showIcon(value)
}
