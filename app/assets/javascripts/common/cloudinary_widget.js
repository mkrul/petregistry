document.addEventListener("DOMContentLoaded", function() {
  const uploadWidgetButton = document.getElementById('upload_widget');
  const cloudinaryUrlsField = document.getElementById('cloudinary-urls');

  uploadWidgetButton.addEventListener('click', function() {
    cloudinary.openUploadWidget({
      cloud_name: 'dtyadd1w5',
      upload_preset: 'pr_unsigned',
      multiple: true,
      sources: ['local', 'url', 'camera'],
      folder: 'petregistry', // Optional: Folder to store images
    }, (error, result) => {
      if (!error && result && result.event === "success") {
        const urls = result.info.secure_url;
        let currentUrls = cloudinaryUrlsField.value;
        cloudinaryUrlsField.value = currentUrls ? currentUrls + ',' + urls : urls;
      }
    });
  });

  $('.cloudinary-fileupload').bind('cloudinarydone', function(e, data) {
    $('.preview').html(
      $.cloudinary.image(data.result.public_id,
        { format: data.result.format, version: data.result.version,
          crop: 'fill', width: 150, height: 100 })
    );
    $('.image_public_id').val(data.result.public_id);
    return true;
  });

  $('.cloudinary-fileupload').bind('fileuploadprogress', function(e, data) {
    $('.progress_bar').css('width', Math.round((data.loaded * 100.0) / data.total) + '%');
  });
});