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
    // .fromTo(to.children[0], .4, { height: '100vh' }, { height: '50vh' })
  }
  //responsible for page going out
  out({ from, done }) {
    done();
  }
}


export default SlideUp;