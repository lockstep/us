$(function() {

  // NOTE: This is a cool interactive text thing we can use somewhere.
  // if ($('.prompt-text-wrapper').length > 0) {
  //   setTimeout(function() {
  //     getText(0);
  //   }, 1500);
  // }

  var fadeOutAfterTyping = false;
  var typedOptions = {
    // strings: [], Will set this later.
    stringsElement: null,
    // typing speed
    typeSpeed: 25,
    // time before typing starts
    startDelay: 0,
    // backspacing speed
    backSpeed: 0,
    // only backspace what doesn't match the previous string
    smartBackspace: true,
    // shuffle the strings
    shuffle: false,
    // time before backspacing
    backDelay: 800,
    // Fade out instead of backspace
    fadeOut: false,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 500, // milliseconds
    // loop
    loop: false,
    loopCount: Infinity,
    // show cursor
    showCursor: true,
    // character for cursor
    cursorChar: '|',
    // attribute to type (null == text)
    attr: null,
    // Bind to focus and blur if el is text input
    bindInputFocusEvents: false,
    // either html or text
    contentType: 'html',
    // call when done callback function
    onComplete: function(self) {
      if (fadeOutAfterTyping) {
        setTimeout(function() {
          $('.prompt-text-wrapper').fadeOut();
        }, 1000);
      } else {
        $('.choices').fadeIn();
      }
    },
    // starting callback function before each string
    preStringTyped: function(arrayPos, self) {},
    // callback for every typed string
    onStringTyped: function(arrayPos, self) {},
    // During looping, this is when the last string is backspaced
    onLastStringBackspaced: function(self) {},
    // callback for when a pause begins
    onTypingPaused: function(arrayPos, self) {},
    // callback for when a pause is completed
    onTypingResumed: function(arrayPos, self) {},
    // callbacks for pause / play / reset / destroy
    onReset: function(self) {},
    onStop: function(arrayPos, self) {},
    onStart: function(arrayPos, self) {},
    onDestroy: function(self) {}
  }

  function getText(index) {
    var choicesFaded = false;
    $('.choices').fadeOut(function() {
      choicesFaded = true;
    });

    $.ajax('/interactive_text?text_index=' + index, {
      data: 'JSON',
      type: 'GET',
      success: function(res) {
        var instructions = res.text.split('::')
        var newStrings = instructions[0].split('|');
        var newChoices = instructions[1];
        attemptToSetChoices(newChoices)
        typeText(newStrings);
      }
    });

    function attemptToSetChoices(choices) {
      if (choicesFaded) setChoices(choices);
      else {
        setTimeout(function() {
          attemptToSetChoices(choices);
        }, 100);
      }
    }
  }

  var choicesLocked = false;
  function setChoices(choices) {
    if (choices) {
      var $choices = $('.choices');
      choicesLocked = false;
      $choices.find('span').remove();
      $.each(choices.split(','), function(i, choice) {
        var $choice = $('<span>');
        $choice.text(choice.split(':')[0]);
        $choice.data('choice-action', choice.split(':')[1]);
        $choices.append($choice);
      });
    } else fadeOutAfterTyping = true;
  }

  $(document).on('click', '.choices span', function(e) {
    e.preventDefault();
    if (choicesLocked) return;
    choicesLocked = true;
    var nextTextIndex = $(this).data('choice-action');
    if (nextTextIndex === 'x') $('.prompt-text-wrapper').fadeOut();
    else getText(nextTextIndex);
  });

  var typed;
  function typeText(strings) {
    if(typed) typed.addStrings(strings);
    else {
      typedOptions.strings = strings;
      typed = new Typed("prompt-text", typedOptions);
    }
  }
});
