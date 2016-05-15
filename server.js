"use strict"

var koa = require('koa');
var app = koa();
var port = process.env[2] || 8889;
var send = require('koa-send');
var serve = require('koa-static');
var parse = require('co-body');

app.use(serve(__dirname + '/public'));

app.use(function*(next) {
    if (this.path === '/') {
        yield send(this, 'index.html', {
            root: __dirname + '/public'
        });
    } else {
        yield next;
    }
});

app.use(function*(next) {
    if (this.path === '/api/login' &&
        this.request.method === 'POST'
    ) {
        const body = yield parse(this, {
            textTypes: ['text']
        })
        yield delay(2000)
        this.response.type = 'json'
        if (!!body.username && !!body.password) {
            const result = {
                username: body.username,
                token: 'asdadasflasfaasda'

            }
            this.body = result
        } 
    } else {
        yield next;
    }
});

function* delay(timeout) {
    yield function(done) {
        setTimeout(done, timeout)
    }
}

app.listen(port)