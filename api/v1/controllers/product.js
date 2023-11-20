
module.exports={
    getallproducts:function(req,res){
       return res.status(200).json({msg:"all product"});
    },
    getproductbyid:function (req,res){},
    addproduct:function(req,res){
        console.log(req.body);
        return res.status(200).json({msg:`product ${req.body.pid} added successfuly`})
    },
    updateproduct:function(req,res){},
    deleteproductbyid:function(req,res){}
}