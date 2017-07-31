/**
 Licensed to the Apache Software Foundation (ASF) under one
 or more contributor license agreements.  See the NOTICE file
 distributed with this work for additional information
 regarding copyright ownership.  The ASF licenses this file
 to you under the Apache License, Version 2.0 (the
 "License"); you may not use this file except in compliance
 with the License.  You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing,
 software distributed under the License is distributed on an
 "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, either express or implied.  See the License for the
 specific language governing permissions and limitations
 under the License.
 */

var chalk = require('chalk');
var server = require('connect-phonegap');
var Q = require('q');

/**
 * @desc Launches a server with the specified options and optional custom handlers.
 * @param {{root: ?string, port: ?number, noLogOutput: ?bool, noServerInfo: ?bool, router: ?express.Router, events: EventEmitter}} opts
 * @returns {*|promise}
 */
module.exports = function (options) {
    var deferred = Q.defer();

    var log = module.exports.log = function (msg) {
        if (!options.noLogOutput) {
            if (options.events) {
                options.events.emit('log', msg);
            } else {
                console.log(msg);
            }
        }
    };

    var _errorHandler = function(err) {
        log('error', err);
        deferred.reject(e);
    };

    log('starting server');

    server.listen(options)
        .on('listening', function() {
            deferred.resolve();
        })
        .on('browserAdded', function() {
          log('browserAdded');
        })
        .on('deviceConnected', function() {
          log('deviceConnected');
        })
        .on('error', _errorHandler)
        .on('log', function(statusCode, url) {
          log('log', statusCode, url);
        })
        .on('update', function(c) {
          
        })
        .on('complete', function(data) {
          
        });

    return deferred.promise;
};
