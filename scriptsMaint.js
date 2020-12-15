
const baseData = {
    "depots": [
        {"id":"Horwich", "postcode": "HO1 8XJ"},
        {"id":"Stockport", "postcode": "ST1 8XJ"},
        {"id":"Wirral", "postcode": "CH1 8XJ"},
        {"id":"Liverpool", "postcode": "L18 8XJ"},
        {"id":"Dumfirmline", "postcode": "DF1 8XJ"},
        {"id":"Watford", "postcode": "WD1 8XJ"},
        {"id":"Milton Keynes", "postcode": "MK1 8XJ"},
        {"id":"Crewe", "postcode": "CW1 8XJ"},
        {"id":"Cardiff", "postcode": "CD1 8XJ"}
    ],
    "trucks": [
        {"id":"Thirty Tonne", "maxItems": 30},
        {"id":"Twenty-five Tonne", "maxItems": 25},
        {"id":"Twenty Tonne", "maxItems": 20}
    ],
    "appliances": [
        {"id":"Fridge", "sizeWeight": "1.0"},
        {"id":"Freezer", "sizeWeight": "1.0"},
        {"id":"Washer", "sizeWeight": "1.0"},
        {"id":"Fridge", "sizeWeight": "0.5"},
        {"id":"Dryer",  "sizeWeight": "0.5"},
        {"id":"Oven",  "sizeWeight": "0.5"}
    ]
}

const createForm = (type, name) => {

    typeData=baseData[type].sort((a, b) => a.id.localeCompare(b.id));

    const formObject = document.createElement("form");
    const fieldObject = document.createElement("fieldSet");
    const legendObject = document.createElement("legend");
    const tableElement = document.createElement('table');
    
    formObject.action = "./submit.html";
    fieldObject.appendChild(legendObject);
    legendObject.innerHTML = "Select "+name;
    
    fieldObject.appendChild(document.createElement("br"));

    for(let item of typeData) {

        rowElement=document.createElement("tr");
        

        let radio = document.createElement("input");

        for(let key of Object.keys(item)) {
            
            if(key === "id") {
                
                let radioElement=document.createElement("input");
                radioElement.type="radio";
                radioElement.className = "radioButton";
                radioElement.name = "radio";
                
                fieldObject.appendChild(radioElement);
                let cell= rowElement.insertCell();
                cell.appendChild(radioElement);
            }
            
            let cell= rowElement.insertCell();
            cell.innerHTML=item[key];
        }

        fieldObject.appendChild(rowElement);
    }
    
    formObject.appendChild(fieldObject);
    fieldObject.appendChild(document.createElement("br"));
    
    let edit = document.createElement("Input");
    
    edit.type = "button";
    edit.name = "edit";
    edit.value = "Edit";
    edit.className = "buttonEdit";
    fieldObject.appendChild(edit);

    let del = document.createElement("Input");
    del.type = "button";
    del.name = "del";
    del.value = "Delete";
    del.className = "buttonDelete";
    fieldObject.appendChild(del);
    fieldObject.appendChild(document.createElement("br"));
    
    let add = document.createElement("Input");
    add.type = "button";
    add.name = "del";
    add.value = "Add";
    add.text = "New "+name+" Name";
    add.className = "buttonAdd";
    fieldObject.appendChild(add);

    fieldObject.appendChild(document.createElement("br"));
    
    let addText = document.createElement("Input");
    addText.type = "text";
    addText.name = "del";
    addText.value = "New "+name+" Name";
    addText.className = "buttonAddText";

    fieldObject.appendChild(addText);

    return formObject;
}