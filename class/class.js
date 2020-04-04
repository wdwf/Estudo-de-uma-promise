//CLASS

class smoothScroll {
  //O parametro do consructor será o mesmo parametro passado na função new
  constructor(links) {
    
    // this.link = links;

    //Ele vai pegar todos os links que hajam no document
    this.linksElements = document.querySelectorAll(links);

    this.addClickEvent();
  }

  //Funçoes/Metodos

  handleClick(event) {
    //Resetando o evento padrão
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    console.log(section.offsetTop);

    window. scrollTo({
      top: section.offsetTop - (window.innerHeight - section.clientHeight) / 2,
      behavior: "smooth"
    })
  }

  addClickEvent() {
    this.linksElements.forEach(link => { 
      link.addEventListener("click", this.handleClick);
    });
  }
}

class ActiveSmoothScroll extends smoothScroll {
  constructor(links, sections) {
    //SUPER - é coomo se ele estivesse executando o construtor anterior e para que seja feita e execução correta é necessario passar os parametros do construtor que se extend
    super(links);

    this.sectionElements = document.querySelectorAll(sections);

    //Usado para forçar a localização do scopo do elemento
    this.handleScroll = this.handleScroll.bind(this);

    this.activeNavScroll();

  }

  handleScroll() {
    this.sectionElements.forEach((section, i) => {
      if(window.pageXOffset > section.offsetTop - window.innerHeight * 0.5) {
        this.linksElements[i].classList.add("active");
      }
    })
    
  }

  activeNavScroll() {
    window.addEventListener("scroll", this.handleScroll);
  }
}

//const scroll = new smoothScroll("a[href^='#']"); -- O ^ siguinifica que tem que começar por # 
const scroll = new smoothScroll("a[href^='#']", "section");

// console.log(scroll.link);

