import Card from "./Card";
import joker1 from '../images/joker1.jpg'
import joker2 from '../images/joker2.jpg'
import joker3 from '../images/joker3.jpg'

const cards = [
    {
        id: 1,
        title: 'Joker 1',
        image:  joker1 
    },
    {
        id: 2,
        title: 'Joker 2',
        image: joker2
    },
    {
        id: 3,
        title: 'Joker 3',
        image: joker3
    }
]
export default function Cards() {
    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    cards.map(card => (
                        <div className="col-12 col-md-4" key={card.id}>
                            <Card title={card.title} imageJ={card.image}/>
                        </div>
                    ))
                }
            </div>

        </div>

    )
}
