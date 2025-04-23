document.addEventListener('DOMContentLoaded', function () {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzwhCcEFGzDg9hkTVSfmD6JU8_zdo91vk2zkYIPfMnAggQulay1xt4iQ_jIVO5sNc2jvQ/exec';
  const form = document.forms['registration'];
  const loading = document.querySelector('.js-loading');
  const successMessage = document.querySelector('.js-success-message');
  const errorMessage = document.querySelector('.js-error-message');

  form.addEventListener('submit', e => {
    e.preventDefault();
    showLoadingIndicator();

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        if (response.ok) {
          showSuccessMessage();
        } else {
          throw new Error('Ошибка отправки');
        }
      })
      .catch(error => {
        showErrorMessage(error);
      });
  });

  function showLoadingIndicator() {
    loading.classList.remove('d-none');
    successMessage.classList.add('d-none');
    errorMessage.classList.add('d-none');
  }

  function showSuccessMessage() {
    loading.classList.add('d-none');
    form.classList.add('opacity-0');
    setTimeout(() => {
      form.style.display = 'none';
      successMessage.classList.remove('d-none');
      successMessage.classList.add('show');
    }, 300);
  }

  function showErrorMessage(error) {
    console.error('Ошибка:', error);
    loading.classList.add('d-none');
    errorMessage.classList.remove('d-none');
    errorMessage.classList.add('show');
  }
});

  function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('active');
  }

  const tabContainer = document.getElementById('schoolTabs');

  document.querySelectorAll('#schoolTabs .nav-link').forEach(btn => {
    btn.addEventListener('click', () => {
      setTimeout(() => {
        const activeBtn = document.querySelector('#schoolTabs .nav-link.active');
        if (activeBtn) {
          activeBtn.scrollIntoView({
            behavior: 'smooth',
            inline: 'center',
            block: 'nearest'
          });
        }
      }, 100);
    });
  });
  