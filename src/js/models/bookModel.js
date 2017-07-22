var bookModel = function (data) {

    for (var key in data.volumeInfo) {
        if (key === 'title' || key === 'description' || key === 'imageLinks' ) {
            Object.defineProperty(this, key, {
                value: key === 'description' ? data.volumeInfo[key].substr(0, 200) + "..." : data.volumeInfo[key]
            });
        }
    }
};

module.exports = bookModel;