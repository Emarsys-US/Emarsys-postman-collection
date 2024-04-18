const crypto_js = require('crypto-js');

var ts = (new Date()).toISOString();

var nonce = crypto_js.lib.WordArray.random(16).toString(crypto_js.enc.Hex);

var digest = crypto_js.enc.Base64.stringify(crypto_js.enc.Utf8.parse(crypto_js.SHA1(nonce + ts + bru.getEnvVar("wsse-secret")).toString(crypto_js.enc.Hex)));

bru.setEnvVar("wsse-header",'UsernameToken Username="' + bru.getEnvVar("wsse-user") + '", PasswordDigest="' + digest + '", Created="' + ts + '", nonce="' + nonce + '"'); 
