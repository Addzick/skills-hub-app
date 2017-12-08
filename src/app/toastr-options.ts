// Angular stuff
import { Injectable } from '@angular/core'

// 3rd parties modules
import { ToastOptions } from 'ng2-toastr/ng2-toastr';

// ToastR options
@Injectable()
export class CustomToastOption extends ToastOptions {
  toastLife= 3000;
  newestOnTop= true;
  maxShown= 1;
  positionClass= 'toast-top-center';
  animate= 'fade';
  enableHTML= true;
}