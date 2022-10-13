import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Child1ComponentComponent } from './../child1-component/child1-component.component';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.scss'],
})
export class ParentComponentComponent implements OnInit, AfterViewInit {
  @ViewChild(Child1ComponentComponent) child!: Child1ComponentComponent;
  msg1 = 'this data is coming from parent component';

  msg = '';
  cs: any;
  cs1: any;
  date: Date = new Date();
  parentdata = [this.msg1, this.date];

  constructor(private cd: ChangeDetectorRef) {}
  ngAfterViewInit(): void {
    this.cs = this.child.customers;

    this.cs1 = [...this.cs];
    // this.cs1.sort((a: any, b: any) => {
    //   return a.customer_age - b.customer_age;
    // });
    this.cs1.splice(3, this.cs.length);
    this.cd.detectChanges();
    // throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    setInterval(() => {
      this.date = new Date();
    }, 1);
  }
}
