
const baseData = {
    "depots": [
        {"id":"Horwich", "postcode": "HO1 8XJ", "fleet": "26"},
        {"id":"Stockport", "postcode": "M18 7TQ", "fleet": "13"},
        {"id":"Liverpool", "postcode": "L1 1DA", "fleet": "15"},
        {"id":"Dumfirmline", "postcode": "KY11 3AE", "fleet": "11"},
        {"id":"Watford", "postcode": "WD17 1AP", "fleet": "20"},
        {"id":"Milton Keynes", "postcode": "MK10 1SZ", "fleet": "23"},
        {"id":"Crewe", "postcode": "CW1 2BS", "fleet": "14"},
        {"id":"Cardiff", "postcode": "CF10 1BE", "fleet": "8"},
        {"id":"Southampton", "postcode": "SO14 0AH", "fleet": "9"},
        {"id":"Wolverhampton", "postcode": "WV1 1HB", "fleet": "16"},
        {"id":"Brighton", "postcode": "BN41 1HS", "fleet": "6"},
        {"id":"Southend", "postcode": "SS2 4DY", "fleet": "8"},
        {"id":"Middlesbrough", "postcode": "TS3 6AF", "fleet": "23"},
        {"id":"Blackpool", "postcode": "FY3 8DF", "fleet": "11"},
        {"id":"Derby", "postcode": "DE4 2HE", "fleet": "25"},
        {"id":"Leeds", "postcode": "LS2 8JS", "fleet": "18"},
        {"id":"Oldham", "postcode": "OL1 3EG", "fleet": "5"},
        {"id":"Reading", "postcode": "RG1 3YL", "fleet": "13"},
        {"id":"Blackburn", "postcode": "BB2 1NA", "fleet": "19"},
        {"id":"York", "postcode": "YO10 3FQ", "fleet": "9"}
    ],
    "trucks": [
        {"id":"Thirty Tonne", "maxItems": 30},
        {"id":"Twenty-five Tonne", "maxItems": 25},
        {"id":"Twenty Tonne", "maxItems": 20}
    ],
    "appliances": [
        {"id":"Fridge", "weighting": "1.0"},
        {"id":"Freezer", "weighting": "1.0"},
        {"id":"Washer", "weighting": "1.0"},
        {"id":"Fridge", "weighting": "0.5"},
        {"id":"Dryer",  "weighting": "0.5"},
        {"id":"Oven",  "weighting": "0.5"}
    ]
}

const createForm = (type, name) => {

    const typeData=baseData[type].sort((a, b) => a.id.localeCompare(b.id));

    const formObject = document.createElement("form");
    const fieldObject = document.createElement("fieldSet");
    const legendObject = document.createElement("legend");

    fieldObject.appendChild(legendObject);
    legendObject.innerHTML = "Select "+name;


    fieldObject.appendChild(document.createElement("br"));

    let itemCount=0;

    for(let item of typeData) {

        itemCount++;

        let rowElement=document.createElement("tr");

        for(let key of Object.keys(item)) {
            
            if(key === "id") {
                
                let radioElement=document.createElement("input");
                radioElement.type="radio";
                radioElement.name = "radio";
                
                fieldObject.appendChild(radioElement);
                let cell= rowElement.insertCell();
                cell.appendChild(radioElement);
                cell.className = "dataCell";
            }
            
            let cell= rowElement.insertCell();
            cell.className = "dataCell";
            cell.innerHTML=item[key];
        }

        rowElement.className="dataRow";

        if(itemCount % 2) {
            rowElement.className+=" dataRowEven";
        }

        fieldObject.appendChild(rowElement);
    }
    
    formObject.appendChild(fieldObject);
    fieldObject.appendChild(document.createElement("br"));

    // create the edit/del/items row

    let rowEditElement=document.createElement("tr");


    let edit = document.createElement("Input");
    
    edit.type = "button";
    edit.name = "edit";
    edit.value = "Edit";
    edit.className = "editItemCell editButton";

    rowEditElement.appendChild(edit);

    // insert empty cell
    let empty = document.createElement("cell");

    empty.innerHTML = "";
    empty.className = "spacer";
    rowEditElement.appendChild(empty);

    rowEditElement.appendChild(document.createElement("cell"));

    let del = document.createElement("Input");
    del.type = "button";
    del.name = "del";
    del.value = "Delete";
    del.className = "editItemCell delButton";
    rowEditElement.appendChild(del);

    let items = document.createElement("cell");

    items.innerHTML = itemCount+" Items";
    items.className = "editItemCell";
    rowEditElement.appendChild(items);

    fieldObject.appendChild(rowEditElement);


    fieldObject.appendChild(document.createElement("br"));

    // create the add new item row

    let rowAddItemElement=document.createElement("tr");

    let add = document.createElement("Input");
    add.type = "button";
    add.name = "add";
    add.value = "Add";
    add.text = "New "+name+" Name";
    add.className = "newItemCell addButton";
    rowAddItemElement.appendChild(add);

    // insert empty cell
    let empty2 = document.createElement("cell");

    empty2.innerHTML = "";
    empty2.className = "spacer";
    rowAddItemElement.appendChild(empty2);


    let addText = document.createElement("Input");
    addText.type = "text";
    addText.value = "New "+name+" Name";
    addText.className = "newItemCell";

    rowAddItemElement.appendChild(addText);

    fieldObject.appendChild(rowAddItemElement);

    return formObject;
}