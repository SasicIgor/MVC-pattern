const view = (function () {

    let domStrings = {
        inputIngredient: '#ingredient',
        inputQuantity: '#quantity',
        inputMeasurment: '#quantity_meaasurment',
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
                measurement: document.querySelector(domStrings.inputMeasurment).value,
                type: document.querySelector(domStrings.inputType).value,
            }
        },
        

    }
})();