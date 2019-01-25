let multichain=require("multichain-node")({
    port:6820,
    host:'127.0.0.1',
    user:"multichainrpc",
    pass:"bENNzzzXh6rMyxafkA681XwGgtPX5YdpvXa4bX6Tn3c"
})
multichain.getInfo((err,info)=>{
    if(err){
        throw err;
    }
    console.log(info);

})
// multichain.issue({address: someAddress, asset: "zcoin", qty: 50000, units: 0.01, details: {hello: "world"}}, (err, res) => {
//     console.log(res)
// })