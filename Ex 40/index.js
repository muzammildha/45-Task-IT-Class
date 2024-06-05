function musicAlbum(artistName, albumTitle, tracks) {
    var album = {
        artist: artistName,
        title: albumTitle
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = musicAlbum("Atif Aslam", "Rafta Rafta");
var album2 = musicAlbum("Jubin", "Zindagi");
var album3 = musicAlbum("Arijit Singh", "Ounchi Ounchi", 10);
console.log(album1, album2, album3);
