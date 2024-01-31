let app = new Vue ({
    el: '#app',
    data: {
        articulosInvierno: [],
        providers: [
            { path: 'assets/images/providers/mafensa_coflex.jpg', alt:'COFLEX | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_devcon.jpg', alt:'DEVCON | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_iusa.jpg', alt:'IUSA | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_productos_pennsylvania.jpg', alt:'Productos Pennsylvania | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_wd40.jpg', alt:'WD-40 | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_kola_loka.jpg', alt:'KOLA LOKA | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_cnx.jpg', alt:'CNX | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_dexter.jpg', alt:'DEXTER Cerraduras, Bisagras y Candados | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_fleximatic.jpg', alt:'FLEXIMATIC | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_igoto.jpg', alt:'IGOTO | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_pumps.jpg', alt:'PUMPS F & Q S.A. de C.V. | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_3_en_uno.jpg', alt:'3 en uno | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_fama.jpg', alt:'FAMA Plomeria con Tecnología | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_gaxeco.jpg', alt:'GAXECO Eficiencia Ecológica | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_tuk.jpg', alt:'TUK | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_victor.jpg', alt:'VICTOR | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_productos_plastikosas.jpg', alt:'Productos Plastikosas S.A. de C.V. | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_aceros_nacionales.jpg', alt:'Aceros NAcionales | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_industrias_adak.jpg', alt:'Industrias ADAK | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_cadena.jpg', alt:'Cadena | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_conplasa.jpg', alt:'Conplasa | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_adir_industrias.jpg', alt:'ADIR Industrias | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_troquelador_alfa_omega.jpg', alt:'Troquelados Alfa y Omega | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_alfa.jpg', alt:'Alfa | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_alfa_electrodomesticos.jpg', alt:'Alfa Electrodomesticos | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_arda.jpg', alt:'ARDA | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_armebe.jpg', alt:'ARMEBE | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_austromex.jpg', alt:'AUSTROMEX | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_bardahl.jpg', alt:'BARDAHL | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_basculas_nl.jpg', alt:'Basculas Nuevo León | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_bellota.jpg', alt:'BELLOTA | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_beser_anclo.jpg', alt:'BESER MEX ANCLO | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_besthelg.jpg', alt:'BESTHELG | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_black_gold.jpg', alt:'BLACK GOLD | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_boro.jpg', alt:'BORO | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_brotimex.jpg', alt:'BROTIMEX | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_celta.jpg', alt:'CELTA | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_herramientas_ch.jpg', alt:'Herramientas CH | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_copitas_diabolos_pellets.jpg', alt:'COPITAS Diabolos Pellets | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_dixon.jpg', alt:'DIXON | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_estrella.jpg', alt:'ESTRELLA | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_excelsior.jpg', alt:'EXCELSIOR | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_fandeli.jpg', alt:'FANDELI | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_general_paint.jpg', alt:'GENERAL PAINT | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_gomatek.jpg', alt:'GOMATEK | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_goni.jpg', alt:'GONI Equipo Profesional | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_ht.jpg', alt:'HT | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_h24.jpg', alt:'H24 | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_hight_power.jpg', alt:'Hight Power, Alto poder en herramientas | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_igesa.jpg', alt:'IGESA, Interruptores y Gabinetes Electricos | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_industrias_vermar.jpg', alt:'Industrias VERMAR | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_kyo.jpg', alt:'KYO | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_infra.jpg', alt:'INFRA | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_inreco.jpg', alt:'INRECO | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_kleiman.jpg', alt:'KLEIMAN | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_latyn.jpg', alt:'LATYN Grupo | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_lenox.jpg', alt:'LENOX | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_liderz.jpg', alt:'LIDER\'Z Seguridad en pegamentos | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_medesa.jpg', alt:'MEDESA Metales Desplegados | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_master_lock.jpg', alt:'Master Lock | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_meer.jpg', alt:'MEER | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_omega.jpg', alt:'OMEGA | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_motul.jpg', alt:'Motul Sogas e Hilos | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_nacobre.jpg', alt:'NACOBRE | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_nicholson.jpg', alt:'Nicholson | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_permatex.jpg', alt:'PERMATEX | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_poliflex.jpg', alt:'POLIFLEX | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_presto.jpg', alt:'PRESTO, Pegamentos y Selladores | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_grupo_protexa.jpg', alt:'Grupo Protexa | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_rat_kill.jpg', alt:'RAT KILL | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_santul.jpg', alt:'SANTUL | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_sky_fort.jpg', alt:'SKY FORT Conductores Electricos | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_valmex.jpg', alt:'VALMEX | MAFENSA', descr:'' },
            { path: 'assets/images/providers/mafensa_solaris.jpg', alt:'SOLARIS | MAFENSA', descr:'' },
        ],
        allCities: [
            { state:'Chihuahua', id_state:'chihuahua', ciudad:'Aldama' },
            { state:'Chihuahua', id_state:'chihuahua', ciudad:'Buenaventura' },
            { state:'Chihuahua', id_state:'chihuahua', ciudad:'Cd. Camargo' },
            { state:'Chihuahua', id_state:'chihuahua', ciudad:'Cd. Cuahutemoc' },
            { state:'Chihuahua', id_state:'chihuahua', ciudad:'Cd. Delicias' },
            { state:'Chihuahua', id_state:'chihuahua', ciudad:'Cd. Jimenez' },
            { state:'Chihuahua', id_state:'chihuahua', ciudad:'Cd. Juarez' },
            { state:'Chihuahua', id_state:'chihuahua', ciudad:'Cd. Meoqui' },
            { state:'Chihuahua', id_state:'chihuahua', ciudad:'Cd. Rosales' },
            { state:'Chihuahua', id_state:'chihuahua', ciudad:'Cd. Saucillo' },
            { state:'Chihuahua', id_state:'chihuahua', ciudad:'Chihuahua' },
            { state:'Chihuahua', id_state:'chihuahua', ciudad:'Galeana' },
            { state:'Chihuahua', id_state:'chihuahua', ciudad:'H. Del Parral' },
            { state:'Chihuahua', id_state:'chihuahua', ciudad:'Lazaro Cárdenas' },
            { state:'Chihuahua', id_state:'chihuahua', ciudad:'Nvo. Casas Grandes' },
            { state:'Chihuahua', id_state:'chihuahua', ciudad:'Ojinaga' },
            { state:'Chihuahua', id_state:'chihuahua', ciudad:'San Francisco del Oro' },
            { state:'Chihuahua', id_state:'chihuahua', ciudad:'V. Matamoros' },
            { state:'Chihuahua', id_state:'chihuahua', ciudad:'Valle De Allende' },

            { state:'Coahuila', id_state:'coahuila', ciudad:'Allende' },
            { state:'Coahuila', id_state:'coahuila', ciudad:'Barroteran' },
            { state:'Coahuila', id_state:'coahuila', ciudad:'Castaños' },
            { state:'Coahuila', id_state:'coahuila', ciudad:'Cd. Acuña' },
            { state:'Coahuila', id_state:'coahuila', ciudad:'Coyote' },
            { state:'Coahuila', id_state:'coahuila', ciudad:'Cuatro Cienegas' },
            { state:'Coahuila', id_state:'coahuila', ciudad:'Ejido la Unión' },
            { state:'Coahuila', id_state:'coahuila', ciudad:'Est. Hermanas' },
            { state:'Coahuila', id_state:'coahuila', ciudad:'Fco. I. Madero' },
            { state:'Coahuila', id_state:'coahuila', ciudad:'Frontera' },
            { state:'Coahuila', id_state:'coahuila', ciudad:'La Concha' },
            { state:'Coahuila', id_state:'coahuila', ciudad:'Matamoros' },
            { state:'Coahuila', id_state:'coahuila', ciudad:'Monclova' },
            { state:'Coahuila', id_state:'coahuila', ciudad:'Morelos' },
            { state:'Coahuila', id_state:'coahuila', ciudad:'Muzquiz' },
            { state:'Coahuila', id_state:'coahuila', ciudad:'Nadadores' },
            { state:'Coahuila', id_state:'coahuila', ciudad:'Nava' },
            { state:'Coahuila', id_state:'coahuila', ciudad:'Nueva Rosita' },
            { state:'Coahuila', id_state:'coahuila', ciudad:'Palau' },
            { state:'Coahuila', id_state:'coahuila', ciudad:'Parras' },
            { state:'Coahuila', id_state:'coahuila', ciudad:'Piedras Negras' },
            { state:'Coahuila', id_state:'coahuila', ciudad:'Ramos Arizpe' },
            { state:'Coahuila', id_state:'coahuila', ciudad:'Rosita' },
            { state:'Coahuila', id_state:'coahuila', ciudad:'Sabinas' },
            { state:'Coahuila', id_state:'coahuila', ciudad:'Saltillo' },
            { state:'Coahuila', id_state:'coahuila', ciudad:'San Buenaventura' },
            { state:'Coahuila', id_state:'coahuila', ciudad:'San Pedro' },
            { state:'Coahuila', id_state:'coahuila', ciudad:'Torreón' },
            { state:'Coahuila', id_state:'coahuila', ciudad:'Zaragoza' },

            { state:'Durango', id_state:'durango', ciudad:'Bermejillo' },
            { state:'Durango', id_state:'durango', ciudad:'Canatlán' },
            { state:'Durango', id_state:'durango', ciudad:'Cd. Juarez' },
            { state:'Durango', id_state:'durango', ciudad:'Ceballos' },
            { state:'Durango', id_state:'durango', ciudad:'Cuencame' },
            { state:'Durango', id_state:'durango', ciudad:'Durango' },
            { state:'Durango', id_state:'durango', ciudad:'El Salto' },
            { state:'Durango', id_state:'durango', ciudad:'Fco. I. Madero' },
            { state:'Durango', id_state:'durango', ciudad:'Gomez Palacio' },
            { state:'Durango', id_state:'durango', ciudad:'Gpe. Victoria' },
            { state:'Durango', id_state:'durango', ciudad:'Gregorio A. G' },
            { state:'Durango', id_state:'durango', ciudad:'León Guzman' },
            { state:'Durango', id_state:'durango', ciudad:'Lerdo' },
            { state:'Durango', id_state:'durango', ciudad:'Mapimi' },
            { state:'Durango', id_state:'durango', ciudad:'Nazas' },
            { state:'Durango', id_state:'durango', ciudad:'Nombre de Dios' },
            { state:'Durango', id_state:'durango', ciudad:'Nuevo Ideal' },
            { state:'Durango', id_state:'durango', ciudad:'Pedriceña' },
            { state:'Durango', id_state:'durango', ciudad:'Rodeo' },
            { state:'Durango', id_state:'durango', ciudad:'Stgo. Papasquiaro' },
            { state:'Durango', id_state:'durango', ciudad:'Tlahualilo' },
            { state:'Durango', id_state:'durango', ciudad:'Vicente Guerrero' },
            { state:'Durango', id_state:'durango', ciudad:'Villa Nazareno' },
            { state:'Durango', id_state:'durango', ciudad:'Villa Unión' },

            { state:'Nuevo León', id_state:'nuevo_leon', ciudad:'Apodaca' },
            { state:'Nuevo León', id_state:'nuevo_leon', ciudad:'Garcia' },
            { state:'Nuevo León', id_state:'nuevo_leon', ciudad:'General Escobedo' },
            { state:'Nuevo León', id_state:'nuevo_leon', ciudad:'Guadalupe' },
            { state:'Nuevo León', id_state:'nuevo_leon', ciudad:'Juarez' },
            { state:'Nuevo León', id_state:'nuevo_leon', ciudad:'Monterrey' },
            { state:'Nuevo León', id_state:'nuevo_leon', ciudad:'San Nicolas de los Garza' },
            { state:'Nuevo León', id_state:'nuevo_leon', ciudad:'San Pedro Garza Garcia' },
            { state:'Nuevo León', id_state:'nuevo_leon', ciudad:'Santa Catarina' },

            { state:'Sinaloa', id_state:'sinaloa', ciudad:'Concordia' },
            { state:'Sinaloa', id_state:'sinaloa', ciudad:'El Roble' },
            { state:'Sinaloa', id_state:'sinaloa', ciudad:'El Rosario' },
            { state:'Sinaloa', id_state:'sinaloa', ciudad:'Escuinapa' },
            { state:'Sinaloa', id_state:'sinaloa', ciudad:'Mazatlan'  },
            { state:'Sinaloa', id_state:'sinaloa', ciudad:'Villa Unión' },

            { state:'Zacatecas', id_state:'zacatecas', ciudad:'Concha del Oro' },
            { state:'Zacatecas', id_state:'zacatecas', ciudad:'Fresnillo' },
            { state:'Zacatecas', id_state:'zacatecas', ciudad:'Juan Aldama' },
            { state:'Zacatecas', id_state:'zacatecas', ciudad:'Miguel Auza' },
            { state:'Zacatecas', id_state:'zacatecas', ciudad:'Rio Grande' },
            { state:'Zacatecas', id_state:'zacatecas', ciudad:'Sombrerete' },
            { state:'Zacatecas', id_state:'zacatecas', ciudad:'Zacatecas' },
        ],
        cities: [],
        state:'',
        currentid_State: 'coahuila',
        mobile_view: false,
        socios_show: 5,
        currentState: 'coahuila',
        currentCities: [],
        responsive:{
            mision: false
        }
    },
    created() {
        this.getProducts()
        this.getCitiesPerState()

        if (window.outerWidth < 769) {
            this.mobile_view = true
            // this.socios_show = 7
            // this.responsive.mision = true
        }
    },
    mounted () {
        if ($('#container_states_cities ul')) {
            let el = this
            $('#container_states_cities ul').querySelectorAll('li').forEach(x => x.getAttribute('id') == el.currentState && x.classList.add('active'))
        }
    },
    methods: {
        getCitiesPerState: function () {
            this.currentCities = this.allCities.filter(x => x.id_state == this.currentState)
        },
        getProducts: async function () {
            try {
                let results = await asyncData('GET', 'getProducts')
                this.articulosInvierno = results.datos.filter(({ invierno }) => invierno == 1)

            } catch (error) {
                console.log(error.message);
            }
        },
        redireCta: function(redirect) {
            if (redirect == 'cata') {
                location.href = "catalogo.php"
                return
            }
            location.href = "contacto.php?v=" + redirect
        },
        selectState: function (state) {
            if (this.currentState != state) {
                this.currentState = state

                $(`#container_states_cities ul li#${ state }`).classList.add('active')
            
                $('#container_states_cities ul').querySelectorAll('li').forEach(x => {
                    x.style.height = x.querySelector('a').clientHeight + 1 + 'px'
                    if (x !== $(`#container_states_cities ul li#${ state }`) && x.classList.contains('active')) {
                        x.classList.remove('active')
                    }
                })
                
                if ($(`#container_states_cities ul li#${ state }`).classList.contains('active')) {
                    setTimeout(() => {
                        let divHeight = $(`#container_states_cities ul li#${ state }`).querySelector('div').clientHeight,
                        aHeight = $(`#container_states_cities ul li#${ state }`).querySelector('a').clientHeight + 1
                        
                        $(`#container_states_cities ul li#${ state }`).style.height = aHeight + divHeight + 'px'
                    }, 100);
                }
                this.getCitiesPerState()
            }
        }
        // showMenu: function (e, opc) {
        //     if (!this.mobile_view) {
        //         return
        //     }
        //     let height = 0
        //     let ul = $('section#app nav#nav article ul')

        //     if (!opc) {
        //         if (ul.clientHeight < 1) {
        //             let nav_elements = ul.children

        //             Array.from(nav_elements).forEach(element => {
        //                 height += element.clientHeight
        //             });

        //         }
        //         ul.style.height = height + 'px'
        //     } else {
        //         height = 0
        //         setTimeout(() => {
        //             ul.style.height = height + 'px'
        //         }, 200);
        //     }
        // }
    }
})


        /*products2: [
            { descr:'Tuerca Loca C/Espiga Bronce', alt:'Tuerca Loca C/Espiga Bronce | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:"TLB-08", tipo:'', medida:'08 5/16', venta:'Bolsa c/25/1000 pzas.' },
                { code:"TLB-10", tipo:'', medida:'10 3/8',  venta:'Bolsa c/25/1000 pzas.' }
            ], unidad:'pza.', path:'xxa_1164.jpg'}, 
            { descr:'Tuerca Loca Galvanizada C/Espiga', alt:'Tuerca Loca Galvanizada C/Espiga | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:"TLG", tipo:'', medida:'10 3/8', venta:'Bolsa c/20 pzas.' },
            ], unidad:'pza.', path:'xxa_1059.jpg'}, 
            { descr:'Multi-Contacto', alt:'Multi-Contacto | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:"MCP-6", tipo:'ATERRIZADA TIR-002 IMPORTADO', medida:'C/6 Contactos', venta:'Empaq. C/40 pzas.' },
            ], unidad:'pza.', path:'xxa_572.jpg'}, 
            { descr:'Calefactor Eléctrico S.S.', alt:'Calefactor Eléctrico S.S. | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:"CE-080", tipo:'TAE800QX TRAVELAIRE', medida:'400/800 watts', venta:'' },
            ], unidad:'', path:'xxa_722.jpg'}, 
            { descr:'Regulador S/Accesorios PRECIMEX 1 Vía P/Gas', alt:'Regulador S/Accesorios PRECIMEX 1 Vía P/Gas | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'RG-1', tipo:'R-3001-A00 324007', medida:'1 Vía', venta:'Caja C/40 pzas.' },
            ], unidad:'pza.', path:'xxa_30.jpg'}, 
            { descr:'Codo Estufa Gas', alt:'Codo Estufa Gas | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'CEG-1013', tipo:'1013', medida:'3/8 x 1/2', venta:'Bolsa C/25/300', image:'' },
                { code:'CEG-0810', tipo:'0810', medida:'5/16 x 3/8', venta:'Bolsa C/25/250', image:'' },
                { code:'CEG-0813', tipo:'0813', medida:'5/16 x 1/2', venta:'Bolsa C/25/250', image:'' },
                { code:'CEG-1010', tipo:'1010', medida:'3/8 x 3/8', venta:'Bolsa C/25/250', image:'' },
            ], unidad:'pzas.', path:'xxa_965.jpg'},
            { descr:'Niple Terminal Gas', alt:'Niple Terminal Gas | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'NTG-0613', tipo:'0613', medida:'1/4 x 1/2',  venta:'Bolsa C/25/500 pzas.' },
                { code:'NTG-0810', tipo:'0810', medida:'5/16 x 3/8', venta:'Bolsa C/25/500 pzas.' },
                { code:'NTG-0813', tipo:'0813', medida:'5/16 x 1/2', venta:'Bolsa C/25/500 pzas.' },
                { code:'NTG-1006', tipo:'1006', medida:'3/8 x 1/4',  venta:'Bolsa C/40/500 pzas.' },
                { code:'NTG-1010', tipo:'1010', medida:'3/8 x 3/8',  venta:'Bolsa C/25/500 pzas.' },
                { code:'NTG-1013', tipo:'1013', medida:'3/8 x 1/2',  venta:'Bolsa C/25/500 pzas.' },
                { code:'NTG-0806', tipo:'0806', medida:'5/16 x 1/4', venta:'Bolsa C/25/500 pzas.' },
            ], unidad:'pzas.', path:'xxa_1211.jpg'},
            { descr:'Válvula de Aguja Fleare P/Gas', alt:'Válvula de Aguja Fleare P/Gas | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'VAG-0808', tipo:'0808 VAMM0808V IMPORTADO', medida:'5/16 x 5/16', venta:'Bolsa C/20/200 pzas.' },
            ], unidad:'pza.', path:'xxa_385.jpg'},
            { descr:'Niple Espiga Macho', alt:'Niple Espiga Macho | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'NETM-1006', tipo:'1006', medida:'3/8 x 1/4', venta:'Bolsa C/25/500 pzas.' },
                { code:'NETM-1010', tipo:'1010', medida:'3/8 x 3/8', venta:'Bolsa C/25/500 pzas.' }
            ], unidad:'pza.', path:'xxa_467.jpg'},
            { descr:'Espuma de Poliuretano', alt:'Espuma de Poliuretano | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'EP', tipo:'MARAGA', medida:'340 grms.', venta:'Caja C/20 Pzas.' },
            ], unidad:'pza.', path:'xxa_890.jpg'},
            { descr:'Manguera Pigtail Aluminio C/Maneral', alt:'Manguera Pigtail Aluminio C/Maneral | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'MP', tipo:'362496 IUSA', medida:'3/8 x 50 cms.', venta:'Caja C/50 pzas.' },
                { code:'AG-P55', tipo:'A.I. COPLEX', medida:'7/16 x 55 cms.', venta:'Caja C/25 pzas.' } // image:'xxa_2265.jpg'
            ], unidad:'pza.', path:'xxa_384.jpg'},
            { descr:'Soplete P/Tanque Desechable', alt:'Soplete P/Tanque Desechable | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'SM', tipo:'339294 PRECIMEX',                medida:'901', venta:'Caja C/10 pzas.' },
                { code:'SA', tipo:'TIPO AMERICANO 339287 PRECIMEX', medida:'902', venta:'Caja C/10 pzas.' }, //xxa_985.jpg
            ], unidad:'pza.', path:'xxa_1020.jpg'},
            { descr:'Termopar Piloto', alt:'Termopar Piloto | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'TP', tipo:'P/GAS L.P. (Roja)',      medida:'24"', venta:'Bolsa C/10 pzas.' },
                { code:'TPN', tipo:'P/GAS Natural (Negra)', medida:'24"', venta:'Bolsa C/10 pzas.' },
            ], unidad:'pza.', path:'xxa_105.jpg'},
            { descr:'Tuerca Unitrol', alt:'Tuerca Unitrol | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'TU', tipo:'TUN-10', medida:'', venta:'Bolsa C/25/500 pzas.' },
            ], unidad:'pza.', path:'xxa_1203.jpg'},
            { descr:'Anticongelante BARDAHL Listo P/Usar', alt:'Anticongelante BARDAHL Listo P/Usar | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'ARC', tipo:'-24oC 14713', medida:'4 Ltos.', venta:'Caja C/4 Gal.' },
            ], unidad:'Gal.', path:'xxa_601.jpg'},
            { descr:'Termostato Automático P/Boiler S/Accesorios', alt:'Termostato Automático P/Boiler S/Accesorios | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'TA', tipo:'495066 IUSA', medida:'', venta:'Caja C/20 pzas.' },
            ], unidad:'pza.', path:'xxa_578.jpg'},
            { descr:'Estufa DISA P/Gas', alt:'Estufa DISA P/Gas | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'E-2', tipo:'02-02-0-103', medida:'2 Quemadores', venta:'' },
            ], unidad:'', path:'xxa_560.jpg'},
            { descr:'Tanque Turner', alt:'Tanque Turner | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'TAA', tipo:'Azul Propano TU9',              medida:'400 grms.', venta:'Caja C/12 pzas.' },
                { code:'TAN', tipo:'Negro Gas CLEAN BURNE CB-1000', medida:'400 grms.', venta:'Caja C/12 pzas.' }, //xxa_2175.jpg
            ], unidad:'pza.', path:'xxa_1238.jpg'},
            { descr:'Tanque Desechable Gas L.P.', alt:'Tanque Desechable Gas L.P. | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'TAG', tipo:'616103 IUSA', medida:'275 grms.', venta:'Caja C/12' }
            ], unidad:'pza.', path:'xxa_602.jpg'},
            { descr:'Valvula P/Tanque Estacionario De Llenado', alt:'Valvula P/Tanque Estacionario De Llenado | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'VLE', tipo:'V-2028 311809 IUSA', medida:'1/4 MNPT x 1 3/4 ACME', venta:'Caja C/50 pzas.', image:'' },
            ], unidad:'pza.', path:'xxa_555.jpg'},
            { descr:'Perilla de Cruz P/Termostato', alt:'Perilla de Cruz P/Termostato | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'PCR', tipo:'28403', medida:'', venta:'Bolsa C/100 pzas.' },
            ], unidad:'pzas.', path:'xxa_1130.jpg'},
            { descr:'Valvula P/Tanque Estacionario De Servicio', alt:'Valvula P/Tanque Estacionario De Servicio | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'VSE', tipo:'V-2043 338493 IUSA', medida:'15 cms.', venta:'Caja C/40' },
            ], unidad:'pza.', path:'xxa_554.jpg'},
            { descr:'Calentador P/Agua', alt:'Calentador P/Agua | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'CA-9', tipo:'CAL-005 IMPORTADO', medida:'#9 (35 Ltos.)', venta:'Caja C/10/150 pzas.' },
                { code:'CA-4', tipo:'1289 IMPORTADO', medida:'#4 (15 Ltos.)', venta:'Caja C/50/100 pzas.' },
                { code:'CA-6', tipo:'4556 LION TOOLS IMPORTADO', medida:'#6 (20 Ltos.)', venta:'Caja C/50/150 pzas.' },
            ], unidad:'', path:'xxa_1206.jpg'},
            { descr:'Jaula Ratonera Base de Lamina', alt:'Jaula Ratonera Base de Lamina | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'JR-3', tipo:'No. 3 Grande', medida:'10"L x 5"A', venta:'Atado C/20 pzas.' },
            ], unidad:'pza.', path:'xxa_1308.jpg'},
            { descr:'Maneral C/Espiga y Punta Pool de Aluminio', alt:'Maneral C/Espiga y Punta Pool de Aluminio | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'MPAE', tipo:'', medida:'3/8', venta:'Bolsa C/5 jgos.' },
            ], unidad:'jgo.', path:'xxa_517.jpg'},
            { descr:'Maneral C/Rosca y Punta Pool de Aluminio', alt:'Maneral C/Rosca y Punta Pool de Aluminio | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'MPAF', tipo:'Rosca FLER', medida:'3/8', venta:'Bolsa C/5 jgos.' },
                { code:'MPAN', tipo:'Rosca NPT', medida:'1/4', venta:'Bolsa C/5 jgos.' },
            ], unidad:'jgo.', path:'xxa_516.jpg'},
            { descr:'Parrilla Eléctrica Cuadrada C/Termostato S/Asa', alt:'Parrilla Eléctrica Cuadrada C/Termostato S/Asa | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'PE-1', tipo:'B761 BETA', medida:'1 Quemador', venta:'' },
            ], unidad:'', path:'xxa_639.jpg'},
            { descr:'Parrilla Eléctrica C/Termostato S/Asa', alt:'Parrilla Eléctrica C/Termostato S/Asa | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'PE-2', tipo:'B762 BETA', medida:'2 Quemadores', venta:'' },
            ], unidad:'', path:'xxa_1148.jpg'},
            { descr:'Quemador Industrial', alt:'Quemador Industrial | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'QI-2', tipo:'Sin Valvula Eco-Flama', medida:'No. 2', venta:'Caja C/30 pzas.' },
            ], unidad:'pza.', path:'xxa_710.jpg'},
            { descr:'Regulador P/T. Estacionario B.P. BARO C/Punta Pool', alt:'Regulador P/T. Estacionario B.P. BARO C/Punta Pool | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'RETE', tipo:'Punta Pool C-2 311789', medida:'', venta:'Caja C/16 pzas.' },
            ], unidad:'pza.', path:'xxa_931.jpg'},
            { descr:'Regulador S/Accesorios PRECIMEX 2 Vías P/Gas', alt:'Regulador S/Accesorios PRECIMEX 2 Vías P/Gas | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'RG-2', tipo:'R-2001-A00 323986', medida:'', venta:'Caja C/40 pzas.' },
            ], unidad:'pza.', path:'xxa_31.jpg'},
            { descr:'Boiler P/Gas L.P. Automático', alt:'Boiler P/Gas L.P. Automático | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'BA-10', tipo:'217790 PRIMO IUSA', medida:'10 Galones.', venta:'' },
            ], unidad:'pza.', path:'xxa_1154.jpg'},
            { descr:'Boiler de Leña', alt:'Boiler de Leña | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'bl-40', tipo:'#1', medida:'40 ltos.', venta:'' },
                { code:'bl-50', tipo:'#2', medida:'50 ltos.', venta:'' },
            ], unidad:'pza.', path:'xxa_1198.jpg'},
            { descr:'Cilindro P/Gas', alt:'Cilindro P/Gas | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'CG-10', tipo:'C/Válvula CEMCO ARMEBE', medida:'9 kg. Aprox.', venta:'' },
            ], unidad:'pza.', path:'xxa_600.jpg'},
            { descr:'Extensión Domestica Cal. 16', alt:'Extensión Domestica Cal. 16 | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'EXT-3',  tipo:'KLEY',        medida:'03 mtos.', venta:'C/10/100 pzas.' },
                { code:'EXT-5',  tipo:'KLEY',        medida:'05 mtos.', venta:'C/10/100 pzas.' },
                { code:'EXT-6',  tipo:'KLEY',        medida:'06 mtos.', venta:'C/10/100 pzas.' },
                { code:'EXT-2',  tipo:'KLEY/IGOTO',  medida:'02 mtos.', venta:'C/10/100 pzas.' },
                { code:'EXT-8',  tipo:'KLEY/IGOTO*', medida:'08 mtos.', venta:'C/10/50 pzas.' },
                { code:'EXT-4',  tipo:'KLEY/IGOTO*', medida:'04 mtos.', venta:'C/10/100 pzas.' },
                { code:'EXT-10', tipo:'KLEY/IGOTO*', medida:'10 mtos.', venta:'C/10/50 pzas.' },
            ], unidad:'pza.', path:'xxa_122.jpg'},
            { descr:'Manguera Tramada Transparente MAFENSA', alt:'Manguera Tramada Transparente MAFENSA | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'MG-06', tipo:'', medida:'06 mm. 1/4', venta:'C/100 mtos.' },
                { code:'MG-08', tipo:'', medida:'08 mm. 5/16', venta:'C/100 mtos.' },
                { code:'MG-10', tipo:'', medida:'10 mm. 3/8', venta:'C/100 mtos.' },
            ], unidad:'mtos.', path:'xxa_57.jpg'},
            { descr:'Manguera Tramada Amarilla MAFENSA', alt:'Manguera Tramada Amarilla MAFENSA | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'MG-11', tipo:'', medida:'10 mm. 3/8', venta:'C/100 mtos.' },
            ], unidad:'pza.', path:'xxa_592.jpg'},
            { descr:'Regulador C/Maneral y Pool PRECIMEX P/Gas', alt:'Regulador C/Maneral y Pool PRECIMEX P/Gas | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'RMA-1', tipo:'R-3001AS0 324006', medida:'1 Vía', venta:'Caja C/40 pzas.' },
            ], unidad:'pza.', path:'xxa_1254.jpg'},
            { descr:'Regulador C/Accesorios P/Gas NACOBRE', alt:'Regulador C/Accesorios P/Gas NACOBRE | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'RNA-1', tipo:'RN-1AE', medida:'1 Vía', venta:'Caja C/12 pzas.' },
            ], unidad:'pza.', path:'xxa_1063.jpg'},
            { descr:'Regulador C/Accesorios P/Gas BARO', alt:'Regulador C/Accesorios P/Gas BARO | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'RCA-1', tipo:'MOD. 102 En Caja 267369', medida:'1 Vía', venta:'Caja C/8 pzas.' },
            ], unidad:'pza.', path:'xxa_723.jpg'},
            { descr:'Tapón Hembra Gas', alt:'Tapón Hembra Gas | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'TH-10', tipo:'', medida:'10 3/8', venta:'Bolsa C/25/500 pzas.' },
            ], unidad:'pza.', path:'xxa_1151.jpg'},
            { descr:'Válvula Invierno', alt:'Válvula Invierno | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'VI-08', tipo:'0813 IMPORTADO', medida:'5/16 x 1/2 190HF8-SM', venta:'Caja C/20/200 pzas.' },
                { code:'VI-10', tipo:'1013 IMPORTADO', medida:'3/8 x 1/2 190HF8-6M', venta:'Bolsa C/20/200 pzas.' },
            ], unidad:'pza.', path:'xxa_716.jpg'},
            { descr:'Punta Pool C/Espiga Gas', alt:'Punta Pool C/Espiga Gas | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'PPE-06', tipo:'1006', medida:'3/8 x 6 cms.', venta:'Bolsa C/20/250 pzas.' },
                { code:'PPE-12', tipo:'1012 XPE-12-00', medida:'3/8 x 12 cms.', venta:'Bolsa C/25/250 pzas.' },
            ], unidad:'pza.', path:'xxa_294.jpg'}, 
            { descr:'Punta Pool C/Rosca Gas', alt:'Punta Pool C/Rosca Gas | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'PPR-06', tipo:'0606', medida:'1/4 x 6 cms.', venta:'Bolsa C/30/500 pzas.' },
                { code:'PPR-12', tipo:'0612', medida:'1/4 x 12 cms.', venta:'Bolsa C/25/250 pzas.' },
            ], unidad:'pza.', path:'xxa_341.jpg'}, 
            { descr:'Tubo De Cobre Flexible U.G. IUSA', alt:'Tubo De Cobre Flexible U.G. IUSA | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'TCF-10', tipo:'308805', medida:'10 mm. 3/8', venta:'Caja C/10 Rol. 18.29 mtos.' },
                { code:'TCF-08', tipo:'308804', medida:'08 mm. 5/16', venta:'Caja C/10 Rol. 18.29 mtos.' },
            ], unidad:'Rol.', path:'xxa_26.jpg'}, 
            { descr:'Tuerca Conica Gas', alt:'Tuerca Conica Gas | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'TCG-06', tipo:'', medida:'06 1/4', venta:'Bolsa C/25 pzas.' },
                { code:'TCG-08', tipo:'', medida:'08 5/16', venta:'Bolsa C/25 pzas.' },
                { code:'TCG-10', tipo:'', medida:'10 3/8', venta:'Bolsa C/20 pzas.' },
                { code:'TCG-13', tipo:'', medida:'13 1/2', venta:'Bolsa C/50 pzas.' },
            ], unidad:'pza.', path:'xxa_224.jpg'}, 
            { descr:'Tuerca Izquierda Gas', alt:'Tuerca Izquierda Gas | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'TIG-16', tipo:'TIZ25', medida:'7/8', venta:'Bolsa C/25/500 pzas.' },
            ], unidad:'pza.', path:'xxa_68.jpg'},
            { descr:'Manguera P/Boiler Alum.', alt:'Manguera P/Boiler Alum. | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'MB-1919',   tipo:'MB1919X60 IMPORTADO', medida:'3/4 x 3/4 * 60 cms.', venta:'C/10/100 pzas.' },
                { code:'MB-1913',   tipo:'MB1319X60 IMPORTADO', medida:'1/2 x 3/4 * 60 cms.', venta:'C/10/100 pzas.' },
                { code:'MB-1313',   tipo:'MB1313X60 IMPORTADO', medida:'1/2 x 1/2 * 60 cms.', venta:'C/10/100 pzas.' },
                { code:'MB-131980', tipo:'MB1319X80 IMPORTADO', medida:'1/2 x 3/4 * 80 cms.', venta:'C/10/100 pzas.' },
                { code:'MB-131380', tipo:'MB1313X80 IMPORTADO', medida:'1/2 x 1/2 * 80 cms.', venta:'C/10/100 pzas.' },
            ], unidad:'pza.', path:'xxa_465.jpg'},
            { descr:'Extensión Uso Rudo Cal. 16', alt:'Extensión Uso Rudo Cal. 16 | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'EXTUR-03', tipo:'KLEY',       medida:'03 mts. C/10/50 pzas.', venta:'' },
                { code:'EXTUR-05', tipo:'KLEY',       medida:'05 mts. C/10/40 pzas.', venta:'' },
                { code:'EXTUR-08', tipo:'KLEY',       medida:'08 mts. C/10/30 pzas.', venta:'' },
                { code:'EXTUR-15', tipo:'KLEY/IGOTO', medida:'15 mts. C/16 pzas.',    venta:'' },
                { code:'EXTUR-30', tipo:'KLEY',       medida:'30 mts. C/8 pzas.',     venta:'' },
                { code:'EXTUR-02', tipo:'KLEY',       medida:'02 mts. C/10/50 pzas.', venta:'' },
            ], unidad:'pza.', path:'xxa_159.jpg'},
            { descr:'Niple Campana Gas', alt:'Niple Campana Gas | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'NCG-0806', tipo:'0806', medida:'5/16 x 1/4', venta:'Bolsa C/25/500 pzas.' },
                { code:'NCG-0810', tipo:'0810', medida:'5/16 x 3/8', venta:'Bolsa C/25/500 pzas.' },
                { code:'NCG-0813', tipo:'0813', medida:'5/16 x 1/2', venta:'Bolsa C/25/500 pzas.' },
                { code:'NCG-1006', tipo:'1006', medida:'3/8 x 1/4',  venta:'Bolsa C/25/500 pzas.' },
                { code:'NCG-1010', tipo:'1010', medida:'3/8 x 3/8',  venta:'Bolsa C/25/500 pzas.' },
                { code:'NCG-1013', tipo:'1013', medida:'3/8 x 1/2',  venta:'Bolsa C/25/500 pzas.' },
            ], unidad:'pza.', path:'xxa_982.jpg'},
            { descr:'Niple Unión Gas', alt:'Niple Unión Gas | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'NUG-0808', tipo:'0808', medida:'5/16 x 5/16', venta:'Bolsa C/25/500 pzas.' },
                { code:'NUG-1010', tipo:'1010', medida:'3/8 x 3/8',   venta:'Bolsa C/25/500 pzas.' },
                { code:'NUG-0806', tipo:'0806', medida:'5/16 x 1/4',  venta:'Bolsa C/25/500 pzas.' },
            ], unidad:'pza.', path:'xxa_1490.jpg'},
            { descr:'Tuerca Conica Reducida Gas', alt:'Tuerca Conica Reducida Gas | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'TCR-0806', tipo:'0806', medida:'5/16 a 1/4', venta:'Bolsa C/20 pzas.' },
                { code:'TCR-1008', tipo:'1008', medida:'3/8 a 5/16', venta:'Bolsa C/20 pzas.' },
            ], unidad:'pza.', path:'xxa_1210.jpg'},
            { descr:'TEE Terminal Gas', alt:'TEE Terminal Gas | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'TTG-0810', tipo:'', medida:'08 5/16', venta:'Bolsa C/25/500 pzas.' },
                { code:'TTG-1010', tipo:'', medida:'10 3/8',  venta:'Bolsa C/25/500 pzas.' },
            ], unidad:'pzas.', path:'xxa_472.jpg'},
            { descr:'TEE Unión Gas', alt:'TEE Unión Gas | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'TUG-0808', tipo:'08', medida:'5/16', venta:'Bolsa C/25/500 pzas.', image:'' },
            ], unidad:'pza.', path:'xxa_464.jpg'},
            { descr:'Manguera Flexible Inserto Laton', alt:'Manguera Flexible Inserto Laton | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'MA-08-0.6', tipo:'CNX', medida:'08 5/16 x 0.6 mtos.', venta:'Atado C/5/30 pzas.' },
                { code:'MA-08-1.5', tipo:'CNX', medida:'08 5/16 x 1.5 mtos.', venta:'Atado C/5/100 pzas.' },
                { code:'MA-08-2.0', tipo:'CNX', medida:'08 5/16 x 2.0 mtos.', venta:'Atado C/10/75 pzas.' },
                { code:'MA-08-3.0', tipo:'CNX', medida:'08 5/16 x 3.0 mtos.', venta:'Atado C/10 pzas.' },
                { code:'MA-08-5.0', tipo:'CNX', medida:'08 5/16 x 5.0 mtos.', venta:'Atado C/8/40 pzas.' },
                { code:'MA-10-0.6', tipo:'CNX', medida:'10 3/8 x 0.6 mtos.',  venta:'Atado C/10 pzas.' },
                { code:'MA-10-1.0', tipo:'CNX', medida:'10 3/8 x 1.0 mtos.',  venta:'Atado C/10 pzas.' },
                { code:'MA-10-1.5', tipo:'CNX', medida:'10 3/8 x 1.5 mtos.',  venta:'Atado C/10 pzas.' },
                { code:'MA-10-2.0', tipo:'CNX', medida:'10 3/8 x 2.0 mtos.',  venta:'Atado C/75 pzas.' },
            ], unidad:'pzas.', path:'xxa_717.jpg'},
            { descr:'Niple Espiga Hembra Tropicalizado', alt:'Niple Espiga Hembra Tropicalizado | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'NECG-1010', tipo:'1010', medida:'3/8 x 3/8', venta:'Bolsa C/20 pzas.' },
            ], unidad:'pza.', path:'xxa_1070.jpg'},
            { descr:'Niple Espiga Hembra', alt:'Niple Espiga Hembra | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'NECH-1013', tipo:'1013', medida:'3/8 x 1/2', venta:'Bolsa C/25 pzas.' },
                { code:'NECH-1010', tipo:'1010', medida:'3/8 x 3/8', venta:'Bolsa C/30/300 pzas.' },
            ], unidad:'pza.', path:'xxa_469.jpg'},
            { descr:'Ratonera de Madera', alt:'Ratonera de Madera | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'RAC', tipo:'P/Ratón VIC040 VICTOR', medida:'Chica', venta:'Caja C/72 pzas.' },
                { code:'RAG', tipo:'P/Rata VIC200 VICTOR',  medida:'Grande', venta:'Caja C/12 pzas.' },
            ], unidad:'pza.', path:'xxa_302.jpg'},
            { descr:'Pigtail P/Cilindro Gas', alt:'Pigtail P/Cilindro Gas | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'PG', tipo:'NACOBRE', medida:'PTI-6X50', venta:'Bolsa C/20 pzas.' },
            ], unidad:'pza.', path:'xxa_32.jpg'},
            { descr:'Resistencia Kley P/Regadera Eléctrica', alt:'Resistencia Kley P/Regadera Eléctrica | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'RK', tipo:'RES-004', medida:'', venta:'Caja C/100 pzas.' },
            ], unidad:'pza.', path:'xxa_1201.jpg'},
            { descr:'Regadera Eléctrica LORENZETTI Ultra', alt:'Regadera Eléctrica LORENZETTI Ultra | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'RE', tipo:'', medida:'', venta:'Caja C/21 pzas.' },
            ], unidad:'pzas.', path:'xxa_903.jpg'},
            { descr:'Resistencia P/Regadera LORENZETTI Ultra', alt:'Resistencia P/Regadera LORENZETTI Ultra | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'RS', tipo:'', medida:'', venta:'Caja C/24 pzas.' },
            ], unidad:'pza.', path:'xxa_1039.jpg'},
            { descr:'Soplete 902 P/TANQUE DESECHABLE TIPO AMERICANO', alt:'Soplete 902 P/TANQUE DESECHABLE TIPO AMERICANO | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'SA', tipo:'339287 PRECIMEX', medida:'902', venta:'Caja C/10 pzas.', image:'' },
            ], unidad:'pza.', path:'xxa_985.jpg'},
            { descr:'Termocople Std.', alt:'Termocople Std. | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'TC', tipo:'', medida:'24"', venta:'Bolsa C/100 pzas.' },
            ], unidad:'pza.', path:'xxa_104.jpg'},
            { descr:'Válvula de Aguja Hembra P/Gas', alt:'Válvula de Aguja Hembra P/Gas | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'vah-0606', tipo:'0606 VAH0606NPTV IMPORTADO', medida:'1/4 X 1/4', venta:'Bolsa C/10/200 pzas.' },
            ], unidad:'pza.', path:'xxa_988.jpg'},
            { descr:'Parrilla Eléctrica Redonda Directa', alt:'Parrilla Eléctrica Redonda Directa | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'PS-1', tipo:'B788 BETA', medida:'', venta:'Caja C/10 pzas.' },
            ], unidad:'pza.', path:'xxa_1048.jpg'},
            { descr:'Válvula de Aguja P/Gas', alt:'Válvula de Aguja P/Gas | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'VAFH-1006', tipo:'1006 VAHM1006 IMPORTADO', medida:'3/8 FLEARE X 1/4 HEMBRA', venta:'Bolsa C/20/200 pzas.' },
            ], unidad:'pza.', path:'xxa_1354.jpg'},
            { descr:'Cinta Teflón Amarilla', alt:'Cinta Teflón Amarilla | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'CTG-13', tipo:'7011 IMPORTADO', medida:'1/2 X 7.00 mtos.', venta:'Empaq. C/10/500 pzas.' },
            ], unidad:'pza.', path:'xxa_1394.jpg'},
            { descr:'Anticongelante Bardahl Concentrado', alt:'Anticongelante Bardahl Concentrado | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'APC-4', tipo:'-54oC 14703', medida:'4 Ltos.', venta:'Caja C/4 Gal.' },
            ], unidad:'Gal.', path:'xxa_724.jpg'},
            { descr:'Ratonera De Pegamento Mediana', alt:'Ratonera De Pegamento Mediana | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'RAP-M', tipo:'VIC320I VICTOR', medida:'', venta:'Caja C/150 pzas.' },
            ], unidad:'pza.', path:'xxa_329.jpg'},
            { descr:'Resistencia P/Parrilla', alt:'Resistencia P/Parrilla | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'R-800', tipo:'11224 ALFA', medida:'800 watts.', venta:'Caja C/50 pzas.' },
            ], unidad:'pza.', path:'xxa_1442.jpg'},
            { descr:'Resistencia Calibre 18 P/Parrilla', alt:'Resistencia Calibre 18 P/Parrilla | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'R-018', tipo:'7114 ALFA', medida:'', venta:'Caja C/100 pzas.' },
            ], unidad:'pza.', path:'xxa_1441.jpg'},
            { descr:'Manguera Flexible Inserto Aluminio 10', alt:'Manguera Flexible Inserto Aluminio 10 | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'ME-10-15', tipo:'', medida:'3/8 x 1.5 mtos.', venta:'Bolsa C/25 pzas.' },
                { code:'ME-10-20', tipo:'', medida:'3/8 x 2.0 mtos.', venta:'Bolsa C/25 pzas.' },
                { code:'ME-10-30', tipo:'', medida:'3/8 x 3.5 mtos.', venta:'Bolsa C/25 pzas.' },
                { code:'ME-10-50', tipo:'', medida:'3/8 x 5.0 mtos.', venta:'Bolsa C/25 pzas.' },
                { code:'ME-10-10', tipo:'', medida:'3/8 x 1.0 mtos.', venta:'Bolsa C/25 pzas.' },
            ], unidad:'pza.', path:'xxa_1671.jpg'},
            { descr:'Estufa ALFA P/Gas 2 Quemadores', alt:'Estufa ALFA P/Gas 2 Quemadores | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'EA-2', tipo:'3035', medida:'2 Quemadores', venta:'' },
            ], unidad:'', path:'xxa_1450.jpg'},
            { descr:'Estufa ALFA P/Gas 4 Quemadores', alt:'Estufa ALFA P/Gas 4 Quemadores | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'EA-4', tipo:'3115', medida:'4 Quemadores', venta:'' },
            ], unidad:'', path:'xxa_1439.jpg'},
            { descr:'Válvula Para Estufa', alt:'Válvula Para Estufa | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'VEMM', tipo:'311843 IUSA', medida:'1/8 NPT ESPREA 70', venta:'Caja C/100 pzas.' },
            ], unidad:'pza.', path:'xxa_1454.jpg'},
            { descr:'Funda Horizontal/Lateral Gris Afelpado P/Aparato de Refrigeración', alt:'Funda Horizontal/Lateral Gris Afelpado P/Aparato de Refrigeración | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'FAH-3', tipo:'R35-HL', medida:'3500 A 3800', venta:'' },
                { code:'FAH-4', tipo:'R45-HL', medida:'4500 A 4800', venta:'' },
                { code:'FAH-6', tipo:'R65-HL', medida:'6500 A 6800', venta:'' },
            ], unidad:'', path:'xxa_1522.jpg'},
            { descr:'Funda Vertical/Baja Gris Afelpado P/Aparato de Refrigeración', alt:'Funda Vertical/Baja Gris Afelpado P/Aparato de Refrigeración | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'FAV-4', tipo:'R45-VCUB', medida:'4500 A 4800', venta:'' },
                { code:'FAV-6', tipo:'R65-VCUB', medida:'6500 A 6800', venta:'' },
            ], unidad:'', path:'xxa_1522.jpg'},
            { descr:'Calentador P/Agua Kley', alt:'Calentador P/Agua Kley | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'CI-9', tipo:'CAL-006B', medida:'200 watts. (35 ltos.)', venta:'Caja C/10/50 pzas.' },
            ], unidad:'pza.', path:'xxa_1533.jpg'},
            { descr:'Maneral Largo C/Rosca y Punta Pool de Aluminio', alt:'Maneral Largo C/Rosca y Punta Pool de Aluminio | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'MPLN', tipo:'', medida:'Rosca NPT 1/4', venta:'Bolsa C/5 jgos.' },
            ], unidad:'jgo.', path:'xxa_1561.jpg'},
            { descr:'Válvula P/Tanque Carburación de Llenado', alt:'Válvula P/Tanque Carburación de Llenado | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'VLT', tipo:'V-2018 311813 IUSA', medida:'3/4 MNPT x 1 3/4 ACME', venta:'Caja C/40 pzas.' },
            ], unidad:'pza.', path:'xxa_1574.jpg'},
            { descr:'Válvula P/Tanque Carburación de Servicio', alt:'Válvula P/Tanque Carburación de Servicio | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'VTC', tipo:'V-2015 311812 IUSA', medida:'3/8 FLER x 3/4 MNPT', venta:'Caja C/20 pzas.' },
            ], unidad:'pza.', path:'xxa_1573.jpg'},
            { descr:'Cople Union R. Interior', alt:'Cople Union R. Interior | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'CUF-08', tipo:'Interior 08 COPUF0808', medida:'5/16 FLER', venta:'Bolsa C/25/500 pzas.' },
            ], unidad:'pza.', path:'xxa_1603.jpg'},
            { descr:'Perilla Iusatrol Caper P/Termostato', alt:'Perilla Iusatrol Caper P/Termostato | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'PIU', tipo:'371252', medida:'', venta:'Bolsa C/5/30 pzas.' },
            ], unidad:'pza.', path:'xxa_1616.jpg'},
            { descr:'Codo Terminal Gas', alt:'Codo Terminal Gas | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'CTG-0810', tipo:'0810', medida:'5/16 x 3/8', venta:'Bolsa C/25/500 pzas.' },
            ], unidad:'pza.', path:'xxa_1620.jpg'},
            { descr:'Poliburbuja Natural P/Empaque', alt:'Poliburbuja Natural P/Empaque | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'BN-04060', tipo:'', medida:'Natural 3/16 de 1.20 x 60 mtos.', venta:'Solo Atado C/3 Rollos.' },
            ], unidad:'Rollo.', path:'xxa_1659.jpg'},
            { descr:'Boiler de Leña Galv.', alt:'Boiler de Leña Galv. | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'BLE-40', tipo:'#1', medida:'40 ltos.', venta:'' },
                { code:'BLE-60', tipo:'#2', medida:'60 ltos.', venta:'' },
            ], unidad:'', path:'xxa_1698.jpg'},
            { descr:'Regulador C/Accesorios PRECIMEX', alt:'Regulador C/Accesorios PRECIMEX | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'rpc-1', tipo:'R-3001-AZO 324005', medida:'1 Vía', venta:'Caja C/40 pzas.' },
            ], unidad:'pza.', path:'xxa_1707.jpg'},
            { descr:'Multi-Contacto IGOTO', alt:'Multi-Contacto IGOTO | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'MCU-3', tipo:'ATERRIZADA C/USB AM07', medida:'C/3 Contactos', venta:'Caja C/10 pzas.' },
            ], unidad:'pza.', path:'xxa_1719.jpg'},
            { descr:'Tanque Desechable P/Estufa Portatil Gas Butano', alt:'Tanque Desechable P/Estufa Portatil Gas Butano | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'TAE', tipo:'4918 LION TOOLS', medida:'400 ml.', venta:'Caja C/12 pzas.' },
            ], unidad:'pza.', path:'xxa_1758.jpg'},
            { descr:'Regadera Eléctrica CONFORT 3 Temperaturas', alt:'Regadera Eléctrica CONFORT 3 Temperaturas | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'RECC', tipo:'PR-E101 COFLEX', medida:'', venta:'Caja C/6 pzas.' },
            ], unidad:'pza.', path:'xxa_1776.jpg'},
            { descr:'Resistencia P/Regadera Confort Coflex', alt:'Resistencia P/Regadera Confort Coflex | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'RCC', tipo:'PR-E211', medida:'', venta:'Caja C/6 pzas.' },
            ], unidad:'pza.', path:'xxa_1777.jpg'},
            { descr:'Válvula Invierno Codo', alt:'Válvula Invierno Codo | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'VCI-08', tipo:'0813 IMPORTADO', medida:'5/16 x 1/2 191HFC8-5M', venta:'Caja C/20/200 pzas.' },
            ], unidad:'pzas.', path:'xxa_1790.jpg'},
            { descr:'Punta Pool Roscada con "O" Ring', alt:'Punta Pool Roscada con "O" Ring | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'PPO-06', tipo:'COFLEX 0606 UPP-4', medida:'1/4 x 6cms.', venta:'Caja C/25 pzas.' },
                { code:'PPOE-06', tipo:'0606', medida:'1/4 x 6cms.', venta:'Caja C/25 pzas.' },
            ], unidad:'pza.', path:'xxa_1818.jpg'},
            { descr:'Boiler Instantaneo P/Gas L.P GAXECO', alt:'Boiler Instantaneo GAXECO | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'BI-06', tipo:'.', medida:'6 ltos.', venta:'' },
            ], unidad:'', path:'xxa_1936.jpg'},
            { descr:'Manguera Flexible Gas COFLEX Acero Inox.', alt:'Manguera Flexible Gas COFLEX Acero Inox. | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'MCA-10-06', tipo:'AG-B60', medida:'10 3/8 x 0.6 mtos.', venta:'C/25 pzas.' },
                { code:'MCA-08-10', tipo:'AG-A100', medida:'08 5/16 x 1.0 mtos.', venta:'C/25 pzas.' },
            ], unidad:'pza.', path:'xxa_1964.jpg'},
            { descr:'Manguera Flexible Gas COFLEX Vinilo', alt:'Manguera Flexible Gas COFLEX Vinilo | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'MCV-08-06', tipo:'VG-A60', medida:'08 5/16 x 0.6 mtos.', venta:'C/25 pzas.' },
                { code:'MCV-10-06', tipo:'VG-B60', medida:'10 3/8 x 0.6 mtos.', venta:'C/25 pzas.' },
            ], unidad:'pza.', path:'xxa_1807.jpg'},
            { descr:'Calefactor Eléctrico HEAT WAVE de Cuarzo S.S.', alt:'Calefactor Eléctrico HEAT WAVE de Cuarzo S.S. | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'HQ850', tipo:'HQ850', medida:'400/800 watts.', venta:'' },
            ], unidad:'', path:'xxa_1999.jpg'},
            { descr:'Calefactor Eléctrico de Halogeno Oscilatorio S.S. TRAVELAIRE', alt:'Calefactor Eléctrico de Halogeno Oscilatorio S.S. TRAVELAIRE | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'CAL-3', tipo:'TAE1200Q', medida:'1200 watts.', venta:'' },
            ], unidad:'', path:'xxa_2000.jpg'},
            { descr:'Arrancador Instantaneo BARDAHL En Aerosol', alt:'Arrancador Instantaneo BARDAHL En Aerosol | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'AIB', tipo:'16111', medida:'310 grms.', venta:'Caja C/24 pzas.' },
            ], unidad:'', path:'xxa_2002.jpg'},
            { descr:'Regulador Alta Presión PRECIMEX C/Punta Pool', alt:'Regulador Alta Presión PRECIMEX C/Punta Pool | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'RAPP', tipo:'324208', medida:'Punta Pool 7000 AZ0', venta:'Caja C/40 pzas.' },
            ], unidad:'pza.', path:'xxa_2091.jpg'},
            { descr:'Calefactor Eléctrico Con Ventilador y Control de Temperatura TRAVELAIRE', alt:'Calefactor Eléctrico Con Ventilador y Control de Temperatura TRAVELAIRE | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'CAL-1', tipo:'TAE508', medida:'800/1600 watts.', venta:'' },
            ], unidad:'', path:'xxa_2126.jpg'},
            { descr:'Calefactor Eléctrico de Cuarzo S.S. TRAVELAIRE', alt:'Calefactor Eléctrico de Cuarzo S.S. TRAVELAIRE | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'CAL-2', tipo:'TAE1200QX', medida:'400/800/1250 watts', venta:'' },
            ], unidad:'', path:'xxa_2130.jpg'},
            { descr:'Regulador C/Maneral y Pool BARO P/Gas', alt:'Regulador C/Maneral y Pool BARO P/Gas | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'RMB-1', tipo:'102 PSM1 267363', medida:'1 Vía', venta:'Caja C/8 pzas.' },
            ], unidad:'pza.', path:'xxa_2177.jpg'},
            { descr:'Cinta Teflón Amarilla COFLEX', alt:'Cinta Teflón Amarilla COFLEX | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'WTG12-60', tipo:'WTG12-60', medida:'1/2 X 6.60 mtos.', venta:'Caja C/50 pzas.' },
                { code:'WTG34-60', tipo:'WTG34-60', medida:'3/4 6.60 mtos.', venta:'Caja C/30 pzas.' },
            ], unidad:'pza.', path:'xxa_2305.jpg'},
            { descr:'Anticongelante PERMATEX Listo P/Usar', alt:'Anticongelante PERMATEX Listo P/Usar | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'ALU-04', tipo:'14713 APV60', medida:'4 ltos. -2oC', venta:'Caja C/4 Gal.' },
            ], unidad:'Gal.', path:'xxa_2241.jpg'},
            { descr:'Tuerca Izquierda C/Maneral', alt:'Tuerca Izquierda C/Maneral | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'TIME', tipo:'TIZM25', medida:'7/8', venta:'Bolsa C/25/250 pzas.' },
                { code:'UTI-14M', tipo:'COFLEX UTI-14M', medida:'7/8', venta:'Caja C/50 pzas.' },
            ], unidad:'pzas.', path:'xxa_2244.jpg'},
            { descr:'Tuerca Izquierda', alt:'Tuerca Izquierda | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'UTI-14', tipo:'COFLEX UTI-14', medida:'7/8', venta:'Caja C/25 pzas.' },
                { code:'TIGI-16', tipo:'IUSA 311970', medida:'7/8', venta:'Bolsa C/10/100 pzas.' },
            ], unidad:'pza.', path:'xxa_2279.jpg'},
            { descr:'Veneno MICIFU Parafinado', alt:'Veneno MICIFU Parafinado | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'VMPB', tipo:'', medida:'Bote de 1 kg. C/200 pzas. Aprox.', venta:'Caja C/5 pzas.' },
            ], unidad:'pza.', path:'xxa_2432.jpg'},
            { descr:'Veneno MICIFU Liquido', alt:'Veneno MICIFU Liquido | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'VMLB', tipo:'', medida:'Bote 250 ml.', venta:'Caja C/25 pzas.' },
            ], unidad:'pza.', path:'xxa_2431.jpg'},
            { descr:'Válvula P/Cilindro de Servicio', alt:'Válvula P/Cilindro de Servicio | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'V-841', tipo:'V-841 221272', medida:'3/4 MNPT X 7/8 POL IUSA', venta:'Caja C/40 pzas.' },
                { code:'V-848', tipo:'V-848 395834', medida:'3/4 MNPT X 7/8 POL IUSA', venta:'Caja C/40 pzas.' },
            ], unidad:'pza.', path:'xxa_2537.jpg'},
            { descr:'Válvula Para Estufon A. Presión', alt:'Válvula Para Estufon A. Presión | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'VAPE', tipo:'317652 IUSA', medida:'1/8 NPT Esprea 64 Maneral Mariposa', venta:'Caja C/100 pzas.' },
            ], unidad:'pza.', path:'xxa_2552.jpg'},
            { descr:'Ratonera en Gel ANI KILL Charola Twin Engomada', alt:'Ratonera en Gel ANI KILL Charola Twin Engomada | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'R-211', tipo:'R-211', medida:'Chica', venta:'Caja C/48 pzas.' },
                { code:'R-212', tipo:'0087/R-212', medida:'Grande', venta:'Caja C/48 pzas.' },
            ], unidad:'pza.', path:'xxa_1384.jpg'},
            { descr:'Veneno Pellets P/Rata RAT KILL', alt:'Veneno Pellets P/Rata RAT KILL | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'R-201', tipo:'R-201', medida:'Sobre C/20 grms.', venta:'Cubeta C/50 Sobres' },
            ], unidad:'grms.', path:'2313.jpg'},
            { descr:'Veneno en Pasta P/Rata RAT KILL', alt:'Veneno en Pasta P/Rata RAT KILL | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'R-203', tipo:'R-203', medida:'Tubo C/40 grms.', venta:'Caja C/24 pzas.' },
            ], unidad:'grms.', path:'2901.jpg'},
            { descr:'Ratonera en Gel RAT KILL Charola Twin Engomada', alt:'Ratonera en Gel RAT KILL Charola Twin Engomada | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'R-221', tipo:'R-271', medida:'Chica', venta:'Caja C/24 pzas.' },
            ], unidad:'pza.', path:'xxa_2565.jpg'},
            { descr:'Calentador P/Agua LION TOOLS', alt:'Calentador P/Agua LION TOOLS | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'CV-9', tipo:'4555', medida:'2000 watts. (35 ltos.)', venta:'Caja C/10/50 pzas.' },
            ], unidad:'pza.', path:'xxa_2581.jpg'},
            { descr:'Termocople Encencido Electrónico P/Gas L.P.', alt:'Termocople Encencido Electrónico P/Gas L.P. | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'TCE', tipo:'TPE-N', medida:'24"', venta:'Bolsa C/100 pzas.' },
            ], unidad:'pza.', path:'xxa_2586.jpg'},
            { descr:'Aislante Térmico de Espuma P/Tubería', alt:'Aislante Térmico de Espuma P/Tubería | Mayoreo Ferretero del Norte S.A. de C.V | MAFENSA', types_descr: [
                { code:'AT-13', tipo:'', medida:'1/2 x 3/8 x 1.83 mtos.', venta:'Caja C/66 Tubos Insulite' },
                { code:'AT-19', tipo:'', medida:'3/4 x 3/8 x 1.83 mtos.', venta:'Caja C/46 Tubos Insulite' },
            ], unidad:'tubo', path:'xxa_2587.jpg'}
        ],*/