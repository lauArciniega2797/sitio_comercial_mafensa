Vue.component('navbar', {
    props:['view'],
    data(){
        return {
            mobile_view: false,
            nosotrosView: '#nosotros'
        }
    },
    created(){
        if (this.view) {
            this.nosotrosView = 'index.html#nosotros'
        }
        if (window.outerWidth < 769) {
            this.mobile_view = true
        }
    },
    template: `
        <article>
        
            <article id="upper_menu">
                <figure>
                    <img src="assets/images/logotipo_mafensa_sencillo.png" alt="Logotipo MAFENSA | Mayoreo Ferretero del Norte S.A. de C.V."/>
                </figure>
                <p>
                    <a href="tel:871-718-4020"><span><i class="fas fa-phone is-text-orange"></i>871.718.40.20</span></a>
                    <a href="mailto:ventas@mafensa.com"><span><i class="fas fa-envelope is-text-orange"></i>ventas@mafensa.com</span></a>
                    <span>Síguenos en 
                        <a target="_blank" href="https://www.facebook.com/Mafensa"><i class="fab fa-facebook is-text-orange"></i></a>
                        <a target="_blank" href="https://www.instagram.com/mafensa1/"><i class="fab fa-instagram is-text-orange"></i></a>
                        <a target="_blank" href="https://www.linkedin.com/in/mafensa-mayoreo-ferretero-del-norte-s-a-de-c-v-9567522a5/?originalSubdomain=mx"><i class="fab fa-linkedin is-text-orange"></i></a>
                    </span>
                </p>
            </article>

            <nav id="nav">
                <article>
                    <ul>
                        <li><a @click="showMenu('', 'close')" href="index.html#upper_menu">Inicio</a></li>
                        <li><a @click="showMenu('', 'close')" href="index.html#nosotros">Nosotros</a></li>
                        <li><a @click="showMenu('', 'close')" href="catalogo.php">Catálogo</a></li>
                        <li><a @click="showMenu('', 'close')" href="catalogo.php?v=new">Nuevos Artículos</a></li>
                        <li><a @click="showMenu('', 'close')" href="catalogo.php?v=ver">Artículos de Verano</a></li>
                        <li><a @click="showMenu('', 'close')" href="catalogo.php?v=inv">Artículos de Invierno</a></li>
                        <li><a @click="showMenu('', 'close')" href="contacto.php">Contacto</a></li>
                    </ul>
                    <button id="btn_login" href="https://mafensa.com/t/" class="is-bg-orange">
                        <span>Iniciar Sesión</span>
                    </button>
                    <a v-if="mobile_view" @click="showMenu($event)">
                        <i class="fas fa-bars"></i>
                    </a>
                </article>
            </nav>
            
        </article>
    `,
    methods: {
        showMenu: function (e, opc) {
            if (!this.mobile_view) {
                return
            }
            let height = 0
            let ul = $('section#app nav#nav article ul')

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
    }
})