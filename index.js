import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/users';
const app = express();

const PORT = 9999

app.use(bodyParser.json());
app.use('/users', userRoutes);


app.get('/',(req, res) => {
    console.log('[GET METHOT]');
    res.send('oke sudah masuk ke home page ya')

// app.post('/', (req, res) => {
//     res.send('post');

// })

// app.get('/', (req, res) => {
//     res.send('get id');
    
// })

// app.delete('/', (req, res) => {
//     res.send('delete');
    
// })

// app.patch('/', (req, res) => {
//     res.send('update');
    
// })
})
app.listen(PORT, () => console.log(`Server berjalan di Port : http://localhost : ${PORT}`));