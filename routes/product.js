//יצירת אובייקט מסוג ראוטר
const router=require('express').Router();
const productcontroller=require('../api/v1/controllers/product');

//מוצרים
router.get('/',productcontroller);
//קבלת פרטי מוצר לפי קוד מוצר
router.get('/:id',function(req,res){});
//עדכון פרטי מוצר
router.patch('/:id',function(req,res){});
//מחיקת מוצר 
router.delete('/:id',function(req,res){});
//הוספת מוצר חדש
router.post('/:id',function(req,res){});


module.exports=router;
