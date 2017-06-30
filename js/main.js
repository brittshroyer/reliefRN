

$('#myModal').on('show.bs.modal', function (event) {
  var serviceDiv = $(event.relatedTarget);
  var title = serviceDiv.data('content');
  var body = serviceDiv.data('body');
  var modal = $(this);
  modal.find('.modal-title').text(title);
  modal.find('.modal-body').text(body);
});


// $('.div-responsive').hover(
//   function() {
//     $(this).addClass('darken');
//   }, function() {
//     $(this).removeClass('darken');
//   }
// );
