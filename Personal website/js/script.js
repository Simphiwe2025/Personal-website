const panelButtons = document.querySelectorAll(".panel-button");
const panels = document.querySelectorAll(".panel");


panelButtons.forEach((button) => {

    button.addEventListener("click", () => {

        panels.forEach((panel) => {
            panel.classList.remove("open");
        });


        const targetId =
            button.getAttribute("data-target");

        const targetPanel =
            document.getElementById(targetId);


        targetPanel.classList.add("open");

    });

});