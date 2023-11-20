require('dotenv').config();//הפעלת הפונקציה ליצירת משתני הסביבה מתוך הגדרות המערכת
const http=require('http');
const app=require('./app');
const port=process.env.PORT;
const srv=http.createServer(app);
srv.listen(port,()=>{console.log('server up')});