import "./Title.css"

export const Title = ({ title, text }) => {

    return (
        
        <div>

            <h2 className="title">{title}</h2>

            <p className="text">{text}</p>
            
        </div>

    )  
}

