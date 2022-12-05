let footerText =
    `<div class="footer_information">
        <div class="contact_information">
            <p>
                Контактная информация:
            </p>
            <ul>
                <li>+88005553535</li>
                <li>aboba@DenChika.pipipupu</li>
            </ul>
        </div>
        <p>
            <q>Шутки шутками, а шутки шутками</q>
            <cite>Влад Токарев</cite>
        </p>
        <p>
            Формула успеха:<br>
            C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> = 2C<sub>2</sub>H<sub>5</sub>OH + 2CO<sub>2</sub>
        </p>
        <p>
            <u>Интернет-магазин Cubestore</u><br>
            © 2022-2022 Все права<strong> не </strong>защищены.<br>
            По вопросам заказов: bebra@niuitmo.ru
        </p>
    </div>
    <div id="page_load_time">

    </div>`

document.addEventListener("DOMContentLoaded", function () {
    let footer = document.createElement("footer")
    footer.innerHTML = footerText
    footer.className = "footer"
    document.body.insertAdjacentElement('beforeend', footer)
})