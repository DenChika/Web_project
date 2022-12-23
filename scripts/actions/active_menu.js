let pages = {
    'new_products.html': 'new_products',
    'sales.html': 'sales',
    'top_sales.html': 'top_sales',
    'faq.html': 'faq',
    'staff.html': 'staff'
};

function pageIsActive() {
    let pageId = pages[document.location.pathname.split('/').pop()]
    document.getElementById(pageId).style.borderBottom = "2px solid rgba(255,148,76,0.98)"
}

document.addEventListener('DOMContentLoaded', function () {
    pageIsActive();
})