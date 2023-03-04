import Order from '../../models/order'
import connectDb from "../../middleware/mongoose"

const  handler = async (req, res) => {
  let orders = await Order.find({})
  res.status(200).json({ orders })
}

export default connectDb(handler);