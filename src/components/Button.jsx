const Button = ({name, isBeam = false, containerClass}) => {
  return (
    <a href="#contact" className={`btn ${containerClass}`}>
        {isBeam && (
            <span className='relative flex h-3 w-3'> 
                <span className="btn-ping" />
                <span className="btn-ping_dot" />
            </span>
        )}
        {name}      
    </a>
  )
}

export default Button
