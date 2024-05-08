import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-internal-comp-routing-lib',
  template: `
    <p>
      internal-comp-routing-lib works!
    </p>
  `,
  styles: [
  ]
})
export class InternalCompRoutingLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
