export default function platzom(str){
	
	let translation = str;
	//si la palabra termina con ar se elimina la dos ultimas palabras
	if(str.toLowerCase().endsWith('ar'))
	{
		translation = translation.slice(0, -2);
		
	}
	
	// si la palabra empieza por z se agrega pe
	if(str.toLowerCase().startsWith('z'))
	{
		translation += 'pe';
	   	
	}
	
	//si el numero es mayo a 10 
	if(str.length >= 10){
		let firstHalf = translation.slice(0, Math.round(str.length / 2));
		let secundHalf =translation.slice(Math.round(str.length / 2));
		
		translation = `${firstHalf}-${secundHalf}`;
	
	}	
	
	//palabra palindrome
	const reverse = (str) => str.split('').reverse().join('');
	
	
	const minMay = (str) => {
		let translation = '' ;
		let capitalize = true;
		for(let i = 0; i < str.length; i++){
			const char  = str.charAt(i);
			translation += capitalize ? char.toUpperCase() : char.toLowerCase(); 
			capitalize = !capitalize;
		}
		
		return translation;
	}
	
	
	if(str == reverse(str))
	{
	   return minMay(str);
		
	}else{
		console.log('no es palindrome');
	}
	
	return translation;
}