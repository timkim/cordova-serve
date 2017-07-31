/**
 Licensed to the Apache Software Foundation (ASF) under one
 or more contributor license agreements.  See the NOTICE file
 distributed with this work for additional information
 regarding copyright ownership.  The ASF licenses this file
 to you under the Apache License, Version 2.0 (the
 'License'); you may not use this file except in compliance
 with the License.  You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing,
 software distributed under the License is distributed on an
 'AS IS' BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, either express or implied.  See the License for the
 specific language governing permissions and limitations
 under the License.
 */

var server = require('./src/server'),
    chalk = require('chalk');

/**
 * Server Default Settings
 */
var ServeDefaults = {
    port: 3000,
    autoreload: true,
    browser: true,
    console: true,
    deploy: true,
    homepage: true,
    localtunnel: false,
    proxy: true,
    push: true,
    refresh: true,
    connect: false
};

module.exports = function () {
    return new CordovaServe();
};

function CordovaServe() {
    //place holder 
    var options = {};

    // optional parameters
    options.port = options.port || ServeDefaults.port;
    options.autoreload = (typeof options.autoreload === 'boolean') ? options.autoreload : ServeDefaults.autoreload;
    options.browser = (typeof options.browser === 'boolean') ? options.browser : ServeDefaults.browser;
    options.console = (typeof options.console === 'boolean') ? options.console : ServeDefaults.console;
    options.deploy = (typeof options.deploy === 'boolean') ? options.deploy : ServeDefaults.deploy;
    options.homepage = (typeof options.homepage === 'boolean') ? options.homepage : ServeDefaults.homepage;
    options.localtunnel = (typeof options.localtunnel === 'boolean') ? options.localtunnel : ServeDefaults.localtunnel;
    options.proxy = (typeof options.proxy === 'boolean') ? options.proxy : ServeDefaults.proxy;
    options.push = (typeof options.push === 'boolean') ? options.push : ServeDefaults.push;
    options.refresh = (typeof options.refresh === 'boolean') ? options.refresh : ServeDefaults.refresh;
    options.connect = (typeof options.connect === 'boolean') ? options.connect : ServeDefaults.connect;
    options.phonegap = this.phonegap;
    callback = callback || function() {};

    this.launchServer = server(options);
}
