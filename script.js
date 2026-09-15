document.documentElement.classList.add('js');

(function () {
  'use strict';

  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');

  function closeNav() {
    if (!nav || !toggle) return;
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    nav.addEventListener('click', function (event) {
      if (event.target.closest('a')) closeNav();
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') closeNav();
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth >= 960) closeNav();
    });
  }

  var track = document.querySelector('[data-project-track]');
  var previous = document.querySelector('[data-rail-prev]');
  var next = document.querySelector('[data-rail-next]');

  if (track && previous && next) {
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    var ticking = false;

    function cardStep() {
      var firstCard = track.querySelector('.project-card');
      var styles = window.getComputedStyle(track);
      var gap = parseFloat(styles.columnGap || styles.gap) || 0;
      return firstCard ? firstCard.getBoundingClientRect().width + gap : track.clientWidth;
    }

    function updateControls() {
      var maximum = track.scrollWidth - track.clientWidth;
      previous.disabled = track.scrollLeft <= 3;
      next.disabled = track.scrollLeft >= maximum - 3;
      ticking = false;
    }

    function requestControlUpdate() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateControls);
    }

    function move(direction) {
      track.scrollBy({
        left: cardStep() * direction,
        behavior: reduceMotion.matches ? 'auto' : 'smooth'
      });
    }

    previous.addEventListener('click', function () {
      move(-1);
    });

    next.addEventListener('click', function () {
      move(1);
    });

    track.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        move(-1);
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        move(1);
      }
    });

    track.addEventListener('scroll', requestControlUpdate, { passive: true });
    window.addEventListener('resize', requestControlUpdate);
    updateControls();
  }

  var form = document.querySelector('[data-contact-form]');

  if (form) {
    var status = form.querySelector('[data-form-status]');
    var rules = [
      { id: 'name', message: 'Add your name so we know who to reply to.' },
      { id: 'phone', message: 'Add a phone number.' },
      {
        id: 'email',
        message: 'Add an email address.',
        test: function (value) { return /.+@.+\..+/.test(value); },
        invalid: 'Check the email address.'
      },
      { id: 'service', message: 'Choose a service.' }
    ];

    function setError(rule, text) {
      var input = form.querySelector('#' + rule.id);
      var slot = form.querySelector('#err-' + rule.id);
      if (!input || !slot) return;

      slot.textContent = text || '';
      input.closest('.field').classList.toggle('is-invalid', Boolean(text));

      if (text) input.setAttribute('aria-invalid', 'true');
      else input.removeAttribute('aria-invalid');
    }

    rules.forEach(function (rule) {
      var input = form.querySelector('#' + rule.id);
      if (!input) return;

      input.addEventListener('input', function () {
        setError(rule, '');
      });

      input.addEventListener('change', function () {
        setError(rule, '');
      });
    });

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var firstBad = null;
      var submitButton = form.querySelector('[type="submit"]');
      var originalButtonText = submitButton ? submitButton.textContent : '';

      rules.forEach(function (rule) {
        var input = form.querySelector('#' + rule.id);
        if (!input) return;

        var value = input.value.trim();
        var text = '';

        if (!value) text = rule.message;
        else if (rule.test && !rule.test(value)) text = rule.invalid;

        setError(rule, text);
        if (text && !firstBad) firstBad = input;
      });

      if (firstBad) {
        if (status) {
          status.textContent = '';
          status.classList.remove('is-success', 'is-error');
        }
        firstBad.focus();
        return;
      }

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
      }

      form.setAttribute('aria-busy', 'true');

      if (status) {
        status.textContent = 'Sending your quote request...';
        status.classList.remove('is-success', 'is-error');
      }

      var formData = new FormData(form);
      var payload = {};

      formData.forEach(function (value, key) {
        payload[key] = value;
      });

      fetch(form.action, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(payload)
      })
        .then(function (response) {
          return response.json().then(function (result) {
            if (!response.ok || !result.success) {
              throw new Error(result.message || 'Submission failed.');
            }
            return result;
          });
        })
        .then(function () {
          form.reset();
          rules.forEach(function (rule) {
            setError(rule, '');
          });

          if (status) {
            status.textContent = 'Thanks! Your quote request was sent. We will be in touch soon.';
            status.classList.remove('is-error');
            status.classList.add('is-success');
          }
        })
        .catch(function () {
          if (status) {
            status.textContent = 'We could not send your request. Please try again, or call or text (385) 473-5514.';
            status.classList.remove('is-success');
            status.classList.add('is-error');
          }
        })
        .finally(function () {
          form.removeAttribute('aria-busy');
          if (submitButton) {
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
          }
        });
    });
  }

  var year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
})();
