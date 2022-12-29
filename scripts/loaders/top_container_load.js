let topText =
    `<div class="catalog">
            <a href="#" title="Каталог">
                <img src="resources/icons/catalog.png">
            </a>
            <div>
                <a class="catalog_name" href="#">
                    Каталог
                </a>
            </div>
        </div>
        <div class="search_bar">
            <form action="/products" method="get">
                <input type="text" placeholder="Что будем искать?" class="input_search" name="keyword"
                       autocomplete="on">
                <input type="submit" value title="Найти">
            </form>
        </div>
        <pre class="ascii_text">
_________      ___.            _________ __
\\_   ___ \\ __ _\\_ |__   ____  /   _____//  |_  ___________   ____
/    \\  \\/|  |  \\ __ \\_/ __ \\ \\_____  \\\\   __\\/  _ \\_  __ \\_/ __ \\
\\     \\___|  |  / \\_\\ \\  ___/ /        \\|  | (  |_| )  | \\/\\  ___/
 \\______  /____/|___  /\\___  >_______  /|__|  \\____/|__|    \\___  >
        \\/          \\/     \\/        \\/                         \\/
          </pre>
        <div class="cart">
            <a href="#" title="Корзина">
                <img src="resources/icons/cart.png">
            </a>
            <div>
                <a class="cart_name" href="#">
                    <p>ПАМОЙКА</p>
                    <p>0 р.</p>
                </a>
            </div>
        </div>`

document.addEventListener("DOMContentLoaded", function() {
    let top = document.createElement("section")
    top.innerHTML = topText
    top.className = "top_container"
    let mainElements = document.getElementsByTagName("main")
    let bodyMain = mainElements.item(0)
    bodyMain.insertAdjacentElement('afterbegin', top)
})