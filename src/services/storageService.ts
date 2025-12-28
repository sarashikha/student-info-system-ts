import { initialCourses } from '../data/initialData';
import { initialDegreeReqs } from '../data/initialData';

export const storageService = {
  get<T>(key: string): T[] {
    return JSON.parse(localStorage.getItem(key) || '[]');
  },

  set<T>(key: string, data: T[]) {
    localStorage.setItem(key, JSON.stringify(data));
  },

  init() {
    // קורסים
    if (!localStorage.getItem('courses')) {
      localStorage.setItem('courses', JSON.stringify(initialCourses));
    }

    // דרישות תואר
    if (!localStorage.getItem('degreeReqs')) {
      localStorage.setItem('degreeReqs', JSON.stringify(initialDegreeReqs));
    }
  }
};
