import { OpaqueToken } from '@angular/core'

// export const TOASTR_TOKEN = new OpaqueToken('toastr')

export class Toastr {
  success(msg: string, title?: string) {}
  info(msg: string, title?: string) {}
  warning(msg: string, title?: string) {}
  error(msg: string, title?: string) {}
}

// declare const toastr: any

// @Injectable()
// export class ToastrService {

//   constructor() { }

//   success(message: string, title?: string) {
//     toastr.success(message, title)
//   }

//   info(message: string, title?: string) {
//     toastr.info(message, title)
//   }

//   warning(message: string, title?: string) {
//     toastr.warning(message, title)
//   }

//   error(message: string, title?: string) {
//     toastr.error(message, title)
//   }

