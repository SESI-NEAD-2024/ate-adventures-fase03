export default {
  data() {
    return {
      idSelected: 0,
      items: [
        {
          id: 0,
          
          html://html
           `
            
            <div>
              <img
                src="./src/img/y-01.webp"
                alt="App Office 365"
                loading="lazy"
                class="mr-24 mr-0-mobile mb-16-mobile"
                style="width: 70px"
              />
            </div>
            <div>
              <p class="mt-0">Responsável pelo envio e recebimento de e-mails, também facilita o agendamento de reuniões e o controle de compromissos.</p>
            </div>
          
              `,
        },

        {
          id: 1,
          //html
          html: `

          
            <div>
              <img
                src="./src/img/y-02.webp"
                alt="App Office 365"
                loading="lazy"
                
                style="width: 100%; max-width: 70px"
              />
            </div>
            <div>
              <p class="mt-0">
                Nuvem de armazenamento de arquivos on-line que possibilita o acesso de qualquer dispositivo com internet.
              </p>
            </div>
          
              `,
        },
        {
          id: 2,
          //html
          html: `
           
            <div>
              <img
                src="./src/img/y-03.webp"
                alt="App Office 365"
                loading="lazy"
                
                style="width: 100%; max-width: 70px"
              />
            </div>
            <div>
              <p class="mt-0">
               Caderno digital integrado ao Teams que conta com ferramentas de acessibilidade. Sua BIBLIOTECA DE CONTEÚDO facilita o acesso a materiais extras dos componentes curriculares. Já no ESPAÇO DE COLABORAÇÃO, os estudantes podem compartilhar ideias e sugestões e juntos criar uma curadoria de conteúdo.
              </p>
            </div>
          
              `,
        },
        {
          id: 3,
          //html
          html: `
            
            <div>
              <img
                src="./src/img/y-04.webp"
                alt="App Office 365"
                loading="lazy"
                
                style="width: 100%; max-width: 70px"
              />
            </div>
            <div>
              <p class="mt-0">
                Um dos mais conhecidos editores de texto, ele contém uma galeria de estilos que facilitam a customização do documento, além de outros recursos, incluindo ferramentas de acessibilidade.
              </p>
            </div>
          
              `,
        },
        
        {
          id: 4,
          //html
          html: `
            
            <div class="col m3 s12">
              <img
                src="./src/img/y-05.webp"
                alt="App Office 365"
                loading="lazy"
                
                style="width: 100%; max-width: 70px"
              />
            </div>
            <div>
              <p class="mt-0">
               Ideal para criação de planilhas e conversão de dados em gráficos.
               </p>
            </div>
          
              `,
        },
        {
          id: 5,
          //html
          html: `
            
            <div>
              <img
                src="./src/img/y-06.webp"
                alt="App Office 365"
                loading="lazy"
                
                style="width: 100%; max-width: 70px"
              />
            </div>
            <div>
              <p class="mt-0">
               Conhecido como hub digital, este recurso integra em um mesmo espaço: chat, arquivos, OneNote, entre outros. Tudo de forma simples e organizada.
               </p>
            </div>
          
              `,
        },
        
        {
          id: 6,
          //html
          html: `
           
            <div>
              <img
                src="./src/img/y-07.webp"
                alt="App Office 365"
                loading="lazy"
                
                style="width: 100%; max-width: 70px"
              />
            </div>
            <div>
              <p class="mt-0">
               A mais conhecida ferramenta de apresentações, hoje, ganhou a praticidade de converter, de forma integrada, os slides em vídeo.
               </p>
            </div>
          
              `,
        },
        {
          id: 7,
          //html
          html: `
          
            <div>
              <img
                src="./src/img/y-08.webp"
                alt="App Office 365"
                loading="lazy"
                
                style="width: 100%; max-width: 70px"
              />
            </div>
            <div>
              <p class="mt-0">
              Permite a criação e o compartilhamento on-line de apresentações multimídia, sendo uma excelente opção para portfólios, relatórios e, até mesmo, currículos profissionais.
               </p>
            </div>
       
              `,
        },
        {
          id: 8,
          //html
          html: `
          
            <div>
              <img
                src="./src/img/y-09.webp"
                alt="App Office 365"
                loading="lazy"
                
                style="width: 100%; max-width: 70px"
              />
            </div>
            <div>
              <p class="mt-0">
              Ideal para elaboração de pesquisas, testes, votações e avaliações on-line, com acesso em tempo real às respostas e possibilidade de exportação dos dados para o Excel.
               </p>
            </div>
       
              `,
        },
       
        {
          id: 9,
          //html
          html: `
           
            <div>
              <img
                src="./src/img/y-11.webp"
                alt="App Office 365"
                loading="lazy"
                
                style="width: 100%; max-width: 70px"
              />
            </div>
            <div>
              <p class="mt-0">
              Organizador de tarefas, facilita a atribuição de projetos, o compartilhamento de arquivos e a comunicação entre membros de uma equipe de trabalho.
               </p>
            </div>
        
              `,
        },
      ],
    };
  },
  methods: {
    menu(event, menuOption) {
      // Remove classe de todos
      let nucleosItems = document.querySelectorAll(".content_menu_02--a .nucleos-item");
      for (var i = 0; i < nucleosItems.length; i++) {
        nucleosItems[i].classList.remove("selected");
      }

      // Adiciona a classe para o item clicado
      event.target.classList.add("selected");

      // Conteúdo atual selecionado para mostrar html
      this.idSelected = menuOption;


    },
  },
  mounted() {
    
  },

  //html
  template: `
     
          <div class="content_menu_02 content_menu_02--a" :data-order="idSelected">
            <div class="box-attention content px-24 py-16 p-8-mobile" >
              <div class="row">
                <div class="col m3 s3 nucleos-menu">
                  <ul class="ml-16">
                    <li @click="menu($event, 0)" class="pointer nucleos-item selected">Outlook</li>
                    <li @click="menu($event, 1)" class="pointer nucleos-item">OneDrive</li>
                    <li @click="menu($event, 2)" class="pointer nucleos-item">OneNote</li>
                    <li @click="menu($event, 3)" class="pointer nucleos-item">Word</li>
                    <li @click="menu($event, 4)" class="pointer nucleos-item">Excel</li>
                    <li @click="menu($event, 5)" class="pointer nucleos-item">Teams</li>
                    <li @click="menu($event, 6)" class="pointer nucleos-item">PowerPoint</li>
                    <li @click="menu($event, 7)" class="pointer nucleos-item">Sway</li>
                    <li @click="menu($event, 8)" class="pointer nucleos-item">Forms</li>
                    <li @click="menu($event, 9)" class="pointer nucleos-item">Planner</li>

                  </ul>
                </div>
                <div class="col m9 s9 flex--align-center" >
                  <div class="box flex--align-center" v-html="items[idSelected].html">
                  
                  </div>
                </div>
              </div>
            </div>
          </div>

    
    `,
};

