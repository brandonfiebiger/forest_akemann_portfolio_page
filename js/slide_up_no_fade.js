import Highway from '@dogstudio/highway';
import { TimelineLite } from 'gsap';



class SlideUpNoFade extends Highway.Transition {
  // responsible for page coming in
  in({ from, to, done }) {

    const timeline = new TimelineLite();

    timeline.fromTo(to, 0.3, { top: '100%', display: 'block' }, {top: '0%' , display: 'block', onComplete: function(){
      from.remove();
      done();
    }}, '0')
    .fromTo(to.children[0].children, .00, { opacity: '0' }, { opacity: '1' }, '0')
    // .fromTo(to.children[0].children[1], .00, { opacity: '0' }, { opacity: '1' }, '0')
    .fromTo(to.children[1], .00, { opacity: '0', display: 'none' }, { opacity: '1', display: 'flex' }, '0')
    .fromTo(to.children[1].children, .00, { opacity: '0' }, { opacity: '1'}, '0')

    // .fromTo(to.children[1].children[1], .2, {opacity: '0'}, {opacity: '1'}, '+=.75')
    // .fromTo(to.children[2], .2, {opacity: '0', transform: 'translateY(6rem)'}, {opacity: 1, transform: 'translateY(5rem)'}, '+=1')
    // .FromTo('.lunaire-page_header', 5, {opacity: '0'}, {opacity: '1'}, 5)
  }
  //responsible for page going out
  out({ from, done }) {
    done();
  }
}


export default SlideUpNoFade;