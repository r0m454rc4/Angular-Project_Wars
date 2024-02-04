import { LiveAnnouncer } from "@angular/cdk/a11y";
import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { MatSort, Sort, MatSortModule } from "@angular/material/sort";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";

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
  displayedColumns: string[] = ["position", "name", "weight", "symbol"];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

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

export interface PeriodicElement {
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

const ELEMENT_DATA: PeriodicElement[] = [
  {
    conflict_id: 11342,
    location: "India",
    side_a: "Government of India",
    side_a_id: "141",
    side_a_2nd: "",
    side_b: "GNLA",
    side_b_id: "1163",
    side_b_2nd: "",
    incompatibility: 1,
    territory_name: "Garoland",
    year: 2012,
    intensity_level: 1,
    cumulative_intensity: 0,
    type_of_conflict: 3,
    start_date: "1997-05-29",
    start_prec: 1,
    start_date2: "2012-11-15",
    start_prec2: 1,
    ep_end: 1,
    ep_end_date: "2012-12-21",
    ep_end_prec: "",
    gwno_a: "750",
    gwno_a_2nd: "",
    gwno_b: "",
    gwno_b_2nd: "",
    gwno_loc: "750",
    region: "3",
    version: 23.1,
  },
  {
    conflict_id: 11342,
    location: "India",
    side_a: "Government of India",
    side_a_id: "141",
    side_a_2nd: "",
    side_b: "GNLA",
    side_b_id: "1163",
    side_b_2nd: "",
    incompatibility: 1,
    territory_name: "Garoland",
    year: 2014,
    intensity_level: 1,
    cumulative_intensity: 0,
    type_of_conflict: 3,
    start_date: "1997-05-29",
    start_prec: 1,
    start_date2: "2014-07-01",
    start_prec2: 1,
    ep_end: 1,
    ep_end_date: "2014-11-27",
    ep_end_prec: "",
    gwno_a: "750",
    gwno_a_2nd: "",
    gwno_b: "",
    gwno_b_2nd: "",
    gwno_loc: "750",
    region: "3",
    version: 23.1,
  },
  {
    conflict_id: 11343,
    location: "Egypt, Israel",
    side_a: "Government of Egypt",
    side_a_id: "117",
    side_a_2nd: "",
    side_b: "Government of Israel",
    side_b_id: "121",
    side_b_2nd: "",
    incompatibility: 1,
    territory_name: "Suez/Sinai",
    year: 1967,
    intensity_level: 2,
    cumulative_intensity: 1,
    type_of_conflict: 2,
    start_date: "1967-06-05",
    start_prec: 1,
    start_date2: "1967-06-05",
    start_prec2: 1,
    ep_end: 1,
    ep_end_date: "1967-06-10",
    ep_end_prec: "",
    gwno_a: "651",
    gwno_a_2nd: "",
    gwno_b: "666",
    gwno_b_2nd: "",
    gwno_loc: "651, 666",
    region: "2",
    version: 23.1,
  },
  {
    conflict_id: 11343,
    location: "Egypt, Israel",
    side_a: "Government of Egypt",
    side_a_id: "117",
    side_a_2nd: "",
    side_b: "Government of Israel",
    side_b_id: "121",
    side_b_2nd: "",
    incompatibility: 1,
    territory_name: "Suez/Sinai",
    year: 1969,
    intensity_level: 1,
    cumulative_intensity: 1,
    type_of_conflict: 2,
    start_date: "1967-06-05",
    start_prec: 1,
    start_date2: "1969-03-06",
    start_prec2: 1,
    ep_end: 0,
    ep_end_date: "",
    ep_end_prec: "",
    gwno_a: "651",
    gwno_a_2nd: "",
    gwno_b: "666",
    gwno_b_2nd: "",
    gwno_loc: "651, 666",
    region: "2",
    version: 23.1,
  },
  {
    conflict_id: 11343,
    location: "Egypt, Israel",
    side_a: "Government of Egypt",
    side_a_id: "117",
    side_a_2nd: "",
    side_b: "Government of Israel",
    side_b_id: "121",
    side_b_2nd: "",
    incompatibility: 1,
    territory_name: "Suez/Sinai",
    year: 1970,
    intensity_level: 1,
    cumulative_intensity: 1,
    type_of_conflict: 2,
    start_date: "1967-06-05",
    start_prec: 1,
    start_date2: "1969-03-06",
    start_prec2: 1,
    ep_end: 1,
    ep_end_date: "1970-08-07",
    ep_end_prec: "",
    gwno_a: "651",
    gwno_a_2nd: "",
    gwno_b: "666",
    gwno_b_2nd: "",
    gwno_loc: "651, 666",
    region: "2",
    version: 23.1,
  },
  {
    conflict_id: 11343,
    location: "Egypt, Israel",
    side_a: "Government of Egypt",
    side_a_id: "117",
    side_a_2nd: "",
    side_b: "Government of Israel",
    side_b_id: "121",
    side_b_2nd: "",
    incompatibility: 1,
    territory_name: "Suez/Sinai",
    year: 1973,
    intensity_level: 2,
    cumulative_intensity: 1,
    type_of_conflict: 2,
    start_date: "1967-06-05",
    start_prec: 1,
    start_date2: "1973-10-06",
    start_prec2: 1,
    ep_end: 1,
    ep_end_date: "1973-10-24",
    ep_end_prec: "",
    gwno_a: "651",
    gwno_a_2nd: "",
    gwno_b: "666",
    gwno_b_2nd: "",
    gwno_loc: "651, 666",
    region: "2",
    version: 23.1,
  },
  {
    conflict_id: 11344,
    location: "Sudan",
    side_a: "Government of Sudan",
    side_a_id: "112",
    side_a_2nd: "",
    side_b: "Republic of South Sudan",
    side_b_id: "1129",
    side_b_2nd: "",
    incompatibility: 1,
    territory_name: "Abyei",
    year: 2011,
    intensity_level: 1,
    cumulative_intensity: 0,
    type_of_conflict: 3,
    start_date: "2011-05-01",
    start_prec: 1,
    start_date2: "2011-05-19",
    start_prec2: 1,
    ep_end: 1,
    ep_end_date: "2011-06-15",
    ep_end_prec: "",
    gwno_a: "625",
    gwno_a_2nd: "",
    gwno_b: "",
    gwno_b_2nd: "",
    gwno_loc: "625",
    region: "4",
    version: 23.1,
  },
  {
    conflict_id: 11345,
    location: "South Sudan",
    side_a: "Government of South Sudan",
    side_a_id: "113",
    side_a_2nd: "",
    side_b: "SSDM/A, SSLM/A",
    side_b_id: "1108, 1124",
    side_b_2nd: "",
    incompatibility: 2,
    territory_name: "",
    year: 2011,
    intensity_level: 1,
    cumulative_intensity: 0,
    type_of_conflict: 3,
    start_date: "2011-08-20",
    start_prec: 2,
    start_date2: "2011-08-20",
    start_prec2: 2,
    ep_end: 0,
    ep_end_date: "",
    ep_end_prec: "",
    gwno_a: "626",
    gwno_a_2nd: "",
    gwno_b: "",
    gwno_b_2nd: "",
    gwno_loc: "626",
    region: "4",
    version: 23.1,
  },
  {
    conflict_id: 11345,
    location: "South Sudan",
    side_a: "Government of South Sudan",
    side_a_id: "113",
    side_a_2nd: "",
    side_b: "SSLM/A",
    side_b_id: "1124",
    side_b_2nd: "",
    incompatibility: 2,
    territory_name: "",
    year: 2012,
    intensity_level: 1,
    cumulative_intensity: 0,
    type_of_conflict: 3,
    start_date: "2011-08-20",
    start_prec: 2,
    start_date2: "2011-08-20",
    start_prec2: 2,
    ep_end: 0,
    ep_end_date: "",
    ep_end_prec: "",
    gwno_a: "626",
    gwno_a_2nd: "",
    gwno_b: "",
    gwno_b_2nd: "",
    gwno_loc: "626",
    region: "4",
    version: 23.1,
  },
  {
    conflict_id: 11345,
    location: "South Sudan",
    side_a: "Government of South Sudan",
    side_a_id: "113",
    side_a_2nd: "",
    side_b: "SPLM/A - IO, SSDM/A - Cobra Faction",
    side_b_id: "3563, 4226",
    side_b_2nd: "",
    incompatibility: 2,
    territory_name: "",
    year: 2013,
    intensity_level: 1,
    cumulative_intensity: 1,
    type_of_conflict: 3,
    start_date: "2011-08-20",
    start_prec: 2,
    start_date2: "2011-08-20",
    start_prec2: 2,
    ep_end: 0,
    ep_end_date: "",
    ep_end_prec: "",
    gwno_a: "626",
    gwno_a_2nd: "",
    gwno_b: "",
    gwno_b_2nd: "",
    gwno_loc: "626",
    region: "4",
    version: 23.1,
  },
  {
    conflict_id: 11345,
    location: "South Sudan",
    side_a: "Government of South Sudan",
    side_a_id: "113",
    side_a_2nd: "Government of Uganda",
    side_b: "SPLM/A - IO",
    side_b_id: "4226",
    side_b_2nd: "",
    incompatibility: 2,
    territory_name: "",
    year: 2014,
    intensity_level: 2,
    cumulative_intensity: 1,
    type_of_conflict: 4,
    start_date: "2011-08-20",
    start_prec: 2,
    start_date2: "2011-08-20",
    start_prec2: 2,
    ep_end: 0,
    ep_end_date: "",
    ep_end_prec: "",
    gwno_a: "626",
    gwno_a_2nd: "500",
    gwno_b: "",
    gwno_b_2nd: "",
    gwno_loc: "626",
    region: "4",
    version: 23.1,
  },
];

/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
