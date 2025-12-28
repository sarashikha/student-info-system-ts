export interface Student {
  id: string;          // ת"ז
  fullName: string;
  email: string;
  status: 'פעיל' | 'סיים';
  courseIds: string[];
}
