import Highway from '@dogstudio/highway';
import { TimelineLite } from 'gsap';
import SlideUp from './slide_up';

const H = new Highway.Core({
  transitions: {
    lunaire: SlideUp
  }
});

$(document).ready(() => {
  
  setTimeout(() => {
    $('.splash-page_logo').addClass('slider');
  }, 1000);

  setTimeout(() => {
    $('.splash-page_logo').addClass('invisible');
  }, 2000);

  setTimeout(() => {
    $('.splash-page').addClass('display_none');
    $('.projects-nav_container').removeClass('display_none');
  }, 3000);

  setTimeout(() => {
    $('.projects-nav_header-tag').addClass('visible');
  }, 3500)


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
});


export const showLunaire = () => {
  setTimeout(() => {
    $('.lunaire-page_header').addClass('slide-header-up');
  }, 1000);
  
  setTimeout(() => {
    $('.project-header').removeClass('invisible');
  }, 1500);
}

$('.lunaire').on('click', () => showLunaire());