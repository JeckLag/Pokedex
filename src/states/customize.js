Pokedex.customizeState = function(game) {

}
//Color por defecto
var color= 'assets/images/raqueta.png';
var colorRaqueta = 'raqueta';
Pokedex.customizeState.prototype = {

    preload: function() {

    },

    create: function() {
    	var text = "Color";
    	var style = { font: "50px Arial", fill: "#ffffff", align: "center" };
    	var color_texto = game.add.text(340, 225, text, style);
        var jugar_boton = game.add.button(515, 500, 'jugar', this.levelOnClick, this, 1, 0, 0);
        var volver_boton = game.add.button(115, 500, 'volver', this.menuOnClick, this, 1, 0, 0);
        //Dependiendo en cual clickes asi sera tu raqueta
        var button = game.add.button(215 ,game.world.centerY, 'blue' , this.updateColorBlue, this, 2, 1, 0);
        var button = game.add.button(315, game.world.centerY, 'red' , this.updateColorRed, this, 2, 1, 0);
        var button = game.add.button(415, game.world.centerY, 'yellow' , this.updateColorYellow, this, 2, 1, 0);
        var button = game.add.button(515, game.world.centerY, 'green' , this.updateColorGreen, this, 2, 1, 0);

        palas = game.add.sprite(game.world.centerX - game.world.centerX*0.83, game.world.centerY, colorRaqueta);
        palas2 = game.add.sprite(game.world.centerX + game.world.centerX*0.83, game.world.centerY, colorRaqueta);
        palas.scale.setTo(0.5, 0.5);
        palas.anchor.setTo(0.5, 0.5);
        palas2.scale.setTo(0.5, 0.5);
        palas2.anchor.setTo(0.5, 0.5);

    },

    update: function() {
        this.drawPlayer();
    },
    menuOnClick: function() {

        game.state.start('menuState')
 
    },
    levelOnClick: function() {

        game.state.start('levelState')
 
    },
    updateColorBlue: function(){
        colorRaqueta = 'raquetaBlue';
        color='assets/images/raqueta_azul.png';
    },
    updateColorRed: function(){
        colorRaqueta = 'raquetaRed';
        color='assets/images/raqueta_roja.png';
    },
    updateColorYellow: function(){
        colorRaqueta = 'raquetaYellow';
        color='assets/images/raqueta_amarilla.png';
    },
    updateColorGreen: function(){
        colorRaqueta = 'raquetaGreen';
        color='assets/images/raqueta_verde.png';
    },
    drawPlayer: function(){
        palas.destroy();
        palas2.destroy();
        palas = game.add.sprite(game.world.centerX - game.world.centerX*0.83, game.world.centerY, colorRaqueta);
        palas2 = game.add.sprite(game.world.centerX + game.world.centerX*0.83, game.world.centerY, colorRaqueta);
        palas.scale.setTo(0.5, 0.5);
        palas.anchor.setTo(0.5, 0.5);
        palas2.scale.setTo(0.5, 0.5);
        palas2.anchor.setTo(0.5, 0.5);
    }

}