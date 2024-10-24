import Card from '../components/Card'
import { useQuery, gql } from '@apollo/client'


const COUNTRIES = gql`
	query {
  	countries {
    	emoji
    	name
    	capital
    	languages {
      	name
    	}
  	}
	}
`;

function CountryList() {
	const { loading, error, data } = useQuery(COUNTRIES)

	if (loading) return <p>Loading...</p>
	if (error) return <p>Error :(</p>

	return (
		<div>
  		<p className="text-center mt-5 mb-6 text-2xl font-medium">Countries</p>
  		<div className="mx-auto w-4/5 flex flex-wrap justify-evenly gap-y-5 gap-x-4">
    		{data.countries.map(({ name, capital, languages, emoji }: any) => (
      		<Card name={name} capital={capital} languages={languages} emoji={emoji} />
    		))}
  		</div>
		</div>
	)
}

export default CountryList