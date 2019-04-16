

$(document).ready(() => {
  
  setTimeout(() => {
    $('.splash-page_logo').addClass('slider');
  }, 1000);

  setTimeout(() => {
    $('.splash-page_logo').addClass('invisible');
  }, 2000);

  setTimeout(() => {
    $('.splash-page').addClass('display_none');
    $('.projects-nav').removeClass('display_none');
  }, 3000)


  const tags = ['lunaire', 'zogra', 'newmoon', 'hawaii'];
  const times = [4000, 5000, 6000, 7000]

  for (let i = 0; i < tags.length; i++) {

    setTimeout(() => {
      if (tags[i] !== 'lunaire') {
        $(`.${tags[i]}`).addClass('translate_y');
      }
      $(`.${tags[i]}`).addClass('visible');
    }, times[i]);
  }
})