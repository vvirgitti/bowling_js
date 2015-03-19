describe('Gutter game', function(){
  var game = new Game();

  it('scores 0 on a gutter game', function(){
    for(var i =0; i < 20; i++){
      game.roll(0);
    }
    expect(game.score).toEquel(0);
  });
});
