let catalogo = new Vue({
    el: '#catalogo',
    data: {
        articulos: [],
        articulosCopy: [],
        articulosFiltro:[],
        articulosVerano: [],
        currentDepa: '',
        departamentos: [],
        filtroArticulo: '',
        vistas: {
            verano: false,
            invierno: false,
            novedades: false
        },
        catalogoRedirect: 'https://mafensa.com/cat/catalogo.pdf',
        depaMenuOpen: false,
        mobile_view: false,
        tituloPage: 'Catálogo'
    },
    created () {
        if (window.outerWidth < 769) {
            this.mobile_view = true
        }
        let parametros = new URLSearchParams(window.location.search)
        switch (parametros.get('v')) {
            case 'ver':
                this.vistas.verano = true
                this.tituloPage = 'Temporada Verano'
                this.catalogoRedirect = 'http://mafensa.com/cat/verano.pdf'
                break;
            case 'inv':
                this.vistas.invierno = true
                this.tituloPage = 'Temporada Invierno'
                this.catalogoRedirect = 'http://mafensa.com/cat/invierno.pdf'
                break;
            case 'new':
                this.vistas.novedades = true
                this.tituloPage = 'Nuevos Artículos'
                this.catalogoRedirect = 'http://mafensa.com/cat/nuevos.pdf'
                break;
        }
        this.getArticles()
    },
    mounted () {
        // setTimeout(() => {
        //     $('article#articles_section').style.height = $('article#departamentos').clientHeight + 'px'
        // }, 500);
    },
    watch: {
        departamentos (nv) {
            if (nv.length) {
                setTimeout(() => {
                    $('article#articles_section').style.height = $('article#departamentos').clientHeight + 'px' 
                }, 200);
            }
        },
        depaMenuOpen(nv) {
            if (nv) {
                $('body').classList.add('openDepaMenu')
            } else {
                $('body').classList.remove('openDepaMenu')
            }
        }
    },
    methods: {
        filterArticles: function() {
            if (this.filtroArticulo == '') {
                this.getArticles(1)
                return
            }


            let el = this

            this.currentDepa = this.currentDepa && ''
            this.currentDepa = ''
            this.articulosCopy = this.articulos.map(z => Object.assign({}, z)).filter(z => z.descr.toLowerCase().includes(el.filtroArticulo.toLowerCase())).slice(0, 300)
        },
        getArticles: async function (getAll) {
            if (getAll) {
                if (this.vistas.invierno) {
                    this.articulosCopy = this.articulos.filter(x => x.invierno == 1).map(x => Object.assign({}, x))
                } 
                else if (this.vistas.verano) {
                    this.articulosCopy = this.articulos.filter(x => x.verano == 1).map(x => Object.assign({}, x))
                }
                else if (this.vistas.novedades) {
                    this.articulosCopy = this.articulos.filter(x => x.novedad == 1).map(x => Object.assign({}, x))
                }
                else {
                    this.articulosCopy = this.articulos.slice(0, 300).map(x => Object.assign({}, x))
                }
                return
            }
            try {

                let resultados = await asyncData('GET', 'getProducts');
                this.articulos = resultados.datos
                this.departamentos = Array.from(
                                        new Set(
                                            this.articulos
                                                .map(x => JSON.stringify({ orden: x.orden, depa: x.depa }))
                                        ))
                                        .map(x => JSON.parse(x))
                                        .sort((a, b) => a.orden - b.orden) //de menor a mayor en el orden


                if (this.vistas.invierno) {
                    this.articulosCopy = this.articulos.filter(x => x.invierno == 1).map(x => Object.assign({}, x))
                } 
                else if (this.vistas.verano) {
                    this.articulosCopy = this.articulos.filter(x => x.verano == 1).map(x => Object.assign({}, x))
                }
                else if (this.vistas.novedades) {
                    this.articulosCopy = this.articulos.filter(x => x.novedad == 1).map(x => Object.assign({}, x))
                }
                else {
                    this.articulosCopy = this.articulos.slice(0, 300).map(x => Object.assign({}, x))
                }

            } catch(error) {

                console.log(error.message);

            }
        },
        openCatalogo: function() { window.open(this.catalogoRedirect)},
        sortArticles: function (depa) {
            if (this.depaMenuOpen) {
                this.depaMenuOpen= false
            }
            this.filtroArticulo = this.filtroArticulo && ''
            this.currentDepa = depa
            this.articulosCopy = this.articulos.map(x => Object.assign({}, x)).filter(x => x.orden == depa)
            $('#scrollToTop').click()
        }
    }
} )