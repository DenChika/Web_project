let headerText =
    `<section class="header_container">
        <a href="/Web_project/" title="Главная страница cubestore.ru">
            <img class="logo" src="photo/logo.png" alt="Go Home">
        </a>
        <h2 class="name">
            CubeStore
        </h2>
        <div class="new_products">
            <nav>
                <a href="new_products.html" id="new_products" title="Новинки">
                    Новинки
                </a>
            </nav>
        </div>
        <div class="sales">
            <nav>
                <a href="sales.html" id="sales" title="Распродажа">
                    Распродажа
                </a>
            </nav>
        </div>
        <div class="top_sales">
            <nav>
                <a href="top_sales.html" id="top_sales" title="Топ продаж">
                    Топ продаж
                </a>
            </nav>
        </div>
        <div class="faq">
            <nav>
                <a href="faq.html" id="faq" title="FAQ">
                    FAQ
                </a>
            </nav>
        </div>
        <div class="profile">
            <a href="#" title="Профиль">
                <img src="https://mobile-comp.com/images/user.png">
            </a>
        </div>
    </section>
    <hr>`

document.addEventListener("DOMContentLoaded", function () {
    let header = document.createElement("header")
    header.innerHTML = headerText
    document.body.insertAdjacentElement('afterbegin', header)
})