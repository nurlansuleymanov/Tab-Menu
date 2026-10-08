const tabButtons = document.querySelectorAll(".tab-button");

const tabPanes = document.querySelectorAll(".tab-pane");


tabButtons.forEach(function(button) {

    button.addEventListener("click", function() {


        // remove active from buttons
        tabButtons.forEach(function(btn){
            btn.classList.remove("active");
        });


        // add active to clicked button
        button.classList.add("active");


        // get tab id
        const tabId = button.getAttribute("data-tab");


        // remove active from contents
        tabPanes.forEach(function(pane){
            pane.classList.remove("active");
        });


        // show selected content
        document.getElementById(tabId).classList.add("active");


    });

});