import express from 'express';
import classify from './classify';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/bot/messages', (req, res) => {
    const message = classify(req.body.text);
    return res.json(message);
});

app.listen('3000', ()=>console.log('serve on port 3000'));