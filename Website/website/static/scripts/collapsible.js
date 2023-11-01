var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("collapsible-active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            content.style.paddingTop = "0px";
        } else {
            content.style.maxHeight = (content.scrollHeight + 18) + "px";
            content.style.paddingTop = "18px";
        }
    });
}