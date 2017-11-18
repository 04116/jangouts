/*
 * Copyright (C) 2016 SUSE Linux
 *
 * This software may be modified and distributed under the terms
 * of the MIT license.  See the LICENSE.txt file for details.
 */

import { Injectable } from "@angular/core";

@Injectable()
export class ConfigService {

  public janusServerSSL: Array<string> = null;
  public janusDebug: boolean = false;
  public httpsAvailable: boolean = true;
  public videoThumbnails: boolean = true;
  public joinUnmutedLimit: number = 3;

  private _httpsUrl: string = null;
  private _janusServer: Array<string> = null;

  constructor () { }

  get janusServer(): Array<string> {
    let server: Array<string> = this.defaultJanusServer();

    if (this.janusServerSSL && this.usingSSL) {
      server = this.janusServerSSL;
    } else {
      if (this._janusServer) {
        server = this._janusServer;
      }
    }

    return server;
  }

  set janusServer(server: Array<string>) {
    this._janusServer = server;
  }

  get httpsUrl(): string {
    if (this.httpsAvailable) {
      if (this._httpsUrl) {
        return this._httpsUrl;
      } else {
        let hostname: string = window.location.hostname;
        let pathname: string = window.location.pathname;
        return `https://${hostname}${pathname}`;
      }
    } else {
      return null;
    }
  }

  set httpsUrl(url: string) {
    this._httpsUrl = url;
  }

  get usingSSL(): boolean {
    return (window.location.protocol === "https:");
  }

  public defaultJanusServer(): Array<string> {
    let wsProtocol: string;
    let wsPort: string;

    if (this.usingSSL) {
      wsProtocol = "wss:";
      wsPort = "8989";
    } else {
      wsProtocol = "ws:";
      wsPort = "8188";
    }

    let hostname: string = window.location.hostname;

    return [
      `${wsProtocol}//${hostname}:${wsPort}/janus/`,
      `${window.location.protocol}//${hostname}/janus/`
    ];
  }
}

