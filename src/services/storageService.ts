import { initialDegreeReqs } from '../data/initialData';

export const storageService = {
  get<T>(key: string): T[] {
    return JSON.parse(localStorage.getItem(key) || '[]');
  },

  set<T>(key: string, data: T[]) {
    localStorage.setItem(key, JSON.stringify(data));
  },

  init() {
    if (!localStorage.getItem('degreeReqs')) {
      localStorage.setItem('degreeReqs', JSON.stringify(initialDegreeReqs));
    }
  }
};
