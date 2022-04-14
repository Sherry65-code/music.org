var song_playing = "";
times = 0;

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
        song_playing = "hands_to_myself";
        start(song_playing);
    }
    else if (song_index == 10)
    {
        song_playing = "old_town_road";
        start(song_playing);
    }
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
    song_current = new Audio("https://sherry65-code.github.io/song_lib/"+song_name+".mp3");
    song_current.play();
}
function play(play_index)
{
    if (play_index == 0)
    {
        document.getElementById('player').innerHTML = `<button class="playn" onclick="play(1)"></button>`;
        play_index = 1;
        song_current.pause();
    }
    else
    {
        document.getElementById('player').innerHTML = `<button class="play" onclick="play(0)"></button>`;
        play_index = 0;
        song_current.play();
        
    }
}