export default{data(){return{items:[{id:1,img:"src/img/sesi-01.jpg",alt:"Adolescente no ambiente escolar",html:`
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
            `},{id:2,img:"src/img/sesi-02.jpg",alt:"Adolescente no ambiente escolar com professor",html:`
            <p>
            O SESITEC tem como ponto forte a prática da aprendizagem colaborativa. Essa abordagem promove uma interação mais eficaz entre professores e alunos, abrindo caminho para novas práticas pedagógicas. Ao unir tecnologia, criatividade e experiência, o SESITEC oferece novas perspectivas para melhorar os processos de ensino.​
            </p>

            `},{id:3,img:"src/img/sesi-03.jpg",alt:"Ambiente com professores e pedagogos",html:`
            <p>
            O ATE é o interlocutor entre o SESITEC e a escola. É ele quem apresenta, incentiva e apoia 
            professores e pedagogos no uso dos recursos do SESITEC em aulas e projetos educacionais.
            <br /><br />
                        </p>
            
            <p>
            Como multiplicador do conhecimento em tecnologias educacionais, o ATE tem a missão de capacitar professores, pedagogos, alunos e outros colaboradores indicados pela equipe pedagógica. Seu objetivo é garantir que todos utilizem os recursos do SESITEC com propósito pedagógico, tanto em sala de aula quanto em projetos educacionais.            </p>

            `}],carousel:{class:"carousel-01",key:0,elemento:null,qtdSlides:0,ordem:1,ordemAnterior:99},instances:null}},methods:{next(){this.carousel.elemento.querySelector(".previous").style.display="flex",this.instances[this.carousel.key].next()},previous(){this.instances[this.carousel.key].prev()}},mounted(){this.carousel.elemento=document.querySelector("."+this.carousel.class);var e=document.querySelectorAll(".carousel."+this.carousel.class);this.instances=M.Carousel.init(e,{fullWidth:!0,indicators:!0,shift:20,numVisible:1,onCycleTo:e=>{this.carousel.qtdSlides=e.parentNode.querySelectorAll(".carousel-item").length;e=[...e.parentNode.children].indexOf(e);this.carousel.ordem=e,this.carousel.ordemAnterior=this.ordem-1,1==this.carousel.ordem?(this.carousel.elemento.querySelector(".previous").style.display="none",this.carousel.elemento.querySelector(".next").style.display="flex"):this.carousel.qtdSlides==this.carousel.ordem?(this.carousel.elemento.querySelector(".previous").style.display="flex",this.carousel.elemento.querySelector(".next").style.display="none",console.log("keke")):(this.carousel.elemento.querySelector(".previous").style.display="flex",this.carousel.elemento.querySelector(".next").style.display="flex"),console.log("this.carousel.qtdSlides",this.carousel.qtdSlides),console.log("this.carousel.ordem",this.carousel.ordem)}}),this.carousel.elemento.querySelector(".previous").style.display="none"},template:`
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
  `};