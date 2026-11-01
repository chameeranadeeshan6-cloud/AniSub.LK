async function getData(){const r=await fetch('data.json');if(!r.ok)throw new Error('Could not load data.json');return r.json()}
function esc(s=''){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
