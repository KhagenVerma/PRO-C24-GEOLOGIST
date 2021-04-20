class Stone{
	constructor(x,y)
	{
	var options = {
		'restitution' : 0.8,
		'friction' : 0.9,
		'density' : 12
	}
        this.body=Bodies.rectangle(x, y,50 , 50, options);
		this.width = 50;
        this.height = 80;
		
        World.add(world, this.body);


	}
	display(){
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("white");
			fill("brown");
            rect(0, 0, this.width, this.height);
            pop()
	}

}