module.exports=((req,res,next)=>{
    //לבדוק במידה והראוט לא אדמין האם הוא מורשה
    if(req.url=='/admin')
    {
        let ip=req.ip;//שמירת כתובת האייפי של המשתמש
        let status=arrip.find((elment,index,arr)=>el==ip);//פונקציית מעבר על מערך והשוואה 
        if(status)//בדיקה האם חזר true
            next();//המשך לשלב הבא
        else
            res.status(401).json({msg:'you are not authorized'});
    }
    next();
});
