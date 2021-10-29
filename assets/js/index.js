let c = (c)=>document.querySelector(c);
let cs = (cs)=> document.querySelectorAll(cs);



// function insertFocusCity(){
//     c(".inputCity").addEventListener("click",()=>{
//         c('select#selectCity').focus();
//     } )
// }
// function insertFocusTipo(){
//     let selectType = c('select#selectType');

// }

// (
//     function selectCidade(){
//     let selectCity = c('datalist#city');
//     cidade.forEach((item)=>{
//         let optionModel = c('datalist#city option');
//         optionModel.value = item.value;
//         optionModel.textContent = item.name + " - " + item.state;
//         optionModel.style.fontSize = "16px";
//         optionModel.style.padding = "15px";
//         selectCity.append(optionModel);
//     })

// })();
// (
//     function selectTipo(){
//         let selectType = c('select#selectType');
//         tipo.forEach((item)=>{
//             let optionModel = document.querySelector('option#model');
          
//             optionModel.value = item.value;
//             optionModel.textContent = item.tipo;
//             optionModel.style.fontSize = "16px";
//             optionModel.style.padding = "15px";
//             selectType.append(optionModel);
//         })
//     }
    
// )();

(
    function showEstates(){
        let estate = c('div.estates--content');
        imoveis.map((item)=>{
            let estateModel = c('div#estate').cloneNode(true);
            estateModel.classList.remove("model");
            estateModel.querySelector("img").src = item.img;
            estateModel.querySelector(".tipo").textContent = item.tipo;
            if(!item.mobiliado){
                estateModel.querySelector(".mobiliado").style.display ="none";
            }
            estateModel.querySelector(".mobiliado").textContent = "Mobiliado";
            estateModel.querySelector(".estado").textContent = item.estado + " - " + item.cidade;
            estateModel.querySelector(".estate-content .localidade").textContent = item.localidade;
            estateModel.querySelector(".estate-content .descricao").textContent = item.descricao.substring(0, 100);
            estateModel.querySelector("#qtBed span").textContent = item.quartos ;
            estateModel.querySelector("#qtBath span").textContent = item.banheiros ;
            estateModel.querySelector("#qtGarage span").textContent = item.vagasGaragem ;
            let valor = parseFloat(item.valor);
            estateModel.querySelector(".priceAmount").textContent += valor;
            


            estate.append(estateModel);
            
        })
    }
)();

(
    function showRents(){
        let rent = c('div.rent--content');
        console.log(rent)
        aluguel.map((item)=>{
            let rentModel = c('div#rent').cloneNode(true);
            rentModel.classList.remove("model");
            rentModel.querySelector("img").src = item.img;
            rentModel.querySelector(".tipo").textContent = item.tipo;
            if(!item.mobiliado){
                rentModel.querySelector(".mobiliado").style.display ="none";
            }
            rentModel.querySelector(".rent .mobiliado").textContent = "Mobiliado";
            rentModel.querySelector(".rent .estado").textContent = item.estado + " - " + item.cidade;
            rentModel.querySelector(".rent-content .localidade").textContent = item.localidade;
            rentModel.querySelector(".rent-content .descricao").textContent = item.descricao.substring(0, 100);
            rentModel.querySelector("#qtBed span").textContent = item.quartos ;
            rentModel.querySelector("#qtBath span").textContent = item.banheiros ;
            rentModel.querySelector("#qtGarage span").textContent = item.vagasGaragem ;
            let valor = parseFloat(item.valor);
            rentModel.querySelector(".priceAmount").textContent += valor;
            


            rent.append(rentModel);
            
        })
    }
)()
