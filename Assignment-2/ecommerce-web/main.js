// init Isotope
var $grid = $('.collection-list').isotope({
    // options
  });
  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    resetFilterBtns();
    $(this).addClass('active-filter-btn')
    $grid.isotope({ filter: filterValue });
  });

  var filterBin = $('.filter-button-group').find('button');
  function resetFilterBtns() {
    filterBin.each(function() {
      $(this).removeClass('active-filter-btn')
    })
  }

// contact form
$(document).ready(function() {
  $('#contactForm').on('submit', function(e) {
      // Prevent form submission
      e.preventDefault();

      // Check if all required fields are filled
      var name = $('#name').val();
      var email = $('#email').val();
      var message = $('#message').val();

      if (name === '' || email === '' || message === '') {
          alert('Please fill in all required fields.');
      } else {
          // If all fields are filled, you can proceed with form submission or further processing
          alert('Form submitted successfully.');
          // Uncomment the following line to submit the form
          // this.submit();
      }
  });
});
