import express from 'express';
import fileUpload from 'express-fileupload';
import connectDB from './admindb.js';
const app = express();
connectDB();
// default options
app.use(fileUpload());
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.get('/helo', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/multiple', (req, res) => {
    res.sendFile(__dirname + "/multiple.html")
})

app.get('/multiplefields',(req,res) => {
    res.sendFile(__dirname + "/multiplefields.html")
})

app.post('/multiplefields',(req,res) => {
    console.log(req.files.my_profile_pic.name);
    console.log(req.files.my_pet.name);
    console.log(req.files.my_cover_photo.name);
})


app.post('/uploadmultiple', function (req, res) {
    // Uploaded files:
    console.log(typeof req.files.files)

    let sampleFile;
    let uploadPath;

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    req.files.files.forEach(file => {
        sampleFile = file.file
        uploadPath = __dirname + "/uploads/" + file.name

        file.mv(uploadPath,(err) => {
            if (err)
            return res.status(500).send(err);
        })
    });

    res.send("All files uploaded")
});

app.post('/upload', function (req, res) {
    let sampleFile;
    let uploadPath;

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    sampleFile = req.files.file;
    uploadPath = __dirname + '/uploads/' + sampleFile.name;

    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv(uploadPath, function (err) {
        if (err)
            return res.status(500).send(err);

        res.send('File uploaded!');
    });
});

const port=4000;
app.listen(port,()=>{
    console.log(`server is running at ${port}`);
    // console.log(timetable);
}
);
   