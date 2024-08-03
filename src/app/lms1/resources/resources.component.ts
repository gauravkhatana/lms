import { Component } from '@angular/core';
import { NewUserCourseService } from '../../utils/service/new-user-course.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent {

  resourcesData: any[] = []

  selectedOption: string = 'all';

  constructor(private newCourseService : NewUserCourseService) {}

  showTable(option: string): void {
    this.selectedOption = option;
  }

}
