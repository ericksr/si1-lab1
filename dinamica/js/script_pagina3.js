/**
 * Created by Erick on 24/10/2014.
 */

$(document).ready(function() {

    $("#okbtn").click(function() {
        var item = $(".inputTema").val();
        if(item == "") return;

        item = "<div class='list-group-item' align='center'>" + item + "</div>";

        $("#menuAprender").append(item);
        alert('Assunto adicionado com sucesso');

    });

    $("#moverbtn").click(function() {
        var assunto = prompt('digite o assunto que deseja mover para a lista de assuntos que já aprendeu!');
        if(assunto == "") return;

        var item = $('#menuAprender .list-group-item').filter(function(i, el) {
            return $(el).text() === assunto;
        });

        $("#menuAprendido").append(item);
    });

    $("#removerbtn").click(function() {

        confirm("Atenção, o botão 'remover' vale para ambos os menus.");
        var assunto = prompt('digite o assunto que deseja remover da lista de assuntos que deseja aprender!');
        if(assunto == "") return;

        var item = $('#menuAprender .list-group-item').filter(function(i, el) {
            return $(el).text() === assunto;
        });
        var item2 = $('#menuAprendido .list-group-item').filter(function(i, el) {
            return $(el).text() === assunto;
        });

        $(item).remove();
        $(item2).remove();


    });

});