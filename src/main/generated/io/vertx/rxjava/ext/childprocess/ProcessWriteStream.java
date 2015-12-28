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

package io.vertx.rxjava.ext.childprocess;

import java.util.Map;
import io.vertx.lang.rxjava.InternalHelper;
import rx.Observable;
import io.vertx.rxjava.core.buffer.Buffer;
import io.vertx.rxjava.core.streams.WriteStream;
import io.vertx.core.Handler;

/**
 * @author <a href="mailto:julien@julienviet.com">Julien Viet</a>
 *
 * <p/>
 * NOTE: This class has been automatically generated from the {@link io.vertx.ext.childprocess.ProcessWriteStream original} non RX-ified interface using Vert.x codegen.
 */

public class ProcessWriteStream implements WriteStream<Buffer> {

  final io.vertx.ext.childprocess.ProcessWriteStream delegate;

  public ProcessWriteStream(io.vertx.ext.childprocess.ProcessWriteStream delegate) {
    this.delegate = delegate;
  }

  public Object getDelegate() {
    return delegate;
  }

  public void end() { 
    this.delegate.end();
  }

  public void end(Buffer t) { 
    this.delegate.end((io.vertx.core.buffer.Buffer) t.getDelegate());
  }

  public boolean writeQueueFull() { 
    boolean ret = this.delegate.writeQueueFull();
    return ret;
  }

  public ProcessWriteStream exceptionHandler(Handler<Throwable> handler) { 
    ( /* Work around for https://jira.codehaus.org/browse/GROOVY-6970 */ (io.vertx.ext.childprocess.ProcessWriteStream) delegate).exceptionHandler(handler);
    return this;
  }

  public ProcessWriteStream write(Buffer buffer) { 
    ( /* Work around for https://jira.codehaus.org/browse/GROOVY-6970 */ (io.vertx.ext.childprocess.ProcessWriteStream) delegate).write((io.vertx.core.buffer.Buffer) buffer.getDelegate());
    return this;
  }

  public ProcessWriteStream setWriteQueueMaxSize(int i) { 
    ( /* Work around for https://jira.codehaus.org/browse/GROOVY-6970 */ (io.vertx.ext.childprocess.ProcessWriteStream) delegate).setWriteQueueMaxSize(i);
    return this;
  }

  public ProcessWriteStream drainHandler(Handler<Void> handler) { 
    ( /* Work around for https://jira.codehaus.org/browse/GROOVY-6970 */ (io.vertx.ext.childprocess.ProcessWriteStream) delegate).drainHandler(handler);
    return this;
  }

  public void close() { 
    this.delegate.close();
  }


  public static ProcessWriteStream newInstance(io.vertx.ext.childprocess.ProcessWriteStream arg) {
    return arg != null ? new ProcessWriteStream(arg) : null;
  }
}
