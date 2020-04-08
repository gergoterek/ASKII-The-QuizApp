/*import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { Table } from "src/domain/table";
import { Element } from "src/domain/element";
import { ActivatedRoute, Router } from "@angular/router";
import { TableService } from "../../service/table.service";
import { ElementStatus } from 'src/domain/element-status';
import { ElementService } from 'src/service/element.service';

@Component({
  selector: "app-element-detail",
  templateUrl: "./element-detail.component.html",
  styleUrls: ["./element-detail.component.css"]
})


  

export class ElementDetailComponent implements OnInit {
  @Input() mode: 'create' | 'edit';
  @Input() table: Table;
  @Output() tableSubmit: EventEmitter<Table> = new EventEmitter();

  constructor(
    private route: ActivatedRoute,
    public tableService: TableService,
    public elementService: ElementService,
    private router: Router
  ) {}

  async ngOnInit() {
    const param = parseInt(this.route.snapshot.params.id);
    this.table = await this.tableService.getTable(param);
  }

  editTable() {
    this.router.navigate([
      "tables", this.table.id, "edit"]);
  }
  goToTables() {
    this.router.navigate([
      "tables"]);
  }

  async changeStatus(event, element: Element) {
    if (element.elementStatus === ElementStatus.Done){
      element.elementStatus = ElementStatus.Undone;
    }
    else{
      element.elementStatus = ElementStatus.Done;
    }
    this.elementService.modifyElement(element);
    
  }

}*/