import React, { useState } from 'react';

/**
 * PALETA EDITORIAL RECINTO® MONOCROMO PURA
 */
const PALETA = {
  beigeClaro: '#111111', // Negro mate puro principal de fondo
  beigeOscuro: '#1c1c1a', // Negro secundario sutil para el índice y footer
  textoOscDark: '#f4f4f2', // Blanco roto premium para textos y títulos principales
  terracota: '#ffffff', // Blanco puro de alto contraste para acciones y hovers
  oliva: '#aaaaaa', // Gris ceniza desgastado para minutos y estados pasivos
  blanco: '#ffffff',
};

/**
 * 📸 MAPEO DE FOTOS (Carpeta public con tus extensiones .jpg)
 */
const FOTOS_RECINTO = {
  homeEspacio: '/logo.jpg',
  homeOficio: '/resenas.jpg',

  servicioFade: '/corte-fade.jpg',
  servicioCombo: '/corte-rizado.jpg',
  servicioBarba: '/barba-silla.jpg',
  servicioAfeitado: '/grabando-corte.jpg',

  nosotrosManifiesto: '/lavacabezas.jpg',
  nosotrosCultura: '/barberia-bn.jpg',

  contactoFachada: '/fachada-recinto.jpg',
};

function EstilosAnimacion() {
  return (
    <style>{`
      @keyframes fadeRelajado {
        from { opacity: 0; transform: translateY(4px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      @keyframes parpadeoSuave {
        0% { opacity: 1; }
        50% { opacity: 0.25; }
        100% { opacity: 1; }
      }
      
      /* ANIMACIÓN ORGÁNICA: Movimiento sutil para la niebla de fondo */
      @keyframes balanceoHumo {
        0% { transform: translate(0, 0) scale(1); opacity: 0.4; }
        50% { transform: translate(40px, -20px) scale(1.1); opacity: 0.6; }
        100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
      }

      .animacion-recinto {
        animation: fadeRelajado 1.4s cubic-bezier(0.2, 1, 0.3, 1) forwards;
      }

      .status-parpadeo {
        animation: parpadeoSuave 2.5s ease-in-out infinite;
      }
      
      /* CAPA DE TEXTURA DE GRANO FOTOGRÁFICO ANALÓGICO */
      .capa-grano-analogico {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 9999;
        pointer-events: none;
        opacity: 0.04;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
      }

      /* 🎯 ESTILOS INTERACTIVOS PARA EL BOTÓN PRINCIPAL (CTA) */
      .boton-principal-cta {
        background-color: transparent;
        color: ${PALETA.textoOscDark};
        border: 1px solid ${PALETA.textoOscDark};
        padding: 20px 54px;
        fontSize: 12px;
        font-weight: 700;
        letter-spacing: 4px;
        text-transform: uppercase;
        cursor: pointer;
        /* Transición suavizada por aceleración de hardware */
        transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        will-change: transform, background-color, color;
      }

      /* Efecto Espejo al pasar el cursor encima */
      .boton-principal-cta:hover {
        background-color: ${PALETA.textoOscDark} !important;
        color: ${PALETA.beigeClaro} !important;
        transform: translateY(-2px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
      }

      /* Respuesta física elástica al hacer clic/pulsar con el dedo */
      .boton-principal-cta:active {
        transform: translateY(0) scale(0.97) !important;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
      }

      body { 
        background-color: ${PALETA.beigeClaro}; 
        margin: 0; 
        overflow-x: hidden;
      }

      /* FILTRO MONOCROMO PARA EMOJIS */
      .emoji-monocromo {
        filter: grayscale(100%) brightness(80%);
        margin-right: 10px;
        display: inline-block;
      }

      /* 📱 RESPONSIVE SYSTEM */
      @media (max-width: 768px) {
        .contenedor-indice-superior {
          padding: 25px 5px 40px 5px !important;
          clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
        }
        .menu-navegacion {
          flex-direction: row !important;
          justify-content: center !important;
          padding: 0 !important;
        }
        .logo-indice-superior {
          display: none !important;
        }
        .menu-navegacion-links {
          gap: 2px !important;
          width: 100% !important;
          justify-content: center !important;
        }
        .menu-navegacion-links button {
          padding: 8px 8px !important;
          font-size: 11px !important;
          letter-spacing: 1px !important;
        }
        .header-principal {
          padding: 60px 16px 40px 16px !important;
        }
        .header-principal h1 {
          font-size: 38px !important;
          letter-spacing: 6px !important;
          margin-bottom: 12px !important;
          margin-right: -6px !important;
          white-space: nowrap !important;
        }
        .header-principal h2 {
          font-size: 10px !important;
          letter-spacing: 2px !important;
          margin: 0 0 35px 0 !important;
        }
        .header-principal p {
          font-size: 18px !important;
          line-height: 1.5 !important;
          margin-bottom: 40px !important;
        }
        .boton-principal-cta {
          width: 100% !important;
          max-width: 260px !important;
          padding: 18px 10px !important;
        }
        .lema-inferior {
          margin-top: 50px !important;
          font-size: 9px !important;
          letter-spacing: 3px !important;
        }
        
        /* MÓVIL: Forzamos el cambio a los gradientes atenuados y el blur elástico */
        .linea-humo-fill {
          fill: url(#nieblaSuaveMovil) !important;
          filter: blur(90px) !important;
        }
        .svg-grafico-trazo {
          display: none !important;
        }
        
        /* LISTA SERVICIOS MÓVIL */
        .seccion-servicios-contenedor {
          padding: 40px 20px !important;
        }
        .subtitulo-reserva-linea {
          font-size: 11px !important;
          letter-spacing: 0.5px !important;
          gap: 4px !important;
          white-space: nowrap !important;
        }
        .fila-servicio-editorial {
          padding: 20px 0 !important;
          gap: 15px !important;
        }
        .editorial-imagen-wrapper {
          width: 65px !important;
          height: 65px !important;
          flex: 0 0 65px !important;
          background-color: ${PALETA.beigeOscuro} !important;
        }
        .editorial-texto-bloque h3 {
          font-size: 15px !important;
        }
        .editorial-precio {
          font-size: 18px !important;
        }

        /* NOSOTROS MÓVIL */
        .seccion-nosotros-contenedor {
          padding: 40px 16px !important;
          box-sizing: border-box !important;
        }
        .bloque-nosotros-impar, .bloque-nosotros-par {
          width: 100% !important;
          margin: 0 0 80px 0 !important;
          padding: 0 !important;
          box-sizing: border-box !important;
        }
        .bloque-visual-contenedor {
          flex-direction: column !important;
          gap: 25px !important;
          width: 100% !important;
          box-sizing: border-box !important;
        }
        .bloque-visual-imagen {
          height: 280px !important;
          width: 100% !important;
          flex: 1 1 100% !important;
          padding: 0 !important;
          box-sizing: border-box !important;
        }
        .bloque-visual-texto-contenedor {
          width: 100% !important;
          padding: 0 5px !important;
          box-sizing: border-box !important;
        }
        
        /* CONTACTO MÓVIL */
        .contenedor-coordenadas-fila {
          display: block !important;
          width: 100% !important;
        }
        .bloque-contacto-info {
          width: 100% !important;
          max-width: 100% !important;
          margin: 0 0 35px 0 !important;
        }
        .contenedor-mapa-interactivo {
          width: 100% !important;
          max-width: 100% !important;
          height: 220px !important;
          margin: 0 auto !important;
        }
        .bloque-disponibilidad-contenedor {
          width: 100% !important;
          margin: 50px auto 0 auto !important;
        }
        .contacto-imagen-contenedor {
          height: 250px !important;
          margin-bottom: 40px !important;
        }
        .contenedor-footer-bloque {
          clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 100%) !important;
          padding-top: 65px !important;
        }
      }
    `}</style>
  );
}

function BloqueVisual({
  imagen,
  etiqueta,
  frase,
  descripcion,
  inverso,
  esFachada,
  claseAsimetrica,
}) {
  return (
    <div
      className={`bloque-visual-contenedor ${claseAsimetrica || ''}`}
      style={{
        display: 'flex',
        flexDirection: inverso ? 'row-reverse' : 'row',
        flexWrap: 'wrap',
        gap: '60px',
        alignItems: 'center',
        marginBottom: '140px',
        textAlign: 'left',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <div
        className="bloque-visual-imagen"
        style={{
          flex: '1 1 400px',
          height: '500px',
          backgroundColor: PALETA.beigeOscuro,
          padding: '15px',
          boxShadow: '0 15px 40px rgba(0,0,0,0.5)',
          boxSizing: 'border-box',
        }}
      >
        <img
          src={imagen}
          alt={etiqueta}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: esFachada ? 'top center' : 'center center',
          }}
          onError={(e) => {
            e.target.style.backgroundColor = PALETA.beigeOscuro;
          }}
        />
      </div>
      <div
        className="bloque-visual-texto-contenedor"
        style={{ flex: '1 1 300px', boxSizing: 'border-box' }}
      >
        <span
          style={{
            fontSize: '11px',
            fontWeight: '800',
            color: PALETA.oliva,
            letterSpacing: '4px',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '20px',
          }}
        >
          {etiqueta}
        </span>
        <h3
          style={{
            fontSize: '32px',
            fontWeight: '900',
            color: PALETA.textoOscDark,
            lineHeight: '1.2',
            margin: '0 0 25px 0',
            textTransform: 'uppercase',
          }}
        >
          "{frase}"
        </h3>
        <p
          style={{
            color: PALETA.oliva,
            fontSize: '16px',
            lineHeight: '1.9',
            fontWeight: '500',
          }}
        >
          {descripcion}
        </p>
      </div>
    </div>
  );
}

function FilaServicioEditorial({
  nombre,
  precio,
  duracion,
  imagen,
  msgWhatsapp,
}) {
  const [hover, setHover] = useState(false);
  const urlTriangle = `https://wa.me/34603166018?text=${encodeURIComponent(
    msgWhatsapp
  )}`;

  return (
    <a
      href={urlTriangle}
      target="_blank"
      rel="noopener noreferrer"
      className="fila-servicio-editorial"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '35px 0',
        borderBottom: `1px solid rgba(244, 244, 242, 0.15)`,
        width: '100%',
        transition: 'all 0.4s ease',
        cursor: 'pointer',
        gap: '40px',
        boxSizing: 'border-box',
        textDecoration: 'none',
        color: 'inherit',
      }}
    >
      <div
        className="editorial-imagen-wrapper"
        style={{
          width: '90px',
          height: '90px',
          backgroundColor: PALETA.beigeOscuro,
          overflow: 'hidden',
          flex: '0 0 90px',
          transform: hover ? 'scale(1.04)' : 'scale(1)',
          transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <img
          src={imagen}
          alt={nombre}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onError={(e) => {
            e.target.style.backgroundColor = PALETA.beigeOscuro;
          }}
        />
      </div>

      <div
        className="editorial-texto-bloque"
        style={{ flex: 1, textAlign: 'left' }}
      >
        <h3
          style={{
            fontSize: '20px',
            fontWeight: '800',
            color: hover ? PALETA.terracota : PALETA.textoOscDark,
            margin: '0 0 6px 0',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            transition: 'color 0.3s ease',
          }}
        >
          {nombre}
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <span
            style={{
              fontSize: '11px',
              color: PALETA.oliva,
              fontWeight: '600',
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
            }}
          >
            ⏳ ~ {duracion} min
          </span>
          <span
            style={{
              fontSize: '11px',
              color: hover ? PALETA.terracota : PALETA.oliva,
              fontWeight: '700',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              transition: 'color 0.3s ease',
            }}
          >
            → clicka aqui para reservar por whatsapp
          </span>
        </div>
      </div>

      <div
        className="editorial-precio"
        style={{
          fontSize: '26px',
          fontWeight: '900',
          color: hover ? PALETA.terracota : PALETA.textoOscDark,
          letterSpacing: '1px',
          transition: 'color 0.3s ease',
        }}
      >
        {precio}€
      </div>
    </a>
  );
}

function BotonMenu({ text, activo, onClick }) {
  const [hover, setHover] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontSize: '12px',
        fontWeight: '700',
        letterSpacing: '3px',
        textTransform: 'uppercase',
        padding: '10px 15px',
        color: activo
          ? PALETA.terracota
          : hover
          ? PALETA.textoOscDark
          : PALETA.oliva,
        transition: 'color 0.5s',
      }}
    >
      {text}
    </button>
  );
}

const VistaInicio = ({ setPaginaActual }) => {
  return (
    <div className="animacion-recinto" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '60vh', width: '100%', boxSizing: 'border-box' }}>
      <header className="header-principal" style={{ padding: '100px 40px 100px 40px', maxWidth: '800px', margin: '0 auto', textAlign: 'center', width: '100%', boxSizing: 'border-box' }}>
        <h1 style={{ fontSize: '76px', fontWeight: '900', letterSpacing: '16px', marginRight: '-16px', color: PALETA.textoOscDark, marginBottom: '10px', lineHeight: '1' }}>
          RECINTO<sup style={{ fontSize: '24px', verticalAlign: 'super', fontWeight: '500', marginLeft: '2px' }}>®</sup>
        </h1>
        <h2 style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '6px', color: PALETA.oliva, textTransform: 'uppercase', margin: '0 0 60px 0' }}>
          Grooming Studio — Daniel Barber
        </h2>
        
        {/* 🎯 FRASE ACTUALIZADA */}
        <p style={{ color: PALETA.textoOscDark, fontSize: '26px', fontWeight: '800', lineHeight: '1.4', textTransform: 'uppercase', margin: '15px 0 60px 0', letterSpacing: '1px' }}>
          "TAKE YOUR TIME."
        </p>

        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <button
            className="boton-principal-cta"
            onClick={() => setPaginaActual('servicios')}
          >
            RESERVAR SERVICIO
          </button>
        </div>
        <div className="lema-inferior" style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '6px', color: PALETA.oliva, textTransform: 'uppercase', borderTop: `1px solid rgba(244, 244, 242, 0.15)`, paddingTop: '35px', maxWidth: '450px', margin: '100px auto 0 auto' }}>
          EXCELENCIA • TRADICIÓN • IDENTIDAD
        </div>
      </header>
    </div>
  );
};

const VistaServices = () => {
  return (
    <section
      className="animacion-recinto seccion-servicios-contenedor"
      style={{
        padding: '80px 40px',
        maxWidth: '800px',
        margin: '0 auto',
        boxSizing: 'border-box',
      }}
    >
      <header
        className="price-list-header"
        style={{ textAlign: 'center', marginBottom: '60px' }}
      >
        <h2
          style={{
            fontSize: '32px',
            fontWeight: '900',
            letterSpacing: '4px',
            textTransform: 'uppercase',
            color: PALETA.textoOscDark,
            margin: '0 0 25px 0',
          }}
        >
          Price List
        </h2>

        <div
          className="subtitulo-reserva-linea"
          style={{
            fontSize: '12px',
            fontWeight: '700',
            color: PALETA.oliva,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            margin: '0 auto 25px auto',
            maxWidth: '100%',
            display: 'flex',
            justifyContent: 'center',
            gap: '6px',
            alignItems: 'center',
          }}
        >
          <span>↓</span>
          <span style={{ textAlign: 'center' }}>
            Escoge tu servicio y reserva aqui
          </span>
          <span>↓</span>
        </div>
      </header>

      <div
        style={{
          width: '100%',
          marginTop: '40px',
          borderTop: `1px solid rgba(244, 244, 242, 0.2)`,
        }}
      >
        <FilaServicioEditorial
          nombre="Fade / Haircut"
          precio={16}
          duracion={35}
          imagen={FOTOS_RECINTO.servicioFade}
          msgWhatsapp="Hola quiero reservar un corte en recinto"
        />
        <FilaServicioEditorial
          nombre="Fade + Beard"
          precio={21}
          duracion={45}
          imagen={FOTOS_RECINTO.servicioCombo}
          msgWhatsapp="Hola quiero reservar corte y barba en recinto"
        />
        <FilaServicioEditorial
          nombre="Beard Trim"
          precio={12}
          duracion={15}
          imagen={FOTOS_RECINTO.servicioBarba}
          msgWhatsapp="Hola quiero reservar para barba en recinto"
        />
        <FilaServicioEditorial
          nombre="Traditional Shave"
          precio={20}
          duracion={25}
          imagen={FOTOS_RECINTO.servicioAfeitado}
          msgWhatsapp="Hola quiero reservar un afeitado tradicional en recinto"
        />
      </div>
    </section>
  );
};

const VistaNosotros = () => (
  <section
    className="animacion-recinto seccion-nosotros-contenedor"
    style={{
      padding: '60px 20px',
      maxWidth: '900px',
      margin: '0 auto',
      boxSizing: 'border-box',
    }}
  >
    <BloqueVisual
      imagen={FOTOS_RECINTO.contactoFachada}
      etiqueta="01 / El Espacio"
      frase="Silencio Visual en La Saïdia"
      descripcion="Un refugio minimalista diseñado para que tu momento sea lo único importante. Sin ruidos, sin distracciones."
      inverso={false}
      esFachada={true}
      claseAsimetrica="bloque-nosotros-impar"
    />
    <BloqueVisual
      imagen={FOTOS_RECINTO.homeOficio}
      etiqueta="02 / El Oficio"
      frase="Técnica Pura a Precio Real"
      descripcion="Entendemos el cabello desde la arquitectura. Cada degradado es una pieza de precisión artesanal: un servicio premium con tarifas honestas y transparentes para el barrio."
      inverso={true}
      claseAsimetrica="bloque-nosotros-par"
    />
    <BloqueVisual
      imagen={FOTOS_RECINTO.nosotrosManifiesto}
      etiqueta="03 / El Manifiesto"
      frase="No somos una fábrica. Somos un refugio."
      descripcion="RECINTO® nació contra la masificación. Recuperamos el valor de la conversación y el tacto de la navaja clásica."
      inverso={false}
      claseAsimetrica="bloque-nosotros-impar"
    />
    <BloqueVisual
      imagen={FOTOS_RECINTO.nosotrosCultura}
      etiqueta="04 / La Cultura"
      frase="Influencia Urbana y Clásica"
      descripcion="Barbería clásica bajada al ritmo del asfalto de Valencia. Exclusivo para quienes aprecian lo bien hecho."
      inverso={true}
      claseAsimetrica="bloque-nosotros-par"
    />
  </section>
);

const VistaContacto = () => {
  const urlWhatsappContacto =
    'https://wa.me/34603166018?text=Quiero%20reservar%20en%20Recinto';

  const comprobarDisponibilidad = () => {
    const ahora = new Date();
    const dia = ahora.getDay();
    const horaActual = ahora.getHours();
    const minutosActuales = ahora.getMinutes();
    const tiempoEnMinutos = horaActual * 60 + minutosActuales;

    if (dia >= 1 && dia <= 5) {
      return (
        (tiempoEnMinutos >= 540 && tiempoEnMinutos <= 840) ||
        (tiempoEnMinutos >= 960 && tiempoEnMinutos <= 1200)
      );
    } else if (dia === 6) {
      return tiempoEnMinutos >= 540 && tiempoEnMinutos <= 900;
    }
    return false;
  };

  const estaAbierto = comprobarDisponibilidad();

  return (
    <section
      className="animacion-recinto"
      style={{
        padding: '80px 20px',
        maxWidth: '950px',
        margin: '0 auto',
        boxSizing: 'border-box',
      }}
    >
      <div
        className="contacto-imagen-contenedor"
        style={{
          width: '100%',
          height: '420px',
          backgroundColor: PALETA.beigeOscuro,
          padding: '15px',
          marginBottom: '60px',
          marginLeft: 'auto',
          marginRight: 'auto',
          boxSizing: 'border-box',
        }}
      >
        <img
          src={FOTOS_RECINTO.homeEspacio}
          alt="Fachada e Interior de Recinto"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div style={{ width: '100%', boxSizing: 'border-box' }}>
        <div
          className="contenedor-coordenadas-fila"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '60px',
            marginBottom: '60px',
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          <div
            className="bloque-contacto-info"
            style={{
              flex: '1 1 300px',
              textAlign: 'left',
              boxSizing: 'border-box',
            }}
          >
            <h3
              style={{
                fontSize: '13px',
                fontWeight: '800',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: PALETA.textoOscDark,
                marginBottom: '25px',
                borderBottom: `1px solid ${PALETA.beigeOscuro}`,
                paddingBottom: '10px',
              }}
            >
              Coordenadas
            </h3>
            <p style={{ marginBottom: '20px' }}>
              <a
                href="https://maps.google.com/?q=Calle+de+Molinell+8+Valencia"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: PALETA.textoOscDark,
                  textDecoration: 'none',
                  transition: 'opacity 0.2s',
                  display: 'inline-block',
                }}
                onMouseEnter={(e) => (e.target.style.opacity = 0.75)}
                onMouseLeave={(e) => (e.target.style.opacity = 1)}
              >
                <span className="emoji-monocromo">📍</span>Calle de Molinell, 8,
                La Saïdia, 46010 Valencia
              </a>
            </p>
            <p
              style={{
                fontWeight: '600',
                color: PALETA.textoOscDark,
                margin: '10px 0',
              }}
            >
              <span className="emoji-monocromo">📞</span>Llamadas:{' '}
              <a
                href="tel:+34674543914"
                style={{
                  color: PALETA.textoOscDark,
                  textDecoration: 'none',
                  fontWeight: '800',
                }}
              >
                674 54 39 14
              </a>
            </p>
            <p
              style={{
                fontWeight: '600',
                color: PALETA.textoOscDark,
                margin: '10px 0',
              }}
            >
              <span className="emoji-monocromo">💬</span>WhatsApp:{' '}
              <a
                href={urlWhatsappContacto}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: PALETA.textoOscDark,
                  textDecoration: 'none',
                  fontWeight: '800',
                }}
              >
                603 16 60 18
              </a>
            </p>
            <p
              style={{
                fontWeight: '600',
                color: PALETA.textoOscDark,
                margin: '15px 0 0 0',
              }}
            >
              <span className="emoji-monocromo">📸</span>Instagram:{' '}
              <a
                href="https://instagram.com/recinto.studio"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: PALETA.textoOscDark,
                  textDecoration: 'none',
                  fontWeight: '800',
                }}
              >
                @recinto.studio
              </a>
            </p>
          </div>
          <div
            className="contenedor-mapa-interactivo"
            style={{
              flex: '1.2 1 400px',
              height: '230px',
              backgroundColor: PALETA.beigeOscuro,
              padding: '0px',
              overflow: 'hidden',
              boxSizing: 'border-box',
            }}
          >
            <iframe
              title="Ubicación de Recinto"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-0.3705%2C39.4840%2C-0.3645%2C39.4880&layer=mapnik&marker=39.4862%2C-0.3675"
              width="100%"
              height="285px"
              style={{
                border: 0,
                display: 'block',
                margin: 0,
                padding: 0,
                filter: 'invert(90%) hue-rotate(180deg)',
              }}
            ></iframe>
          </div>
        </div>

        <div
          className="bloque-disponibilidad-contenedor"
          style={{ width: '100%', boxSizing: 'border-box', marginTop: '20px' }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              borderBottom: `1px solid ${PALETA.beigeOscuro}`,
              marginBottom: '25px',
              paddingBottom: '10px',
            }}
          >
            <h3
              style={{
                fontSize: '13px',
                fontWeight: '800',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: PALETA.textoOscDark,
                margin: 0,
                padding: 0,
                textAlign: 'left',
              }}
            >
              Disponibilidad
            </h3>
            <span
              className="status-parpadeo"
              style={{
                fontSize: '12px',
                fontWeight: '900',
                color: estaAbierto ? PALETA.blanco : '#555555',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                transition: 'color 0.3s ease',
              }}
            >
              {estaAbierto ? '• ABIERTO' : '• CERRADO'}
            </span>
          </div>

          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              fontSize: '15px',
              fontWeight: '600',
              lineHeight: '2.5',
            }}
          >
            <li
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                color: PALETA.textoOscDark,
                borderBottom: `1px solid rgba(244, 244, 242, 0.1)`,
                padding: '5px 0',
              }}
            >
              <span>Lunes a Viernes</span>{' '}
              <span>9:00 - 14:00, 16:00 - 20:00</span>
            </li>
            <li
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                color: PALETA.textoOscDark,
                borderBottom: `1px solid rgba(244, 244, 242, 0.1)`,
                padding: '5px 0',
              }}
            >
              <span>Sábado</span> <span>9:00 - 15:00</span>
            </li>
            <li
              style={{
                color: '#555555',
                display: 'flex',
                justifyContent: 'space-between',
                padding: '5px 0',
              }}
            >
              <span>Domingo</span> <span>Cerrado</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

const VistaPrivacidad = () => (
  <section className="animacion-recinto" style={{ padding: '80px 20px', maxWidth: '800px', margin: '0 auto', color: PALETA.textoOscDark }}>
    <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Política de Privacidad</h2>
    <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>
      En RECINTO® valoramos tu privacidad. Esta web no utiliza cookies de rastreo, no recopila datos personales de los usuarios ni utiliza servicios de análisis de terceros.
    </p>
    <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>
      Los datos compartidos a través de los enlaces de WhatsApp (nombre, teléfono o mensaje) son gestionados directamente por el titular de la barbería bajo su propia responsabilidad, utilizándose exclusivamente para la gestión de citas.
    </p>
    <p style={{ lineHeight: '1.6' }}>
      Para cualquier consulta sobre tus datos, puedes ponerte en contacto directamente en el local.
    </p>
  </section>
);

export default function App() {
  const [paginaActual, setPaginaActual] = useState('inicio');

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        overflowX: 'hidden',
        position: 'relative',
        backgroundColor: PALETA.beigeClaro,
      }}
    >
      <EstilosAnimacion />

      {/* CAPA VISUAL GENERAL: Grano fotográfico SVG */}
      <div className="capa-grano-analogico" />

      {/* CAPA VISUAL DE PORTADA */}
      <div
        className="contenedor-ritual-macro-svg"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
          backgroundColor: '#111111',
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            animation: 'balanceoHumo 22s ease-in-out infinite',
            willChange: 'transform',
          }}
        >
          <defs>
            <linearGradient
              id="nieblaSuavePC"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#111111" stopOpacity="0" />
              <stop offset="35%" stopColor="#ded9cf" stopOpacity="0.16" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.26" />
              <stop offset="65%" stopColor="#aaaaaa" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#111111" stopOpacity="0" />
            </linearGradient>

            <linearGradient
              id="nieblaSuaveMovil"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#111111" stopOpacity="0" />
              <stop offset="35%" stopColor="#ded9cf" stopOpacity="0.06" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.09" />
              <stop offset="65%" stopColor="#aaaaaa" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#111111" stopOpacity="0" />
            </linearGradient>
          </defs>

          <path
            className="linea-humo-fill"
            d="M-100,250 C300,50 600,450 1000,150 C1200,50 1400,200 1600,100 L1600,450 C1400,550 1200,400 1000,500 C600,700 300,300 -100,550 Z"
            fill="url(#nieblaSuavePC)"
            style={{ filter: 'blur(45px)' }}
          />
          <path
            className="svg-grafico-trazo"
            d="M-50,600 C400,450 500,800 900,600 C1200,450 1300,750 1550,650"
            stroke="url(#nieblaSuavePC)"
            strokeWidth="80"
            fill="none"
            style={{ filter: 'blur(45px)' }}
          />
        </svg>
      </div>

      <div
        className="contenedor-indice-superior"
        style={{
          backgroundColor: 'rgba(28, 28, 26, 0.5)',
          backdropFilter: 'blur(12px)',
          width: '100%',
          boxSizing: 'border-box',
          padding: '25px 40px',
          borderBottom: `1px solid rgba(244, 244, 242, 0.05)`,
          position: 'relative',
          zIndex: 10,
        }}
      >
        <nav
          className="menu-navegacion"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            maxWidth: '1200px',
            margin: '0 auto',
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          <span
            className="logo-indice-superior"
            onClick={() => setPaginaActual('inicio')}
            style={{
              fontFamily:
                'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontWeight: '600',
              fontSize: '14px',
              letterSpacing: '6px',
              cursor: 'pointer',
              color: PALETA.textoOscDark,
            }}
          >
            RECINTO
            <sup
              style={{
                fontSize: '9px',
                verticalAlign: 'super',
                fontWeight: 'normal',
                marginLeft: '1px',
              }}
            >
              ®
            </sup>
          </span>
          <div
            className="menu-navegacion-links"
            style={{ display: 'flex', gap: '25px' }}
          >
            <BotonMenu
              text="Inicio"
              activo={paginaActual === 'inicio'}
              onClick={() => setPaginaActual('inicio')}
            />
            <BotonMenu
              text="Servicios"
              activo={paginaActual === 'servicios'}
              onClick={() => setPaginaActual('servicios')}
            />
            <BotonMenu
              text="Nosotros"
              activo={paginaActual === 'nosotros'}
              onClick={() => setPaginaActual('nosotros')}
            />
            <BotonMenu
              text="Contacto"
              activo={paginaActual === 'contacto'}
              onClick={() => setPaginaActual('contacto')}
            />
          </div>
        </nav>
      </div>

      <main
        style={{
          flex: 1,
          width: '100%',
          boxSizing: 'border-box',
          position: 'relative',
          zIndex: 5,
        }}
      >
        {paginaActual === 'inicio' && (
          <VistaInicio setPaginaActual={setPaginaActual} />
        )}
        {paginaActual === 'servicios' && <VistaServices />}
        {paginaActual === 'nosotros' && <VistaNosotros />}
        {paginaActual === 'contacto' && <VistaContacto />}
        {paginaActual === 'privacidad' && <VistaPrivacidad />}
      </main>

      <div
        className="contenedor-footer-bloque"
        style={{
          backgroundColor: PALETA.beigeOscuro,
          width: '100%',
          boxSizing: 'border-box',
          marginTop: 'auto',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <footer style={{ padding: '55px 20px', textAlign: 'center', color: PALETA.textoOscDark, fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: '700', width: '100%', boxSizing: 'border-box' }}>
  <p>RECINTO GROOMING STUDIO © 2026. VALENCIA.</p>
  {/* 🎯 Enlace discreto al final */}
  <button 
    onClick={() => setPaginaActual('privacidad')} 
    style={{ background: 'none', border: 'none', color: PALETA.oliva, cursor: 'pointer', fontSize: '9px', marginTop: '10px', textDecoration: 'underline' }}
  >
    Política de Privacidad
  </button>
</footer>
      </div>
    </div>
  );
}
