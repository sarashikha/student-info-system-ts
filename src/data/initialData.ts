import { DegreeRequirement } from '../models/DegreeRequirement';

export const initialDegreeReqs: DegreeRequirement[] = [
  { id: '1', name: 'מתמטיקה בסיסית', type: 'חובה', courseIds: [] },
  { id: '2', name: 'מבוא למדמ"ח', type: 'חובה', courseIds: [] },
  { id: '3', name: 'אלגוריתמים', type: 'חובה', courseIds: [] },
  { id: '4', name: 'מבני נתונים', type: 'חובה', courseIds: [] },
  { id: '5', name: 'מערכות הפעלה', type: 'חובה', courseIds: [] },
  { id: '6', name: 'פיתוח ווב', type: 'בחירה', courseIds: [] },
  { id: '7', name: 'AI', type: 'בחירה', courseIds: [] },
  { id: '8', name: 'סייבר', type: 'בחירה', courseIds: [] },
  { id: '9', name: 'גרפיקה', type: 'בחירה', courseIds: [] },
  { id: '10', name: 'פרויקט גמר', type: 'חובה', courseIds: [] }
];
