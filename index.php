<?php include('assets/includes/header.php') ?>
    <section id="app">
        <!-- <navbar></navbar> -->
        <?php include('assets/includes/menu.php') ?>

        <header id="header"> <!-- BANNER -->
            <article>
                <h1>
                    <b class="is-text-orange">MAFENSA</b>, <b>el proveedor</b> Ferretero, Plomero y Eléctrico <b>que tu negocio necesita.</b>
                </h1>
                <p class="lh_1_5">Atendemos Mayoreo y Medio-Mayoreo, respetando el Canal de Distribución.</p>
                <button id="btn_cta_cliente" @click="redireCta('c')" class="is-bg-orange">
                    <span>Quiero ser cliente</span>
                </button>
            </article>
            <article id="header_image"></article>
            <div id="bg_skewed"></div>
        </header>

        <article id="features"> <!-- Features MAFENSA -->
            <article>
                <h4>Confiable <i class="fas fa-handshake is-text-orange"></i></h4>
                <p class="lh_1_5">Respuestas inmediatas, atención directa con calidad y calidez en el servicio. En MAFENSA tu negocio es importante.</p>
            </article>
            <article>
                <h4>Rentable <i class="fas fa-dollar-sign is-text-orange"></i></h4>
                <p class="lh_1_5">Productos de alta rotación con alto margen de ganancias. Que tu negocio sea un gran negocio.</p>
            </article>
            <article>
                <h4>Surtido <i class="fas fa-truck-loading is-text-orange"></i></h4>
                <p class="lh_1_5">Surtimiento oportuno y eficiente en tus pedidos.</p>
            </article>
        </article>

        <article id="articles"> <!-- Nuestros artículos -->
            <h2 class="is-text-orange section_title">Artículos de Temporada</h2>
            <carousel v-if="articulosInvierno.length" ref="articulos" :id="'articles'" :array="articulosInvierno" :toshow="5" :btns="true" :slides="false" :descr="true"></carousel>
            <button id="btn_articles" @click="redireCta('cata')" class="is-bg-orange">
                <span>Ver Catálogo</span>
            </button>
        </article>

        <article id="socios"><!-- Socios Comerciales -->
            <h2 class="is-text-orange section_title">Socios Comerciales</h2>
            <carousel ref="providers" :id="'providers'" :array="providers" :toshow="socios_show" :btns="false" :slides="true" :descr="false"></carousel>
        </article>

        <article id="banner_cta_proveedor"><!-- Quiero ser proveedor -->
            <p>Se parte de nuestra familia MAFENSA como socio comercial</p>
            <button id="btn_cta_provider" @click="redireCta('p')" class="is-bg-orange">
                <span>Quiero ser proveedor</span>
            </button>
        </article>

        <article id="nosotros"><!-- 25 años -->
            <article id="nosotros_container">
                <h2 id="mafensa" class="is-text-orange section_title">25 años de experiencia nos respaldan</h2>
                <article id="cobertura">
                    <article id="container_states_cities">
                        <!-- <h4>Cobertura</h4> -->
                        <ul>
                            <li @click="selectState(estado.id_state)" :id="estado.id_state"  class="states" v-for="estado in allCities.filter((val, indx, self) => 
                                self.map(({ state }) => state).indexOf(val.state) === indx
                            )">
                                <a>
                                    <span>
                                        <i class="fas fa-map-marker-alt"></i>
                                        {{ estado.state }}
                                    </span>
                                    <i class="fas fa-caret-down"></i>
                                </a>
                                <div class="cities" v-if="currentState == estado.id_state">
                                    <p v-for="city in currentCities">• {{ city.ciudad }}</p>
                                </div>
                            </li>   
                        </ul>
                    </article>
                    <location :state="currentState" @change-parent-state="(e) => selectState(e)"></location>
                </article>
                <!-- <figure>
                    <img id="aniversario" src="assets/images/aniversario_mafensa.png" alt="25 años MAFENSA | Mayoreo Ferretero del Norte S.A. de C.V." />
                    <!- - <img id="cobertura" src="assets/images/cobertura_mafensa.png" alt="25 años MAFENSA | Mayoreo Ferretero del Norte S.A. de C.V." /> - ->
                    <img id="premios" src="assets/images/premios_rdf_mafensa.png" alt="25 años MAFENSA | Mayoreo Ferretero del Norte S.A. de C.V." />
                </figure> -->
                <article id="numbers">
                    <article>
                        <h2 class="is-text-orange">95%</h2>
                        <p>En Surtimiento</p>
                        <p class="lh_1_5">Tu negocio siempre apoyado por el proveedor correcto con los artículos que necesitas.</p>
                    </article>
                    <article>
                        <h2 class="is-text-orange">6</h2>
                        <p>Estados de cobertura</p>
                        <article>
                            <ul>
                                <li><i class="fas fa-check-circle is-text-orange"></i> Coahuila</li>
                                <li><i class="fas fa-check-circle is-text-orange"></i> Chihuahua</li>
                                <li><i class="fas fa-check-circle is-text-orange"></i> Durango</li>
                            </ul>
                            <ul>
                                <li><i class="fas fa-check-circle is-text-orange"></i> Nuevo León</li>
                                <li><i class="fas fa-check-circle is-text-orange"></i> Sinaloa</li>
                                <li><i class="fas fa-check-circle is-text-orange"></i> Zacatecas</li>
                            </ul>
                        </article>
                    </article>
                    <article>
                        <h2 class="is-text-orange">117</h2>
                        <p>Colaboradores</p>
                        <p class="lh_1_5">Personal enfocado en atenderte con nivel de excelencia.</p>
                    </article>
                </article>
                <hr class="is-bg-orange">
                <article id="mvv"><!-- Misión, Visión, Valores -->
                    <article>
                        <h2>Misión</h2>
                        <p class="lh_1_5">
                            Continuar siendo líderes en ferretería, plomería y electricidad, comprometiéndonos a ofrecer los mejores precios y una atención personalizada con el objetivo de satisfacer plenamente a nuestros clientes.
                        </p>
                    </article>
                    <article>
                        <h2>Visión</h2>
                        <p class="lh_1_5">
                            Ser líder en soluciones ferreteras en el norte del país, transformando el sector con innovación y excelencia en servicio, expandiendo nuestra influencia, para marcar la diferencia en cada negocio de nuestros clientes.
                        </p>
                    </article>
                    <article>
                        <h2>Valores</h2>
                        <ul> <!-- f058  <i class="fas fa-check-circle"></i> -->
                            <li><i class="fas fa-check-circle is-text-orange"></i> Honestidad</li>
                            <li><i class="fas fa-check-circle is-text-orange"></i> Eficiencia</li>
                            <li><i class="fas fa-check-circle is-text-orange"></i> Servicio</li>
                            <li><i class="fas fa-check-circle is-text-orange"></i> Atención</li>
                            <li><i class="fas fa-check-circle is-text-orange"></i> Superación</li>
                            <li><i class="fas fa-check-circle is-text-orange"></i> Responsabilidad</li>
                            <li><i class="fas fa-check-circle is-text-orange"></i> Tenacidad</li>
                        </ul>
                    </article>
                </article>
                <hr class="is-bg-orange">
                <article id="circulo_virtuoso"><!-- Circulo virtuoso -->
                    <article>
                        <h2 class="is-text-orange">Nuestro Círculo Virtuoso</h2>
                        <p class="lh_1_5">
                            Aportamos capacidad, tecnología, equipamiento y existencia. Con <b>MAFENSA</b> tendrás el detonador para lograr que tu negocio sea exitoso.
                        </p>
                        <p class="lh_1_5">
                            Al relacionarte con un proveedor confiable, tu negocio obtendrá resultados inmediatos.
                        </p>
                    </article>
                    <figure>
                        <img src="assets/images/circulo_virtuoso_mafensa.png" alt="Circulo Virtuoso MAFENSA | Mayoreo Ferretero del Norte S.A. de C.V." />
                    </figure>
                </article>
            </article>
        </article>

        <article id="banner_cta"><!-- Forma parte de MAFENSA -->
            <h2 class="section_title">Forma parte de MAFENSA</h2>
            <article>
                <button @click="redireCta('b')" id="btn_cta_bdt">Trabaja con nosotros</button>
                <article>
                    <button @click="redireCta('c')" id="btn_cta_cliente_banner">Quiero ser Cliente</button>
                    <a href="politicas.php">Políticas comerciales</a>
                </article>
                <button @click="redireCta('p')" id="btn_cta_provider_banner">Quiero ser Proveedor</button>
            </article>
        </article>

        <article id="testimonio_clientes"><!-- Testimonio de clientes -->
            <h2 class="is-text-orange section_title">Testimonio de nuestros clientes</h2>
            <article>
                <article>
                    <figure>
                        <img src="assets/images/mafensa_testimonio_cliente_abigail.jpg" alt="" />
                    </figure>
                    <p>Comercial Lucero</p>
                    <p>Sra. Abigail (Propietaria)</p>
                    <p class="lh_1_5">
                        "La confiabilidad de Mafensa es impresionante. El tiempo de respuesta es muy rápido, recibo mis pedidos y empiezo a vender de inmediato. Muy contenta con el servicio."
                    </p>
                </article>
                <article>
                    <figure>
                        <img src="assets/images/mafensa_testimonio_cliente_andrade.jpg" alt="" />
                    </figure>
                    <p>Ferretería La Catedral</p>
                    <p>Sr. Andrade (Propietario)</p>
                    <p class="lh_1_5">
                        "Quiero que otros sepan, que con un poco de trabajo duro, con dedicación y con un proveedor confiable, podemos hacer grandes cosas. Éxito a todos."
                    </p>
                </article>
                <article>
                    <figure>
                        <img src="assets/images/mafensa_testimonio_cliente_sanchez.jpg" alt="" />
                    </figure>
                    <p>Ferretería La Popular</p>
                    <p>Sr. Sánchez (Jéfe de Compras)</p>
                    <p class="lh_1_5">
                        "Tenemos 21 años en el negocio y Mafensa ha sido nuestro proveedor desde un principio. Nuestro negocio está bien surtido y nuestros clientes satisfechos."
                    </p>
                </article>
            </article>
        </article>

        <article id="ubi"><!-- Ubicación -->
            <h2 class="is-text-orange section_title">Ubicación</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.1575815871092!2d-103.3713780240606!3d25.59967941528016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x868fdbb5a88ff107%3A0x3f9625750128e591!2sMafensa!5e0!3m2!1ses-419!2smx!4v1703877240696!5m2!1ses-419!2smx" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </article>
    </section>

<?php include('assets/includes/footer.php') ?>
<!-- < ?php include('assets/includes/scripts.php') ?> -->
    <script src="assets/js/components/carousel.js"></script>
    <script src="assets/js/components/locations.js"></script>
    <script src="assets/js/main.js"></script>
</body>
</html>