

$(document).ready(() => {
  const tags = ['lunaire', 'zogra', 'newmoon', 'hawaii'];
  const times = [1000, 2000, 3000, 4000]

  for (let i = 0; i < tags.length; i++) {

    setTimeout(() => {
      if (tags[i] !== 'lunaire') {
        $(`.${tags[i]}`).addClass('translate_y');
      }
      $(`.${tags[i]}`).addClass('visible');
    }, times[i]);
  }
})