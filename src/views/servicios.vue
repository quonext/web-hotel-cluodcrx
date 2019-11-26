<template>
  <div>
    <header id="headerInternas">
      <div class="header-top">
        <div class="logo">
          <a href="https://serene-kowalevski-d75031.netlify.com">
            <img
              src="/index_files/logoquohotelwhite.png"
              width
              height
              title="5 estrellas  quohotel SELECCIÓN LA PLANTACIÓN DEL SUR Costa Adeje"
              alt="5 estrellas  quohotel SELECCIÓN LA PLANTACIÓN DEL SUR Costa Adeje"
            />
             <div class="info">
            <h1 class="tit">Servicios QUOHOTEL SELECCIÓN LA PLANTACIÓN DEL SUR Costa Adeje</h1>
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
                    href="#"
                    title="Política de cookies"
                    rel="nofollow"
                  >Política de cookies</a>
                </li>
                <li>
                  <a
                    href="#"
                    title="Aviso legal y uso de la página web"
                    rel="nofollow"
                  >
                    Aviso legal y uso de la
                    página web
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title="Política de privacidad para las estancias.."
                    rel="nofollow"
                  >
                    Política de
                    privacidad para las estancias..
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title="Política de privacidad"
                    rel="nofollow"
                  >Política de privacidad</a>
                </li>
              </ul>
            </div>
            <div class="idioma dropdown">
              <a
                href="#"
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
                    href="#"
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
                    href="#"
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
                    href="#"
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
                    href="#"
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
                  class="navbar-toggle toggle-menu menu-left push-body jPushMenuBtn"
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
                 <!-- <li>
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
          <div class="motor">
            <form
              id="motorform"
              action="https://serene-kowalevski-d75031.netlify.com/bookcore/v1/search-dispo.htm"
              method="POST"
            >
              <div class="box_inside">
                  <h3>¡RESERVA AHORA!</h3>
                  <div class="fechas">
                    <div class="entrada">
                      <label>Entrada</label>
                      <div class="bordeFechas" @click="focus('entrada')">
                        <span class>
                          <strong>{{formatedEntrada.day}}</strong>
                          <em>{{formatedEntrada.month}} {{formatedEntrada.year}}</em>
                        </span>
                        <input
                          type="text"
                          name="entrada"
                          value="24/10/2019"
                          readonly="readonly"
                          required
                          id="id_entrada"
                          class="hasDatepicker"
                        />
                        <input
                          type="text"
                          id="datepickerEntrada"
                          v-model="fechaEntrada"
                          style="visibility:visible; z-index:-1"
                        />
                      </div>
                    </div>
                    <div class="salida">
                      <label>Salida</label>
                      <div class="bordeFechas" @click="focus('salida')">
                        <span class>
                          <strong>{{formatedSalida.day}}</strong>
                          <em>{{formatedSalida.month}} {{formatedSalida.year}}</em>
                        </span>
                        <input
                          type="text"
                          name="salida"
                          value="25/10/2019"
                          readonly="readonly"
                          required
                          id="id_salida"
                          class="hasDatepicker"
                        />
                        <input
                          type="text"
                          id="datepickerSalida"
                          v-model="fechaSalida"
                          style="visibility:visible; z-index:-1"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="fechas consulta">
                    <div class="entrada" style="width: 44%;margin-right: 15px;">
                      <label>Ocupación</label>
                     <div @click="elegirocupacion()">
                      <div class="bordeFechas" style="width: 52%;">
                        <span style="padding: 10px 0px 10px 10px; text-align: center;">
                          <strong>{{totaladults}}</strong>
                          <em>adultos</em>
                        </span>
                        <input
                          type="text"
                          name="ocupacion"
                          value="1x2"
                          readonly="readonly"
                          required="required"
                          id="id_ocupacion"
                        />
                      </div>
                      <div class="bordeFechas" style="
    width: 48%;
">
                        <span style="
    text-align: center;padding: 10px 10px 10px 0px;
">
                          <strong>{{totalchild}}</strong>
                          <em>niños</em>
                        </span>
                      </div>
                      </div>
                    </div>
                    <div class="box-check btn-dispo">
                      <button title="¡Comprobar disponibilidad!" class="btn btn-motor btn-consulta" @click.prevent="getdispo()">
                        ¡Comprobar disponibilidad!
                        <span>Mejor Precio Online</span>
                      </button>
                    </div>
                  </div>
                  <!--<div class="consulta">
                    <div class="box-promo">
                      <span class="promocode">
                        ¿Tienes un código promocional?
                        <a
                          title="haz clic aquí"
                          href="javascript:void(0)"
                        >haz clic aquí</a>
                      </span>
                      <span class="codpromo" style="display: none;">
                        <input
                          type="text"
                          name="codpromo"
                          id="id_codpromo"
                          maxlength="50"
                          placeholder="Código promocional"
                        />
                        <em class="fa fa-times cerrar-input"></em>
                      </span>
                    </div>
                    <div class="box-check btn-dispo">
                      <button title="¡Comprobar disponibilidad!" class="btn btn-motor btn-consulta" @click.prevent="getdispo()">
                        ¡Comprobar disponibilidad!
                        <span>Mejor Precio Online</span>
                      </button>
                    </div>
                  </div>-->
                </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!------------------------------------------------------------------------------------------------>
     <div id="wrapper">
        <section id="services" class="services">
            <div class="headerInternas">
                <div class="container">
                    <article>
                        <h2>Servicios VINCCI SELECCIÓN LA PLANTACIÓN DEL SUR</h2>
                        <h3>Servicios Hotel en Costa Adeje</h3>
                        <p class="text">Con la mejor atención personalizada y haciendo honor a su categoría 5 estrellas,
                            los <strong>servicios del Hotel Vincci Selección La Plantación del Sur</strong> no dejarán
                            de sorprenderte: un Nammu Areas Spa spa de 2.500 m² con circuitos termales especiales,
                            restaurante a la carta El Colonial, piscina, restaurante La Jaima, Bar La Biblioteca,
                            amplios espacios para organizar eventos, 5 piscinas, miniclub, animación… Y mucho más.</p>
                    </article>
                </div>
            </div>
            <div class="main-content">
                <div id="carousel_servicios" class="carousel carousel-slide carousel_servicios" data-ride="carousel">
                    <!-- Wrapper for slides -->
                    <div class="carousel-inner" role="listbox">
                        <div class="item big-foto active" title="RESTAURANTE EL COLONIAL"
                            style="background-image:url('images/107fbcb3613493bad1f5680190174484.jpg');">
                            <div class="dark_back">
                                <div class="container">
                                    <h3>RESTAURANTE EL COLONIAL</h3>
                                    <p>Descubre bocado a bocado la mejor cocina canaria creativa de la mano de nuestro
                                        chef. Abierto todos los días. Código de vestimenta: smart casual.</p>
                                </div>
                            </div>
                        </div>
                     <!--   <div class="item  big-foto" title="La Jaima Pool&amp;Snack"
                            style="background-image:url(&#39;/cache/63/a2/63a206f6134125f9fa9fc732c8a09d43.jpg&#39;);">
                            <div class="dark_back">
                                <div class="container">
                                    <h3>La Jaima Pool&amp;Snack</h3>
                                    <p>Disfrute cada noche de un buffet temático y amenizado con música en directo.
                                        Código de Etiqueta: smart casual.
                                        El hotel dispone de Canal +, Canal + Liga y Canal + Champions solo en el bar.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="item  big-foto" title="RESTAURANTE EL MERCADO"
                            style="background-image:url(&#39;/cache/61/18/611880273f2d5b0256202708fe072075.jpg&#39;);">
                            <div class="dark_back">
                                <div class="container">
                                    <h3>RESTAURANTE EL MERCADO</h3>
                                    <p>Restaurante del Hotel Vincci La Plantación del Sur Tenerife - El Mercado
                                        La propuesta más variada para disfrutar de la gastronomía internacional.</p>
                                </div>
                            </div>
                        </div>
                        <div class="item  big-foto " title="ANIMACIÓN"
                            style="background-image:url(&#39;/cache/7a/1d/7a1d099fa8c63ffabe76332395712a7f.jpg&#39;);">
                            <div class="dark_back">
                                <div class="container">
                                    <h3>ANIMACIÓN</h3>
                                    <p>Cada noche podrá disfrutar de música en directo con los mejores atardeceres.</p>
                                </div>
                            </div>
                        </div>
                        <div class="item  big-foto" title="EVENTOS ESPECIALES"
                            style="background-image:url(&#39;/cache/7c/d2/7cd28d619c4b223af10e03e5d8b9b8e8.jpg&#39;);">
                            <div class="dark_back">
                                <div class="container">
                                    <h3>EVENTOS ESPECIALES</h3>
                                    <p>Te brindamos los mejores escenarios para celebrar tu evento en Playa del Duque:
                                        salones, terrazas, jardines… e incluso un club de jazz nocturno.</p>
                                </div>
                            </div>
                        </div>-->
                        <div class="item  big-foto" title="NAMMU AREAS SPA"
                            style="background-image:url('images/f2ff494fe5f314fca1f0c5b7bd165321.jpg');">
                            <div class="dark_back">
                                <div class="container">
                                    <h3>NAMMU AREAS SPA</h3>
                                    <p>Ven a sumergirte en 2.500 m² de bienestar con 3 circuitos termales diferentes,
                                        instalaciones de última generación y profesionales certificados.</p>
                                </div>
                            </div>
                        </div>
                        <div class="item  big-foto" title="GIMNASIO"
                            style="background-image:url('images/55245e58f65b343ad9e712b0a68e5419.jpg');">
                            <div class="dark_back">
                                <div class="container">
                                    <h3>GIMNASIO</h3>
                                    <p>Perfectamente equipado y abierto 24 horas. Podrá contar con nuestro monitor
                                        especializado. Ofrecemos actividades de wellness, yoga, pilates y sesiones
                                        aeróbicas.</p>
                                </div>
                            </div>
                        </div>
                        <div class="item  big-foto" title="PISTAS DEPORTIVAS"
                            style="background-image:url('images/c7bc2dd95ead42150ad0d0b176ae2d4a.jpg');">
                            <div class="dark_back">
                                <div class="container">
                                    <h3>PISTAS DEPORTIVAS</h3>
                                    <p>Dentro del hotel tienes a tu disposición 2 pistas para divertirte jugando a pádel
                                        siempre que lo desees y disfrutar al mismo tiempo de espectaculares vistas.</p>
                                </div>
                            </div>
                        </div>
                        <div class="item  big-foto" title="MINICLUB"
                            style="background-image:url('images/003ad18bdcb51759d5934afbade6b34f.jpg');">
                            <div class="dark_back">
                                <div class="container">
                                    <h3>MINICLUB</h3>
                                    <p>Diversión asegurada para los viajeros más pequeños e intrépidos. Siempre bajo la
                                        atenta mirada de nuestros cuidadores especializados.</p>
                                </div>
                            </div>
                        </div>
                        <div class="item  big-foto" title="LA BIBLIOTECA BAR LOUNGE"
                            style="background-image:url('images/0b32b7f8cffc005bd5fa62ab8ea2f52c.jpg');">
                            <div class="dark_back">
                                <div class="container">
                                    <h3>LA BIBLIOTECA BAR LOUNGE</h3>
                                    <p>Regálate un momento de placer y el aroma del mejor café en un espacio dedicado
                                        especialmente a esos instantes de placidez únicos. Disfrute por la noche de una
                                        animada terraza con nuestros cocktails y combinados.
                                        El hotel dispone de Canal +, Canal + Liga y Canal + Champions solo en el bar.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="item  big-foto" title="PISCINAS"
                            style="background-image:url('images/93a7a6ecff0ea9b5116e23ef7c57753a.jpg');">
                            <div class="dark_back">
                                <div class="container">
                                    <h3>PISCINAS</h3>
                                    <p>Nada más y nada menos que 5 piscinas para disfrutar estas vacaciones: infantil,
                                        para adultos, piscina activa, 2 piscinas climatizadas... En ellas podrá
                                        disfrutar de nuestro servicio de bebidas y snacks.</p>
                                </div>
                            </div>
                        </div>
                        <div class="item  big-foto" title="DESAYUNOS"
                            style="background-image:url('images/2389ffd652fdbbb580fb84dd0b0d0734.jpg');">
                            <div class="dark_back">
                                <div class="container">
                                    <h3>DESAYUNOS</h3>
                                    <p>La forma más completa de comenzar cada día de tus vacaciones, con los mejores
                                        productos frescos y alimentos especiales para las necesidades actuales,
                                        productos para celíacos, sin lactosa, dietéticos…</p>
                                </div>
                            </div>
                        </div>
                    </div><!-- Controls --><a class="left carousel-control"
                        href="https://www.vinccilaplantaciondelsur.com/servicios/#carousel_servicios" role="button"
                        data-slide="prev"><span class="fa fa-angle-left" aria-hidden="true"></span></a><a
                        class="right carousel-control"
                        href="https://www.vinccilaplantaciondelsur.com/servicios/#carousel_servicios" role="button"
                        data-slide="next"><span class="fa fa-angle-right" aria-hidden="true"></span></a>
                </div>
                <div class="container box_top_negativo">
                    <div class="row servicios_wrapp">
                        <div class="col-xs-12 col-sm-6 col-md-4 wrapp_serv visible">
                            <div class="servicio sombra2">
                                <div class="big-foto img_servicio"
                                    style="background-image:url('/images/2135eb5bdb04c158808944c8ff281b37.jpg');"
                                    title="RESTAURANTE EL COLONIAL"></div>
                                <h3>RESTAURANTE EL COLONIAL</h3>
                                <p>Descubre bocado a bocado la mejor cocina canaria creativa de la mano de nuestro chef.
                                    Abierto todos los días. Código de vestimenta: smart casual.</p>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-4 wrapp_serv visible">
                            <div class="servicio sombra2">
                                <div class="big-foto img_servicio"
                                    style="background-image:url('images/935f6ea4c8e734373f96e7fb45fd5f71.jpg');"
                                    title="La Jaima Pool&amp;Snack"></div>
                                <h3>La Jaima Pool&amp;Snack</h3>
                                <p>Disfrute cada noche de un buffet temático y amenizado con música en directo. Código
                                    de Etiqueta: smart casual.
                                    El hotel dispone de Canal +, Canal + Liga y Canal + Champions solo en el bar.</p>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-4 wrapp_serv visible">
                            <div class="servicio sombra2">
                                <div class="big-foto img_servicio"
                                    style="background-image:url('images/2711bd2dccd5e0056930e5cc3ee9772b.jpg');"
                                    title="RESTAURANTE EL MERCADO"></div>
                                <h3>RESTAURANTE EL MERCADO</h3>
                                <p>Restaurante del Hotel Vincci La Plantación del Sur Tenerife - El Mercado
                                    La propuesta más variada para disfrutar de la gastronomía internacional.</p>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-4 wrapp_serv visible">
                            <div class="servicio sombra2">
                                <div class="big-foto img_servicio"
                                    style="background-image:url('images/5412871783d218743f6ca4cfb3aa755d.jpg');"
                                    title="ANIMACIÓN"></div>
                                <h3>ANIMACIÓN</h3>
                                <p>Cada noche podrá disfrutar de música en directo con los mejores atardeceres.</p>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-4 wrapp_serv visible">
                            <div class="servicio sombra2">
                                <div class="big-foto img_servicio"
                                    style="background-image:url('images/f98f8eb04258236c89787b9fdd8657dc.jpg');"
                                    title="EVENTOS ESPECIALES"></div>
                                <h3>EVENTOS ESPECIALES</h3>
                                <p>Te brindamos los mejores escenarios para celebrar tu evento en Playa del Duque:
                                    salones, terrazas, jardines… e incluso un club de jazz nocturno.</p>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-4 wrapp_serv visible">
                            <div class="servicio sombra2">
                                <div class="big-foto img_servicio"
                                    style="background-image:url('images/ee243c35aa1d179930196d53d1778464.jpg');"
                                    title="NAMMU AREAS SPA"></div>
                                <h3>NAMMU AREAS SPA</h3>
                                <p>Ven a sumergirte en 2.500 m² de bienestar con 3 circuitos termales diferentes,
                                    instalaciones de última generación y profesionales certificados.</p>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-4 wrapp_serv oculto" style="display: none;">
                            <div class="servicio sombra2">
                                <div class="big-foto img_servicio"
                                    style="background-image:url(&#39;/cache/ff/95/ff9539791938fd1047de78b9fa35398b.jpg&#39;);"
                                    title="GIMNASIO"></div>
                                <h3>GIMNASIO</h3>
                                <p>Perfectamente equipado y abierto 24 horas. Podrá contar con nuestro monitor
                                    especializado. Ofrecemos actividades de wellness, yoga, pilates y sesiones
                                    aeróbicas.</p>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-4 wrapp_serv oculto" style="display: none;">
                            <div class="servicio sombra2">
                                <div class="big-foto img_servicio"
                                    style="background-image:url(&#39;/cache/64/00/64006a3c2e361eb9a701d132f8663476.jpg&#39;);"
                                    title="PISTAS DEPORTIVAS"></div>
                                <h3>PISTAS DEPORTIVAS</h3>
                                <p>Dentro del hotel tienes a tu disposición 2 pistas para divertirte jugando a pádel
                                    siempre que lo desees y disfrutar al mismo tiempo de espectaculares vistas.</p>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-4 wrapp_serv oculto" style="display: none;">
                            <div class="servicio sombra2">
                                <div class="big-foto img_servicio"
                                    style="background-image:url(&#39;/cache/8c/89/8c894612544debca4af2ab0ec696dc04.jpg&#39;);"
                                    title="MINICLUB"></div>
                                <h3>MINICLUB</h3>
                                <p>Diversión asegurada para los viajeros más pequeños e intrépidos. Siempre bajo la
                                    atenta mirada de nuestros cuidadores especializados.</p>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-4 wrapp_serv oculto" style="display: none;">
                            <div class="servicio sombra2">
                                <div class="big-foto img_servicio"
                                    style="background-image:url(&#39;/cache/3f/51/3f51492e337ea31692247c1a3c1bf539.jpg&#39;);"
                                    title="LA BIBLIOTECA BAR LOUNGE"></div>
                                <h3>LA BIBLIOTECA BAR LOUNGE</h3>
                                <p>Regálate un momento de placer y el aroma del mejor café en un espacio dedicado
                                    especialmente a esos instantes de placidez únicos. Disfrute por la noche de una
                                    animada terraza con nuestros cocktails y combinados.
                                    El hotel dispone de Canal +, Canal + Liga y Canal + Champions solo en el bar.</p>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-4 wrapp_serv oculto" style="display: none;">
                            <div class="servicio sombra2">
                                <div class="big-foto img_servicio"
                                    style="background-image:url(&#39;/cache/1d/8e/1d8eda90289f4bcd7ed4b055a33ce841.jpg&#39;);"
                                    title="PISCINAS"></div>
                                <h3>PISCINAS</h3>
                                <p>Nada más y nada menos que 5 piscinas para disfrutar estas vacaciones: infantil, para
                                    adultos, piscina activa, 2 piscinas climatizadas... En ellas podrá disfrutar de
                                    nuestro servicio de bebidas y snacks.</p>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-4 wrapp_serv oculto" style="display: none;">
                            <div class="servicio sombra2">
                                <div class="big-foto img_servicio"
                                    style="background-image:url(&#39;/cache/28/8e/288e1e80bd084d7fda21d6c294d248a9.jpg&#39;);"
                                    title="DESAYUNOS"></div>
                                <h3>DESAYUNOS</h3>
                                <p>La forma más completa de comenzar cada día de tus vacaciones, con los mejores
                                    productos frescos y alimentos especiales para las necesidades actuales, productos
                                    para celíacos, sin lactosa, dietéticos…</p>
                            </div>
                        </div>
                    </div>
                    <div class="row wrapp_bottom text_center"><a href="javascript:void(0)" class="btn btn-secundario"
                            id="vermas">Cargar más</a></div>
                    <div class="listado_servicios sombra">
                        <ul>
                            <li>Bar</li>
                            <li>Piscina exterior</li>
                            <li>Pistas de padel</li>
                            <li>Luz natural</li>
                            <li>Spa</li>
                            <li>Gimnasio</li>
                            <li>Jardín</li>
                            <li>Snack Bar</li>
                            <li>Miniclub</li>
                            <li>Ascensor</li>
                            <li>Restaurante</li>
                            <li>Consigna de equipajes</li>
                            <li>Desayuno buffet</li>
                            <li>Servicio despertador</li>
                            <li>Actividades</li>
                            <li>Acceso para personas con discapacidad</li>
                            <li>Pistas polideportivas</li>
                            <li>Animación</li>
                            <li>Amenities de baño</li>
                            <li>Parking</li>
                            <li>Limpieza diaria</li>
                            <li>Masajes</li>
                            <li>Cuna</li>
                            <li>Piscina interior</li>
                            <li>Peluquería</li>
                            <li>Aire acondicionado</li>
                            <li>Wifi</li>
                            <li>Hotel no fumadores</li>
                            <li>Código de vestimenta</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <!---------------------------------------------------------------------------------->
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
            <span class="titulo">
              quohotel y
              Noticias
            </span>
            <span class="subtit">
              Nos gusta compartir nuevas ofertas y promociones
              exclusivas
            </span>
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
          <span class="direcion">
            Calle del Roque Nublo, 1, 38670. Costa Adeje, Santa Cruz de Tenerife., Costa
            Adeje
          </span>
          <nav class="enlacesFooter">
            <ul>
              <li>
                <a
                  href="#"
                  title="Política de privacidad"
                  rel="nofollow"
                >Política de privacidad</a>
              </li>
              <li>
                <a
                  href="#"
                  title="Política de cookies"
                  rel="nofollow"
                >Política de cookies</a>
              </li>
              <li>
                <a
                  href="#"
                  title="Directorio Hoteles"
                >Directorio Hoteles</a>
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
                <a
                  href="#"
                  title="quohotel hoteles"
                >quohotel hoteles</a>
              </li>
              <li class>
                <a href="#" title="" target="_Blank" rel="nofollow">
                  by

                </a>
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
                  href="https://serene-kowalevski-d75031.netlify.com"
                  title="Hotel"
                >Hotel</a>
              </li>
              <li class="list-group-item">
                <a
                  target="_blank"
                  href="#"
                  title="Directorio Hoteles"
                >Directorio Hoteles</a>
              </li>
              <li class="list-group-item">
                <a
                  target="_blank"
                  href="#"
                  title="Ofertas"
                >Ofertas</a>
              </li>
              <li class="list-group-item">
                <a
                  target="_blank"
                  href="https://serene-kowalevski-d75031.netlify.com"
                  title="¡Descuento del 20%!"
                >Oferta - ¡Descuento del 20%!</a>
              </li>
              <li class="list-group-item">
                <a
                  target="_blank"
                  href="#"
                  title="Habitaciones"
                >Habitaciones</a>
              </li>
              <li class="list-group-item">
                <a
                  target="_blank"
                  href="#"
                  title="Fotos"
                >Fotos</a>
              </li>
              <li class="list-group-item">
                <a
                  target="_blank"
                  href="#"
                  title="Servicios"
                >Servicios</a>
              </li>
              <li class="list-group-item">
                <a
                  target="_blank"
                  href="#"
                  title="Mapa"
                >Mapa</a>
              </li>
              <li class="list-group-item">
                <a
                  target="_blank"
                  href="#"
                  title="Opiniones"
                >Opiniones</a>
              </li>
              <li class="list-group-item">
                <a
                  target="_blank"
                  href="#"
                  title="Contacto"
                >Contacto</a>
              </li>
              <li class="list-group-item">
                <a
                  target="_blank"
                  href="#"
                  title="Política de cookies"
                >Política de cookies</a>
              </li>
              <li class="list-group-item">
                <a
                  target="_blank"
                  href="#"
                  title="Aviso legal y uso de la página web"
                >Aviso legal y uso de la página web</a>
              </li>
              <li class="list-group-item">
                <a
                  target="_blank"
                  href="#"
                  title="Política de privacidad para las estancias"
                >
                  Política de privacidad para las
                  estancias
                </a>
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
          <div class="loader" style="display: none;">
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
                value="MOWUPRNfHMkRyHT1UrQuXOY4gWW9MCXgYkx0Mn8AftSBHAfhKQIqizyb5x39EBWu"
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
                  <input type="checkbox" name="politica" required id="id_politica" /> He
                  leído y acepto la
                  <a
                    href="#"
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
    <div class="modal fade modal_vcenter" id="modal_ofertafechas">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
            <span class="hotel_nombre">
              quohotel SELECCIÓN LA PLANTACIÓN DEL
              SUR
            </span>
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
                <button class="boton btn btn-motor btn-oferta" title="¡Consulta disponibilidad!">
                  ¡Consulta
                  disponibilidad!
                </button>
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

  <!--  <iframe
      id="ve-storage-iframe"
      tabindex="-1"
      src="/index_files/iframeStorage-5.0.0.html"
      style="display: none;"
    ></iframe>
    <iframe
      id="thn-require-noconflict"
      title="Advertisement Content"
      style="z-index: -1231231; position:absolute; top:0; left:0; height:1px; width:1px; opacity:0; visibility: collapse;"
      aria-live="off"
      class
      src="/index_files/saved_resource.html"
    ></iframe>
    <div id="thn_notes_widget" aria-live="polite"></div>
    <div
      id="eighty_hotel_price_check_widget"
      aria-live="polite"
      style="visibility:hidden;display:block;float:none;margin:0;padding:0;border:0;background-color:transparent;position:fixed;z-index:-100;overflow:hidden;left:30px;bottom:30px"
    >
      <iframe
        scrolling="no"
        frameborder="0"
        allowtransparency="true"
        seamless="seamless"
        style="width:100%;height:100%;background:transparent;border:0"
        title="The Hotels Network - Price comparison widget"
        id="eighty_hotel_price_check_widget_iframe"
        src="/index_files/hotel-price-check-widget.html"
      ></iframe>
    </div>-->
  </div>
</template>

<script>

       

// @ is an alias to /src
/* $(document).ready(function () {







            $.capas();
            $('#monedas').monedas({
                url: "/bookcore/cambio-moneda/",
                moneda_hotel: "EUR"
            });


            Raven.config('https://36b72ed458be4094a34aabec7b78c548@sentry.backhotelengine.com/501', {
                release: "1.956.0",
                tags: {
                    project: "quohotelhoteles",
                    engineVersion: "v4"
                },
                ignoreUrls: [/www\.thehotelsnetwork\.com/, /static\.triptease\.io/, /config1\.veinteractive\.com/],
                ignoreErrors: [
                    'EventHandler'
                ],
                shouldSendCallback: function () {
                    var browser,
                        matches,
                        patterns = {
                            ie: /(?:\b(MS)?IE\s+|\bTrident\/7\.0;.*\s+rv:)(\d+)/,
                            chrome: /Chrome\/(\d+(?:\d+)+)/,
                            firefox: /Firefox\/(\d+(?:\.\d+)+)/,
                            opera: /OPR\/(\d+(?:\d+)+)/,
                            safari: /Version\/(\d+(?:\.\d+)+).*Safari/
                        },
                        browsers = Object.keys(patterns); // Store keys to guarantee that the order is kept

                    for (var i = 0; i < browsers.length; i++) {
                        browser = browsers[i];
                        try {
                            matches = patterns[browser].exec(window.navigator.userAgent);
                        } catch (error) {

                            return false;
                        }
                        if (matches === null) {
                            continue;
                        }
                        switch (browser) {
                            case 'ie':
                                return matches[2] === '11';
                            case 'firefox':
                                return +matches[1] > 38;
                            case 'chrome':
                                return +matches[1] > 48;
                            case 'opera':
                                return +matches[1] > 35;
                            case 'safari':
                                return +matches[1].split('.').shift() > 9;
                            default:
                                continue;
                        }
                    }
                }
            }).install();





            EventHandler.setPriceFormatter(DispoCommons.priceFormatter);
            EventHandler.onload();
            EventHandler.attach();


            RoiEventAnalytics.setUpTrackingEvents();


            $('#ventaja_exclusiva').ventaja_exclusiva();


            DispoCommons.priceFormatter.updateCurrencyConversions('quohotelplantaciondesur')
                .then(function () {
                    $.tarifas({
                        url: '/bookcore/shopping-cart/?lang=es',
                        url_agregar: "/bookcore/shopping-cart/add-room/",
                        lang: 'es',
                        edad_hasta_ninos: 11,
                        edad_nino_tramo1: 11,
                        edad_nino_tramo2: 2,
                        edad_bebes: 1,
                        adulto: "Adulto",
                        adultos: "Adultos",
                        nino: "Niño",
                        ninos: "Niños",
                        bebe: "Bebé",
                        bebes: "Bebés",
                        anyos: "año/s",
                        y: "y",
                        no_multihotel: "Para poder reservar en otro establecimiento es necesario que confirmes o elimines tu selección actual y procedas a realizar otra.",
                        no_disponibilidad: "No se ha encontrado disponibilidad para la(s) habitacion/es solicitadas",
                        max_habs: "Se ha llegado al número máximo de habitaciones permitidas por reserva",
                        no_habitaciones: "No quedan habitaciones",
                        ultima_habitacion: "¡Última habitación!",
                        quedan_x_habitaciones: "Quedan * habitaciones",
                        quedan_habitaciones: "Quedan habitaciones",
                        agencia_no_logeada: "Agencia no logeada",
                        empresas_distintas: "Existe una habitación de una empresa distinta",
                        txt_show_detail: "Ver detalles",
                        txt_hide_detail: "Ocultar detalles",
                        doble_cod_promo: "No se pueden aplicar dos códigos promocionales distintos en el carrito",
                        noches: "1",
                        moneda_hotel: "EUR"
                    });
                    DispoCommons.priceFormatter.findConvertAndFormatPrices();

                    RoiEventAnalytics.trackOnLoadEvents();


                });




            $(document).on('click', '#fhs-titulo', function (event) {
                event.stopImmediatePropagation();
                $('#fhs-desplegable').toggle();
                $('#fhs-titulo').toggleClass('abierto');
            });


            $(document).on('click', "[name='filtro-habs']", function (event) {
                event.stopImmediatePropagation();
                $('#fhs-desplegable').toggle();
                $('#fhs-titulo').toggleClass('abierto');
                $('#fhs-titulo').html($(this).clone().children().remove().end().text());

                var grupo = $(this).data("tipo");
                $(".habitacion").each(function () {
                    var grupos_habitacion = $(this).data("tipo");
                    if (grupo !== undefined) {
                        if (grupos_habitacion.indexOf(grupo) === -1) {
                            $(this).hide();
                        } else {
                            $(this).show();
                        }
                    } else {
                        $(this).show();
                    }
                });
            });

            // Seleccionamos el grupo de habitación pasado por parámetro.
            var grupo_hab_selected = "";

            if (grupo_hab_selected) {
                $("[name='filtro-habs']").filter('[data-tipo=' + grupo_hab_selected + ']').trigger("click");
                if ($('#fhs-titulo').hasClass('abierto')) {
                    $('#fhs-titulo').toggleClass('abierto');
                    $('#fhs-desplegable').toggle();
                };
            };



            var pos_motor = $('#motorform').offset();
            $('html,body').delay(500).animate({ scrollTop: pos_motor.top }, 2000);


            function loader() {
                $('#modalNewsletter').find('.loader').show();
                $('#modalNewsletter').find('.loader').css({
                    "background": "rgb(229,229,229)",
                    "position": "absolute",
                    "width": " 100%",
                    "height": "100%",
                    "top": 0,
                    "z-index": 9,
                    "opacity": ".7",
                });
                $('#modalNewsletter').find('.loader img').css({
                    "position": "absolute",
                    "left": " 43%",
                    "top": "35%",
                    "z-index": 10,
                });

            }
            function IsEmail(email) {
                var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                if (!regex.test(email)) {
                    return false;
                } else {
                    return true;
                }
            }

            function cancelar_suscripcion(email) {
                var data = {
                    'email': email
                }
                $.ajax({
                    type: 'POST',
                    url: "/newsletter_engine/remove-email/",
                    data: data,
                    cache: 'false',
                    error: function (jqXHR, textStatus, errorThrown) {
                        alert(jqXHR.status);
                        alert(textStatus);
                        alert(errorThrown);
                    },
                    beforeSend: function () {

                        loader();
                    },
                    success: function (respuesta) {
                        $('#modalNewsletter').find('.loader').hide();
                        $('#modalNewsletter').find('.modal-body').empty();
                        var response = $.parseJSON(respuesta);
                        var mensaje = '<p>' + response.mensaje + '</p>'
                        $('#modalNewsletter').find('.modal-body').html(mensaje);
                    }
                })

            }

            function envia_ajax(form) {

                var $form = form;

                $('#modalNewsletter').find('form').find('.alert').remove();
                var proceed = true;
                var conf_email = true
                var nombre = document.forms["newletter"]["nombre"].value;
                var apellidos = document.forms["newletter"]["apellidos"].value;
                var email = document.forms["newletter"]["email"].value;
                var email_confirma = document.forms["newletter"]["email_confirma"].value;

                if (nombre == "") {
                    $('input[name=nombre]').css('border', '2px solid red ');
                    proceed = false;
                }
                if (apellidos == "") {
                    $('input[name=apellidos]').css({ 'border': '2px solid red ' });
                    proceed = false;
                }
                if (email == "") {
                    $('input[name=email]').css({ 'border': '2px solid red ' });
                    proceed = false;
                }
                if (IsEmail(email) == false) {
                    proceed = false;
                }
                if (email_confirma == "") {
                    $('input[name=email_confirma]').css({ 'border': '2px solid red ' });
                    proceed = false;
                }
                if (email_confirma != email) {
                    $('input[name=email]').css({ 'border': '2px solid red ' });
                    $('input[name=email_confirma]').css({ 'border': '2px solid red ' });
                    proceed = false;
                    conf_email = false
                }
                if (conf_email == false) {
                    $('#modalNewsletter').find('form').append("<div class='alert alert-danger' role='alert'>La dirección de email debe coincidir</div>");

                    setTimeout(function () {
                        $('.alert').fadeOut(400, function () {
                            $('#modalNewsletter').find('form').find('input').css('border', 'none');
                            $(this).remove();
                        })
                            ;
                    }, 10000
                    );
                }

                if ($('#modalNewsletter').find('input[name=politica]').prop("checked") == false) {
                    $('li.pol').css({ 'border': '2px solid red ' });
                    proceed = false;
                }

                if (proceed == false) {
                    $('#modalNewsletter').find('form').append("<div class='alert alert-danger' role='alert'>Estos campos son requeridos</div>");

                    setTimeout(function () {
                        $('.alert').fadeOut(400, function () {
                            $('#modalNewsletter').find('form').find('input').css('border', 'none');
                            $('li.pol').css({ 'border': 'none' });
                            $(this).remove();
                        })
                            ;
                    }, 10000
                    );
                }
                if (proceed == true) {
                    $.ajax({
                        type: 'POST',
                        url: "/newsletter_send/",
                        data: $form.serialize(),
                        dataType: 'html',
                        cache: 'false',
                        error: function (jqXHR, textStatus, errorThrown) {
                            alert(jqXHR.status);
                            alert(textStatus);
                            alert(errorThrown);
                        },
                        beforeSend: function () {

                            loader();
                        },
                        success: function (respuesta) {
                            $('#modalNewsletter').find('.loader').hide();
                            var resp = $.parseHTML(respuesta);
                            var mail_error = $(resp).find('.error');
                            if (mail_error.length == 1) {
                                $('#modalNewsletter').find('input[name=email]').after(mail_error);
                                $('#modalNewsletter').find('input[name=email]').removeAttr("value");
                                $('#modalNewsletter').find('input[name=email_confirma]').removeAttr("value");
                                envia_ajax($('#modalNewsletter').find('form'));
                            } else {
                                $('#modalNewsletter').find('.modal-body').empty();
                                var response = $.parseJSON(respuesta);
                                var mensaje = '<p>' + response.mensaje + '</p>'
                                $('#modalNewsletter').find('.modal-body').html(mensaje);
                                if (response.solicita_cancelar) {
                                    var btn_cancelar = $('<button/>', {
                                        text: 'Cancelar suscripción',
                                        class: 'btn-secundario',
                                        click: function () { cancelar_suscripcion(response.email); }
                                    });

                                    var btn_aceptar = $('<button/>', {
                                        text: 'Aceptar',
                                        class: 'btn-secundario',
                                        click: function () { $('#modalNewsletter').modal('hide'); }
                                    });

                                    var body_modal = $('#modalNewsletter').find('.modal-body')
                                    $(body_modal).find('p').after(btn_cancelar)
                                    $(body_modal).find('p').after(btn_aceptar)
                                }


                            }
                            $('#modalNewsletter').find('.cerrar_txt').remove();
                            $('#modalNewsletter').find('.cerrar').remove();
                            $('#modalNewsletter').find('.sercot').remove();
                            $('#modalNewsletter').find('.descrip').remove();


                        }
                    });
                }
            }

            $('#modalNewsletter').find('.loader').hide();
            $('#modalNewsletter').find('#newletter').bind('submit', function (event) {
                event.preventDefault(event);
                envia_ajax($(this));
            });


            $('.news').newsletter({ msg_no: "Debes introducir un correo electrónico válido" });

            $('.mireserva').carritotop({ url: '/bookcore/shopping-cart/top/' });
            $('#motorform').bc_motorform({
                meses: 'Ene@Feb@Mar@Abr@May@Jun@Jul@Ago@Sep@Oct@Nov@Dic'
            });

        });

        $('[data-toggle="tooltip"]').tooltip({ 'placement': 'top' });
        var nav = $('#motorInternas');
        if (!$("body").hasClass("nofollow")) {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 170 && $(this).width() > 990) {
                    nav.addClass("motor_seccion_fijo");
                } else {
                    nav.removeClass("motor_seccion_fijo");
                }
            });
        }
        $('.toggle-menu').jPushMenu();

        $('#id_destino').attr('placeholder', 'Selecciona un hotel');
        $('#id_codpromo').attr('placeholder', 'Código promocional');

        $(".bg_fix").each(function () {
            bg = $(this).find("img").eq(0).attr("src");
            $(this).css("backgroundImage", "url(" + bg + ")");
            $(this).find("img").eq(0).remove();
        });
        $('.iclic').click(function () {
            $('.cerrar-input').css('display', 'block');
        });
        $('.promocode a').click(function () {
            $('.promocode').css('display', 'none');
            $('.codpromo').css('display', 'block');
        });

        $('.cerrar-input').click(function () {
            $('.codpromo').css('display', 'none');
            $('.promocode').css('display', 'block');
        });
        $('#ocultar').click(function () {
            $('#capa_aleatoria').animate({ bottom: '-200px' }, 1500);
        });
        $('#pnewsform form').innerHTML = '';

        $('.dropdown-toggle').dropdown();
        // CAMBIAR TIPO DE CAMPOS EN DISPOSITIVOS MOVILES
        function readCookie(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        }

        function createCookie(name, value, days) {
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                var expires = "; expires=" + date.toGMTString();
            }
            else var expires = "";

            name = name;
            document.cookie = name + "=" + value + "; expires=" + expires + "; path=/";
        }
*/

/****************************** */
const langfile = require("@/assets/lang/content.json");
//import axios from "axios";
   import $ from 'jquery';
import datepickerFactory from 'jquery-datepicker';
import datepickerJAFactory from 'jquery-datepicker/i18n/jquery.ui.datepicker-es';
 
// Just pass your jquery instance and you're done
datepickerFactory($);
datepickerJAFactory($);

export default {
  name: "servicios",
  data: function() {
    return {
      totaladults:this.$route.query.totaladults,
      totalchild:this.$route.query.totalchild,
      fechaEntrada:"",
      fechaSalida:"",
      entrada:this.$route.query.entrada,
      salida:this.$route.query.salida,
      multilanguage: langfile.multilanguage,
      detalles: null,
      language: "es",
      coupon: null,
      rates: null,
      currency: null,
      allrooms: false,
      componentKey:0,
      cart:[]
    };
  },
  computed:{
    formatedEntrada:function () {
      if(this.$data.entrada){
     var month =this.$data.entrada.substr(4, 2)
      var day = this.$data.entrada.substr(6, 2)
      var year = this.$data.entrada.substr(0, 4)
      
return { "day":parseInt(day),"month":this.getFormMonth(month),"year":year}
  }else{
        return ""
      }
     
    },
    formatedSalida:function () {
      if(this.$data.salida){
       var month =this.$data.salida.substr(4, 2)
      var day = this.$data.salida.substr(6, 2)
      var year = this.$data.salida.substr(0, 4)
      
return { "day":parseInt(day),"month":this.getFormMonth(month),"year":year}
      }else{
        return ""
      }
    },
    total: function () {
      
      if (this.$data.cart && this.$data.cart.length > 0){
          var tot = 0;
       for (var i = 0; i < this.$data.cart.length; i++) {
              if(this.$data.cart[i]){
              tot = tot + this.$data.cart[i].price.retailPrice.value;}
            }
       
      }return Math.round(tot * 100) / 100;
    
    }
  },
  methods: {
      getnumdate(fecha) {
      var datearray = fecha.split("/");
      var day = "" + datearray[0];
      var month = "" + datearray[1];
      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;
      return datearray[2] + "" + month + "" + day;
    },
     getdispo() {
      var dde = this.getnumdate(this.$data.fechaEntrada);
      var dds = this.getnumdate(this.$data.fechaSalida);

      this.$router.push({
        name: "Disponibilidad",
        query: {
          entrada: dde,
          salida: dds,
          ocupacion: this.$data.ocupacion,
          totaladults: this.$data.totaladults,
          totalchild: this.$data.totalchild
        }
      });
    },
    calculatetotal: function() {
       var s;
        for (var o in this.$data.ocupaciones) {
          if (s) s += ",";
          else s = "";
          s += 1;
          s += "x";
          s +=
            parseInt(this.$data.ocupaciones[o].adult) +
            parseInt(this.$data.ocupaciones[o].children);
          if (
            this.$data.ocupaciones[o].children != null &&
            this.$data.ocupaciones[o].children > 0
          ) {
            s += "-";
            var firstIteration = true;
            for (var i = 0; i < this.$data.ocupaciones[o].children; i++) {
              if (!firstIteration) {
                s += "-";
              }
              s += this.$data.ocupaciones[o].edades[i] ? this.$data.ocupaciones[o].edades[i] : 11;
              firstIteration = false;
            }
          }
        }
        this.$data.ocupacion = s;
      this.$data.totaladults = 0;
      this.$data.totalchild = 0;
      for (var j = 0; j < this.$data.ocupaciones.length; j++) {
        console.log("oc");
        console.log(this.$data.ocupaciones[j].adult);
        console.log(this.$data.ocupaciones[j].children);
        this.$data.totaladults =
          this.$data.totaladults + parseInt(this.$data.ocupaciones[j].adult);
        this.$data.totalchild =
          this.$data.totalchild + parseInt(this.$data.ocupaciones[j].children);
      }
      this.closemodal()
    },
     closemodal: function() {
        this.$data.viewoccupation=false
    },
    elegirocupacion: function() {
      
     this.$data.viewoccupation=true
  
    },
    borrarocupacion: function(index) {
      if (this.$data.ocupaciones.length > 1)
        this.$data.ocupaciones.splice(index, 1);
    },
    anadirocupacion: function() {
      this.$data.ocupaciones.push({ adult: 2, children: 0, edades: [] });

      //  M.updateTextFields()
    },
     focus: function(tt){
      if(tt === "entrada"){
        var entrada =  document.getElementById( "datepickerEntrada" );
        entrada.focus();
      }else{
        var salida =  document.getElementById( "datepickerSalida" );
          salida.focus();
      }
      
      
    },
      getFormMonth(m){
        switch(m){
          case "1":
            return "ENE";
            case "2":
            return "FEB";
            case "3":
            return "MAR";
            case "4":
            return "ABR";
            case "5":
            return "MAY";
            case "6":
            return "JUN";
            case "7":
            return "JUL";
            case "8":
            return "AGO";
            case "9":
            return "SEP";

            case "10":
            return "OCT";
            
            case "11":
            return "NOV";
            
            case "12":
            return "DIC";
            
        }
    },
    viewDetails(index){
        console.log(index)
    },
    
    borrar(index) {
      this.$data.cart.splice(index,1)
    },
     formatDate: function(date) {
      
      var month =date.substr(4, 2)
      var day = date.substr(6, 2)
      var year = date.substr(0, 4)

     
var fdat = [day, month, year].join("/");
      return fdat;
    },
    confirm() {
    //  if (this.$data.allrooms) {
        var s;
        for (var z in this.$data.rates.rates) {
          if(this.$data.rates.rates[z].seleccionado !== undefined){

          
          if (s) s += ",";
          else s = "";
          s += this.$data.rates.rates[z].seleccionado;
        
          
          localStorage.setItem('ccrx_cart', JSON.stringify( this.$data.cart))
          }
        }
        this.$router.push({
          name: "Confirmation",
          query: {
            ratekeys: s,
             //cart: this.$data.cart,
            //  hotelid: this.$route.query.hotelid,
            //  hotelname: this.$route.query.hotelname,
            //  category:  this.$route.query.category,
            //  stars: this.$route.query.stars,
            //  keys: this.$route.query.keys,
            //  address: this.$route.query.address,
            salida: this.$data.salida,
            entrada: this.$data.entrada,
            ocupacion: this.$route.query.ocupacion
            //  iddestino: this.$route.query.iddestino,
            //  destino: this.$route.query.destino
          }
        });
     // }
    },
    forceRerender() {
      this.componentKey += 1;  
    },
    addRoom(pax,option, price,index) {
      console.log(option + index)
      this.$set(this.cart, index, {
        ocupation: pax,
        roomName: option.roomName,
        price: price
      })
      console.log(this.$data.cart)
    },
  
  },
 /*mounted() {
     var d = this.$data
    
        $( "#datepickerEntrada" ).datepicker(
        {
          onSelect: function() { 
           var   dateObject = $(this).datepicker('getDate') 
           // $( "#datepicker" ).attr( 'value', dateObject.getDate().toString() + '/'+ dateObject.getMonth().toString()+ '/'+ dateObject.getFullYear().toString()  )
            d.fechaEntrada = dateObject.getDate().toString() + '/'+ (dateObject.getMonth() + 1).toString()+ '/'+ dateObject.getFullYear().toString()  
            }
        });
         $( "#datepickerSalida" ).datepicker(
        {
          onSelect: function() { 
           var   dateObject = $(this).datepicker('getDate') 
           // $( "#datepicker" ).attr( 'value', dateObject.getDate().toString() + '/'+ dateObject.getMonth().toString()+ '/'+ dateObject.getFullYear().toString()  )
            d.fechaSalida = dateObject.getDate().toString() + '/'+ (dateObject.getMonth() + 1).toString()+ '/'+ dateObject.getFullYear().toString()  
            }
        });

      
      $.datepicker.regional['es'] = {
		closeText: 'Cerrar',
		prevText: '&#x3C;Ant',
		nextText: 'Sig&#x3E;',
		currentText: 'Hoy',
		monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio',
		'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
		monthNamesShort: ['Ene','Feb','Mar','Abr','May','Jun',
		'Jul','Ago','Sep','Oct','Nov','Dic'],
		dayNames: ['Domingo','Lunes','Martes','MiÃ©rcoles','Jueves','Viernes','SÃ¡bado'],
		dayNamesShort: ['Dom','Lun','Mar','MiÃ©','Juv','Vie','SÃ¡b'],
		dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','SÃ¡'],
		weekHeader: 'Sm',
		dateFormat: 'dd/mm/yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['es']);

    //this.getInfo();
  }*/
};
</script>
<style scoped>
.rooms .listado_habitaciones .habitacion{
  width:100%;
}
.rb_bc .roi-booking-cart__room-wrapper-title {
  background-color: #ffa300;
  color: #f8f8f8;
}
.rb_bc .roi-booking-cart__room-wrapper-title {
  background-color: #ffa300;
  color: #f8f8f8;
}
.rb_bc .roi-booking-cart__room-wrapper-title {
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  padding: 5px 15px;
  text-transform: uppercase;
}

header .header-top {
  display: block;
}
</style>