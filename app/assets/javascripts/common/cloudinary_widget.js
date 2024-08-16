document.addEventListener("DOMContentLoaded", function () {
  const uploadWidgetButton = document.getElementById('upload_widget');
  const cloudinaryUrlsField = document.getElementById('cloudinary-urls');

  uploadWidgetButton.addEventListener('click', function () {
    cloudinary.openUploadWidget({
      cloud_name: 'dtyadd1w5',
      upload_preset: 'pr_unsigned',
      multiple: true,
      sources: ['local', 'url', 'camera'],
      folder: 'petregistry',
      sources: ['local', 'url', 'camera'],
      showCompletedButton: true,
      clientAllowedFormats: ['png', 'jpg', 'jpeg'],
      showUploadMoreButton: true,
    },   (error, result) => {
      if (error) {
        console.log('Error during upload:', error);
        return;
      }

      if (result.event === "source-changed" || result.event === "upload-added") {
        document.getElementById('upload_progress').style.display = 'block';
        document.getElementById('progress_bar').value = 0;
      }

      if (result.event === "upload-progress") {
        const progress = Math.round((result.info.bytes / result.info.total_bytes) * 100);
        document.getElementById('progress_bar').value = progress;
      }

      if (result.event === "success") {
        document.getElementById("image_field").value = result.info.secure_url;

        const previewDiv = document.getElementById("image_preview");
        const imgWrapper = document.createElement("div");
        imgWrapper.style.position = "relative";
        imgWrapper.style.display = "inline-block";
        imgWrapper.style.marginTop = "10px";
        imgWrapper.style.marginRight = "10px";

        const imgElement = document.createElement("img");
        imgElement.src = result.info.secure_url;
        imgElement.alt = "Uploaded image preview";
        imgElement.style.maxWidth = "200px";

        const removeButton = document.createElement("button");
        removeButton.innerText = "Remove";
        removeButton.style.position = "absolute";
        removeButton.style.top = "0";
        removeButton.style.right = "0";
        removeButton.style.backgroundColor = "red";
        removeButton.style.color = "white";
        removeButton.style.border = "none";
        removeButton.style.cursor = "pointer";
        removeButton.style.padding = "0 4px";
        removeButton.style.fontSize = "12px";
        removeButton.style.borderRadius = "4px";

        removeButton.addEventListener("click", function() {
          previewDiv.removeChild(imgWrapper);
          document.getElementById("image_field").value = "";  // Clear the hidden field
        });

        imgWrapper.appendChild(imgElement);
        imgWrapper.appendChild(removeButton);
        previewDiv.appendChild(imgWrapper);

        document.getElementById('upload_progress').style.display = 'none';
      }
    });

    document.getElementById("upload_widget").addEventListener("click", function () {
      myWidget.open();
    }, false);
  });
});