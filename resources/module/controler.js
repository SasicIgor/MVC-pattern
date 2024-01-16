let controler = function (model, view) {

    let listeners = function () {


        let DOM = view.getDomStrings();

        document.querySelector(DOM.buttonSubmit).addEventListener("click", ctrlAddItem);
    }
    // let listenersEditDel = function (){
    //     let DOM =view.getDomStrings();

    //     document.querySelectorAll(DOM.buttonDelete).forEach(elem => {
    //         if(elem.getAttribute('listener') != 'true'){
    //             elem.addEventListener('click',model.delItem)
    //         }
    //     });
    // }

    let ctrlAddItem = function () {
        let input = view.getInput();
        let newItem = model.addItem(input.name, input.quantity, input.measurement, input.type, input.id);
        view.addItem(newItem, input.type);
        view.resetInput();
        // listenersEditDel();
    }


    return {
        init: function () {
            listeners();
            view.makeStorage();
        }
    }

};

export default controler