import React, { Component } from 'react';

function Home () {
   return (
      <div oncontextmenu='return false' className='snippet-body' id="body-pd">
         <nav className="header navbar navbar-expand-lg navbar-light bg-light" id="header">
            <div className="header_toggle"><i className='bx bx-menu' id="header-toggle"></i></div>
            <a className="navbar-brand" style={{ fontSize:'18pt', textTransform: 'capitalize !important' }} href="#">Principal</a> 
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
               <ul className="navbar-nav navbar-light bg-light">
                  <li className="nav-item d-none">
                     <div id="custom-search" className="top-search-bar"><input className="form-control" type="text" placeholder="Search.." />dd</div>
                  </li>
                  <li className="nav-item dropdown notification">
                     <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="d-block d-lg-none">Notificaciones</span>
                        <i className="d-none d-lg-block fas fa-fw fa-bell">&nbsp;0</i>
                     </a>
                     <ul className="dropdown-menu dropdown-menu-right notification-dropdown">
                        <li>
                           <div className="notification-title">Notificaciones</div>
                           <div className="notification-list">
                              <div className="list-group">
                                 <a href="" className="list-group-item list-group-item-action notification-info">
                                    <div className="notification-info">
                                       <div className="notification-list-user-img">
                                          <img className="user-avatar-md rounded-circle"/>
                                       </div>
                                       <div className="notification-list-user-block">
                                          <span className="notification-list-user-name">
                                             admin
                                          </span>
                                          Notificacion I
                                          <div className="notification-date">
                                             23/10/2022
                                             <span className="badge badge-success">Baja</span>
                                          </div>
                                       </div>
                                    </div>
                                 </a>
                              </div>
                           </div>
                        </li>
                        <li>
                           <div className="list-footer"><a href="#">Ver todas las notificaciones</a></div>
                        </li>
                     </ul>
                  </li>
                  <li className="nav-item dropdown connection">
                     <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="d-block d-lg-none">Modulos</span> 
                        <i className="d-none d-lg-block fas fas fa-fw fa-th"></i> 
                     </a>
                     <ul className="dropdown-menu dropdown-menu-right connection-dropdown">
                        <li className="connection-list">
                           <div className="row">
                              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                                 <a href="#" className="connection-item">
                                    <img src="https://img.icons8.com/office/16/000000/user.png"/>
                                    <span>Usuarios</span>
                                 </a> 
                              </div>
                              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                                 <a href="#" className="connection-item">
                                    <img src="https://img.icons8.com/office/16/000000/user.png"/>
                                    <span>modulo 1</span>
                                 </a> 
                              </div>
                              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                                 <a href="#" className="connection-item">
                                    <img src="https://img.icons8.com/office/16/000000/user.png"/>
                                    <span>modulo 1</span>
                                 </a> 
                              </div>
                           </div>
                        </li>
                        <li>
                           <div className="conntection-footer"><a href="#">Ver mas</a></div>
                        </li>
                     </ul>
                  </li>
                  <li className="nav-item dropdown nav-user">
                     <a className="nav-link nav-user-img" href="#" id="navbarDropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="d-block d-lg-none">Perfil</span> 
                        <img src="https://img.icons8.com/dusk/100/000000/user-female-circle.png" alt="" className="d-none d-lg-block user-avatar-md rounded-circle" />
                     </a>
                     <div className="dropdown-menu dropdown-menu-right nav-user-dropdown" aria-labelledby="navbarDropdownMenuLink2">
                        <div className="nav-user-info">
                           <h5 className="mb-0 text-white nav-user-name">Administrador</h5>
                           <span className="status"></span><span className="ml-2">Available</span>
                        </div>
                        <a className="dropdown-item" href="#"><i className="fas fa-user mr-2"></i>Account</a> 
                        <a className="dropdown-item" href="#"><i className="fas fa-power-off mr-2"></i>Logout</a>
                     </div>
                  </li>
               </ul>
            </div>
         </nav>
         <div className="l-navbar" id="nav-bar">
            <nav className="nav">
               <div>
                  <a href="" className="nav_logo"> 
                     <i className='bx bx-layer nav_logo-icon'></i> 
                     <span className="nav_logo-name">Modulos</span> 
                  </a>
                  <div className="nav_list"> 
                     <li>
                        <a href="#modulo1" data-toggle="collapse" aria-expanded="false" className="nav_link_new"> 
                           <i className='bx bx-grid-alt nav_icon'></i> 
                           <span className="nav_name">
                              Modulo I
                           </span> 
                        </a>
                        <ul className="collapse list-unstyled" id="modulo1">
                           <li>
                              <a href="#" className="item-list connection-item">
                                 subopcion
                              </a>
                           </li>
                        </ul>
                     </li>
                  </div>
               </div>
            </nav>
         </div>
      </div>
   )
}

export default Home;