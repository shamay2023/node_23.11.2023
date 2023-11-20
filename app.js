const express=require('express');
const app=express();
const productrouter=require('./routes/product');
const categoryrouter=require('./routes/category');
const secure=require('./api/v1/middlewares/secure');
const mylogger=require('./api/v1/middlewares/mylogger');

const morgan=require('morgan');
let arrip=['127.0.0.1','::1','162.3.6.5'];

app.use(secure);
app.use(mylogger);


//הוספת שיכבה לטיפול בבקשות שנשלחו בפורמט gson
app.use(express.json());
//הוספת שיכבה לטיפול בבקשות שנשלחו בפורמט urlincoded
app.use(express.urlencoded({
    extended:false
}));
//שילוב הראוטרים בתוך
app.use('/product',productrouter);
app.use('/category',categoryrouter);

app.use(morgan('dev'));









//נקודת קצה עבור נתיבים שלא נמצאו
app.all('*',(req,res)=>{
    res.status(404).json({msg:'404 not found'});
});

module.exports=app;