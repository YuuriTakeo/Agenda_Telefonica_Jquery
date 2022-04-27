$(document).ready(function () {
  $(".tabs").tabs();
  let codigo = 1;


  // <<<<<< ADICIONANDO DADOS NA LISTA >>>>


  $("#btn-add").click(function () {

    if (!checarTelefone($('#addTelefone').val())) {
      $("#addTelefone").addClass("red");

    } else {
      $("#addTelefone").removeClass("red");
      nome = $("#addNome").val();
      telefone = $("#addTelefone").val();
      conteudo = `<tr>
                      <td>${codigo}</td>
                      <td>${nome}</td>
                      <td>${telefone}</td>
                      <td><a href="#"><i class="material-icons">edit</i></a></td>
                      <td><a href="#"><i class="material-icons">delete_forever</i></a></td>
                  </tr>`;
      $("#lista").append(conteudo);
      $("#addNome, #addTelefone").val("");
      codigo++;
    }



  });


  // <<<<<<< ATUALIZAR AO SELECIONAR O ICONE EDIT  >>>>>


  $("#lista").on("click", "i:contains('edit')", function () {
    $('#upId').val($(this).parent().parent().parent().find('td:eq(0)').text());
    $('#upNome').val($(this).parent().parent().parent().find('td:eq(1)').text());
    $('#upTelefone').val($(this).parent().parent().parent().find('td:eq(2)').text());
    $('.tabs').tabs('select', 'up');
  });


  // <<<<<<<  ATUALIZAR SEGUNDA PARTE -- APERTAR O BOTÃO ATUALIZAR E REALIZAR A TROCA >>>>>>>>


  $('#btn-up').click(function () {
    if (!checarTelefone($('#upTelefone').val())) {
      $('#upTelefone').addClass('red');
    } else {
      $('#upTelefone').removeClass('red');
      $("#lista tr").each(function () {
        let id = $(this).find('td:eq(0)').text();
        if (id == $('#upId').val()) {
          $(this).find('td:nth-child(2)').text($('#upNome').val());
          $(this).find('td:nth-child(3)').text($('#upTelefone').val());
          $("#upNome, #upTelefone").val("");
          $('.tabs').tabs('select', 'add');
        };
        

      });
    };
  });

  // <<<<<<< REMOVENDO OS ITENS ADICIONADOS >>>>>>>

  $("#lista").on("click", "i:contains('delete_forever')", function () {
    $(this).closest("tr").remove();
  });



  // <<<<<<<<<<< PROCURAR UM REGISTRO >>>>>>>>>>>>>>>>>

  $('#btn-find').click(function () {
    $("#lista tr").hide();
    $("#lista tr").each(function () {
      let nome = $(this).find('td:eq(1)').text();
      if (nome == $('#findNome').val()) {
        $(this).show();
      }
    });

  });

  //<<<<<<<<< MOSTRAR OS DADOS >>>>>>>>>>>>>>

  $('#btn-show-all').click(function () {
    $("#lista tr").show();
    $('#findNome').val("");
  })

    // <<<<<<<<< CORREÇÃO DE BUGS >>>>>>>>>>>

  $("li:contains('Adicionar')").on("click", function()
  {
    $("#lista tr").show();
  });
  $("li:contains('Atualizar')").on("click", function()
  {
    $("#lista tr").show();
  });



});
