export interface Course {
  id: string;          // קוד קורס – ייחודי
  name: string;        // שם קורס – חובה
  syllabus?: string;   // סילבוס – לא חובה
  status: 'active' | 'inactive';
}
