
export function loadInitialData() {
  if (!localStorage.getItem('courses')) {
    localStorage.setItem('courses', JSON.stringify(Array.from({length:10},(_,i)=>({id:'C'+i,name:'Course '+i,status:'active'}))))
  }
}
