/*
 * Copyright (C) 2015 SUSE Linux
 *
 * This software may be modified and distributed under the terms
 * of the MIT license.  See the LICENSE.txt file for details.
 */

import { Component, OnInit, Input, Inject, forwardRef } from "@angular/core";

import { RoomService } from "../../room";
import { IFeed } from "../../models/feed";

@Component({
  selector: "jh-ignore-button",
  template: require("./ignore-button.component.html")
})
export class IgnoreButtonComponent implements OnInit {

  @Input() public feed: IFeed;

  /* Needed in order to fix import barrels error https://github.com/angular/angular.io/issues/1301 */
  constructor(@Inject(forwardRef(() => RoomService)) private roomService: RoomService) { } // tslint:disable-line

  public ngOnInit(): void { }

  public showsIgnore(): boolean {
    return (!this.feed.isPublisher && !this.feed.isIgnored);
  }

  public showsStopIgnoring(): boolean {
    return this.feed.isIgnored;
  }

  public ignore(): void {
    this.roomService.ignoreFeed(this.feed.id);
  }

  public stopIgnoring(): void {
    this.roomService.stopIgnoringFeed(this.feed.id);
  }
}
