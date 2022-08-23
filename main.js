var song_playing = "";
times = 0;
var color1 = 0;
window.addEventListener('load',()=>{
    setInterval(autoload, 2000);
    document.getElementById('header').style = `    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 50px;
    background-color: rgba(240, 248, 255, 0.151);
    border-radius: 0px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: aliceblue;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('./images/favicon.png');
    background-size: 30px;
    background-repeat: no-repeat;
    background-position: 10px 50%;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    z-index: 20;
    transition: all ease-in-out 2s;
    `;
    autotype1();
});
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }
x=0;
async function autotype1()
{
 y=0;   
    while (y<24)
    {
        await sleep(500);
        y+=1;    
        add_word();
}
}
function add_word()
{
    word = ['W','e','l','c','o','m','e',' ', 't','o',' ','I','n','v','e','n','t','o',' ','M','u','s','i','c'];
    document.getElementById('banner').innerHTML +=word[x];
    x+=1;
}
function autoload()
{
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.transition = "all ease-in-out 1s";
}

function play_song(song_index)
{
    if (song_index == 1)
    {
        song_playing = "on_&_on";
        start(song_playing);
    }
    else if (song_index == 2)
    {
        song_playing = "punya_paap";
        start(song_playing);
    }
    else if (song_index == 3)
    {
        song_playing = "kaam_25";
        start(song_playing);
    }
    else if (song_index == 4)
    {
        song_playing = "miss_you";
        start(song_playing);
    }
    else if (song_index == 5)
    {
        song_playing = "jugnuu";
        start(song_playing);
    }
    else if (song_index == 6)
    {
        song_playing = "born_for_this";
        start(song_playing);
    }
    else if (song_index == 7)
    {
        song_playing = "never_gonna_give_you_up";
        start(song_playing);
    }
    else if (song_index == 8)
    {
        song_playing = "theres_nothing_holdin_me_back";
        start(song_playing);
    }
    else if (song_index == 9)
    {
        song_playing = "let_me_love_you";
        start(song_playing);
    }
    else if (song_index == 10)
    {
        song_playing = "old_town_road";
        start(song_playing);
    }
    else if (song_index == 11)
    {
        song_playing = "walls";
        start(song_playing);
    }
    document.getElementById('player').style.backgroundImage = "url('https://sherry65-code.github.io/music_img/"+(parseInt(song_index)-1)+".jpg')";
    document.getElementById('webicon').href = "https://sherry65-code.github.io/music_img/"+(parseInt(song_index)-1)+".jpg";
}
function start(song_name)
{
    times+=1;
    document.getElementById('player').style.transform = "scale(1)";
    if (times > 1)
    {
        song_current.pause();
        song_current = "";
    }
    songCUR = song_name.replace('_',' ').replace('_',' ').replace('_',' ').replace('_',' ').replace('_',' ');
    song_current = new Audio("https://sherry65-code.github.io/song_lib/"+song_name+".mp3");
    song_current.play();
    document.title = songCUR;
    document.getElementById('songname').innerHTML = songCUR;
}
function play(play_index)
{
    if (play_index == 0)
    {
        document.getElementById('player').innerHTML = `<button id="songname">`+songCUR+`</button><button class="playn" onclick="play(1)"></button>`;
        play_index = 1;
        song_current.pause();
    }
    else
    {
        document.getElementById('player').innerHTML = `<button id="songname">`+songCUR+`</button><button class="play" onclick="play(0)"></button>`;
        play_index = 0;
        song_current.play();
        
    }
}
// 716

