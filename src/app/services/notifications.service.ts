import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { Notification } from '@models/.';

@Injectable()
export class NotificationsService {
  constructor(private toastr: ToastrService) {}

  public pushNotification = (notification: Notification) =>
    this.toastr.success(notification.content);
}
