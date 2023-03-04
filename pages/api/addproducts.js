import Product from "../../models/product"
import connectDb from "../../middleware/mongoose"

const handler = async (req, res) => {
    if (req.method == 'POST') {
        let p = new Product({
            title: req.body.title,
            slug: req.body.slug,
            desc: req.body.desc,
            sdesc: req.body.sdesc,
            img: req.body.img,
            category: req.body.category,
            size: req.body.size,
            color: req.body.color,
            price: req.body.price,
            availbleQty: req.body.availbleQty
        })
        await p.save()
        res.status(200).json({ success: "Success" })
    }
    else {
res.status(400).json({ error: "this method is not allowed" })
}
}

export default connectDb(handler);