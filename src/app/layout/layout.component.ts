import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  fontValue: string;

  fontValues = [
    'normal',
    'ordinal',
    'slashed-zero',
    'lining-nums',
    'oldstyle-nums',
    'proportional-nums',
    'tabular-nums',
    'diagonal-fractions',
    'stacked-fractions',
  ];
  constructor() {}

  ngOnInit(): void {
    this.fontValue = this.fontValues[0];
  }

  public valueImportant(): string {
    return `${this.fontValue} !important`;
  }
}
