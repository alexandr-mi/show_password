
const eye_button = document.querySelector('.password__icon-container-eye');
const bg = document.querySelector('.password__bg');
const bg_after = document.querySelector('.password__bg-after');
const lock_icon = document.querySelector('.password__icon-lock');
const eye_frames = document.querySelector('#eye').children;
const password_input = document.querySelector('.password__input');

function showPassword() {
  setTimeout(() => {
    password_input.type = 'text';
  }, 200);
  setTimeout(() => {
    lock_icon.classList.toggle('active');
  }, 300);
  setTimeout( () => {
    bg.style.background = 'white';
  }, 500)
}

function hidePassword() {
  bg.style.background = 'black';
  setTimeout(() => {
    lock_icon.classList.toggle('active');
    password_input.type = 'password'
  }, 50);
}
function animationEye( eye_frames, button ) {

  button.dataset.in_process = 'true';

  let _eye_frames = [];

  let state = button.dataset.state;


  if ( state === 'open' ) {
    button.dataset.state = 'close';
    _eye_frames = [...eye_frames];
  } else if ( state === 'close' ) {
    button.dataset.state = 'open';
    _eye_frames = [...eye_frames].reverse();
  } else {
    return
  }

  let length = _eye_frames.length,
    i = 0;

  const openEyeInterval = setInterval(() => {
    if ( i <  length) {
      if ( i === 0 ) {
        _eye_frames[i].style.display = 'block';
      } else {
        _eye_frames[i - 1].style.display = 'none';
        _eye_frames[i].style.display = 'block';
      }
      i++;
    } else {
      button.dataset.in_process = 'false';
      clearInterval(openEyeInterval);
    }
  }, 30);
};



window.addEventListener('load', () => {



  eye_button.addEventListener('click', (e) => {
    if ( e.currentTarget.dataset.in_process === 'false' ) {
      bg_after.classList.toggle('active');

      if ( e.currentTarget.dataset.state === 'close' ) {
        showPassword();
      } else {
        hidePassword();
      }

      animationEye( eye_frames, eye_button );
    };
  })

});
