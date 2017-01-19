$(function () {
  var displayValue = ''
  var $display = $('.display')
  $('.operator,.number').click(function () {
    displayValue += $(this).prop('value')
    $display.text(displayValue)
  })
  $("button[value='C']").click(function () {
    displayValue = ''
    $display.text(displayValue)
  })
  $("button[value='=']").click(function () {
    displayValue = eval(displayValue)
    $display.text(displayValue)
  })
  $("button[value='N']").click(function () {
    if (displayValue !== '') {
      if (displayValue > 0) {
        displayValue = -Math.abs(displayValue)
        $display.text(displayValue)
      } else  {
        displayValue = Math.abs(displayValue)
        $display.text(displayValue)
      }
    }
  })
  $("button[value='P']").click(function () {
    displayValue /= 100
    $display.text(displayValue)
  })
})
