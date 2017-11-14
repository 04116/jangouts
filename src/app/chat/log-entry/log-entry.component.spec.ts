import { inject, TestBed } from "@angular/core/testing";

import { LogEntryComponent } from "./log-entry.component";

describe("Component: LogEntry", () => {

  beforeEach(() => TestBed.configureTestingModule({
    providers: [LogEntryComponent]
  }));

  beforeEach(inject([ LogEntryComponent ], (logEntry) => {
    this.logEntry = logEntry;
  }));

  describe("ngOnInit", () => {
    xit("should set given text", () => {

      this.logEntry.message = {
        text: function (): string { return "message text"; }
      };

      this.logEntry.ngOnInit();

      expect(this.logEntry.text).toEqual("message text");
    });

  });

});
