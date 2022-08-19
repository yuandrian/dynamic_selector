$(function () {
  $.getJSON("./data.json", function (data) {
    for (var i = 0; i < data.categories.length; i++) {
      $("#main_category").append(
        '<option value= "' +
          data.categories[i].id +
          '"> ' +
          data.categories[i].display +
          "</option>"
      );
    }
    $(document).on("change", "#main_category", function () {
      var main_category_id = $(this).val();
      if (main_category_id !=""){
        $.each(data, main_categories_id);
      } else{
        $('#type'.html('<option value="">Select Type</option>'))
      }

    });
  });
});
