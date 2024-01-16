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

            if (storage.allCoolers[type].length > 0) {
                id = storage.allCoolers[type][storage.allCoolers[type].length - 1].id + 1
            }
            else {
                id = 1;
            }
            item = new StorageItem(id, name, quantity, measurement, type)
            storage.allCoolers[type].push(item)

            return item;


        },
        // delItem: function (e){
        //     console.log(e.target.dataset.id);
        // }
    }



})();


export default model;