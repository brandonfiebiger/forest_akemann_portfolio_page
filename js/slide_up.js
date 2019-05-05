import Highway from '@dogstudio/highway';
import { TimelineLite } from 'gsap';



class SlideUp extends Highway.Transition {
  // responsible for page coming in
  in({ from, to, done }) {

    const timeline = new TimelineLite();

    timeline.fromTo(to, 0.2, {top: '100%'}, {top: '0%', onComplete: function(){
      from.remove();
      done();
    }})
    .fromTo(to.children[1], .08, { height: '100vh' }, { height: '55vh' }, '+=.5')
    .fromTo(to.children[1].children[1], .2, {opacity: '0'}, {opacity: '1'}, '+=.75')
    .fromTo(to.children[2], .2, {opacity: '0', transform: 'translateY(6rem)'}, {opacity: 1, transform: 'translateY(5rem)'}, '+=1')
    .fromTo(to.children[3], .5, { display: 'none' }, { display: 'block'}, '+=1')
    // .FromTo('.lunaire-page_header', 5, {opacity: '0'}, {opacity: '1'}, 5)
  }
  //responsible for page going out
  out({ from, done }) {
    done();
  }
}


export default SlideUp;