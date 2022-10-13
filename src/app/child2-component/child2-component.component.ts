import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
  Input,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ParentComponentComponent } from '../parent-component/parent-component.component';

@Component({
  selector: 'app-child2-component',
  templateUrl: './child2-component.component.html',
  styleUrls: ['./child2-component.component.scss'],
})
export class Child2ComponentComponent implements OnInit, AfterViewInit {
  @Input() parentdata: any;
  msg: any;
  time: any;
  //   date: Date | any;
  data: any;
  @ViewChild(ParentComponentComponent) parent!: ParentComponentComponent;
  constructor(private cd: ChangeDetectorRef) {}
  ngAfterViewInit(): void {
    // this.date = this.parent.date;
    this.data = this.parent?.msg1;
    this.cd.detectChanges();
  }
  ngOnInit(): void {
    [this.msg, this.time] = this.parentdata;
  }
}
