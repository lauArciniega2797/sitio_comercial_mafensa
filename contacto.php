<?php include('assets/includes/header.php'); ?>

<section id="contacto">
    <!-- <navbar :view="'catalogo'"></navbar> -->
    <?php include('assets/includes/menu.php') ?>

    <p class="titulo">
        <span>{{ titlePage }}</span>
    </p>
    <article>
        <article id="company_data">
            <article>
                <figure>
                    <img src="assets/images/logotipo_mafensa_completo.png">
                </figure>
                <span>Calz. Luisa No. 830-3 Fracc. Quintas Anna. Torreón, Coah. C.P. 27014 - México</span>
            </article>
            <article>
                <h4>Horarios</h4>
                <p>
                    <span>Lunes a Viernes de 8:30 a.m. a 18:00 p.m.</span>
                    <span>Sábados de 9:00 a.m. a 14:00 p.m.</span>
                </p>
            </article>
            <article>
                <h4>Llamanos</h4>
                <p>
                    <span>871.718.40.20 (Conmutador)</span>
                </p>
            </article>
        </article>
        <article id="formulario">
            <p id="message_text" v-if="messageform">{{ messageform }}</p>
            <fieldset>
                <label for="">Nombre (*)</label>
                <input type="text" name="name" v-model="name">
            </fieldset>
            <fieldset v-if="view == 'cliente'">
                <label for="">Nombre Comercial</label>
                <input type="text" name="namecomercial" v-model="namecomercial">
            </fieldset>
            <fieldset>
                <label for="">Correo Electrónico (*)</label>
                <input type="email" name="email" v-model="email">
            </fieldset>
            <fieldset>
                <label for="">Teléfono (*)</label>
                <input type="phone" name="phone" v-model="phone">
            </fieldset>
            <fieldset v-if="view == 'cliente'">
                <label for="">Encargado de compras</label>
                <input type="text" name="namecompras" v-model="namecompras">
            </fieldset>
            <fieldset v-if="view == 'cliente'">
                <label for="">Correo Electrónico (Encargado de Compras)</label>
                <input type="email" name="emailcompras" v-model="emailcompras">
            </fieldset>
            <fieldset v-if="view == 'cliente'">
                <label for="">Teléfono (Encargado de Compras)</label>
                <input type="phone" name="phonecompras" v-model="phonecompras">
            </fieldset>
            <fieldset v-if="view != 'bolsa'">
                <label for="">Ciudad</label>
                <input type="text" name="city" v-model="city">
            </fieldset>
            <fieldset v-if="view == 'bolsa'">
                <label for="">Departamento de interés (*)</label>
                <select name="depa" v-model="departamento">
                    <option :value="depa" :key="depa" v-for="depa in departamentos">{{ depa }}</option>
                </select>
            </fieldset>
            <fieldset v-if="view != 'cliente'">
                <label for="" v-if="view == ''">Mensaje</label>
                <label for="" v-if="view == 'bolsa'">Describe tu perfil</label>
                <label for="" v-if="view == 'provider'">Describe tus productos</label>
                <textarea name="message" v-model="message" cols="2" rows="4"></textarea>
            </fieldset>
            <fieldset v-if="view == 'bolsa'" id="uploadfieldset">
                <label><b>Subir C.V. o tu solicitud de empleo</b> (Solo archivos tipo imagen o PDF.)</label>
                <button @click="uploadFile" id="uploadfile"><span>Subir archivo</span></button>
                <input @change="setFile" ref="fileUser" type="file" name="fileUser" id="fileUser">
            </fieldset>
            <fieldset id="captcha">
                <label for="">Código de verificación</label>
                <span>Ingresa la palabra en el recuadro.</span>
                <div>
                    <span>{{ code_captcha }}</span>
                    <input type="text" name="recaptcha" v-model="recaptcha">
                </div>
            </fieldset>
            <button @click="sendData" id="btn_enviar">Enviar</button>
        </article>
    </article>
</section>

<?php include('assets/includes/footer.php');?>
<?php include('assets/includes/scripts.php');?>
<script src="assets/js/contacto.js"></script>
</body>
</html>