/**
 * webglearth-typhoon工程路由
 * @author giscafer
 * @version 1.0
 * @date    2016-10-15T08:22:48+0800
 */
'use strict'
const path=require('path');
const express=require('express');
const Typhoon=require('node-typhoon');

module.exports = function(app) {

    app.use('/webglearth-typhoon',express.static(path.join(__dirname,'../public/webglearth-typhoon/')));
    //get real-time typhoon information 
    app.get('/webglearthtyphoonapi/typhoonActivity', (req, res) => {
        Typhoon.typhoonActivity().then(info => {
            res.send(info);
        }).catch(err => {
            res.send(err);
        });
    });
    //get historical typhoon information 
    app.get('/webglearthtyphoonapi/typhoonList', (req, res) => {
        let year = new Date().getFullYear();
        Typhoon.typhoonList(year).then(info => {
            res.send(info);
        }).catch(err => {
             res.send(err);
        });
    });
}
