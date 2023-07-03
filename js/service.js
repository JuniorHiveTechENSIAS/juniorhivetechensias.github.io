function filterSelection(tag) {
    // select all service cards
    var x = document.getElementsByClassName("service-card");

    //if tag is all, show all service cards
    if (tag == "All") {
        for (var i = 0; i < x.length; i++) {
            x[i].parentElement.style.display = "block";
        }
        return;
    }
    // loop through all service cards and get tag elements
    for (var i = 0; i < x.length; i++) {
        var tags = x[i].getElementsByClassName("tag");
        var found = false;
        // loop through all tags of the current service card
        for (var j = 0; j < tags.length; j++) {
            // if the tag is the same as the filter tag, show the service card
            if (tags[j].innerHTML == tag) {
                found = true;
                break;
            }
        }
        // if the tag is not the same as the filter tag, hide the service card
        if (!found) {
            x[i].parentElement.style.display = "none";
        } else {
            x[i].parentElement.style.display = "block";
        }
    }
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("selectors");
var btns = btnContainer.getElementsByClassName("btn-filter");
for (var i = 0; i < btns.length; i++) {
btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].classList.remove("active");
    this.classList.add("active");
});
}  

window.addEventListener('load', () => {
    const queryString = window.location.search;
    //window.location.search = '';
    const urlParams = new URLSearchParams(queryString);
    const tag = urlParams.get('tag');
    if (tag) {
        filterSelection(tag);
    }
});