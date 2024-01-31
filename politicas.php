<?php include('assets/includes/header.php'); ?>

<section id="politicas">
    <!-- <navbar :view="'catalogo'"></navbar> -->
    <?php include('assets/includes/menu.php') ?>

    <h1>
        <span>PÓLITICAS COMERCIALES</span>
    </h1>
    <article>
        <article>
            <h3>Para ser cliente de <b class="company">MAFENSA</b> (Contado y/o Crédito)</h3>
            <ul>
                <li><span>Alta en hacienda</span></li>
                <li><span>Credencial de elector (Copia por ambos lados)</span></li>
                <li><span>Comprobante de domicilio (Debe coincidir con el domicilio físcal)</span></li>
                <li><span>Teléfono (Fijo o Celular)</span></li>
                <li><span>Correo electrónico</span></li>
            </ul>
        </article>
        <article>
            <h3>Para clientes que deseen crédito a 30 días.</h3>
            <ul>
                <li><span>Solicitud de crédito</span></li>
                <li><span>Pagaré</span></li>
                <li><span>Contrato de compra-venta con reserva de dominio</span></li>
            </ul>
        </article>
        <article>
            <h3>Transferencias</h3>
            <ul>
                <li><span>Cuenta: 018 22 47 690</span></li>
                <li><span>CLABE: 012 060 0018 2247 6904</span></li>
            </ul>
        </article>
        <article>
            <h3>Efectivo o Cheque</h3>
            <ul>
                <li><span>Convenio CIE: 105 19 89</span></li>
                <li><span>Referencia: (La asigna crédito y cobranza)</span></li>
            </ul>
        </article>
        <article>
            <h3>Notificar su pago a</h3>
            <span>
                <a href="mailto:facturas@mafensa.com">facturas@mafensa.com</a> y 
                <a href="mailto:acredito@mafensa.com">acredito@mafensa.com</a>
            </span>
        </article>
        <article>
            <h3>Descuentos y/o devoluciones</h3>
            <span>En casos de tener descuento o devolución favor de especificarlo.</span>
        </article>
        <article>
            <h3>Departamento de crédito y cobranza</h3>
            <span>
                <a href="tel:871-718-4020">871.718.40.20</a> Ext. 110, 111 y 120
            </span>
        </article>
    </article>
    <article>
        <article>
            <h3>Póliticas de recepción de mercancía</h3>
            <span>
                Para hacer válidas las reclamaciones por faltantes de mercancía y ofrecerle el mejor servicio, le informamos que es obligatorio anotar las anomalías en las Guías antes de firmar. En caso contrario no procederá ninguna reclamación.
            </span>
        </article>
    </article>
    <article>
        <article>
            <h3>Consideraciones al momento de recibir las mercancias</h3>
            <ol>
                <li><span>
                    Verifíque que el número de cajas que recibe es el mismo que las cajas especificadas en el talón.
                </span></li>
                <li><span>
                    Si alguna caja llega sin la cinta de seguridad impresa con el nombre Mafensa, o se encuentra violada, rota, maltratada, caja colpeada o con indicios de que pueda presentar faltante, debe anotar forzosamente en la guía las condiciones en que se reciben las cajas. Lo mejor es que el chofer que entrega se espere a que usted reciba contra factura.
                </span></li>
                <li><span>
                    En caso que efectivamente se presente alguna anomalía, favor de notificarlo a ventas@mafensa.com y/o a nuestras líneas telefónicas en un plazo no mayor a tres (3) días posterior a la entrega, para proceder al cobro del faltante.
                </span></li>
                <li><span>
                    En caso de no hacer la anotación en la guía, respecto del extravío o robo de la mercancía, no procederá su reclamación y se pagará completa la factura, ya que ninguna fletera la hace válida, pues no se encuentra evidencia de la inconformidad del cliente en el acuse de recibo y nosotros no podemos hacer nada al respecto.
                </span></li>
            </ol>
        </article>
    </article>
</section>

<?php include('assets/includes/footer.php'); ?>
<script>
    let politicas = new Vue({
        el: '#politicas'
    })
</script>
</body>
</html>