const icons = [{
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    }
];



// l'obbiettivo è creare una funzione che filtra l'array originale e a seconda della scelta ritorna un nuovo array
/**
 * 
 * filtra originalLista a seconda della scelta, parametro choice
 * 
 * @param {*} choice ["all", "user", "vegetalbe", "animal"]
 * @param {*} originalList 
 */
function filterIcons(choice, originalList) {
    return originalList.filter((icon) => {
        if (choice === "all") {
            return true;
        }
        if (choice === icon.type) {
            return true;
        }
        return false;
    });

}

listIconsToHTML("all");

function listIconsToHTML(value) {
    const iconsFiltered = filterIcons(value, icons);
    const containerHTML = document.querySelector(".icons-content");
    containerHTML.innerHTML = "";
    iconsFiltered.forEach((icon) => {
        const { name, prefix, family, type } = icon;
        containerHTML.innerHTML += `
        <div class="icon-card col my-3">
            <div class="icon-card-inner p-3 text-center d-flex flex-wrap align-items-center align-content-center">
                <div class="icon ${type}">
                     <i class="${family} ${prefix}${name}"></i>
                </div>
                <div class="name">
                     ${name}
                </div>
            </div>
        </div>
        `
    })
}

const selectElement = document.querySelector(".type-select");


selectElement.addEventListener("change", (event) => {
    listIconsToHTML(event.target.value);
})