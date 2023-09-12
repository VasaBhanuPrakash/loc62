module.exports.homelist=function(req,res){
    res.render('location-list',{title:'Home'});
};
module.exports.locationinfo=function(req,res){
    res.render('location-info',{title:'Starcups'});
};
module.exports.locationinfo2=function(req,res){
    res.render('location-info',{title:'Cafe Hero'});
};
module.exports.locationinfo3=function(req,res){
    res.render('location-info',{title:'Burger Queens'});
};
module.exports.addReview=function(req,res){
    res.render('location-Review-Form',{title:'Add Review'});
};