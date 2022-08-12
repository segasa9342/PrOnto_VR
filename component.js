AFRAME.registerComponent('showbutton', {
  schema: {
    'target': {type: 'selector'},
  },
  init: function () {
    var show=false;
    this.el.addEventListener("click",()=>{
    var origin=this.el.components.showbutton.attrValue.target;
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
    request.open("GET", "assets/privacy_policy.xml", false);
    request.send();
    var xml = request.responseXML;
    if (slideID.includes("para")) {
        var paragraphs = xml.getElementsByTagName("paragraph");
        const paragraph = Array.from(paragraphs).filter(paragraph => paragraph.innerHTML.indexOf(slideID) !== -1);
        return paragraph[0];
    }
    if (slideID.includes("chp")) {
        var chapters = xml.getElementsByTagName("chapter");
        const chapter = Array.from(chapters).filter(chapter => chapter.innerHTML.indexOf(slideID) !== -1);
        return chapter[0];
    }
    else {
        var meta = xml.getElementsByTagName("meta");
        return meta[0]
        };
};
function AknLink_log() {
    var AKNText = AknLink()
    var height = AKNText.innerHTML.split(/\r\n|\r|\n/).length * 0.37
    var show_akn=false;
    let akn_text = document.querySelector("#aknPlane")
    if(show_akn){
        akn_text.setAttribute("visible","false");
      }else{
        akn_text.setAttribute("height",height)
        akn_text.setAttribute("text", "align: left; width: 2; value:"+AKNText.innerHTML);
        akn_text.setAttribute("visible","true");
      }
      show_akn=!show_akn;
};

function boxesdisappear() {
document.querySelector('#aknPlane').setAttribute("visible","false");
document.querySelectorAll('a-box').forEach( x=> x.setAttribute("visible","false"));
document.querySelector('#aknPlane').setAttribute("visible","false");
};
function showIcon(imageURL){
Array.from(document.getElementsByClassName('metaLinkDiv')).forEach(container => container.style.display = 'none');
document.getElementById(imageURL).style.display = "inline";
}

function multifunction(value) {
    boxesdisappear();
    showIcon(value)
}
