export interface Student {
  id: string;          // ת"ז – ייחודי
  fullName: string;    // שם מלא – חובה
  email: string;       // מייל – חובה ותקין
  status: 'active' | 'finished';
}
