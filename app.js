let joueur = document.querySelector("form");
joueur.addEventListener("submit", (event) => {
    event.preventDefault();
    let wrapperUl = document.querySelector(".wrapperJoueur ul");
    let li = document.createElement("li");
    li.textContent = document.querySelector(".Joueur").value;
    wrapperUl.appendChild(li)
});

let btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {

    document.querySelector(".wrapperJoueur").style.display = "none";
    let section = document.querySelector(".wrapperPartie");
    section.style.display = "block";

    let listeJoueur = document.querySelectorAll(".wrapperJoueur ul li");
    for(let i = 1; i < listeJoueur.length; i++) {

        let li = document.createElement("div");
        let div = document.createElement("div");
        div.className = "divNom";
        li.className = listeJoueur[i].textContent;
        li.textContent = 0;
        let nom = document.createElement("p");
        nom.textContent = listeJoueur[i].textContent;
        div.appendChild(nom);
        div.appendChild(li);
        section.appendChild(div)

        let form = document.querySelector(".wrapperPartie form");

        let input = document.createElement("input");
        input.type = "checkbox";
        input.name = "joueur";
        input.id = listeJoueur[i].textContent;

        let label = document.createElement("label");
        label.textContent = listeJoueur[i].textContent;
        label.htmlFor = listeJoueur[i].textContent;


        form.appendChild(input);
        form.appendChild(label);

        if(i == listeJoueur.length - 1) {

            let texte = document.createElement('input');
            texte.type = 'text';
            texte.name = 'texte';
            texte.id = 'texte';
            texte.required = true;

            let btn = document.createElement("button");
            btn.textContent = "Valider";
            btn.className = "btnScore";

            form.addEventListener("submit", (event) => {

                event.preventDefault();
                let gagnerDe = document.querySelector("#texte").value;
                document.querySelector("#texte").value = "";


                let listeRadio = document.querySelectorAll(".partie");
                let point;
                listeRadio.forEach((elem) => {
                    if(elem.checked){
                        
                        switch (elem.id){
                            case "petite":
                                point = 10;
                                break;
                            case "pousse":
                                point = 20;
                                break;
                            case "garde":
                                point =50;
                                break;
                            case "gardesans":
                                point = 100;
                                break;
                            case "gardecontre":
                                point = 150;
                                break;
                        }
                        console.log(point);
                    }
                })
                let gagnant = [];
                let perdant = [];
                for(let i = 1; i < listeJoueur.length; i++) {
                    let joueur = document.querySelector("#"+ listeJoueur[i].textContent);
                    let joueurScore = document.querySelector('.divNom .'+ listeJoueur[i].textContent )
                    if(joueur.checked){
                        gagnant.push(joueurScore);
                    }
                    else{
                        perdant.push(joueurScore);
                    }
                }

                let nbJoueur = gagnant.length + perdant.length;
                let total = parseInt(gagnerDe)+parseInt(point);
                console.log(total);
                console.log(gagnant);
                gagnant.forEach( (joueur) => {
                    joueur.textContent = parseInt(joueur.textContent) + total * (nbJoueur-1);
                })
                perdant.forEach( (joueur) => {
                    joueur.textContent = parseInt(joueur.textContent) - total;
                })
                
                console.log(listeJoueur);
            });


            form.appendChild(document.createElement("br"));
            form.appendChild(texte);
            form.appendChild(btn);
        }
    }

});