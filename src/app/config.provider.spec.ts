/*
 * Copyright (C) 2016 SUSE Linux
 *
 * This software may be modified and distributed under the terms
 * of the MIT license.  See the LICENSE.txt file for details.
 */

/// <reference path="../../typings/globals/jasmine/index.d.ts" />

import { ConfigService } from "./config.provider";

describe("Service: ConfigService", () => {

  beforeEach(() => {
    this.config = new ConfigService();
  });

  describe("janusServer", () => {

    it("should return default janus server", () => {
      expect(this.config.janusServer).toEqual([
        "ws://localhost:8188/janus/",
        "http://localhost/janus/"
      ]);
    });

    it("should return the defined janus server if it is setted", () => {
      let server: string [] = [
        "ws://janustest.com:8188/path/",
        "http://janustest.com/path/"
      ];
      this.config.janusServer = server;

      expect(this.config.janusServer).toBe(server);
    });

  });

  describe("httpsUrl", () => {

    it("should return null if https not available", () => {
      this.config.httpsAvailable = false;

      expect(this.config.httpsUrl).toBe(null);
    });

    it("should return https url from window.location", () => {
      expect(this.config.httpsUrl).toEqual(
        `https://${window.location.hostname}${window.location.pathname}`
      );
    });

    it("should return defined https url if it is setted", () => {
      this.config.httpsUrl = "https://janustest.com/path";
      expect(this.config.httpsUrl).toEqual("https://janustest.com/path");
    });

  });

});
