let contacto = new Vue({
    el: '#contacto',
    data: {
        name : '',
        namecomercial : '',
        email : '',
        phone : '',
        namecompras : '',
        emailcompras : '',
        phonecompras : '',
        city : '',
        departamento : '',
        message : '',
        recaptcha: '',
        view: '',
        code_captcha: '',
        titlePage: '',
        fileUser: '',
        images: null,
        messageform: '',
        departamentos: [
            'Sistemas',
            'Contabilidad',
            'Ventas',
            'Crédito y Cobranza',
            'Almacén',
            'Compras',
            'Recursos Humanos',
            'Pagos',
            'Garantias'
        ]
    },
    created () {
        let today = new Date()
        this.code_captcha = today.getDate() + '' + (today.getMonth() + 1 < 10 ? '0' + (today.getMonth() + 1) : today.getMonth() + 1)

        let urlParameters = window.location.search
        let parametros = new URLSearchParams(urlParameters)

        switch (parametros.get('v')) {
            case 'p' : 
                this.view = 'provider'
                this.titlePage = 'PROVEEDORES'
                break;
            case 'b':
                this.view = 'bolsa'
                this.titlePage = 'TRABAJA CON NOSOTROS'
                break;
            case 'c':
                this.view = 'cliente'
                this.titlePage = 'CLIENTES'
                break;
            default:
                this.titlePage = 'CONTACTO'
        }
    },
    watch:{
        images(nv){
            if (nv) {
                $('#uploadfile span').innerHTML = nv.name
            }
        }
    },
    methods: {
        notifyClass: function(type) {
            setTimeout(() => {
                $('#message_text').classList.add(type)
            }, 100);
    
            setTimeout(() => {
                this.messageform = ''
                $('#message_text').classList.remove(type)
            }, 10000);
        },
        sendData: async function () {
            if (this.recaptcha == this.code_captcha) {
                if (this.name && this.email && this.phone) {
                    let fieldView = false
                    let formdata = new FormData();
                    
                    formdata.append('name', this.name)
                    formdata.append('email', this.email)
                    formdata.append('phone', this.phone)
                    formdata.append('message', this.message)
                    formdata.append('title', this.view)
    
                    if (this.city) {
                        formdata.append('city', this.city)
                    }

                    if (this.view == 'cliente' && this.namecomercial && this.namecompras && this.emailcompras && this.phonecompras) {
                        fieldView = true
                        formdata.append('namecomercial', this.namecomercial)
                        formdata.append('namecompras', this.namecompras)
                        formdata.append('emailcompras', this.emailcompras)
                        formdata.append('phonecompras', this.phonecompras)
                    }
                    
                    if (this.view == 'provider') {
                        fieldView = true
                    }
                    
                    if (this.view == 'bolsa' && this.departamento) {
                        fieldView = true
                        formdata.append('departamento', this.departamento)
                        formdata.append('file', this.images)
                        formdata.append('interes_area', this.departamento)
                    }
                    // *****************************
                    if (this.view != '' &&  !fieldView) {
                        this.messageform = 'Complete los campos obligatorios.'
                        this.notifyClass('fail')
                    } else {
                        let headers = { "Content-Type": "application/json" }
                        try {
                            let resultados, data
                            if (this.view == 'bolsa') {
                                headers = { "Content-Type": "multipart/form-data" }
                            }

                            resultados = await fetch('assets/api/contacto.php?action=sendData', {
                                method: 'POST',
                                body: formdata,
                                // headers: headers,
                            })

                            data = await resultados.json()

                            if (data.mail && !data.mail) {
                                this.messageform = 'No se pudo enviar el correo.'
                                this.notifyClass('fail')
                            } else {
                                this.messageform = 'Datos enviados correctamente'
                                this.notifyClass('success')
                            }

                        } catch (error) {
                            console.log(error.message)
                        }

                    }

                } else {
                    this.messageform = 'Complete los campos obligatorios.'
                    this.notifyClass('fail')
                }
            } else {
                this.messageform = 'Código de verificación incorrecto.'
                this.notifyClass('fail')
            }
        },
        setFile: function () {
            this.images = this.$refs.fileUser.files[0]
        },
        uploadFile: function () {
            $('#fileUser').click()
        }
    },

    /* if ($captcha == $recaptcha) {
        if ($nombre <> "" and $email <> "" and $tel <> "" and $ciudad <> "" and $mensaje <> "") {
            $resultado = 1; # Solicitud aceptada
        }
        else {
            $resultado = 0; # Solicitud no aceptada por campos faltantes
            $mensaje_error = "Debes llenar todos los campos Requeridos";
        }
    }
    else {
        $resultado = 0; # Solicitud no aceptada por CAPTCHA
        $mensaje_error = "El Código de Verificación es Incorrecto";
    } */
})