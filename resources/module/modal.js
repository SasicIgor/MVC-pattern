const model = (function () {

    const StorageItem = function (id, name, quantity, measurement, type) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.measurement = measurement;
        this.type = type;
    }


    let storage = {

        allCoolers: {
            1: [],
            2: [],
            3: [],
            4: [],
            5: [],
        },
    }

    return {

        addItem: function (name, quantity, measurement, type) {
            let id, item;
            let fridge = storage.allCoolers[type];
            let flag = 0;
            if (fridge.length > 0) {
                for (let i = 0; i < fridge.length; i++) {
                    console.log(fridge[i]);
                    if (fridge[i].name.toLowerCase() == name.toLowerCase()) {
                        console.log(fridge[i]);
                        fridge[i].quantity = parseInt(fridge[i].quantity) + parseInt(quantity);
                        fridge[i].measurement = measurement;
                        console.log(fridge[i]);
                        flag = 1;
                        let editedArray = [fridge[i], flag]
                        return editedArray
                    }
                    // else {
                    //     console.log("usao sam ovde")
                    //     id = storage.allCoolers[type][storage.allCoolers[type].length - 1].id + 1
                    //     item = new StorageItem(id, name, quantity, measurement, type)
                    //     storage.allCoolers[type].push(item)
                    //     let uneditedArray = [item, flag]
                    //     return uneditedArray;
                    // }
                }
            }
            if (fridge.length == 0) {
                id = 1;
            }
            else {
                id = storage.allCoolers[type][storage.allCoolers[type].length - 1].id + 1;
            }
            item = new StorageItem(id, name, quantity, measurement, type);
            storage.allCoolers[type].push(item);
            let uneditedArray = [item, flag]
            console.log("zavrsavam")
            return uneditedArray;


        },
        editDeleteFromStorage: function (id, flag) {
            let item = id.charAt(1);
            let cooler = id.charAt(0);
            let fridge = storage.allCoolers[cooler];
            for (let i = 0; i < fridge.length; i++) {
                if (fridge[i].id == item) {
                    if (parseInt(flag) == 1) {
                        fridge.splice(i, 1)
                        break
                    };
                    if (parseInt(flag) == 0) {
                        return fridge[i];
                    }

                }
            }
        }
    }

})();


export default model;