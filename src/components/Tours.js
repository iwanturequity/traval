import Card from './Card';

function Tours ({tours , removetour}) {
    return (
        <div>

            <div>
                <h1> Plan with love </h1>
            </div>
            <div>
                {
                    tours.map( (tour) => {
                        return <Card key={tour.id} {...tour} removetour= {removetour} ></Card>
                    })
                }
            </div>
        </div>

    );

}
export default Tours ;