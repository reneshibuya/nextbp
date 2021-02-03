const Footer = () => {

  return (
    <>
      <footer className='Dark'>
        <div className='mainFooterTitle'>© 2021 myApp</div>
      </footer>

      {/* ===> STYLES <===*/}
      <style jsx>{`
        footer {
          height: 40px;
          color: white;
          width: 100%;
          position: absolute;
          left: 0;
          bottom: 0;
          transition: background-color 0.5s ease;
          background-color: #fc466b;
          box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.4);
        }

        footer.Dark {
          background-color: #2c3e50;
        }

        .mainFooterTitle {
          margin: 0 auto;
          width: fit-content;
          margin-top: 12px;
          font-size: 12px;
        }
      `}</style>
    </>
  )
}

export default Footer
