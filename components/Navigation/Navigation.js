import { useState, useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navigation = () => {
  const [burger, setBurger] = useState({
    burger1: 'spinner diagonal part-1',
    burger2: 'spinner horizontal',
    burger3: 'spinner diagonal part-2',
    sidebar: 'sidebarMenu',
    SubSidebar: 'SubSidebarMenu',
    open: false,
  })

  const handleBurgerClick = () => {
    if (burger.open === false) {
      setBurger({
        burger1: 'spinner diagonal part-1 Checked',
        burger2: 'spinner horizontal Checked',
        burger3: 'spinner diagonal part-2 Checked',
        sidebar: 'sidebarMenu Checked',
        SubSidebar: 'SubSidebarMenu Checked',
        open: true,
      })
    } else {
      setBurger({
        burger1: 'spinner diagonal part-1',
        burger2: 'spinner horizontal',
        burger3: 'spinner diagonal part-2',
        sidebar: 'sidebarMenu',
        SubSidebar: 'SubSidebarMenu',
        open: false,
      })
    }
  }

  const handleHideClick = () => {
    setBurger({
      burger1: 'spinner diagonal part-1',
      burger2: 'spinner horizontal',
      burger3: 'spinner diagonal part-2',
      sidebar: 'sidebarMenu',
      SubSidebar: 'SubSidebarMenu',
      open: false,
    })
  }

  return (
    <>
      {/* ===> NAVBAR <=== */}
      <div className='Navbar Dark'>
        {/* => NAV BURGER <= */}
        <div className='Burger' onClick={() => handleBurgerClick()}>
          <div className={burger.burger1}></div>
          <div className={burger.burger2}></div>
          <div className={burger.burger3}></div>
        </div>
        {/* => NAV LOGO <= */}
        <div style={{ position:"absolute", margin: '0 auto', marginLeft: 'calc(50% - 20px)', cursor:"pointer"}}>
          <Link onClick={() => handleHideClick()} href='/'>
            <img
              src='/favicon.ico'
              width='40'
              height='40'
              style={{ marginTop: '10px' }}
              alt='myAlt'
            ></img>
          </Link>
        </div>
        {/* => NAV USER PHOTO<= */}
        <Link href="/signin" onClick={() => handleHideClick()}>
          <img 
          className="NavUserPic" 
          width="40"
          height="40"
          style={{borderRadius:"50%", cursor:"pointer"}}
          alt="UserPhoto"
          src='/icons/NoUserWhite.png'
          />
          </Link>
      </div>
      {/* ===> MODAL <=== */}
      <div className={burger.SubSidebar} onClick={() => handleHideClick()}></div>





      <div className={[burger.sidebar, "Navbar Dark"].join(" ")}>

          <Link onClick={() => handleHideClick()} className="BarLink" href="/signin">
          <li>
          <img
                src='/icons/NoUserWhite.png'
                className="BarUserPic"
                width="80"
                height="80"
                style={{borderRadius:"50%", marginLeft:"30%", marginTop:"0px"}}
                alt="UserPic"
              />
          <div style={{textAlign:"center"}}>Inicia Sesión</div>
          </li>
          </Link>

        {/* LINKS */}
        <Link onClick={() => handleHideClick()} className="BarLink" href="/link1"><li>Link 1</li></Link>
        <Link onClick={() => handleHideClick()} className="BarLink" href="/link2"><li>Link 2</li></Link>
        <Link onClick={() => handleHideClick()} className="BarLink" href="/link3"><li>Link 3</li></Link>
        <Link onClick={() => handleHideClick()} className="BarLink" href="/link4"><li>Link 4</li></Link>

        {/* INSTALLER */}
          {/* <Installer/> */}

        {/* DARKMODE */}
        {/* <li style={{textAlign:"center"}}>
          <label>DARK MODE </label><br></br><br></br>
          <label className="switch">
          {Theme.Theme.isDark ? 
            <input type="checkbox" onClick={handleThemeClick} defaultChecked/>
          : 
          <input type="checkbox" onClick={handleThemeClick}/>
          }
            <span className="slider round"></span>
          </label>
        </li> */}
      </div>





      {/* ===> STYLES <=== */}
      <style jsx>{`
        .Navbar {
          height: 60px;
          transition: background-color 0.5s ease;
          background-color: #fc466b;
          box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.4);
        }

        .Navbar.Dark {
          background-color: #2c3e50;
        }

        .Burger {
          transition: all 0.3s;
          box-sizing: border-box;
          cursor: pointer;
          position: absolute;
          z-index: 99;
          height: 100%;
          width: 100%;
          top: 22px;
          left: 15px;
          height: 22px;
          width: 22px;
        }

        .spinner {
          transition: all 0.3s;
          box-sizing: border-box;
          position: absolute;
          height: 3px;
          width: 100%;
          background-color: #fff;
        }

        .horizontal {
          transition: all 0.3s;
          box-sizing: border-box;
          position: relative;
          float: left;
          margin-top: 3px;
        }

        .diagonal.part-1 {
          position: relative;
          transition: all 0.3s;
          box-sizing: border-box;
          float: left;
        }

        .diagonal.part-2 {
          transition: all 0.3s;
          box-sizing: border-box;
          position: relative;
          float: left;
          margin-top: 3px;
        }

        .horizontal.Checked {
          transition: all 0.3s;
          box-sizing: border-box;
          opacity: 0;
        }
        .diagonal.part-1.Checked {
          transition: all 0.3s;
          box-sizing: border-box;
          transform: rotate(135deg);
          margin-top: 8px;
        }
        .diagonal.part-2.Checked {
          transition: all 0.3s;
          box-sizing: border-box;
          transform: rotate(-135deg);
          margin-top: -9px;
        }

        .sidebarMenu {
          height: calc(100% - 60px);
          position: absolute;
          z-index: 1;
          left: 0;
          width: 250px;
          transform: translateX(-250px);
          transition: transform 200ms ease-in-out;
          background: linear-gradient(180deg, #fc466b 0%, #3f5efb 100%);
        }

        .sidebarMenu.Dark {
          background: linear-gradient(180deg, #2c3e50 0%, #000000 100%);
        }

        .sidebarMenu.Checked {
          transform: translateX(0);
          box-shadow: 10px 0 5px -4px rgba(0, 0, 0, 0.199);
        }

        .SubSidebarMenu {
          position: absolute;
          z-index: 1;
          background-color: #000000;
          width: 100%;
          height: calc(100% - 60px);
          visibility: hidden;
          opacity: 0;
          transition: all 0.3s;
        }

        .SubSidebarMenu.Checked {
          opacity: 0.2;
          visibility: visible;
        }

        .sidebarMenu li {
          list-style: none;
          color: #fff;
          text-transform: uppercase;
          font-weight: bold;
          padding: 20px;
          cursor: pointer;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .BarLink {
          color: #fff;
          text-decoration: none;
        }

        .BarLink:hover {
          color: rgb(92, 43, 68);
          text-decoration: none;
        }

        .BarUserPic {
          object-fit: contain;
          object-fit: cover;
          box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);
        }

        .NavUserPic {
          position: absolute;
          right: 0px;
          margin-top: 10px;
          margin-right: 10px;
          object-fit: contain;
          object-fit: cover;
        }

        .BarIcon {
          margin-bottom: -5px;
        }

        /* DARK MODE */

        .switch {
          position: relative;
          display: inline-block;
          width: 60px;
          height: 34px;
        }

        .switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ccc;
          -webkit-transition: 0.4s;
          transition: 0.4s;
        }

        .slider:before {
          position: absolute;
          content: '';
          height: 26px;
          width: 26px;
          left: 4px;
          bottom: 4px;
          background-color: white;
          -webkit-transition: 0.4s;
          transition: 0.4s;
        }

        input:checked + .slider {
          background-color: #2196f3;
        }

        input:focus + .slider {
          box-shadow: 0 0 1px #2196f3;
        }

        input:checked + .slider:before {
          -webkit-transform: translateX(26px);
          -ms-transform: translateX(26px);
          transform: translateX(26px);
        }

        /* Rounded sliders */
        .slider.round {
          border-radius: 34px;
        }

        .slider.round:before {
          border-radius: 50%;
        }
      `}</style>
    </>
  )
}

export default Navigation
