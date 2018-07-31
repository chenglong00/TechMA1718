// signup.interface.ts
export interface User {
  name: string;
  account: {
    email: string;
    confirm: string;
    phone: string;
    question: string;
  }
}
