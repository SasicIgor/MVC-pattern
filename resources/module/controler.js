let controler=function(model,view){

    let listeners=function(){


        let DOM=view.getDomStrings();

        document.querySelector(DOM.buttonSubmit).addEventListener("click",ctrlAddItem)
    }

    let ctrlAddItem=function(){
        let input=view.getInput();
        let newItem=model.addItem(input.name,input.quantity,input.measurement,input.type);
        addItem(newItem,input.type);
    }


    return{
        init:function(){
            listeners();
            view.makeStorage();
        }
    }

};

export default controler