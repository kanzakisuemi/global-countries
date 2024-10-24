export function Card({ name, capital, languages, emoji }: any) {
	return (
   	<div
			className="
				w-64 h-56
				rounded-lg 
				overflow-hidden 
				shadow-lg border 
				bg-mint-200
				transition-transform transform hover:scale-105"
		>
			<div className="p-4">
				<div className="flex items-center mb-3">
		  		<span className="text-5xl">{emoji}</span>
		  		<span className="ms-3">{name}</span>
				</div>
	  		<p className="text-gray-700">Capital: { capital ? capital : 'Unknown'}</p>
	  		<p className="text-gray-600">
	    		Languages: {languages.length > 0 ? languages.map(({ name }: any) => name).join(', ') : 'Unknown'}
	  		</p>
		 		</div>
		</div>  
	)
}

export default Card