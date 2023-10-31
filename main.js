$(document).ready(function () {
    // Adicionar tarefa ao formulário
    $("#task-form").submit(function (event) {
        event.preventDefault();
        var taskName = $("#new-task").val();
        if (taskName) {
            $("#task-list").append("<li>" + taskName + "</li>");
            $("#new-task").val("");
        }
    });

    // Marcar ou desmarcar uma tarefa como concluída
    $("#task-list").on("click", "li", function () {
        $(this).toggleClass("completed");
    });
});