import { LiveAnnouncer } from "@angular/cdk/a11y";
import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { MatSort, Sort, MatSortModule } from "@angular/material/sort";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";

import DatosGuerra from "./UcdpPrioConflict_v23_1.json";

/**
 * @title Table with pagination
 */
@Component({
  selector: "aplicacio",
  styleUrls: ["./CSS/Style.css"],
  templateUrl: "./HTML/index.html",
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatTableModule, MatSortModule],
})
export class IndexComponent implements AfterViewInit {
  displayedColumns: string[] = [
    "conflict_id",
    "location",
    "side_a",
    "side_b",
    "territory_name",
    "intensity_level",
    "start_date",
    "ep_end_date",
  ];
  dataSource = new MatTableDataSource<GuerraData>(GUERRA_DATA);

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce("Sorting cleared");
    }
  }
}

export interface GuerraData {
  conflict_id: number;
  location: string;
  side_a: string;
  side_a_id: string;
  side_a_2nd: string;
  side_b: string;
  side_b_id: string;
  side_b_2nd: string;
  incompatibility: number;
  territory_name: string;
  year: number;
  intensity_level: number;
  cumulative_intensity: number;
  type_of_conflict: number;
  start_date: string;
  start_prec: number;
  start_date2: string;
  start_prec2: number;
  ep_end: number;
  ep_end_date: string;
  ep_end_prec: string;
  gwno_a: string;
  gwno_a_2nd: string;
  gwno_b: string;
  gwno_b_2nd: string;
  gwno_loc: string;
  region: string;
  version: number;
}

const GUERRA_DATA: GuerraData[] = DatosGuerra;

/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
