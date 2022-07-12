function clicked(){
    var tgt;
    tgt = document.getElementById(this.id);
    if (tgt.className == 'sidemenu__item-active'){
        tgt = tgt.id + "_content";
        document.getElementById(this.id).classList.remove('sidemenu__item-active')
        document.getElementById(this.id).classList.add('sidemenu__item')
        $("#" + tgt).hide("slow");
    } else {
        tgt = tgt.id + "_content";
        document.getElementById(this.id).classList.remove('sidemenu__item')
        document.getElementById(this.id).classList.add('sidemenu__item-active')
        $("#" + tgt).show("slow");
    }
}