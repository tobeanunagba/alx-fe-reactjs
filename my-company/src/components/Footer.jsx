function Footer() {
    return (
      <footer style={{
        backgroundColor: 'lightgray',
        padding: '10px',
        textAlign: 'center',
        position: 'fixed',
        bottom: 0,
        width: '100%',
      }}>
        <p>&copy; {new Date().getFullYear()} Our Company. All rights reserved.</p>
      </footer>
    );
  }
  
  export default Footer;
  