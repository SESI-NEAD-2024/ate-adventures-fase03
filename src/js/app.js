// Usar Vue Router fica difíicl de desenvolver e outras pessoas mais iniciantes modificarem o projeto, usar apenas se necessário

import Navbar from "./components/navbar.js";
import Hero from "./components/hero.js";

import AppFooter from "./components/app-footer.js";

import Introducao from "./components/introducao.js";
import Fliperama from "./components/fliperama.js";
import Nucleos from "./components/nucleos.js";

import ContentMenu01 from "./components/content-menu-01.js";
import Carousel from "./components/carousel.js";
import gameFase from "./components/game-fase.js";
import contentMenu02 from "./components/content-menu-02.js";
import imageMap from "./components/image-map.js";
import videoBox from "./components/video-box.js";

//Lesson Component
// const Lesson = {
//   template: `
//       <div>
//           <h1 class="text-2xl font-bold mb-4">Lesson 1: Introduction to SCORM</h1>
//           <p>This is a basic lesson on how SCORM works.</p>
//           <button class="bg-blue-500 text-white py-2 px-4 rounded" @click="completeLesson">Complete Lesson</button>
//       </div>
//   `,
//   methods: {
//     completeLesson() {
//       alert("Lesson completed! SCORM tracking will be implemented here.");
//       // Aqui você pode adicionar a lógica da API SCORM
//     },
//   },
//   mounted() {
//     console.log(123123);
//   },
// };

// Configuração do Vue Router 4
// const routes = [
//   { path: "/", component: Fliperama },
//   { path: "/lesson", component: Lesson },
//   { path: "/curso-fase-02", component: cursoFase02 },
// ];

// const router = VueRouter.createRouter({
//   history: VueRouter.createWebHashHistory(),
//   routes,
// });

const app = Vue.createApp({
  data() {
    return {
      stopNavbar: null,
      stopNavBarHeight: 0,
      winScroll: 0,
    };
  },
  components: {
    //
    // O vue router já renderiza os componentes aqui
    Navbar,
    Hero,
    AppFooter,
    Introducao,
    Fliperama,
    Nucleos,
    imageMap,
    contentMenu02,
    Carousel,
    gameFase,
    videoBox
  },
  mounted() {
    this.loading();

    window.addEventListener("load", () => {
      AOS.refresh(); // Força a recalculação das animações após o carregamento da página

      // Scroll -----------------------------------------------------
      // Quando a janela encostar neste elemento, completa a barra de progresso 100%
      this.stopNavbar = document.querySelector(".stop-navbar");
      this.stopNavBarHeight = this.getAbsoluteOffsetTop(this.stopNavbar);
    });

    // AOS Animation -------------------------------------
    AOS.init({
      delay: 50,
    });

    // MODAL -----------------------------------------------------------
    const myModal = new HystModal({
      linkAttributeName: "data-hystmodal",
      //settings (optional). see API
      backscroll: false,
    });

    // Collapsible -----------------------------------------------------
    var accordeon = document.querySelectorAll(".collapsible");
    var instaccordeon = M.Collapsible.init(accordeon, {
      // specify options here
    });

    // Scroll -----------------------------------------------------

    // Usa o throttle na função handleScroll e vincula ao evento de scroll
    const throttledScroll = this.throttle(this.handleScroll, 150); // Ajuste o delay conforme necessário
    window.addEventListener("scroll", throttledScroll);


  },
  methods: {

    review(event, elemento) {
      event.preventDefault();
      
      let element = document.querySelector(".scale-transition."+elemento);

      element.classList.toggle("scale-in");
    },

    // Barra de progresso Scroll -----------------------------------------------------

    // Função de throttle
    throttle(callback, delay) {
      let lastCall = 0;
      return function (...args) {
        const now = new Date().getTime();
        if (now - lastCall < delay) return;
        lastCall = now;
        return callback(...args);
      };
    },

    /**
     * Atualiza a barra de progresso e exibe a porcentagem rolada.
     *
     * Esta função calcula a porcentagem rolada com base na posição de rolagem do usuário. Em seguida, atualiza a largura da barra de progresso e exibe a porcentagem rolada na caixa de progresso.
     *
     * @return {void} Esta função não retorna nenhum valor.
     */
    handleScroll() {
      this.winScroll = window.scrollY;

      let pageHeight = document.body.scrollHeight;

      // console.log('winScroll', winScroll);
      // console.log('pageHeight', pageHeight);

      // Transforma valor em porcentagem de 1 a 100
      var scrolled = Math.min(
        (this.winScroll /
          (this.stopNavBarHeight - (window.innerHeight))) *
          100,
        100
      );

      // Atualiza a barra de progresso
      var barras = document.querySelectorAll(".determinate");
      barras.forEach((barra) => {
        barra.style.width = scrolled + "%";
      });

      // Para sumir/aparecer a barra de progresso quando está prestes a aparecer o jogo
      // Para não verificar toda hora

      if (scrolled >= 99) {
        document.querySelector(".navbar-fixed").classList.add("scale-out");
        document.querySelector(".navbar-fixed").classList.remove("scale-in");
      } else {
        document.querySelector(".navbar-fixed").classList.add("scale-in");
        document.querySelector(".navbar-fixed").classList.remove("scale-out");
      }
 
    },

  

    getAbsoluteOffsetTop(element) {
      // Posição do elemento na viewport
      const rect = element.getBoundingClientRect();

      return rect.top + window.scrollY + window.innerHeight;
    },

    /**
     * Oculta o elemento com id "loading" e exibe o elemento com id "content"
     * quando a página está totalmente carregada.
     *
     * @return {void} Esta função não retorna um valor.
     */
    loading() {
      document.getElementById("loading").style.display = "none";
      document.getElementById("content").style.opacity = "1";
    },
  },
  beforeDestroy() {
    // Remove o listener de scroll ao destruir o componente
    window.removeEventListener("scroll", this.handleScroll);
  },
});

// app.use(router);
app.mount("#app");
