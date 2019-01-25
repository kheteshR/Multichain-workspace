let multichain=require("multichain-node")({
    port:6820,
    host:'127.0.0.1',
    user:"multichainrpc",
    pass:"bENNzzzXh6rMyxafkA681XwGgtPX5YdpvXa4bX6Tn3c"
})
const cors = require('cors');


module.exports = router => {

router.get('/HelloWorld',cors(),(req,res)=>{
    res.send({
        "AppName":"Hello Multichain Blockchain"
    })
})



router.get('/BlockchainParams',cors(),(req,res)=>{
console.log(req.body);
multichain.getInfo((err,info)=>{
    if(err){
        throw err;
    }
    console.log(info);
    res.send({
        "result":info
    })
})
});

//get all address for specific node
router.get('/getAddresses',cors(),(req,res)=>{

    multichain.getAddresses((err,addresses)=>{
        res.send({
            "Addresses":addresses
        })
    })
})



router.get('/IssueAssets',cors(),(req,res)=>{
    multichain.issue({address:"1aeRDR8jgKinQditYrujNRCaSzWb4napwHS29V", asset: "kcoin", qty: 50000, units: 0.01, details: {hello: "world"}}, (err, resp) => {
        res.send({
            "IssueAsset":resp
        })
    })

})

router.get('/SendAssets',cors(),(req,res)=>{

    multichain.sendAssetFrom({from: "1aeRDR8jgKinQditYrujNRCaSzWb4napwHS29V", to: "1NyboVeUdjBvbwrHMCZwaCinCZcBH4Rgtzoc5w", asset: "kcoin", qty: 5}, (err, tx) => {
        console.log(tx);
        res.send({
            "Sent":tx
        })
    })


})

router.get('/getRawTransaction',cors(),(req,res)=>{
    

    multichain.getRawTransaction({txid: "b87e94e6261e9fd060108d357240d82b4500bd03468af34728004fb89501b5ec"}, (err, tx) => {
 
        multichain.decodeRawTransaction({"hexstring": tx}, (err, dTx) => {
            console.log(dTx);
            res.send({
                "DecodedResult":dTx
            })
        })
    })

})

}