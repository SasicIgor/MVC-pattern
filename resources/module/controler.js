let controler = function (model, view) {

    let listeners = function () {


        let DOM = view.getDomStrings();

        document.querySelector(DOM.buttonSubmit).addEventListener("click", ctrlAddItem);
    }
    let listenersEditDel = function () {
        let DOM = view.getDomStrings();

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
        view.addItem(newItem, input.type);
        view.resetInput();
        listenersEditDel();
    }
    let editDelItem = function (e) {
        let returns = view.delItem(e);
        let id = returns[0];
        let flag = returns[1];
        let itemForEdit=model.editDeleteFromStorage(id,flag);
        view.updateInput(itemForEdit);

    }
    let editItem = function () {
        let id = view.edtiItem(e);
    }
    return {
        init: function () {
            listeners();
            view.makeStorage();
        }
    }

};

export default controler