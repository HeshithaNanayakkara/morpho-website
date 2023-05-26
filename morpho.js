var images = [
    "https://pbs.twimg.com/profile_images/1361596153448460289/shpCzA-S_400x400.jpg",
    "https://careerkarma.com/blog/wp-content/uploads/2019/11/what-is-coding-what-is-coding-used-for.png",
    "https://2u.com/static/23e6ca8dc066e1d7a5c64da99b9636cd/b857a/NUS_-_PR_HERO.max-2880x1800.jpg",
    "https://www.uwyo.edu/soc/_files/images/soc-header.jpg"
    
];

var position = 0;
function next(){
    var slider = document.getElementById("slider");
    position++;
    if (position >= images.length){
        position = 0;

    }
    slider.src = images[position]
}

function prev(){
    var slider = document.getElementById("slider");
    position--;
    if(position < 0 ){
        position = images.length-1;
    }
    slider.src = images[position]
}




