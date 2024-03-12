import PropTypes from 'prop-types';
import Button from './Button';


const Header = (props) => {
    const onClick = (e) => {
        console.log(e.target);
    }

  return (
    <header className="header">
      <h1>{props.title}</h1>
      
      <Button color='green' text='Hello' onClick={onClick}/>
    </header>
  );
}

export default Header;
