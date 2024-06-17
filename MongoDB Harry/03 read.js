db.inventory.find() //to fetech all documents
db.inventory.find({}) //to fetech all documents
db.inventory.find({qty:0})

db.inventory.find({tags:{ $in :["red","D"]}})

//AND
db.inventory.find({status:"A",qty:{$lt:30}})

//OR
db.inventory.find({ $or : [{status:"A",qty:{$lt:30}}]})

