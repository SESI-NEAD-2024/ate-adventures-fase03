// Só funciona 1 componente por página
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          img: "src/img/sesi-01.jpg",
          alt: "Adolescente no ambiente escolar",

          
          html://html 
            `
            <p>
            Atento às inovações e demandas do campo educacional, o SESI/DRMG desenvolveu o SESITEC – Tecnologia, Experiência e Criatividade.​
            <br />
            <br />
            </p>
            
            <p>
            O SESITEC moderniza as propostas pedagógicas e promove a implementação de novas estratégias didático-metodológicas nas escolas com o uso da tecnologia.
            <br />
            <br />
            </p>
            
            <p>
            Com o objetivo de potencializar o processo de ensino-aprendizagem, o SESITEC desconstrói preconceitos e receios sobre o uso de tecnologias digitais na educação, preparando os estudantes para o mercado de trabalho.
            </p>
            `,
        },
        {
          id: 2,
          img: "src/img/sesi-02.jpg",
          alt: "Adolescente no ambiente escolar com professor",

          
          html://html 
            `
            <p>
            O SESITEC tem como ponto forte a prática da aprendizagem colaborativa. Essa abordagem promove uma interação mais eficaz entre professores e alunos, abrindo caminho para novas práticas pedagógicas. Ao unir tecnologia, criatividade e experiência, o SESITEC oferece novas perspectivas para melhorar os processos de ensino.​
            </p>

            `,
        },
        {
          id: 3,
          img: "src/img/sesi-03.jpg",
          alt: "Ambiente com professores e pedagogos",

          
          html://html 
            `
            <p>
            O ATE é o interlocutor entre o SESITEC e a escola. É ele quem apresenta, incentiva e apoia 
            professores e pedagogos no uso dos recursos do SESITEC em aulas e projetos educacionais.
            <br /><br />
                        </p>
            
            <p>
            Como multiplicador do conhecimento em tecnologias educacionais, o ATE tem a missão de capacitar professores, pedagogos, alunos e outros colaboradores indicados pela equipe pedagógica. Seu objetivo é garantir que todos utilizem os recursos do SESITEC com propósito pedagógico, tanto em sala de aula quanto em projetos educacionais.            </p>

            `,
        },
        
      ],
      carousel: {
        class: "carousel-01",
        key: 0,
        elemento: null,
        qtdSlides: 0,
        ordem: 1,
        ordemAnterior: 99,
      },

      instances: null, // Declare instances as a reactive variable
    }
  },
  methods: {
    next() {
      this.carousel.elemento.querySelector(".previous").style.display = "flex";
      this.instances[this.carousel.key].next(); // Access the first carousel instance
    },
    previous() {
      this.instances[this.carousel.key].prev();
  },
},

  mounted() {
    this.carousel.elemento = document.querySelector("." + this.carousel.class);

    let elems = document.querySelectorAll(".carousel." + this.carousel.class);
    this.instances = M.Carousel.init(elems, {
      fullWidth: true,
      indicators: true,
      shift: 20,
      numVisible: 1,
      onCycleTo: (slide) => {
        this.carousel.qtdSlides = slide.parentNode.querySelectorAll(".carousel-item").length;

        // Lógica para saber o slide atual
        let search = slide.parentNode;
        let slideIndex = [...search.children].indexOf(slide);
        this.carousel.ordem = slideIndex;
        this.carousel.ordemAnterior = this.ordem - 1;



         // Se for o primeiro slide, não mostrar o botão anterior
         if (this.carousel.ordem == 1) {
          this.carousel.elemento.querySelector(".previous").style.display =
            "none";
            this.carousel.elemento.querySelector(".next").style.display =
            "flex";
        } else if (this.carousel.qtdSlides == this.carousel.ordem){
          this.carousel.elemento.querySelector(".previous").style.display =
            "flex";
          this.carousel.elemento.querySelector(".next").style.display =
          "none";

          console.log('keke');
          
        }else {
          this.carousel.elemento.querySelector(".previous").style.display =
            "flex";
            this.carousel.elemento.querySelector(".next").style.display =
            "flex";
        }

        console.log('this.carousel.qtdSlides', this.carousel.qtdSlides);
        console.log('this.carousel.ordem', this.carousel.ordem);

      },
    });
    this.carousel.elemento.querySelector(".previous").style.display = "none";
  },

  
  template://html 
  `
    <!-- Carousel -->
    <div class="p-24 carousel carousel-slider center" :class="[carousel.class]">
      <!-- Arrows -->
      <div class="carousel-fixed-item center">
        <a @click="previous" class="btn btn-game previous flex--align-center card card--purple-shadow">
        <img src="./src/img/play_l.svg" alt="Esquerda" loading="lazy" style="width: 100%; max-width: 12px" />

        </a>
        <a @click="next" class="btn btn-game btn-game--gray next flex--align-center card ml-16 card--purple-shadow">
        <img src="./src/img/play_r.svg" alt="Direita" loading="lazy" style="width: 100%; max-width: 12px" />

        </a>
      </div>

      <!-- slides -->
      <!-- item -->
      <div v-for="item in items" :key="item.id" class="carousel-item card">
        <div class="row card-content">
          <img :src="item.img" :alt="item.alt" class="col s12 m6 img--round">
          <div class="col s12 m6 left-align" v-html="item.html"></div>
        </div>
      </div>
      <!-- item -->
      
    </div>
    <!-- Fim Carousel -->
  `,
};
