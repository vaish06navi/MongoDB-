db.inventory.insertOne(
    {item:"canvas",qty:100,tags:["cotton"],size:{h:28,w:35.5}}
)

db.inventory.insertMany(
    [{item:"canvas1",qty:100,tags:["cotton"],size:{h:28,w:35.5}},

    {item:"canvas2",qty:200,tags:["wood"],size:{h:28,w:30.5}},

    {item:"canvas3",qty:300,tags:["zinc"],size:{h:28,w:35.5}},

    {item:"canvas4",qty:400,tags:["copper"],size:{h:28,w:35.5}}] )


    // Run this command in MongoDB shell to get started

db.inventory.insertMany([
        {item:"journal", qty : 25,size:{h:14,w:21,uom:"cm"},status:"A"},
        {item:"notebook", qty : 50,size:{h:13,w:81,uom:"cm"},status:"A"},
        {item:"paper", qty : 32,size:{h:24,w:32,uom:"cm"},status:"D"},
        {item:"planner", qty : 24,size:{h:24,w:20,uom:"cm"},status:"D"},
        {item:"postcard", qty : 75,size:{h:44,w:61,uom:"cm"},status:"A"}
        
]);