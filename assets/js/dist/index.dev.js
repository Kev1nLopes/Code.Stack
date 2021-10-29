"use strict";

var c = function c(_c) {
  return document.querySelector(_c);
};

var cs = function cs(_cs) {
  return document.querySelectorAll(_cs);
}; // function insertFocusCity(){
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


(function showEstates() {
  var estate = c('div.estates--content');
  imoveis.map(function (item) {
    var estateModel = c('div#estate').cloneNode(true);
    estateModel.classList.remove("model");
    estateModel.querySelector("img").src = item.img;
    estateModel.querySelector(".tipo").textContent = item.tipo;

    if (!item.mobiliado) {
      estateModel.querySelector(".mobiliado").style.display = "none";
    }

    estateModel.querySelector(".mobiliado").textContent = "Mobiliado";
    estateModel.querySelector(".estado").textContent = item.estado + " - " + item.cidade;
    estateModel.querySelector(".estate-content .localidade").textContent = item.localidade;
    estateModel.querySelector(".estate-content .descricao").textContent = item.descricao.substring(0, 100); // estateModel.querySelector(".obs-estate-content .qtBed").textContent = item.quartos;
    // estateModel.querySelector(".obs-estate-content .qtBath").textContent = item.banheiros;
    // estateModel.querySelector(".obs-estate-content .qtGarage").textContent = item.vagasGaragem;

    estate.append(estateModel);
  });
})();