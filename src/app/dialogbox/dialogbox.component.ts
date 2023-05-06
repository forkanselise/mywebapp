import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.css']
})
export class DialogboxComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<DialogboxComponent>,
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
  }

  saveData() {
    // console.log(this.note.value);
    // alert("Note added to local storage Successfully");
    // this.commonService.saveData(this.note.value as Note);
    this.dialogRef.close();
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
