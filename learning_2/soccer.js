/**
 * Created by denis on 02.10.2015.
 */

document.onmousedown = function (e){
    var target = e.target;
    if (!target.classList.contains('draggable'))return;

    var coords = getCoords(target);
    var shiftX = e.pageX - coords.left;
    var shiftY = e.pageY - coords.top;
    target.style.position = 'absolute';
    document.body.appendChild(target);
    moveTo(e);

    function moveTo (e){
        var left = e.pageX - shiftX;
        var top = e.pageY - shiftY;
        var width =  document.documentElement.clientWidth;
        var height = document.documentElement.clientHeight;

        if (left < 0) left = 0;
        if (left > width - target.clientWidth) left = width - target.clientWidth;

        if (top < 0) top = 0;
        if (top > height + target.clientWidth ){
            window.scrollTo(0,top+target.clientWidth)
        }
        target.style.left = left + 'px';
        target.style.top = top + 'px'  ;
    }

    document.onmousemove  = function (e){
        moveTo(e);
    };
    document.onmouseup = function (){
        document.onmousemove = document.onmouseup = null;
    };
    target.ondragstart = function (){
        return false;
    };

    return false;
};




function getCoords(elem) { // кроме IE8-
    var box = elem.getBoundingClientRect();

    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };

}