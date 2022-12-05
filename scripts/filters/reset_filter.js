function reset_filter() {
    let items = document.getElementsByClassName("item_form")
    for (let i = 0; i < items.length; i++) {
        items[i].parentElement.style.display = ""
    }
}