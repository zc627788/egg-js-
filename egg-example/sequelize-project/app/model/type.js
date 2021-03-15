module.exports = app => {
    const { INTEGER,STRING } = app.Sequelize;

    const Type = app.model.define('type', 
    {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        typeName: {type:STRING(25)},
        orderNum: {type:INTEGER},
        icon:{type:STRING}

    },{
        // timestamps: false
      },);
    Type.prototype.associate = function() {
        app.model.User.hasMany(app.model.get, { as: 'get' });
      };

    return Type;
};



const funcs = [],
object = {
    a:true,
    b:true,
    c:true
};

for(const key in object){
    funcs.push(()=>{
        console.log('key', key)
    })
}

for(let a = 0 ;a<10;a++){
    console.log('a', a)
}


funcs.forEach(function(func){
    func();
})


