import './card.css'
import PropTypes from 'prop-types'

export default function Card({title,imageJ}) {
  return (
    <div className="card">
        <div className="card-body">
            <img src={imageJ} className='card-img-top'  />
            <h4 className="card-title">{title}</h4>
            <p className="card-text text-secondary">
                Contexto de la noticia 
            </p>
        </div>        
    </div>
  )
}
Card.propTypes = {
    title : PropTypes,
    imageJ : PropTypes
}
