import nextConnect from 'next-connect';
import middleware from '../../middleware/db';
import next from 'next';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    let doc = await req.db.collection('participants').find({}).toArray()
    console.log(doc);
    res.json(doc);
});

handler.post(async (req, res) => {
    let data = req.body;
    data = JSON.parse(data);
    await req.db.collection('participants').insertOne({"email" : data})

   res.json(data)
})

export default handler;