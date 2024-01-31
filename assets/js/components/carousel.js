Vue.component('carousel', {
    props:['array', 'toshow', 'btns', 'slides', 'descr', 'id'],
    data () {
        return {
            // items: this.array.slice(0, this.toshow),
            itemsWidth: 240,
            containerWidth:0,
            mostrar: this.toshow,
            itemsToShow:0,
            photo_endpoint: 'http://mafensa.com/fotos_articulos/',
            preventDblClick: false,
        }
    },
    created() {
        if (window.outerWidth < 1441) {
            this.mostrar = this.toshow - 1
        }
        if (this.id != 'providers' && window.outerWidth < 1025) {
            this.mostrar = this.toshow - 2
        }
        if (this.id != 'providers' && window.outerWidth < 769) {
            this.mostrar = this.toshow - 3
        }
        if (this.id != 'providers' && window.outerWidth < 541) {
            // this.mostrar = this.toshow - 3
            this.itemsWidth = 180
        }
        if (this.id != 'providers' && window.outerWidth < 431) {
            this.mostrar = this.toshow - 4
            this.itemsWidth = 240
        }
        // if (window.outerWidth < 992) {
        //     this.mostrar = this.toshow - 2
        // }
        // if (this.id != 'providers' && window.outerWidth < 821) {
        //     this.mostrar = this.toshow - 3
        // }
        
        if (this.id == 'providers' && this.slides) {
            this.itemsWidth = 190
        }
        if (window.outerWidth < 821 && this.id == 'providers' && this.slides) {
            this.itemsWidth = 140
            this.mostrar = this.toshow
        }
        if (window.outerWidth < 769 && this.id == 'providers' && this.slides) {
            this.itemsWidth = 160
            this.mostrar = this.toshow - 1
        }
        if (window.outerWidth < 641 && this.id == 'providers' && this.slides) {
            // this.itemsWidth = 160
            this.mostrar = this.toshow - 2
        }
        if (window.outerWidth < 541 && this.id == 'providers' && this.slides) {
            this.itemsWidth = 105
            this.mostrar = this.toshow - 1
        }
        if (window.outerWidth < 431 && this.id == 'providers' && this.slides) {
            // this.itemsWidth = 105
            this.mostrar = this.toshow - 2
        }
        
        this.itemsToShow = `calc(${ this.itemsWidth + 'px' } * ${ this.mostrar })`
        this.containerWidth = `calc(${ this.itemsWidth + 'px' } * ${ this.array.length })`

    },
    template: `
        <article class="carousel-container" :style="{ maxWidth : itemsToShow }">
            <article @click="dragCarousel">
                <article class="carousel_items" :class="{ 'slide_btns':btns }" :style="{ minWidth: containerWidth }">
                    <div class="item" v-for="item in array">
                        <figure>
                            <img v-if="id == 'articles'" :src="photo_endpoint + item.foto" :alt="item.descr + ' | MAFENSA'"  draggable="false">
                            <img v-else :src="item.path" :alt="item.alt"  draggable="false">
                        </figure>
                        <!--article v-if="id === 'articles'">
                            <h4>{{ item.descr }}</h4>
                            <article>
                                <p>
                                    <span>Medidas</span>
                                    <span>Descr.</span>
                                </p>
                                <p v-for="descr in item.types_descr">
                                    <span>{{ descr.medida }}</span>
                                    <span>{{ descr.tipo }}</span>
                                </p>
                            </article>
                        </!--article-->
                        <p v-if="descr" class="">{{ item.descr }}</p>
                    </div>
                </article>
            </article>
            <article id="buttons" v-if="btns">
                <button @click="leftSlide($event)" id="left_slide"><i class="fas fa-chevron-left"></i></button>
                <button @click="rightSlide($event)" id="right_slide"><i class="fas fa-chevron-right"></i></button>
            </article>
            <article class="controls" v-if="slides">
                <a @click="showItems(circle, $event)" :class="{'active':circle == 1}" class="slide" v-for="circle in Math.ceil(array.length / mostrar)"></a>
            </article>
        </article>
    `,
    methods: {
        dragCarousel: function() {

        },
        showItems: function(item, e) {
            let siblings = e.target.parentNode.childNodes
            let currentActive = Array.from(siblings).findIndex(e => e.classList.contains('active')) + 1

            if (currentActive == item) return

            if (currentActive > item) {
                let totalControls = Math.ceil(this.array.length / this.mostrar)
                let scrollWidth = (totalControls - 1) * (this.mostrar * this.itemsWidth)
                // e.target.parentNode.previousElementSibling.children[0].classList.add('changing')
                e.target.parentNode.previousElementSibling.scrollLeft = scrollWidth - ((totalControls - item) * (this.mostrar * this.itemsWidth) )
                // setTimeout(() => {
                //     // e.target.parentNode.previousElementSibling.children[0].classList.remove('changing')
                // }, 1000);
            } else {
                // e.target.parentNode.previousElementSibling.children[0].classList.add('changing')
                e.target.parentNode.previousElementSibling.scrollLeft = (item - 1) * (this.mostrar * this.itemsWidth) 
                // setTimeout(() => {
                //     // e.target.parentNode.previousElementSibling.children[0].classList.remove('changing')
                // }, 1000);
            }

            siblings.forEach(e => e.classList.remove('active'))
            e.target.classList.add('active')
        },
        leftSlide: function(e) {
            if(this.preventDblClick){
                return
            }

            this.preventDblClick = true;
            let items_container = e.target.closest('button').parentNode.previousElementSibling.children[0]
            let container = items_container.parentNode

            container.scrollLeft -= this.itemsWidth
            setTimeout(() => {
                this.preventDblClick = false
            }, 500);
        },
        rightSlide: function (e) {
            if(this.preventDblClick){
                return
            }
            
            this.preventDblClick = true
            let items_container = e.target.closest('button').parentNode.previousElementSibling.children[0]
            let container = items_container.parentNode
            
            container.scrollLeft += this.itemsWidth
            setTimeout(() => {
                this.preventDblClick = false
            }, 500);

        }
    }
})