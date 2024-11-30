    const menu = document.getElementById("Menu")
    const List_1 = document.getElementById("Lista_1")
    const List_2 = document.getElementById("Lista_2")
    const List_3 = document.getElementById("Lista_3")
    const Listas = document.querySelectorAll(".Listas")

    // Icones light e dark Mode
    const Darkmode = document.getElementById("icon_darkmode")
    const Ligthmode = document.getElementById("icon_lightmode")


    const arti = document.getElementsByClassName('Artigos')

    // Eventos para o Menu
    Listas[0].addEventListener("click", ListEvent1)
    
    Listas[1].addEventListener("click", ListEvent2)

    Listas[2].addEventListener("click", ListEvent3)


    // Função De click no Burguinho
    function Burguer_click(){

        if(menu.style.display == "block"){
            menu.style.display = "none"
        }else{
            menu.style.display = "block"
        }

    }

    function ListEvent1(){
        arti[0].classList.add('clicou')
        
        arti[1].classList.remove('clicou')
        arti[2].classList.remove('clicou')
    }

    function ListEvent2(){
        arti[1].classList.add('clicou')

        arti[0].classList.remove('clicou')
        arti[2].classList.remove('clicou')

    }

    function ListEvent3(){
        arti[2].classList.add('clicou')
    
        arti[0].classList.remove('clicou')
        arti[1].classList.remove('clicou')
    }



        // Alteração da cor de fundo para modo claro ou escuro
    const Light = document.getElementById('icon_lightmode')
    const Dark = document.getElementById('icon_darkmode')

    let burguer = document.querySelector('#icon')
    let h1 = document.querySelector('h1')
    let sect = document.querySelectorAll('section')
    let p = document.querySelectorAll('p')


        Light.addEventListener("click", Tema_claro)

        Dark.addEventListener('click', Tema_escuro)


    function Tema_claro(){
            document.body.style.backgroundColor = 'white'
        Light.style.display = "none"
        Dark.style.display = 'block'

        h1.classList.remove('Escuro')
        burguer.classList.remove('Escuro')
        menu.classList.remove('Escuro')
        sect.forEach(sect => sect.style.background = '#636363')
        p.forEach(p => p.style.color = "white")
        Listas.forEach(list => {list.style.border = '1px solid white'})
}

    function Tema_escuro(){
        
            document.body.style.border = 

            Dark.style.display = 'none'
            document.body.style.background = 'black'

            h1.classList.add('Escuro')
            burguer.classList.add('Escuro')
            menu.classList.add('Escuro')
            sect.forEach(sect => {sect.style.backgroundColor = "white"})
            p.forEach(p => {p.style.color = "black"})
            Listas.forEach(list => {list.style.border = '1px solid black'})

                Light.style.display = "block"

}
