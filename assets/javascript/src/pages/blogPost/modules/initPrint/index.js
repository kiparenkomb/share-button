export function initPrint() {
	const printBtn = document.getElementById('printBtn');

	if(!printBtn)return;  
  
	printBtn.onclick = ()=> {
		window.print();
	};
}
