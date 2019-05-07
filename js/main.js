import Highway from '@dogstudio/highway';
import { TimelineLite } from 'gsap';
import SlideUp from './slide_up';
import SlideUpNoFade from './slide_up_no_fade';
import SlideUpAboutPage from './slide_up_about_page';

const H = new Highway.Core({
  transitions: {
    lunaire: SlideUp,
    home: SlideUpNoFade,
    about: SlideUpAboutPage,
    hawaii: SlideUp,
    "zogra-round": SlideUp
  }
});

$(document).on('click', (e) => {
  if (e.target.className === 'navigation-button') {
    $('.navigation-nav').addClass('slide-nav-out');    
  }

  if (e.target.className === 'exit-nav') {
    $('.navigation-nav').removeClass('slide-nav-out');
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
  
  
  const tags = ['lunaire', 'zogra', 'hawaii'];
  const times = [4000, 4500, 5000]
  
  for (let i = 0; i < tags.length; i++) {
    
    setTimeout(() => {
      if (tags[i] !== 'lunaire') {
        $(`.${tags[i]}`).addClass('translate_y');
      }
      $(`.${tags[i]}`).addClass('visible');
    }, times[i]);
  }
});


export const showProject = () => {
  setTimeout(() => {
    $('.project-page_header').addClass('slide-header-up');
  }, 1000);
  
  setTimeout(() => {
    $('.project-header').removeClass('invisible');
  }, 1500);
  
  setTimeout(() => {
    $('.first-text-section').removeClass('invisible');
    $('.first-text-section').addClass('slide-text-up');
  }, 2500);
}

// $('.lunaire').on('click', () => showLunaire());
