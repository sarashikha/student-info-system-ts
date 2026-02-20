export interface User {
  id: string;
  uid: string;
  email: string;
  role: 'admin' | 'user';
  fullName?: string;
  createdAt?: string;
}