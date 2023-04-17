
window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel__lista'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: '.carousel__indicadores',
    draggable: true,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    },
    responsive: [
      {
        // pantallas mayores que >= 775px
        breakpoint: 576,
        settings: {
          // se ajusta a dos fotos por pantalla
          slidesToShow:3,
          slidesToScroll: 2,
                }
      },{
        // pantallas mayores que >= 1024px
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
         
        }
      }
    ]
  });
  });