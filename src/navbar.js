import image5 from './Images/sri.jpg'

const openLink = (name) => {
  const Linkedin = 'https://www.linkedin.com/in/sri-vardhan-pusala-8412871a4/';
  const GitHub = 'https://github.com/Sri-vardhan18/';

  return () => {
    if (name === 'Linkedin') {
      window.open(Linkedin, '_blank');
    } else if (name === 'GitHub') {
      window.open(GitHub, '_blank');
    }
  };
};

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className='containers'>
        <li onClick={openLink('Linkedin')}>Linkedin</li>
        <li onClick={openLink('GitHub')}>Github</li>
      </ul>
      <div className="profile">
        <img src={image5} alt="Profile" />
      </div>
    </div>
  );
}

export default Navbar;
