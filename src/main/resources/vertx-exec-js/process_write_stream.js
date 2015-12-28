/*
 * Copyright 2014 Red Hat, Inc.
 *
 * Red Hat licenses this file to you under the Apache License, version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License.  You may obtain a copy of the License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

/** @module vertx-exec-js/process_write_stream */
var utils = require('vertx-js/util/utils');
var Buffer = require('vertx-js/buffer');
var WriteStream = require('vertx-js/write_stream');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JProcessWriteStream = io.vertx.ext.childprocess.ProcessWriteStream;

/**

 @class
*/
var ProcessWriteStream = function(j_val) {

  var j_processWriteStream = j_val;
  var that = this;
  WriteStream.call(this, j_val);

  /**

   @public
   @param t {Buffer} 
   */
  this.end = function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_processWriteStream["end()"]();
    }  else if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      j_processWriteStream["end(io.vertx.core.buffer.Buffer)"](__args[0]._jdel);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {boolean}
   */
  this.writeQueueFull = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_processWriteStream["writeQueueFull()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   @return {ProcessWriteStream}
   */
  this.exceptionHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_processWriteStream["exceptionHandler(io.vertx.core.Handler)"](function(jVal) {
      handler(utils.convReturnThrowable(jVal));
    });
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param buffer {Buffer} 
   @return {ProcessWriteStream}
   */
  this.write = function(buffer) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      j_processWriteStream["write(io.vertx.core.buffer.Buffer)"](buffer._jdel);
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param i {number} 
   @return {ProcessWriteStream}
   */
  this.setWriteQueueMaxSize = function(i) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      j_processWriteStream["setWriteQueueMaxSize(int)"](i);
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   @return {ProcessWriteStream}
   */
  this.drainHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_processWriteStream["drainHandler(io.vertx.core.Handler)"](handler);
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   */
  this.close = function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_processWriteStream["close()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_processWriteStream;
};

// We export the Constructor function
module.exports = ProcessWriteStream;