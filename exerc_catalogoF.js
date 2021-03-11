$(function(){
                
    let zip_code = $("#cep").val();
    let url = "https://rafaelescalfoni.github.io/desenv_web/filmes.json";
    $.get(url, function(filme)
    {
        preenche_filme(filme);
    });
    
    var classificacao_a =  function (numero)
    {
        let x;
        if(numero == 18)
        {
            x = "<img src='../images/18.png' style='width:20% height:20%; float:right;'>" ;
        }
        if(numero == 16)
        {
            x = "<img src='../images/16.png' style='width:20% height:20%; float:right;'>" ;
        }
        if(numero == 14)
        {
            x = "<img src='../images/14.png' style='width:20% height:20%; float:right;'>" ;
        }
        
        if(numero == 12)
        {
            x = "<img src='../images/12.png' style='width:20% height:20%; float:right;'>" ;
        }
        if(numero == 10)
        {
            x = "<img src='../images/10.png' style='width:20% height:20%; float:right;'>" ;
        }
        if(numero == 0)
        {
            x = "<img src='../images/livre.png' style='width:20% height:20%; float:right;'>" ;
        }
        return x;
    }
    
    var filme_parecido =  function (filme)
    {       
        var separa = filme.map(function(item)
        {
            let x;
            if(item == 1)
            {
                x = "<img src='https://rafaelescalfoni.github.io//desenv_web//img//betterCallSaul.jpg' style='width:30%;'";
            }
            if(item == 2)
            {
                x = "<img src='https://rafaelescalfoni.github.io//desenv_web//img//breakingBad.png' style='width:30%;'>";
            }
            if(item == 3)
            {
                x = "<img src='https://rafaelescalfoni.github.io//desenv_web//img//houseOfCards.png' style='width:30%;'>";
            }
            if(item == 4)
            {
                x = "<img src='https://rafaelescalfoni.github.io//desenv_web//img//narcos.png' style='width:30%;'>";
            }
            if(item == 5)
            {
                x = "<img src='https://rafaelescalfoni.github.io//desenv_web//img//carros.png' style='width:30%;'>";
            }
            if(item == 6)
            {
                x = "<img src='https://rafaelescalfoni.github.io//desenv_web//img//carros2.png' style='width:30%;'>";
            }
            if(item == 7)
            {
                x = "<img src='https://rafaelescalfoni.github.io//desenv_web//img//familyGuy.png' style='width:30%;'>";
            }
            if(item == 8)
            {
                x = "<img src='https://rafaelescalfoni.github.io//desenv_web//img//valente.png' style='width:30%;'>";
            }
            if(item == 9)
            {
                x = "<img src='https://rafaelescalfoni.github.io//desenv_web//img//friends.png' style='width:30%;'>";
            }
            if(item == 10)
            {
                x = "<img src='https://rafaelescalfoni.github.io//desenv_web//img//house.png' style='width:30%;'>";
            }
            if(item == 11)
            {
                x = "<img src='https://rafaelescalfoni.github.io//desenv_web//img//maosTalentosas.png' style='width:30%;'>";
            }
            if(item == 12)
            {
                x = "<img src='https://rafaelescalfoni.github.io//desenv_web//img//modernFamily.png' style='width:30%;'>";
            }
            if(item == 13)
            {
                x = "<img src='https://rafaelescalfoni.github.io//desenv_web//img//scarface.png' style='width:30%;'>";
            }
            if(item == 14)
            {
                x = "<img src='https://rafaelescalfoni.github.io//desenv_web//img//that70s.png' style='width:30%;'>";
            }
            if(item == 15)
            {
                x = "<img src='https://rafaelescalfoni.github.io//desenv_web//img//zumbilandia.png' style='width:30%;'>";
            }
            return x;
        })
        return separa;
    }


    var obj =  function (objeto)
    {
        var op = objeto.map(function(item)
        {
            let x;
            if(item.rating == 5)
            {
                x = "<p><img src='../images/Imagem1.png' style='width:30%;'> " + item.descricao ;
            }
            if(item.rating == 4)
            {
                x = "<p> <img src='../images/Imagem2.png' style='width:30%;'> " + item.descricao;
            }
            if(item.rating == 3)
            {
                x = "<p> <img src='../images/Imagem3.png' style='width:30%;'> " + item.descricao;
            }
            if(item.rating == 2)
            {
                x = "<p> <img src='../images/imagem1.png' style='width:50%;'></p><p> " + item.descricao + "</p>";
            }
            if(item.rating == 1)
            {
                x = "<p> <img src='../images/imagem1.png' style='width:50%;'></p><p> " + item.descricao + "</p>";
            }
            return x;
        })
        return op;
    }

    var preenche_filme = function(philme)
    {
        let filme = philme;
        let tam = filme.length;
        for(i=0;i<tam;i++) 
        {
            if(filme[i].id && filme[i].titulo && filme[i].resumo && filme[i].generos && filme[i].titulosSemelhantes && filme[i].elenco && filme[i].opinioes)
            {
                // let dive1 = $("<div>");
                $("#cs").append
                (
                    $("<div>").append
                    (
                        $("<h1>").text(filme[i].titulo).addClass("titulo"),
                        $("<p>").html(classificacao_a(filme[i].classificacao)).addClass("classificacao"),
                        $("<p>").html(filme[i].resumo).addClass("desc"),
                        $("<img>").attr("src" , filme[i].figura).addClass("image"),
                        $("<p>").html("<b>Elenco:</b> " + filme[i].elenco).addClass("elenco"),
                        $("<p>").html("<b>Gêneros: </b>" + filme[i].generos).addClass("genero"),
                        $("<p>").html("<b><br>Avaliações</b>").addClass("titulo"),
                        $("<p>").html(obj(filme[i].opinioes)).addClass("opniao"),
                        $("<p>").html("<b>Títulos semelhantes: <br></>").addClass("tit"),
                        $("<p>").html(filme_parecido(filme[i].titulosSemelhantes)).addClass("tit"),
                    ).addClass("col-md-6 col-sm-12 secao")
                );  
            }
        }        
    }

});
