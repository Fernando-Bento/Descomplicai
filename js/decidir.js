const comidas = [
    "Porção de batata",
    "Macarrãozinhor",
    "Lasanha",
    "Miojo com Queijo",
    "Porção de Nugget's",
    "Batata recheada",
    "Pure de batata",
    "churros",
    "Bolo de chocolate",
    "Pipoca",
    "Strogonoff de frango",
    "XBacon",
    "Cachorro Quente",
    "Açai",
    "Pastel",
    "Salgadinho Frito de Padaria",
    "Porção de Tilápia",
    "Pizza",
    "Frango Arrepiado",
    "Brigadeiro com uva",
    "Bis e chocolates",
    "Sorvete",
]

const decidir = document.querySelector("#decidir")

const texto = document.querySelector("#texto")

const img = document.querySelector("#img")

function comidaAleatoria(){

    let comida = Math.floor(Math.random() * (comidas.length - 0)) + 0

    texto.innerHTML = `Um delicioso(a)  ${comidas[comida]}`

    if(comida == 0){

        img.setAttribute('src', 'https://storage.friato.com.br/images/2022/05/batata-frita-com-queijo-e-bacon-1652902212.jpg?width=1080&height=1080')

    }else if(comida == 1){

        img.setAttribute('src', 'https://receitafaceis.net/wp-content/uploads/2022/04/receita-de-macarrao-com-queijo.jpg')

    }else if(comida == 2){

        img.setAttribute('src', 'https://storage.friato.com.br/images/2020/08/lasanha-de-frango.jpg?width=1080&height=1080')

    }else if(comida == 3){

        img.setAttribute('src', 'https://experimentaissohome.files.wordpress.com/2022/04/2022423_18-55-31_1.jpg')

    }else if(comida == 4){

        img.setAttribute('src', 'https://eupreparo.com.br/wp-content/uploads/2020/04/Nuggets.jpg')

    }else if(comida == 5){

        img.setAttribute('src', 'https://assets.delirec.com/images%2FTpOZKCJvgOefuJqnaANnsVXQIJW2%2Frecipe%2F44ddc245-9461-474b-9aaa-57cb6b505763-BATATA-RECHEADA-gallery-0')

    }else if(comida == 6){

        img.setAttribute('src', 'https://riomarkennedyonline.com.br/riomarkennedyonline/2020/06/pure_de_batata_kina_do_feijao_verde_riomar_kennedy.jpg')

    }else if(comida == 7){

        img.setAttribute('src', 'https://1.bp.blogspot.com/-sPGrZ0KqAKI/YL0XJ0ZXu6I/AAAAAAAAD6I/kkEIvk0QCMYMi8p602RNflRBpS3eLwvKgCLcBGAsYHQ/s16000/receita-mini-churros.jpg')

    }else if(comida == 8){

        img.setAttribute('src', 'https://www.receitasagora.com.br/wp-content/uploads/2019/03/bolo-de-chocolate-vulcao.jpg')

    }else if(comida == 9){

        img.setAttribute('src', 'https://www.grupopq.com.br/wp-content/uploads/2021/06/Pipoca-Salgada-1.jpg')

    }else if(comida == 10){

        img.setAttribute('src', 'https://assets.delirec.com/images%2FnwOv8e9hpvRiePAHh8KG1goYpLF3%2Frecipe%2F8facf5e0-b0a8-44e0-8118-c2507048b3aa-Estrogonofe-de-frango--gallery-0')

    }else if(comida == 11){

        img.setAttribute('src', 'https://cdn.pigz.com.br/pigzapp/product/01FK6N6F2CSFZGZZ18DWR4QFWA.jpg')

    }else if(comida == 12){

        img.setAttribute('src', 'https://cdn.mensagenscomamor.com/content/images/m000507686.png?v=2&w=1080&h=1080')

    }else if(comida == 13){

        img.setAttribute('src', 'https://www.ufrgs.br/laranjanacolher/wp-content/uploads/2021/07/Boa-Noite.png')

    }else if(comida == 14){

        img.setAttribute('src', 'https://paroquiasantaclaradf.com.br/wp-content/uploads/2021/07/Design-sem-nome.png')

    }else if(comida == 15){

        img.setAttribute('src', 'https://padariadegustare.com.br/wp-content/uploads/2021/02/Design-sem-nome.png')

    }else if(comida == 16){

        img.setAttribute('src', 'https://vivendadocamarao.vtexassets.com/arquivos/ids/157932/CAMARAO-111-200--13-.png?v=637832375172400000')

    }else if(comida == 17){

        img.setAttribute('src', 'https://riomarkennedyonline.com.br/riomarkennedyonline/2022/02/tamanho_classico_30_cm_mattarello_riomar_kennedy.jpeg')

    }else if(comida == 18){

        img.setAttribute('src', 'https://t.imgac.net/receita/frango-arrepiado-5329_300x.jpg')

    }else if(comida == 19){

        img.setAttribute('src', 'https://www.mandiocaecaviar.com.br/wp/wp-content/uploads/2018/10/39887333_1082882118540382_7434753964660228096_n.jpg')

    }else if(comida == 20){

        img.setAttribute('src', 'https://promotop.net/wp-content/uploads/2022/10/caixa-chocolate-bis.jpg')

    }else if(comida == 21){

        img.setAttribute('src', 'https://www.receiteria.com.br/wp-content/uploads/sorvete-de-chocolate-branco-com-amora-1.jpg')

    }else{
        alert("Ocorreu um Erro!")
    }

}