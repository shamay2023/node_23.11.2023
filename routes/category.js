const router=require('express').router

//קטגוריות
app.get('/',function(req,res){});
//קבלת פרטי מוצר לפי קוד מוצר
app.get('/:id',function(req,res){});
//עדכון פרטי מוצר
app.patch('/:id',function(req,res){});
//מחיקת מוצר 
app.delete('/:id',function(req,res){});
//הוספת מוצר חדש
app.post('/:id',function(req,res){});

module.exports=router;