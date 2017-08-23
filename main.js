(function(doc) {
  const App = (function() {
    const $count = doc.querySelector('[data-js="count"]');
    const $start = doc.querySelector('[data-js="bt-start"]');
    const $stop = doc.querySelector('[data-js="bt-stop"]');
    const $reset = doc.querySelector('[data-js="bt-reset"]');
    let temp;


    function initEvents() {
      $start.addEventListener('click', handleStart, false)
      $stop.addEventListener('click', handleStop, false)
      $reset.addEventListener('click', handleReset, false)
    }

    function handleStart() {
      $count.value = +$count.value + 1
      temp = setTimeout(handleStart, 1000)
    }

    function handleStop(){
      return clearTimeout(temp)
    }

    function handleReset(){
      $count.value = 0;
      handleStop()
    }

    return {
      initEvents: initEvents
    }
  })();

  App.initEvents()
})(document)