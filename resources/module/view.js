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
        makeStorage: function () {
            const coolerType = ['meat', 'fish', 'vegetable', 'dairy', 'dry']
            let html = ``;
            let elem = domStrings.contentHolder;
            let flag = 1;
            coolerType.forEach(elem => {
                html += `<div class="cooler">
                <h2>${elem} cooler</h2>
                <div class="cooler_ingredients cooler_ingredients${flag}">
                
                </div></div>`
                flag++;
            })
            document.querySelector(elem).insertAdjacentHTML("afterbegin", html);
        },
        addItem: function (newItem) {
            let elem = domStrings.coolerIngredients + newItem.type;
            let html = `
            <div class="cooler_items" id="id${newItem.type}${newItem.id}">
            <div class="cooler_item_info cooler_item_name">
                <p class="cooler_item">${newItem.name}</p>
            </div>
            <div class="cooler_item_info cooler_item_quantity">
                <p>${newItem.quantity}${newItem.measurement}</p>
            </div>
            <div class="cooler_item_info">
                <button class="btn_green" data-id='${newItem.type}${newItem.id}'><img src="resources/images/pen-to-square-regular.svg" alt=""></button>
                <button class="btn_red" data-id='${newItem.type}${newItem.id}'>X</button>
            </div>
            </div>
            `;
            document.querySelector(elem).insertAdjacentHTML("afterbegin", html);

        },
        resetInput: function () {
            return {
                name: document.querySelector(domStrings.inputIngredient).value = '',
                quantity: document.querySelector(domStrings.inputQuantity).value = '',
                measurement: document.querySelector(domStrings.inputMeasurement).value = '',
                type: document.querySelector(domStrings.inputType).value = '',
            }
        },
        delItem: function (e) {
            let id = e.target.dataset.id;
            let flag=0;//if flag return == 0 than it's pressed delete button , else it's edit button pressed
            if (e.target.classList.contains("btn_red")) {
                let div = document.querySelector(`#id${id}`)
                div.parentElement.removeChild(div);
                flag=1;
            }
            return [id,flag];
        },
        updateInput: function(item){
            return {
                name: document.querySelector(domStrings.inputIngredient).value = item.name,
                quantity: document.querySelector(domStrings.inputQuantity).value = item.quantity,
                measurement: document.querySelector(domStrings.inputMeasurement).value = item.measurement,
                type: document.querySelector(domStrings.inputType).value = item.type,
            }
        },
        editItem: function (editedItem){
            let cooler=document.querySelector(domStrings.coolerIngredients+editedItem.type);
            let id=editedItem.type+editedItem.id;
            let children=cooler.children;
            for(let i=0;i<children.length;i++){
                if(children[i].id==`id${id}`){
                    children[i].children[1].children[0].textContent=`${editedItem.quantity}${editedItem.measurement}`;
                }
            }

        }

    }
})();

export default view;