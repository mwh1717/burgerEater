

$(function () {
    $(".change-devoured").on("click", function (event) {
        var id = $(this).data("id");
        var newDev = $(this).data("newdevoured");

        var newDevState = {
            devoured: newDev
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevState
        })
            .then(
                function () {
                    console.log("changed devour to", newDev);
                    location.reload();
                }
            );
    });


    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurg = {
            burger_name: $("#burgerNameYum").val().trim(),
            devoured: false
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurg
        })
        .then(function () {
                console.log("new burger on the grill, mate!");
                location.reload();
        }
        );
    });
});