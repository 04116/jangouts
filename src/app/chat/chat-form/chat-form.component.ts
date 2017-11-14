/*
 * Copyright (C) 2015 SUSE Linux
 *
 * This software may be modified and distributed under the terms
 * of the MIT license.  See the LICENSE.txt file for details.
 */

import { Component } from "@angular/core";
import { ActionService } from "../../room";
import { Store } from "@ngrx/store";

import { SendChatMessageAction } from "../../actions/chat";
import { IState } from "../../reducers/chat";

@Component({
  selector: "jh-chat-form",
  template: require("./chat-form.component.html")
})
export class ChatFormComponent {

  public text: string = null;

  constructor(public store: Store<IState>, actionService: ActionService) {}

  public submit(): void {
    if (this.text === "") return;
    this.store.dispatch(new SendChatMessageAction(this.text));
    this.text = null;
  }

}
