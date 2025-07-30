const container = $('.container');
const textInput = $('.text-input');
const clearBtn = $('.clear-btn');
const wisdomDisplay = $('.display-wisdom');
const wisdomUl = $('<ul>').addClass('wisdom-ul');
const wisdomStr = 'wisdom'
let wisdomArr = [];
let toggleAddBtn = true;
let idCounter = 0;

// get stored data on load:
$(document).ready(() => {
    const local = localStorage.getItem(wisdomStr);
    if (local) {
        wisdomArr = JSON.parse(local);
        createWisdomUl(wisdomArr);
    }
});

// on render: empty necessary items and build the wisdom list:
function render(wisdom) {
    emptyElementsOnRender();
    if (wisdom.length)
        createWisdomUl(wisdom);
}

// add wisdom action:
$('.add-btn').on('click', () => {
    const text = textInput.val();
    if (!text)
        return alert('no text was sent');

    toggleAddBtn = !toggleAddBtn;

    const textObj = { id: idCounter, text }
    wisdomArr.push(textObj);

    idCounter++;

    if (toggleAddBtn)
        localStorage[wisdomStr] = JSON.stringify(wisdomArr);

    $('.display-input').text('your input: ' + textObj.text);

    render(wisdomArr);
});

// clear wisdom arr and localStorage
$(clearBtn).on('click', () => {
    localStorage.clear();
    wisdomArr = [];
    $('.display-input').text('');
    render(wisdomArr);
})

// delete item from wisdom
$(wisdomUl).on('click', '.delete-item-btn', (event) => {
    const idToDelete = $(event.target).attr('item-id');
    deleteWisdomItem(idToDelete);
    render(wisdomArr);
})

// add new li item to wisdom display:
function addToWisdomDisplay(textObj) {
    const li = $('<li>').text(textObj.text).attr('item-id', textObj.id);
    const deleteBtn = $('<button>').text('X').addClass('delete-item-btn').attr('item-id', textObj.id);
    const liContainer = $('<div>').addClass('li-container').append(li, deleteBtn);
    $(wisdomUl).append(liContainer);
}

// create Wisdom list:
function createWisdomUl(wisdom) {
    for (const item of wisdom) {
        addToWisdomDisplay(item);
    }
    $(wisdomDisplay).append(wisdomUl);
}

// empty all necessary items on render
function emptyElementsOnRender() {
    $(wisdomUl).empty();
    $(textInput).val('');
}

// update wisdomArr and localStorage on item delete :
function deleteWisdomItem(itemId) {
    const index = wisdomArr.findIndex(item => item.id === Number(itemId));
    wisdomArr.splice(index, 1);
    localStorage.setItem(wisdomStr, JSON.stringify(wisdomArr))
}

render(wisdomArr);

