var table = document.getElementById('bagua-table');

document.onclick = function (e){
    var target = e.target;

    if (!table.contains(target))return;

    while (target != table){
        if (target.tagName == "TD") break;
        target = target.parentNode;
    }
    if (target == table) return;

    edit(target);
};


function edit (target){


    var okButton = document.createElement('button');
    okButton.value = 'OK';

    var cancelButton = document.createElement('button');
    cancelButton.value = 'Cancel';

    var textArea = document.createElement('textarea');
    textArea.value = target.innerHTML;

    target.innerHTML = "";
    target.classList.toggle('edit-td');

    target.appendChild(textArea);
    var tdHeight = target.clientHeight;
    var tdWidth = target.clientWidth;

    textArea.style.width = tdWidth + 'px';
    textArea.style.height = tdHeight + 'px';

}