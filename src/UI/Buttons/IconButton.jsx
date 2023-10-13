import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IconButton = ({color, option, icon, onClick, children}) => {

    const onClickHandler = () => {
        onClick(option);
    } 

  return <button className={`bg-${color}-500 rounded-lg text-white text-lg py-4 mt-4 w-full lg:w-3/4`} onClick={onClickHandler}><FontAwesomeIcon icon={icon} />{children}</button>
}


export default IconButton