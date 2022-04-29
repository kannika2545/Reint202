// Model-data
const houses = [
    {
        code: "SM",
        name: "Smith"
    },
    {
        code: "JD",
        name: "Jordan"
    },
    {
        code: "BL",
        name: "Billy"
    }
]

const getFamily = houseCode => {
    switch(houseCode) {
        case "SM":
            return ["Mario","Karen","Tayler"];
        case "JD":
            return ["Deen","Jasmin","Atlanta","Lilly"];
        case "BL":
            return ["Robert","Lulu","Sia"];
        default:
            return [];
    }
}

const createOptionElement = (text,value) => {
    const element = document.createElement("option");
    element.textContent = text;
    element.value = value;
    return element;
}

//list ที่จะแสดงรายชื่อข้อมูลที่อยู่ใน houseCode
const createLiElement = text => {
    const element = document.createElement("li");
    element.textContent = text;
    return element;
}

//ใส่ข้อมูลให้กับตัว <option>
const houseElement = document.querySelector("select"); //<select> ที่ index.html

//Fill the List
houses.forEach(house => {
    houseElement.appendChild(createOptionElement(house.name, house.code));//เอา select ที่เราเก็บไว้ใน houseElement มา
})


//Controller-brains รับ event ต่างๆจาก user เข้ามาจัดการ
houseElement.addEventListener("change", e => {
    const fams = getFamily(e.target.value); 
    const famsElement = document.getElementById("family");

    famsElement.innerHTML = "";
    fams.forEach(fam => {
        famsElement.appendChild(createLiElement(fam));
    })
})

//กรรณิการ์สวยมากกก
