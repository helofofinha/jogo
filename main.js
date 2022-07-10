let btnSobre = document.getElementById("btnSobre");
        btnSobre.addEventListener('click', function(){
            let pag1 = document.getElementById("pagina1");
            let pagSobre = document.getElementById("sobre");
            pag1.style.display = "none";
            pagSobre.style.display = "flex";
        });


let btnNovo = document.getElementById("btnNovo");
        btnNovo.addEventListener('click', function(){
            let pag1 = document.getElementById("pagina1");
            let pagNovo = document.getElementById("novo");
            pag1.style.display = "none";
            pagNovo.style.display = "flex";
        });

let btnAcordando1 = document.getElementById('btnAcordando1')
        btnAcordando1.addEventListener('click', function(){
            let pagNovo = document.getElementById("novo");
            let pagAcordando1 = document.getElementById("acordando1");
            pagNovo.style.display = "none";
            pagAcordando1.style.display = "flex";
            
        })

let btnRelogio635 = document.getElementById('btnRelogio635')
        btnRelogio635.addEventListener('click', function(){
        let pagAcordando1 = document.getElementById("acordando1");
        let pagAcordando2 = document.getElementById("acordando2");
        pagAcordando1.style.display = "none";
        pagAcordando2.style.display = "flex";

})

let btnAcordando2 = document.getElementById("btnAcordando2")
        btnAcordando2.addEventListener('click', function(){
        let pagAcordando2 = document.getElementById("acordando2");
        let pagAcordando3 = document.getElementById("acordando3");
        pagAcordando2.style.display = "none";
        pagAcordando3.style.display = "flex";
    
})