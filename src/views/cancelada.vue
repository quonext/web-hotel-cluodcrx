<template>
  <div>
    <header id="headerInternas">
      <div class="header-top">
        <div class="logo">
          <a href="https://serene-kowalevski-d75031.netlify.com/">
            <img
              src="/index_files/logoquohotelwhite.png"
              width
              height
              title="5 estrellas  quohotel SELECCIÓN LA PLANTACIÓN DEL SUR Costa Adeje"
              alt="5 estrellas  quohotel SELECCIÓN LA PLANTACIÓN DEL SUR Costa Adeje"
            />
            <div class="info">
              <h1 class="tit"></h1>
            </div>
          </a>
        </div>
        <div class="content">
          <div class="header-sup">
            <div class="ley dropdown">
              <a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown">
                Aviso legal - Política de privacidad - Ley de Cookies
                <span class="arrow">
                  <i class="fa fa-chevron-down"></i>
                </span>
              </a>
              <ul class="dropdown-menu dropMenu" role="menu">
                <li>
                  <a
                    href="https://quohotelplantaciondesur.backhotelengine.com/politica-cookies/"
                    title="Política de cookies"
                    rel="nofollow"
                  >Política de cookies</a>
                </li>
                <li>
                  <a
                    href="https://quohotelplantaciondesur.backhotelengine.com/aviso-legal-y-uso-de-la-web/"
                    title="Aviso legal y uso de la página web"
                    rel="nofollow"
                  >Aviso legal y uso de la página web</a>
                </li>
                <li>
                  <a
                    href="https://quohotelplantaciondesur.backhotelengine.com/politica-privacidad-para-estancias/"
                    title="Política de privacidad para las estancias.."
                    rel="nofollow"
                  >Política de privacidad para las estancias..</a>
                </li>
                <li>
                  <a
                    href="https://quohotelplantaciondesur.backhotelengine.com/Politica-privacidad/"
                    title="Política de privacidad"
                    rel="nofollow"
                  >Política de privacidad</a>
                </li>
              </ul>
            </div>
            <div class="idioma dropdown">
              <a
                href="https://quohotelplantaciondesur.backhotelengine.com/bookcore/confirmation-form/?lang=es&amp;s=9aq0lqf3ksns6lx2cncjvtj7xf693rw6&amp;r1=1&amp;_ga=2.238079363.248180235.1571914621-1280613609.1571914621#"
                class="dropdown-toggle"
                data-toggle="dropdown"
              >
                Español
                <span class="bandera">
                  <span class="flag es"></span>
                </span>
                <span class="arrow">
                  <i class="fa fa-chevron-down"></i>
                </span>
              </a>
              <ul class="dropdown-menu dropMenu" role="menu">
                <li>
                  <a
                    href="https://en.quohotellaplantaciondelsur.com/"
                    class="idiomas"
                    itemprop="language"
                    title="English"
                  >
                    <span class="flag en"></span>
                    <span class="idiomasText">English</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://de.quohotellaplantaciondelsur.com/"
                    class="idiomas"
                    itemprop="language"
                    title="Deutsch"
                  >
                    <span class="flag de"></span>
                    <span class="idiomasText">Deutsch</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://fr.quohotellaplantaciondelsur.com/"
                    class="idiomas"
                    itemprop="language"
                    title="Français"
                  >
                    <span class="flag fr"></span>
                    <span class="idiomasText">Français</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://it.quohotellaplantaciondelsur.com/"
                    class="idiomas"
                    itemprop="language"
                    title="Italiano"
                  >
                    <span class="flag it"></span>
                    <span class="idiomasText">Italiano</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="official">
              <img
                title="Web oficial  quohotel SELECCIÓN LA PLANTACIÓN DEL SUR Costa Adeje"
                alt="Web oficial  quohotel SELECCIÓN LA PLANTACIÓN DEL SUR Costa Adeje"
                src="/index_files/icon_official.png"
              />
              <span>Web oficial</span>
            </div>
            <div class="wifi">
              <img
                title="Wifi gratis  quohotel SELECCIÓN LA PLANTACIÓN DEL SUR Costa Adeje"
                alt="Wifi gratis  quohotel SELECCIÓN LA PLANTACIÓN DEL SUR Costa Adeje"
                src="/index_files/logo_wifi.png"
              />
              <span>Wifi gratis</span>
            </div>
          </div>
          <nav id="menu">
            <div class="navbar" role="navigation">
              <div class="navbar-header">
                <button
                  type="button"
                  class="navbar-toggle toggle-menu menu-left push-body"
                  data-toggle="collapse"
                  data-target=".navbar-collapse"
                >
                  <span class="sr-only"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
              </div>
              <div class="collapse navbar-collapse cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">
               <ul class="nav navbar-nav navbarMenu">
                  <li class="active">
                    <a
                      href="https://serene-kowalevski-d75031.netlify.com"
                      title="Hotel  quohotel SELECCIÓN LA PLANTACIÓN DEL SUR"
                    >Hotel</a>
                  </li>
                  <li>
                    <router-link to="/ofertas">Ofertas</router-link>
                  </li>
                  <li>
                  <router-link to="/habitaciones">Habitaciones</router-link>
                  </li>
                <!--  <li>
                     <router-link to="/fotos">Fotos</router-link>
                  </li>-->
                  <li>
                     <router-link to="/servicios">Servicios</router-link>
                  </li>
             <!--     <li class="hidden-md">
                    <a href="#" title="Mapa  quohotel SELECCIÓN LA PLANTACIÓN DEL SUR">Mapa</a>
                  </li>
                  <li class="hidden-md">
                    <a href="#" title="Contacto  quohotel SELECCIÓN LA PLANTACIÓN DEL SUR">Contacto</a>
                  </li>-->
                  <li class="booking">
                     <router-link to="/verreservas">Mi reserva</router-link>
                  </li>
                  <li class="dropdown visible-md">
                    <a
                      href="https://serene-kowalevski-d75031.netlify.com/#"
                      data-toggle="dropdown"
                      class="dropdown-toggle"
                    >
                      Más
                      <b class="caret"></b>
                    </a>
                    <ul class="dropdown-menu dropMore" role="menu">
                      <li class="visible-md visible-sm">
                        <a href="#" title="Mapa  quohotel SELECCIÓN LA PLANTACIÓN DEL SUR">Mapa</a>
                      </li>
                      <li class="visible-md visible-sm">
                        <a
                          href="#"
                          title="Contacto  quohotel SELECCIÓN LA PLANTACIÓN DEL SUR"
                        >Contacto</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
    <section id="motorInternas">
      <div class="contenedor_header">
        <div class="container">
          <div class="motor" style="    width: 100%;
    height: 10%; padding:50px;  " >
            <!--<form id="motorform">
              <div class="box_inside">
                <h3>¡RESERVA AHORA!</h3>
                <div class="fechas">
                  <div class="entrada">
                    <label>Entrada</label>
                    <div class="bordeFechas">
                      <span class>
                        <strong></strong>
                        <em></em>
                      </span>
                      <input
                        type="text"
                        name="entrada"
                        value="24/10/2019"
                        readonly="readonly"
                        required
                        id="id_entrada"
                      />
                    </div>
                  </div>
                  <div class="salida">
                    <label>Salida</label>
                    <div class="bordeFechas">
                      <span class>
                        <strong></strong>
                        <em></em>
                      </span>
                      <input
                        type="text"
                        name="salida"
                        value="25/10/2019"
                        readonly="readonly"
                        required
                        id="id_salida"
                      />
                    </div>
                  </div>
                </div>
                <div class="consulta">
                  <div class="box-promo">
                    <span class="promocode">
                      ¿Tienes un código promocional?
                      <a
                        title="haz clic aquí"
                        href="javascript:void(0)"
                      >haz clic aquí</a>
                    </span>
                    <span class="codpromo" style="display: none;">
                      <input type="text" name="codpromo" id="id_codpromo" maxlength="50" />
                      <em class="fa fa-times cerrar-input"></em>
                    </span>
                  </div>
                  <div class="box-check btn-dispo">
                    <button title="¡Comprobar disponibilidad!" class="btn btn-motor btn-consulta">
                      ¡Comprobar disponibilidad!
                      <span>Mejor Precio Online</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>-->
          </div>
        </div>
      </div>
    </section>
<div id="wrapper"><div class="container box-bookcore"><div class="wrap rb_bc"><div class="bc_dark"></div><div class="bc container pn"><div class="bc_contenido  col-lg-9 col-md-8 col-sm-12 home  col-xs-12"><div class="bc_contenido_inner clearfix js-roi-modal-container"><div id="bc_cancelacion" class="roi-booking-cancellation"><div class="roi-booking-cancellation__text roi-booking-cancellation__text--cancelled"><svg class="svg-roi svg-roi_cancelled" width="28px" height="28px" viewBox="0 0 28 28" focusable="false" xmlns="http://www.w3.org/2000/svg"><path d="M21.71 2.899v2.359a2.096 2.096 0 0 1-2.096 2.096h-1.747a2.096 2.096 0 0 1-2.096-2.096v-2.38H12.23v2.38a2.096 2.096 0 0 1-2.096 2.096H8.386A2.096 2.096 0 0 1 6.29 5.258V2.899A5.265 5.265 0 0 0 1.44 8.146v14.586A5.268 5.268 0 0 0 6.707 28h14.586a5.269 5.269 0 0 0 5.268-5.268V8.146A5.266 5.266 0 0 0 21.71 2.9zm2.802 18.643a4.41 4.41 0 0 1-4.409 4.41H7.897a4.41 4.41 0 0 1-4.41-4.41V9.854h21.025v11.688zM11.042 5.145c0 .694-.564 1.257-1.258 1.257H8.736a1.258 1.258 0 0 1-1.258-1.257V1.258C7.478.563 8.041 0 8.736 0h1.048c.694 0 1.257.563 1.257 1.258v3.887zm9.48 0c0 .694-.563 1.257-1.258 1.257h-1.048a1.258 1.258 0 0 1-1.257-1.257V1.258c0-.695.563-1.258 1.257-1.258h1.048c.695 0 1.258.563 1.258 1.258v3.887zm-4.635 12.588l2.348-2.348a1.334 1.334 0 0 0-1.887-1.887L14 15.846l-2.348-2.348a1.334 1.334 0 0 0-1.887 1.887l2.348 2.348-2.348 2.349a1.334 1.334 0 0 0 1.887 1.887L14 19.62l2.348 2.348a1.334 1.334 0 0 0 1.887-1.887l-2.348-2.349z" fill-rule="nonzero"></path></svg><p class="roi-booking-cancellation__text-info">Estimado/a Sr/Sra, su reserva ya ha sido cancelada. Estamos a su disposición para atenderle cuando desee.</p></div></div></div></div><div class="content-carrito js-roi-cart" data-url="/bookcore/shopping-cart/?lang=es" data-lang="es" data-trans-show-details="Ver detalles" data-trans-hide-details="Ocultar detalles"><div>




</div></div><div class="contenedor-best-prices"></div><div class="bc_subir"><div class="subir" onclick="$('html, body').animate({scrollTop: 0}, 'slow')"><svg class="svg-roi svg-roi_arrow-thin-up" width="28px" height="28px" viewBox="0 0 28 28" focusable="false" xmlns="http://www.w3.org/2000/svg"><path d="M13.863 8.226l-12.736 12.7-.666-.668 13.4-13.362 13.678 13.538-.664.67z" fill-rule="nonzero"></path></svg></div></div></div></div><div class="fondo_dark" style="display:none"></div></div></div>

    <footer>
      <div class="footer-top">
        <div class="container">
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 box-redes">
            <span class="titulo">Síguenos</span>
            <span
              class="subtit"
            >Únete a nosotros en las redes sociales y conoce las mejores promociones</span>
            <nav class="redes">
              <ul>
                <li>
                  <a
                    href="http://instagram.com/#"
                    title="Instagram  quohotel SELECCIÓN LA PLANTACIÓN DEL SUR"
                    target="_blank"
                    rel="nofollow"
                    class="fa fa-instagram"
                  ></a>
                </li>
                <li>
                  <a
                    href="http://pinterest.com/#"
                    title="Pinterest  quohotel SELECCIÓN LA PLANTACIÓN DEL SUR"
                    target="_blank"
                    rel="nofollow"
                    class="fa fa-pinterest"
                  ></a>
                </li>
                <li>
                  <a
                    href="http://twitter.com/#"
                    title="Twitter  quohotel SELECCIÓN LA PLANTACIÓN DEL SUR"
                    target="_blank"
                    rel="nofollow"
                    class="fa fa-twitter"
                  ></a>
                </li>
                <li>
                  <a
                    href="http://www.facebook.com/#"
                    title="Facebook  quohotel SELECCIÓN LA PLANTACIÓN DEL SUR"
                    target="_blank"
                    rel="nofollow"
                    class="fa fa-facebook"
                  ></a>
                </li>
                <li>
                  <a
                    href="http://www.flickr.com/#"
                    title="Flickr  quohotel SELECCIÓN LA PLANTACIÓN DEL SUR"
                    target="_blank"
                    rel="nofollow"
                    class="fa fa-flickr"
                  ></a>
                </li>
                <li>
                  <a
                    href="http://www.youtube.com/#"
                    title="Youtube  quohotel SELECCIÓN LA PLANTACIÓN DEL SUR"
                    target="_blank"
                    rel="nofollow"
                    class="fa fa-youtube"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://plus.google.com/#"
                    title="Google+  quohotel SELECCIÓN LA PLANTACIÓN DEL SUR"
                    target="_blank"
                    rel="nofollow"
                    class="fa fa-google"
                  ></a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 box-news">
            <span class="titulo">quohotel y Noticias</span>
            <span class="subtit">Nos gusta compartir nuevas ofertas y promociones exclusivas</span>
            <div class="box-enviar">
              <input type="text" placeholder="Inserta tu email aqui" class />
              <button
                data-toggle="modal"
                data-target="#modalNewsletter"
                class="btn btn-secundario"
                title="Enviar"
              >Enviar</button>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <span class="titulo_footer">quohotel SELECCIÓN LA PLANTACIÓN DEL SUR</span>
          <span
            class="direcion"
          >Calle del Roque Nublo, 1, 38670. Costa Adeje, Santa Cruz de Tenerife., Costa Adeje</span>
          <nav class="enlacesFooter">
            <ul>
              <li>
                <a href="#" title="Política de privacidad" rel="nofollow">Política de privacidad</a>
              </li>
              <li>
                <a href="#" title="Política de cookies" rel="nofollow">Política de cookies</a>
              </li>
              <li>
                <a href="#" title="Directorio Hoteles">Directorio Hoteles</a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  title="Mapa del sitio"
                  data-toggle="modal"
                  data-target="#modalSitemap"
                >Mapa del sitio</a>
              </li>
              <li class="directorio">
                <a href="#" title="quohotel hoteles">quohotel hoteles</a>
              </li>
              <li class>
                <a href="#" title="#" target="_Blank" rel="nofollow">by</a>
              </li>
            </ul>
          </nav>
          <span class="titulo_idiomas">Idiomas</span>
          <nav class="idiomasFooter">
            <ul>
              <li>
                <a href="#" title="English">English</a>
              </li>
              <li>
                <a href="#" title="Deutsch">Deutsch</a>
              </li>
              <li>
                <a href="#" title="Français">Français</a>
              </li>
              <li>
                <a href="#" title="Italiano">Italiano</a>
              </li>
            </ul>
          </nav>
          <div class="logoThawte">
            <img
              src="/index_files/logo_twathe.png"
              title="Thawte  quohotel SELECCIÓN LA PLANTACIÓN DEL SUR Costa Adeje"
              alt="Thawte  quohotel SELECCIÓN LA PLANTACIÓN DEL SUR Costa Adeje"
              class="logo_footer"
              width="101"
              height="25"
            />
          </div>
        </div>
      </div>
      <div class="footer-icons">
        <div class="footer-icons__container">
          <img
            src="/index_files/ae2ff04a3bd150a2fd55920e5c7ba3ee.png"
            class="footer-icons__img"
            title="Gold Travelife"
          />
          <img
            src="/index_files/501f4900ecc9a51e141b75b2852ed1d6.png"
            class="footer-icons__img"
            title="Logo TUI Family Champion 2018"
          />
          <img
            src="/index_files/a540475cf763715c4287fc823b965c99.png"
            class="footer-icons__img"
            title="Travelife"
          />
          <img
            src="/index_files/033476b60d34a92016161ced1bfef2f5.png"
            class="footer-icons__img"
            title="Tui Holy"
          />
          <img
            src="/index_files/cf0564c054d7ee49a36a3c51aaa81702.png"
            class="footer-icons__img"
            title="Calidad turística"
          />
          <img
            src="/index_files/2b934579a576233c82bab9afbe5e0685.png"
            class="footer-icons__img"
            title="Tui Top Quality"
          />
        </div>
      </div>
    </footer>
    <!-- Modal -->
    <div
      class="modal fade modal_nuevo"
      id="modalSitemap"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            <h4 class="modal-title" id="myModalLabel4">Mapa del sitio</h4>
          </div>
          <div class="modal-body">
            <ul class="list-group">
              <li class="list-group-item">
                <a
                  target="_blank"
                  href="https://serene-kowalevski-d75031.netlify.com/"
                  title="Hotel"
                >Hotel</a>
              </li>
              <li class="list-group-item">
                <a
                  target="_blank"
                  href="https://serene-kowalevski-d75031.netlify.com/directorio/"
                  title="Directorio Hoteles"
                >Directorio Hoteles</a>
              </li>
              <li class="list-group-item">
                <a
                  target="_blank"
                  href="https://serene-kowalevski-d75031.netlify.com/ofertas/"
                  title="Ofertas"
                >Ofertas</a>
              </li>
              <li class="list-group-item">
                <a
                  target="_blank"
                  href="https://serene-kowalevski-d75031.netlify.com/"
                  title="¡Descuento del 20%!"
                >Oferta - ¡Descuento del 20%!</a>
              </li>
              <li class="list-group-item">
                <a
                  target="_blank"
                  href="https://serene-kowalevski-d75031.netlify.com/habitaciones/"
                  title="Habitaciones"
                >Habitaciones</a>
              </li>
              <li class="list-group-item">
                <a
                  target="_blank"
                  href="https://serene-kowalevski-d75031.netlify.com/fotos/"
                  title="Fotos"
                >Fotos</a>
              </li>
              <li class="list-group-item">
                <a
                  target="_blank"
                  href="https://serene-kowalevski-d75031.netlify.com/servicios/"
                  title="Servicios"
                >Servicios</a>
              </li>
              <li class="list-group-item">
                <a
                  target="_blank"
                  href="https://serene-kowalevski-d75031.netlify.com/mapa/"
                  title="Mapa"
                >Mapa</a>
              </li>
              <li class="list-group-item">
                <a
                  target="_blank"
                  href="https://serene-kowalevski-d75031.netlify.com/opiniones/"
                  title="Opiniones"
                >Opiniones</a>
              </li>
              <li class="list-group-item">
                <a
                  target="_blank"
                  href="https://serene-kowalevski-d75031.netlify.com/contacto/"
                  title="Contacto"
                >Contacto</a>
              </li>
              <li class="list-group-item">
                <a
                  target="_blank"
                  href="https://serene-kowalevski-d75031.netlify.com/politica-cookies/"
                  title="Política de cookies"
                >Política de cookies</a>
              </li>
              <li class="list-group-item">
                <a
                  target="_blank"
                  href="https://serene-kowalevski-d75031.netlify.com/aviso-legal-y-uso-de-la-web/"
                  title="Aviso legal y uso de la página web"
                >Aviso legal y uso de la página web</a>
              </li>
              <li class="list-group-item">
                <a
                  target="_blank"
                  href="https://serene-kowalevski-d75031.netlify.com/politica-privacidad-para-estancias/"
                  title="Política de privacidad para las estancias"
                >Política de privacidad para las estancias</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade modal_nuevo"
      id="modalNewsletter"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="loader">
            <img
              src="/index_files/spinner2.gif"
              title="Newsletter  quohotel SELECCIÓN LA PLANTACIÓN DEL SUR Costa Adeje"
              alt="Newsletter  quohotel SELECCIÓN LA PLANTACIÓN DEL SUR Costa Adeje"
              width="97"
              height="95"
            />
          </div>
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
              <img
                src="/index_files/close_modal_white.png"
                title="Newsletter  quohotel SELECCIÓN LA PLANTACIÓN DEL SUR Costa Adeje"
                alt="Newsletter  quohotel SELECCIÓN LA PLANTACIÓN DEL SUR Costa Adeje"
                width="23"
                height="24"
              />
            </button>
            <h4 class="modal-title" id="myModalLabel1">Newsletter</h4>
            <h5>Receive our offers and news</h5>
          </div>
          <div class="modal-body">
            <form method="post" id="newletter">
              <input
                type="hidden"
                name="csrfmiddlewaretoken"
                
              />
              <ul>
                <li>
                  <label>Nombre</label>
                  <input type="text" name="nombre" required id="id_nombre" maxlength="50" />
                </li>
                <li>
                  <label>Apellidos</label>
                  <input type="text" name="apellidos" required id="id_apellidos" maxlength="50" />
                </li>
                <li>
                  <label>Correo electrónico</label>
                  <input type="email" name="email" required id="id_email" maxlength="50" />
                </li>
                <li>
                  <label>Confirmar email</label>
                  <input type="email" name="email_confirma" required id="id_email_confirma" />
                </li>
                <li class="pais">
                  <label>pais</label>
                  <select name="pais" id="id_pais">
                    <option value="Albania">Albania</option>
                    <option value="Alemania">Alemania</option>
                    <option value="Andorra">Andorra</option>
                    <option value="Argelia">Argelia</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Armenia">Armenia</option>
                    <option value="Australia">Australia</option>
                    <option value="Austria">Austria</option>
                    <option value="Bélgica">Bélgica</option>
                    <option value="Bielorrusia">Bielorrusia</option>
                    <option value="Bolivia">Bolivia</option>
                    <option value="Bosnia - Herzegovina">Bosnia - Herzegovina</option>

                    <option value="Brasil">Brasil</option>
                    <option value="Bulgaria">Bulgaria</option>
                    <option value="Canadá">Canadá</option>
                    <option value="Chile">Chile</option>
                    <option value="China">China</option>
                    <option value="Chipre">Chipre</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Croacia">Croacia</option>
                    <option value="Cuba">Cuba</option>
                    <option value="Dinamarca">Dinamarca</option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="Egipto">Egipto</option>
                    <option value="Eslovaquia">Eslovaquia</option>
                    <option value="Eslovenia">Eslovenia</option>
                    <option value="España">España</option>
                    <option value="Estados Unidos">Estados Unidos</option>
                    <option value="Estonia">Estonia</option>
                    <option value="Federación Rusa">Federación Rusa</option>
                    <option value="Finlandia">Finlandia</option>
                    <option value="Francia">Francia</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Grecia">Grecia</option>
                    <option value="Guatemala">Guatemala</option>
                    <option value="Holanda">Holanda</option>
                    <option value="Honduras">Honduras</option>
                    <option value="Hungría">Hungría</option>
                    <option value="India">India</option>
                    <option value="Irlanda">Irlanda</option>
                    <option value="Islandia">Islandia</option>
                    <option value="Israel">Israel</option>
                    <option value="Italia">Italia</option>
                    <option value="Japón">Japón</option>
                    <option value="Letonia">Letonia</option>
                    <option value="Liechtenstein">Liechtenstein</option>
                    <option value="Lituania">Lituania</option>
                    <option value="Luxemburgo">Luxemburgo</option>
                    <option value="Malta">Malta</option>
                    <option value="Marruecos">Marruecos</option>
                    <option value="México">México</option>
                    <option value="Mónaco">Mónaco</option>
                    <option value="Montenegro">Montenegro</option>
                    <option value="Nicaragua">Nicaragua</option>
                    <option value="Noruega">Noruega</option>
                    <option value="Nueva Zelanda">Nueva Zelanda</option>
                    <option value="Otro País">Otro País</option>
                    <option value="Paraguay">Paraguay</option>
                    <option value="Perú">Perú</option>
                    <option value="Polonia">Polonia</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Puerto Rico">Puerto Rico</option>
                    <option value="Reino Unido">Reino Unido</option>
                    <option value="República Checa">República Checa</option>
                    <option value="República Dominicana">República Dominicana</option>
                    <option value="Rumanía">Rumanía</option>
                    <option value="Serbia">Serbia</option>
                    <option value="Sudáfrica">Sudáfrica</option>
                    <option value="Suecia">Suecia</option>
                    <option value="Suiza">Suiza</option>
                    <option value="Tailandia">Tailandia</option>
                    <option value="Túnez">Túnez</option>
                    <option value="Turquía">Turquía</option>
                    <option value="Ucrania">Ucrania</option>
                    <option value="Uruguay">Uruguay</option>
                    <option value="Venezuela">Venezuela</option>
                  </select>
                </li>
                <li class="pol">
                  <input type="checkbox" name="politica" required id="id_politica" /> He leído y acepto la
                  <a
                    href="https://serene-kowalevski-d75031.netlify.com/Politica-privacidad/"
                    target="_blank"
                  >política de privacidad</a>
                </li>
              </ul>
              <button>¡Benefíciese ahora!</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- Estructura para el pop up del footer -->
    <!-- Fin de estructura para el pop up del footer -->
    <div class="modal fade modal_vcenter" id="modal_ofertafechas">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
            <span class="hotel_nombre">quohotel SELECCIÓN LA PLANTACIÓN DEL SUR</span>
            <h4 class="modal-title titulo"></h4>
          </div>
          <div class="modal-body">
            <div id="ofertafechass" class="clearfix">
              <div class="col-lg-4 col-sm-6 col-xs-12 checkin">
                <label>Entrada</label>
                <div class="input-group">
                  <input
                    type="text"
                    id="oferta_entrada"
                    class="form-control entrada_input"
                    placeholder="Fecha entrada"
                  />
                  <label class="input-group-addon btn" for="oferta_entrada">
                    <i class="fa fa-calendar"></i>
                  </label>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6 col-xs-12 checkout">
                <label>Salida</label>
                <div class="input-group">
                  <input
                    type="text"
                    id="oferta_salida"
                    class="form-control salida_input"
                    placeholder="Fecha salida"
                  />
                  <label class="input-group-addon btn" for="oferta_salida">
                    <i class="fa fa-calendar"></i>
                  </label>
                </div>
              </div>
              <div class="col-lg-4 col-sm-12 col-xs-12 btn_cont">
                <button
                  class="boton btn btn-motor btn-oferta"
                  title="¡Consulta disponibilidad!"
                >¡Consulta disponibilidad!</button>
              </div>
              <div class="clear"></div>
            </div>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->
  </div>
</template>

<script>
// @ is an alias to /src

/*const langfile = require("@/assets/lang/content.json");*/
import axios from "axios";
export default {
  name: "cancelada",
  data: function() {
    return {
      bookingId:""
    
    };
  },
  
  methods: {
    cancel: function() {
      var _this = this;
      axios({
        method: "delete",
        url:
          "https://test.cloudcrx.net/resources/eyAiY3JlYXRlZCI6ICJXZWQgTm92IDEzIDIyOjQ2OjExIENFVCAyMDE5IiwgInVzZXJJZCI6ICJhZ2VuY3kxIiwgImFnZW5jeUlkIjogIjEzMiJ9/commons/booking/"+ _this.$route.query.bookingId,
        
      })
        .then(function(response) {
          _this.$router.push({
            name: "cancelada",
            query: {
              response: response,
            }
          });
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    
 viewbooking: function(){
      this.$router.push({
            name: "ok",
            query: {
             // response: response,
            //  cart: _this.$data.cart,
              bookingId: this.$data.bookingId,
            /*  leadName: _this.leadName,
              email: d.email,
              postalcode: d.postalcode,
              country: d.country,
              phone: d.phone,
              mobile: d.mobile,
total:d.detalles.total.retailPrice.value,
              hora: d.hora,
              minuto: d.minuto,
              comentarios: d.comentarios,
              anteriormente: d.anteriormente,
              titular_tarjeta: d.titular_tarjerta,
              mes_caducidad: d.mes_caducidad,
              ano_caducidad: d.ano_caducidad,
              ccv: d.cvc,

              salida: _this.$data.salida,
              entrada: _this.$data.entrada,
              ocupacion: _this.$route.query.ocupacion*/
            }
          });
       /* })
        .catch(function(error) {
          console.log(error);
        });*/
 }
  },
  mounted() {}
};
</script>
<style scoped>
.roi-steps__item--bonus,
.roi-steps__item--booking {
  width: 41%;
}
.booking-details__item2 {
  width: 100%;
}
.btn .btn-primary input {
  background-color: #d2b669 !important;
  border: 1px solid transparent;
  border-radius: 0;
  color: #f8f8f8;
}
</style>