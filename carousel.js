
window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel__lista'), {
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: '.carousel__indicadores',
    draggable: true,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  });
  });