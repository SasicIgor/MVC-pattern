let controler = function (model, view) {

    let DOM = view.getDomStrings();

    let buttonListener = function () {
        document.querySelector(DOM.buttonSubmit).addEventListener("click", ctrlAddItem);
    }

    let listenersEditDel = function () {
        document.querySelectorAll(DOM.buttonDelete).forEach(elem => {
            if (elem.getAttribute('listener') != 'true') {
                elem.addEventListener('click', editDelItem)
            }
        });
        document.querySelectorAll(DOM.buttonEdit).forEach(elem => {
            if (elem.getAttribute('listener') != 'true') {
                elem.addEventListener('click', editDelItem)
            }
        });
    }

    let ctrlAddItem = function () {
        let input = view.getInput();
        let newItem = model.addItem(input.name, input.quantity, input.measurement, input.type, input.id);
        console.log(newItem)
        if (newItem[1] == 1) {
            view.editItem(newItem[0])
        }
        if(newItem[1]==0){
            view.addItem(newItem[0]);
        }
        view.resetInput();
        listenersEditDel();
    }
    let editDelItem = function (e) {
        let returns = view.delItem(e);
        let id = returns[0];
        let flag = returns[1];
        let itemForEdit = model.editDeleteFromStorage(id, flag);
        view.updateInput(itemForEdit);

    }
    return {
        init: function () {
            buttonListener();
            view.makeStorage();
        }
    }

};

export default controler