function toggleReadMore(){

    var moreText = document.getElementById("more");
    var btnText = document.getElementById("showMore");

    if(moreText.style.display === "none"){
        moreText.style.display = "inline";
        btnText.innerHTML = "Read Less";
    }else{
        moreText.style.display = "none";
        btnText.innerHTML = "Read More";
    }

}

function toggleShowMore(){

    var scrollableDiv = document.getElementById("scroll-div");
    var btnText =  document.getElementById("showMoreFor");

    if(scrollableDiv.style.overflowY === "scroll"){
        scrollableDiv.style.overflowY = "unset";
        scrollableDiv.style.height = "auto";
        btnText.innerHTML = "Show Less";
    }else{
        scrollableDiv.style.overflowY = "scroll";
        scrollableDiv.style.height = "15vh";
        btnText.innerHTML = "Show More";
    }


}

function switchToFirstVideo(){
    var episode = document.querySelector('h1');
    var video = document.getElementById('myVideo');
    episode.textContent = "[Sub][Episode 1]";
    video.src = "https://www.youtube.com/embed/XOjmXc5lXUc?si=PVQSMf3t-AkEzx5m";
    video.load();
    video.play();
}

function switchToSecondVideo(){
    var episode = document.querySelector('h1');
    var video = document.getElementById('myVideo');
    episode.textContent = "[Sub][Episode 2]";
    video.src = "https://www.youtube.com/embed/0H32OhGX2s4?si=dTUNG0rKReDVjLmK";
    video.load();  
    video.play();

}

function switchToThirdVideo(){
    var episode = document.querySelector('h1');
    var video = document.getElementById('myVideo');
    episode.textContent = "[Sub][Episode 3]";
    video.src = "https://www.youtube.com/embed/lSdq2dUzmz4?si=DwkM5rr39DkmmEp0";
    iframe.load();
    iframe.play();
}
function switchTo4Video(){
    var episode = document.querySelector('h1');
    episode.textContent = "[Sub][Episode 4]";
    var video = document.getElementById('myVideo');
    video.src = "https://www.youtube.com/embed/XOjmXc5lXUc?si=nz0uDbs5W2ZCZu4H";
    iframe.load();
    iframe.play();
}
function switchTo5Video(){
    var episode = document.querySelector('h1');
    episode.textContent = "[Sub][Episode 5]";
    var video = document.getElementById('myVideo');
    video.src = "https://www.youtube.com/embed/bYL2eEXpI2s?si=lDwf8tAGbEVOyS2f";
    iframe.load();
    iframe.play();
}
function switchTo6Video(){
    var episode = document.querySelector('h1');
    episode.textContent = "[Sub][Episode 6]";
    var video = document.getElementById('myVideo');
    video.src = "https://www.youtube.com/embed/iifu1IXs8kA?si=dH6LeOR1Os3CZbSo";
    iframe.load();
    iframe.play();
}
function switchTo7Video(){
    var episode = document.querySelector('h1');
    episode.textContent = "[Sub][Episode 7]";
    var video = document.getElementById('myVideo');
    video.src = "https://www.youtube.com/embed/HMk8Ebob6Mk?si=Rljz_sHlsiyQTZMH";
    iframe.load();
    iframe.play();
}
function switchTo8Video(){
    var episode = document.querySelector('h1');
    episode.textContent = "[Sub][Episode 8]";
    var video = document.getElementById('myVideo');
    video.src = "https://www.youtube.com/embed/N-L9Kirvw3Q?si=xHJErWeTAfILGEiS";
    iframe.load();
    iframe.play();
}
function switchTo9Video(){
    var episode = document.querySelector('h1');
    episode.textContent = "[Sub][Episode 9]";
    var video = document.getElementById('myVideo');
    video.src = "https://www.youtube.com/embed/qBEuU6-2UdI?si=Pu67Zk9mdxubtZDt";
    iframe.load();
    iframe.play();
}
function switchTo10Video(){
    var episode = document.querySelector('h1');
    episode.textContent = "[Sub][Episode 10]";
    var video = document.getElementById('myVideo');
    video.src = "https://www.youtube.com/embed/FI9ulushkQA?si=qjcShGyGylOS_xlW";

    iframe.load();
    iframe.play();
}
function switchTo11Video(){
    var episode = document.querySelector('h1');
    episode.textContent = "[Sub][Episode 11]";
    var video = document.getElementById('myVideo');
    video.src = "https://www.youtube.com/embed/YjFK4FqeN90?si=88HmZV3Tly0uX9M9";

    iframe.load();
    iframe.play();
}
function switchTo12Video(){
    var episode = document.querySelector('h1');
    episode.textContent = "[Sub][Episode 12]";
    var video = document.getElementById('myVideo');
    video.src = "https://www.youtube.com/embed/inBqFmv3zfQ?si=x5DuyNbZk7KcxD8D";
    iframe.load();
    iframe.play();
}

