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

// (
//     function showEstates(){
//         let estate = c('div.estates-content');
//         for(let i= 0 ; i<4;i++){
//             let estateModel = c('div#estate').cloneNode(true);
//             estateModel.classList.remove("model");
//             estateModel.querySelector("img").src = imoveis[i].img;
//             estateModel.querySelector(".type").textContent = imoveis[i].type;
//             if(!imoveis[i].furnished){
//                 estateModel.querySelector(".furnished").style.display ="none";
//             }
//             estateModel.querySelector(".furnished").textContent = "Mobiliado";
//             estateModel.querySelector(".state").textContent = imoveis[i].state + " - " + imoveis[i].city;
//             estateModel.querySelector(".estate-content .location").textContent = imoveis[i].location;
//             estateModel.querySelector(".estate-content .description").textContent = imoveis[i].description.substring(0, 100);
//             estateModel.querySelector("#qt-bed span").textContent = imoveis[i].bedrooms ;
//             estateModel.querySelector("#qt-bath span").textContent = imoveis[i].bathrooms ;
//             estateModel.querySelector("#qt-garage span").textContent = imoveis[i].parking ;
//             let valor = parseFloat(imoveis[i].value);
//             estateModel.querySelector(".price-amount").textContent += valor;
            


//             estate.append(estateModel);
            
//         }
//     }
// )();
(
    function showEstateTest(){
        let estate = c('div.estates-content');
        let randState = []
        for(let i=0 ; i < 4 ; i++ ){
            let rand = Math.floor(Math.random() * (imoveis.length));
            randState.push(imoveis[rand]);
        }
        randState.map((item)=>{
            let estateModel = c('div#estate').cloneNode(true);
            estateModel.classList.remove("model");
            estateModel.querySelector("img").src = item.img;
            estateModel.querySelector(".type").textContent = item.type;
            if(!item.furnished){
                estateModel.querySelector(".furnished").style.display ="none";
            }
            estateModel.querySelector(".furnished").textContent = "Mobiliado";
            estateModel.querySelector(".state").textContent = item.state + " - " + item.city;
            estateModel.querySelector(".estate-content .location").textContent = item.location;
            estateModel.querySelector(".estate-content .description").textContent = item.description.substring(0, 100);
            estateModel.querySelector("#qt-bed span").textContent = item.bedrooms ;
            estateModel.querySelector("#qt-bath span").textContent = item.bathrooms ;
            estateModel.querySelector("#qt-garage span").textContent = item.parking ;
            let valor = parseFloat(item.value);
            estateModel.querySelector(".price-amount").textContent += valor;
            


            estate.append(estateModel);
        })

    }
)();

(
    function showRents(){
        let rent = c('div.rent-content');
        aluguel.map((item)=>{
            let rentModel = c('div#rent').cloneNode(true);
            rentModel.classList.remove("model");
            rentModel.querySelector("img").src = item.img;
            rentModel.querySelector(".type").textContent = item.type;
            if(!item.furnished){
                rentModel.querySelector(".furnished").style.display ="none";
            }
            rentModel.querySelector(".rent .furnished").textContent = "Mobiliado";
            rentModel.querySelector(".rent .state").textContent = item.state + " - " + item.city;
            rentModel.querySelector(".rent-about .location").textContent = item.location;
            rentModel.querySelector(".rent-about .description").textContent = item.description.substring(0, 100);
            rentModel.querySelector("#qt-bed span").textContent = item.bedrooms ;
            rentModel.querySelector("#qt-bath span").textContent = item.bathrooms ;
            rentModel.querySelector("#qt-garage span").textContent = item.parking ;
            let valor = parseFloat(item.value);
            rentModel.querySelector(".price-amount").textContent += valor;
            


            rent.append(rentModel);
            
        })
    }
)();


(
    function selectBtn(){
        let btns = cs("label.btn");
        for(let i=0;i<btns.length;i++){
            btns[i].addEventListener("click", choseBtn);
        }
    }
)();
function choseBtn(e){
    c("label.selected").classList.remove("selected")
    
    e.target.classList.add("selected");
   
    
    
}
