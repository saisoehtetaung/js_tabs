var gettablinks = document.getElementsByClassName("tablinks"); //HTML collection
var gettabpanes = document.getElementsByClassName("tab-pane");
var getbtncloses = document.querySelectorAll('.btn-close'); //Node List

var tabpanes = Array.from(gettabpanes);

function gettab(event, linkid) {
    // for (var x = 0; x < gettabpanes.length; x++){
    //     gettabpanes[x].style.display = "none";
    // }
    
    tabpanes.forEach(function (tabpane) {
        tabpane.style.display = "none";
    });

    document.getElementById(linkid).style.display = "block";

    for (var x = 0; x < gettablinks.length; x++){
        gettablinks[x].className = gettablinks[x].className.replace(" active", "");

        getbtncloses[x].addEventListener('click', function () {
            this.parentElement.style.display = 'none';
        });
    }

    // event.target.className += " active";
    // event.target.className = event.target.className.replace("tablinks", "tablinks active");
    // event.target.classList.add('active');

    // console.log(event.currentTarget);
    event.currentTarget.className += " active";

}

document.getElementById('autoclick').click();

