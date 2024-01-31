<?php include('assets/includes/header.php'); ?>
<section id="catalogo">
    <!-- <navbar :view="'catalogo'"></navbar> -->
    
    <?php include('assets/includes/menu.php') ?>
    <article>
        <article id="departamentos" :class="{ 'active':depaMenuOpen }">
            <p v-if="depaMenuOpen">
                <i @click="depaMenuOpen = false" class="fas fa-times"></i>
            </p>
            <ul>
                <li v-for="depa in departamentos">
                    <a :class="{ 'active':currentDepa == depa.orden }" @click="sortArticles(depa.orden)">{{ depa.orden + ' - ' + depa.depa }}</a>
                </li>
            </ul>
        </article>
        <article id="articles_section">
            <article id="filtersTagnav">
                <article id="filters">
                    <h1>{{ tituloPage }}</h1>
                    <fieldset>
                        <i class="fas fa-search"></i>
                        <input type="text" v-model="filtroArticulo" @keyup="filterArticles" @change="filterArticles">
                    </fieldset>
                    <button @click="depaMenuOpen = true" id="btn_filter" v-if="mobile_view">
                        <i class="fas fa-sliders-h"></i>
                        <span>Departamentos</span>
                    </button>
                    <button id="btn_pdf" @click="openCatalogo">
                        <span>
                            <i class="fas fa-file-pdf"></i>
                            Catalogo PDF
                        </span>
                    </button>
                </article>
                <article id="tagsnav">
                    <p>
                        <a id="" @click="currentDepa = ''; filtroArticulo = '';getArticles(1)">Todo /</a>
                        <a id=""  v-if="currentDepa">{{ departamentos.find(x => x.orden == currentDepa).depa + ' /' }}</a>
                        <span v-if="filtroArticulo">
                            {{ filtroArticulo }}
                            <a @click="filtroArticulo = ''; getArticles(1)">
                                <i class="fas fa-times"></i>
                            </a>
                        </span>
                    </p>
                </article>
            </article>
            <article id="items_article">
                <div v-for="item in articulosCopy">
                    <figure>
                        <img :src="'http://mafensa.com/fotos_articulos/' + item.foto" :alt="(item.barras ? item.barras : item.descr) + ' | MAFENSA'" />
                    </figure>
                    <p class="description">
                        {{ item.barras ? item.barras : item.descr }}
                    </p>
                </div>
            </article>
        </article>
    </article>
</section>

<?php include('assets/includes/footer.php'); ?>
<?php include('assets/includes/scripts.php'); ?>
    <script src="assets/js/catalogo.js"></script>
</body>
</html>