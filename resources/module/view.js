const view = (function () {

    let domStrings = {
        inputIngredient: '#ingredient',
        inputQuantity: '#quantity',
        inputMeasurement: '#quantity_measurment',
        inputType: '#ingredient_type',
        buttonSubmit: '.submit_button',
        buttonEdit: '.btn_green',
        buttonDelete: '.btn_red',
        contentHolder: '.content_holder',
        coolerIngredients: '.cooler_ingredients',
        coolerItemName: '.cooler_item_name',
        coolerItemQuantity: '.cooler_item_quantity',
    }


    return {

        getDomStrings: function () {
            return domStrings;
        },
        getInput: function () {
            return {
                name: document.querySelector(domStrings.inputIngredient).value,
                quantity: document.querySelector(domStrings.inputQuantity).value,
                measurement: document.querySelector(domStrings.inputMeasurement).value,
                type: document.querySelector(domStrings.inputType).value,
            }
        },
        makeStorage:function(){
            const coolerType=['meat','fish','vegetable','dairy','dry']
            let html=``;
            let elem=domStrings.contentHolder;
            let flag=1;
            coolerType.forEach(elem => {
                html+=`<div class="cooler">
                <h2>${elem} cooler</h2>
                <div class="cooler_ingredients cooler_ingredients${flag}">
                
                </div></div>`
                flag++;
            })
            document.querySelector(elem).insertAdjacentHTML("afterbegin",html);
        },
        addItem:function(item,type){
            let elem=domStrings.coolerIngredients+type;
            let html=`
            <div class="cooler_items">
            <div class="cooler_item_info cooler_item_name">
                <p class="cooler_item">${item.name}</p>
            </div>
            <div class="cooler_item_info cooler_item_quantity">
                <p>${item.quantity}${item.measurement}</p>
            </div>
            <div class="cooler_item_info">
                <button class="btn_green"><img src="resources/images/pen-to-square-regular.svg" alt=""></button>
                <button class="btn_red"><img src="resources/images/circle-xmark-regular.svg" alt=""></button>
            </div>
            </div>
            `;
            document.querySelector(elem).insertAdjacentHTML("afterbegin",html);
        }

    }
})();

export default view;