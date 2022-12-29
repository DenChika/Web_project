function filter_brands() {
    reset_filter()
    let items = document.getElementsByClassName("item_form")
    let form = document.getElementsByClassName("brand_content")[0]
    let checkBoxes = form.getElementsByTagName("input")
    let values = []
    for (let k = 0; k < checkBoxes.length; k++) {
        if (checkBoxes[k].checked)
            values.push(checkBoxes[k].value.toUpperCase())
    }
    for (let i = 0; i < items.length; i++) {
        let input = items[i].getElementsByTagName("input")
        let value = input[1].value.toUpperCase()
        let flag = false
        for (let j = 0; j < values.length; j++) {
            if (value.includes(values[j])) {
                flag = true
            }
        }
        if (!flag) {
            items[i].parentElement.style.display = "none"
        }
    }
}