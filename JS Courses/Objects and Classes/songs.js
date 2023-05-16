function createSongs(infoParameters){
    class Song{
        constructor(typeList, name, duration ){
            this.typeList = typeList,
            this.name = name,
            this.duration = duration
        }
    }

    let[numberOfSongs, ...songs ] = infoParameters;
    let display = songs[songs.length - 1]
    let playList = [];

    for (let i = 0; i < numberOfSongs; i++) {
        let [typeList, name, duration] = songs[i].split('_');

        if(display !== 'all' && typeList !== display){
            continue;
        }

        let song = new Song(typeList, name, duration);
        playList.push(song);
    }

    playList.forEach(song => {
        console.log(song.name)
    });
}

createSongs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'])