import { LiveAnnouncer } from "@angular/cdk/a11y";
import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { MatSort, Sort, MatSortModule } from "@angular/material/sort";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { ContrincantsPipePipe } from "./contrincants-pipe.pipe";
import { MatIconModule } from "@angular/material/icon";
import { CamposVaciosPipe } from "./campos-vacios.pipe";
import DatosGuerra from "./UcdpPrioConflict_v23_1.json";

@Component({
  selector: "aplicacio",
  styleUrls: ["./CSS/Style.css"],
  templateUrl: "./HTML/index.html",
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    ContrincantsPipePipe,
    MatIconModule,

    CamposVaciosPipe,
  ],
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

  // https://stackoverflow.com/questions/75665773/property-paginator-and-sort-has-no-initializer
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce("Sorting cleared");
    }
  }
  applyFilter(event: Event) {
    // https://stackoverflow.com/questions/49939979/filtering-specific-column-in-angular-material-table-with-filtering-in-angular
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    // Here I specify that I want to filter the information that I enter, but just from this tables. If not, I would filter the entered value but in all of the existing properties of the dataSource.
    this.dataSource.filterPredicate = function (data): boolean {
      return (
        data.location.toLowerCase().includes(filterValue) ||
        data.side_a.toString().includes(filterValue) ||
        data.side_b.toString().includes(filterValue) ||
        data.territory_name.toString().includes(filterValue) ||
        data.start_date.toString().includes(filterValue) ||
        data.ep_end_date.toString().includes(filterValue)
      );
    };

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

// USE PIPES WITH side_a, side_b (GOVERNMENT) & territory_name (-) IF EMPTY.
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
