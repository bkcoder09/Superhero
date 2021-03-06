const {fabric} = require ("./fabric");

var canvas = new fabric.Canvas("myCanvas");

var block_height = 30;
var block_width = 30;

var player_x = 10;
var player_y = 10;

var player_image = "";
var block_image = "";

function player_update(){
    fabric.Image.fromURL("I am Groot.png", function(Img){
        player_image= Img;
        player_image.scaleToWidth(150);
        player_image.scaleToHeight(140);
        player_image.set({
            left: player_x,
            top: player_y
    });
    canvas.add(player_image);
});
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image= Img;
        block_image.scaleToWidth(block_width);
        block_image.scaleToHeight(block_height);
        block_image.set({
            left: player_x,
            top: player_y
    });
    canvas.add(block_image);   
});
}