function musicAlbum(artistName:string,albumTitle:string,tracks?:number){
    let album:{artist:string,title:string,tracks?:number}={
        artist:artistName,
        title:albumTitle
      
        
    }
    if (tracks !== undefined){
        
        album.tracks = tracks ; 

    } 

    return album ;

}

let album1 = musicAlbum("Atif Aslam","Rafta Rafta")

let album2 = musicAlbum("Jubin","Zindagi")

let album3 = musicAlbum("Arijit Singh","Ounchi Ounchi",10)

console.log(album1,album2,album3)