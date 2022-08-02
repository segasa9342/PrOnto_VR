AFRAME.registerComponent('showbutton', {
  schema: {
    'target': {type: 'selector'},
  },
  init: function () {
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
function AknLink() {
    var fullUrl = window.location.href
    var slideID = fullUrl.split('#').pop();
    var slideID = slideID.replace("_", "__para_");
    var slideID = slideID.replace("slide", "chp_");
    var request = new XMLHttpRequest();
    request.open("GET", "../privacy_policy.xml", false);
    request.send();
    var xml = request.responseXML;
    if (slideID.includes("para")) {
        var paragraphs = xml.getElementsByTagName("paragraph");
        const paragraph = Array.from(paragraphs).filter(paragraph => paragraph.innerHTML.indexOf(slideID) !== -1);
        return paragraph[0];
    } else {
        var chapters = xml.getElementsByTagName("chapter");
        const chapter = Array.from(chapters).filter(chapter => chapter.innerHTML.indexOf(slideID) !== -1);
        return chapter[0];
    };
};
AFRAME.registerComponent("aknlink_log_component", {
    init: function() {
      aknSnippet = AknLink()
      var show=false;
        this.el.addEventListener("click", (e) => {
        // create an <a-entity>
            var txt = document.createElement('a-entity')
            // use the mixin
            txt.setAttribute("mixin", "text")
            txt.setAttribute("visible", "true")
            // set the text value
            txt.setAttribute("text", "value", aknSnippet.innerHTML)
            txt.setAttribute("position","2  2 -2")
            this.el.appendChild(txt)
            })
      }
    });

function AknLink_log() {
    console.log(AknLink())
}

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
