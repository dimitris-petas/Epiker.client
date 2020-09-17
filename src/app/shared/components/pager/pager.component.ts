import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
})
export class PagerComponent implements OnInit {
  @Output() pageChanged = new EventEmitter<number>();
  @Input() pageSize: number;
  @Input() totalCount: number;

  constructor() { }

  ngOnInit() {
  }

  onPagerChange(event: any) {
    this.pageChanged.emit(event.page);
  }

}
