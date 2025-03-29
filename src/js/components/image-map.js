export default{mounted(){},methods:{visit(a){a.preventDefault(),a.target.classList.contains("visited")||a.target.classList.add("visited"),console.log(a.target)}},template:`
  <div class="image-map">
  
  <!-- Hotspots (as áreas clicáveis) -->
  <div data-hystmodal="#modal-sala-1" class="hotspot" @click="visit($event)"  style="left: 24%; top: 36%; width: 4%;">
    <img
    
    src="src/img/sala-01.png"
    alt="Braço Robótico"
    loading="lazy"
  />
  </div>

  <div data-hystmodal="#modal-sala-2" class="hotspot" @click="visit($event)" style="left: 31%; top: 39%; width: 5.5%;"  >
    <img
    
    src="src/img/sala-02.png"
    alt="Impressora 3D"
    loading="lazy"
  />
  </div>

  <div data-hystmodal="#modal-sala-3" class="hotspot" @click="visit($event)" style="left: 8%; top: 72%; width: 5%;"  >
    <img
    
    src="src/img/sala-03.png"
    alt="Labdisc"
    loading="lazy"
  />
  </div>

  <div data-hystmodal="#modal-sala-4" class="hotspot" @click="visit($event)" style="left: 51%; top: 55%; width: 5.5%;"  >
    <img
    
    src="src/img/sala-04.png"
    alt="Óculos de Realidade Virtual"
    loading="lazy"
  />
  </div>

  <div data-hystmodal="#modal-sala-5" class="hotspot" @click="visit($event)" style="left: 60%; top: 55%; width: 5.5%;"  >
  <img
  
  src="src/img/sala-05.png"
  alt="Tablets"
  loading="lazy"
/>
</div>

<div data-hystmodal="#modal-sala-6" class="hotspot" @click="visit($event)" style="left: 46%; top: 75%; width: 7%;"  >
  <img
  
  src="src/img/sala-06.png"
  alt="Kits de Robótica"
  loading="lazy"
  />
  </div>

  <div data-hystmodal="#modal-sala-7" class="hotspot" @click="visit($event)" style="left: 60%; top: 80%; width: 5%;"  >
  <img
  
  src="src/img/sala-07.png"
  alt="Chromecast"
  loading="lazy"
  />
  </div>

  <div data-hystmodal="#modal-sala-8" class="hotspot" @click="visit($event)" style="left: 75%; top: 45%; width: 6%;"  >
  <img
  
  src="src/img/sala-08.png"
  alt="Miniestúdio"
  loading="lazy"
  />
  </div>

  <div data-hystmodal="#modal-sala-9" class="hotspot" @click="visit($event)" style="left: 85%; top: 75%; width: 9%;"  >
  <img
  
  src="src/img/sala-09.png"
  alt="Notebooks"
  loading="lazy"
  />
  </div>

  <div data-hystmodal="#modal-sala-10" class="hotspot" @click="visit($event)" style="left: 16%; top: 68%; width: 5%;"  >
  <img
  
  src="src/img/sala-10.png"
  alt="Sesitec"
  loading="lazy"
  />
  </div>



</div>
   `};