class Ground {
    constructor(x, y, width, height)
    {
        var options = {isStatic:true}

        this.ground = Bodies.rectangle(x, y, width, height, options)
        this.width = width
        this.height = height

        World.add(world, this.ground)

        
    }

    show()
    {
        var widthxy = this.ground.position
        rectMode(CENTER)

        fill("babyblue")
        rect(widthxy.x, widthxy.y, this.width, this.height )
    }
    

}