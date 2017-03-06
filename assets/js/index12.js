function capturePhotoEdit() { ///////////
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
        quality: 20,
        destinationType: destinationType.FILE_URI,
        saveToPhotoAlbum: true
    });
}