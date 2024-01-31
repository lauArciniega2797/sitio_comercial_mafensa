const $ = (item) => document.querySelector(item)
const asyncData = async function(method, api, data) {
    let resultados, enpoint = 'assets/api/catalogo.php?action='

    if (method == 'POST') {
        resultados = await fetch(`${ enpoint }${ api }`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            },
        })
    } else {
        resultados = await fetch(`${ enpoint }${ api }`)
    }

    datos = await resultados.json()
    return datos
}
const toTop = () => window.scrollTo(0, top)

const portalClientes = () => window.open("https://mafensa.com/t/");
const showMenu = function (opc) {
    if (window.outerWidth > 768) {
        return
    }
    let height = 0
    let ul = $('section nav#nav article ul')

    if (!opc) {
        if (ul.clientHeight < 1) {
            let nav_elements = ul.children

            Array.from(nav_elements).forEach(element => {
                height += element.clientHeight
            });

        }
        ul.style.height = height + 'px'
    } else {
        height = 0
        setTimeout(() => {
            ul.style.height = height + 'px'
        }, 200);
    }
}
// window.addEventListener('scroll', () => {
    
// })