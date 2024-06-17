db.inventory.find().sort({qty:1})  //asecensding order

db.inventory.find().sort({qty:-1}) //decensding order

db.inventory.find().skip(1) //skips first document

db.inventory.find().skip(2) //skips first 2 documents

db.inventory.find().limit(2) // limits till 2 documents