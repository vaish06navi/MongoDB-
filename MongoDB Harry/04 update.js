db.inventory.updateOne(
    {item:"paper"},
    {
        $set:{"size.uom":"cm"},
        $currentDate:{lastModified: true}
    }
)

db.inventory.findOne(
    {item:"paper"},
    {
        $set:{"size.uom":"cm"},
        $currentDate:{lastModified: true}
    }
)

